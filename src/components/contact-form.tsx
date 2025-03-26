"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

export function ContactForm() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		subject: "",
		message: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission
		await new Promise((resolve) => setTimeout(resolve, 1500));

		toast({
			title: "Form submitted successfully!",
			description: "We'll get back to you as soon as possible.",
		});

		// Reset form
		setFormData({
			firstName: "",
			lastName: "",
			email: "",
			subject: "",
			message: "",
		});

		setIsSubmitting(false);
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true }}
			className="bg-white rounded-xl shadow-sm border border-gray-100 p-8"
		>
			<form onSubmit={handleSubmit} className="space-y-6">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
					<div className="space-y-2">
						<Label htmlFor="firstName">First Name</Label>
						<Input
							id="firstName"
							name="firstName"
							placeholder="John"
							value={formData.firstName}
							onChange={handleChange}
							required
							className="border-gray-200 focus:border-primary focus:ring-primary"
						/>
					</div>

					<div className="space-y-2">
						<Label htmlFor="lastName">Last Name</Label>
						<Input
							id="lastName"
							name="lastName"
							placeholder="Doe"
							value={formData.lastName}
							onChange={handleChange}
							required
							className="border-gray-200 focus:border-primary focus:ring-primary"
						/>
					</div>
				</div>

				<div className="space-y-2">
					<Label htmlFor="email">Email</Label>
					<Input
						id="email"
						name="email"
						type="email"
						placeholder="john.doe@example.com"
						value={formData.email}
						onChange={handleChange}
						required
						className="border-gray-200 focus:border-primary focus:ring-primary"
					/>
				</div>

				<div className="space-y-2">
					<Label htmlFor="subject">Subject</Label>
					<Input
						id="subject"
						name="subject"
						placeholder="I need a chef for my restaurant"
						value={formData.subject}
						onChange={handleChange}
						required
						className="border-gray-200 focus:border-primary focus:ring-primary"
					/>
				</div>

				<div className="space-y-2">
					<Label htmlFor="message">Message</Label>
					<Textarea
						id="message"
						name="message"
						placeholder="Please provide details about your requirements..."
						rows={5}
						value={formData.message}
						onChange={handleChange}
						required
						className="border-gray-200 focus:border-primary focus:ring-primary"
					/>
				</div>

				<Button
					type="submit"
					className="w-full bg-dark-gold-gradient text-white hover:opacity-90"
					disabled={isSubmitting}
				>
					{isSubmitting ? "Sending..." : "Send Message"}
				</Button>
			</form>
		</motion.div>
	);
}
