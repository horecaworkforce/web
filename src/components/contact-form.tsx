"use client";

import type React from "react";
import { z } from "zod";
import { Fragment } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { type AnyFieldApi, useForm } from "@tanstack/react-form";
import type { ContactForm as ContactFormT } from "@/types/contact-form";
import { toast } from "sonner";
import { submitContactInfo } from "@/actions/form";

function FieldInfo({ field }: { field: AnyFieldApi }) {
	return (
		<>
			{field.state.meta.isTouched && field.state.meta.errors.length ? (
				<em className="text-sm" style={{ color: "red" }}>
					{field.state.meta.errors.join(", ")}
				</em>
			) : null}
			{field.state.meta.isValidating ? "Validating..." : null}
		</>
	);
}

export function ContactForm() {
	const form = useForm({
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			subject: "",
			message: "",
		} as ContactFormT,
		onSubmit: async ({ value }) => {
			try {
				await submitContactInfo(value);
				toast.success("Message sent successfully!");
			} catch (error) {
				console.error(error);
				toast.error("Failed to send message, please try again later");
			}
		},
	});

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true }}
			className="bg-white rounded-xl shadow-sm border border-gray-100 p-8"
		>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					e.stopPropagation();
					form.handleSubmit();
				}}
				className="space-y-6"
			>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
					<div className="space-y-2">
						<form.Field
							name="firstName"
							validators={{
								onChange: ({ value }) =>
									!value
										? "A first name is required"
										: value.length < 3
											? "First name must be at least 3 characters"
											: undefined,
							}}
						>
							{(field) => {
								return (
									<Fragment>
										<Label htmlFor={field.name}>First Name</Label>
										<Input
											id={field.name}
											name={field.name}
											placeholder="John"
											value={field.state.value}
											onChange={(e) => field.handleChange(e.target.value)}
											required
											className="border-gray-200 focus:border-primary focus:ring-primary"
										/>
										<FieldInfo field={field} />
									</Fragment>
								);
							}}
						</form.Field>
					</div>

					<div className="space-y-2">
						<form.Field
							name="lastName"
							validators={{
								onChange: ({ value }) =>
									!value
										? "A last name is required"
										: value.length < 3
											? "Last name must be at least 3 characters"
											: undefined,
							}}
						>
							{(field) => {
								return (
									<Fragment>
										<Label htmlFor={field.name}>Last Name</Label>
										<Input
											id={field.name}
											name={field.name}
											placeholder="Doe"
											value={field.state.value}
											onChange={(e) => field.handleChange(e.target.value)}
											required
											className="border-gray-200 focus:border-primary focus:ring-primary"
										/>
										<FieldInfo field={field} />
									</Fragment>
								);
							}}
						</form.Field>
					</div>
				</div>

				<div className="space-y-2">
					<form.Field
						name="email"
						validators={{
							onChange: ({ value }) => {
								if (!value) return "An email is required";
								const result = z.string().email().safeParse(value);
								if (!result.success) return "Enter a valid email address";
								return undefined;
							},
						}}
					>
						{(field) => {
							return (
								<Fragment>
									<Label htmlFor={field.name}>Email</Label>
									<Input
										id={field.name}
										name={field.name}
										type="email"
										placeholder="john.doe@example.com"
										value={field.state.value}
										onChange={(e) => field.handleChange(e.target.value)}
										required
										className="border-gray-200 focus:border-primary focus:ring-primary"
									/>
									<FieldInfo field={field} />
								</Fragment>
							);
						}}
					</form.Field>
				</div>

				<div className="space-y-2">
					<form.Field
						name="subject"
						validators={{
							onChange: ({ value }) =>
								!value
									? "A subject is required"
									: value.length < 3
										? "Subject must be at least 3 characters"
										: undefined,
						}}
					>
						{(field) => {
							return (
								<Fragment>
									<Label htmlFor={field.name}>Subject</Label>
									<Input
										id={field.name}
										name={field.name}
										placeholder="I need a chef for my restaurant"
										value={field.state.value}
										onChange={(e) => field.handleChange(e.target.value)}
										required
										className="border-gray-200 focus:border-primary focus:ring-primary"
									/>
									<FieldInfo field={field} />
								</Fragment>
							);
						}}
					</form.Field>
				</div>

				<div className="space-y-2">
					<form.Field
						name="message"
						validators={{
							onChange: ({ value }) => {
								if (!value) return "A message is required";
								if (value.length < 10)
									return "Message must be at least 10 characters";
								if (value.length > 5000)
									return "Message must be less than 5000 characters";
								return undefined;
							},
						}}
					>
						{(field) => (
							<Fragment>
								<Label htmlFor={field.name}>Message</Label>
								<Textarea
									id={field.name}
									name={field.name}
									placeholder="Please provide details about your requirements..."
									rows={5}
									value={field.state.value}
									onChange={(e) => field.handleChange(e.target.value)}
									required
									className="border-gray-200 focus:border-primary focus:ring-primary"
								/>
								<FieldInfo field={field} />
							</Fragment>
						)}
					</form.Field>
				</div>

				<form.Subscribe
					selector={(state) => [state.canSubmit, state.isSubmitting]}
				>
					{([canSubmit, isSubmitting]) => (
						<Button
							type="submit"
							className="w-full bg-dark-gold-gradient text-white hover:opacity-90"
							disabled={!canSubmit}
						>
							{isSubmitting ? "..." : "Send Message"}
						</Button>
					)}
				</form.Subscribe>
			</form>
		</motion.div>
	);
}
