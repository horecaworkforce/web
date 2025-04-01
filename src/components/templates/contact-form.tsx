import type { ContactForm } from "@/types/contact-form";
import type * as React from "react";

export const ContactFormEmailTemplate: React.FC<Readonly<ContactForm>> = ({
	firstName,
	lastName,
	email,
	subject,
	message,
}) => (
	<div className="font-sans max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-sm">
		<div className="border-b pb-4 mb-4">
			<h1 className="text-xl font-bold text-gray-800">
				New Contact Form Submission
			</h1>
			<p className="text-gray-500 text-sm mt-1">
				Received on {new Date().toLocaleDateString()} at{" "}
				{new Date().toLocaleTimeString()}
			</p>
		</div>

		<div className="mb-6">
			<table className="w-full text-sm">
				<tbody>
					<tr className="border-b">
						<td className="py-2 font-medium text-gray-700 w-1/4">Name:</td>
						<td className="py-2 text-gray-800">
							{firstName} {lastName}
						</td>
					</tr>
					<tr className="border-b">
						<td className="py-2 font-medium text-gray-700">Email:</td>
						<td className="py-2 text-gray-800">
							<a
								href={`mailto:${email}`}
								className="text-blue-600 hover:underline"
							>
								{email}
							</a>
						</td>
					</tr>
					<tr className="border-b">
						<td className="py-2 font-medium text-gray-700">Subject:</td>
						<td className="py-2 text-gray-800">{subject}</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div className="mb-6">
			<h2 className="text-base font-semibold text-gray-800 mb-2">Message:</h2>
			<div className="bg-gray-50 p-4 rounded-md text-gray-700 whitespace-pre-line border border-gray-200">
				{message}
			</div>
		</div>

		<div className="mt-6 pt-4 border-t text-gray-500 text-sm">
			<p>This is an automated message from your website's contact form.</p>
			<p className="mt-1">
				To reply to this inquiry, simply respond directly to this email or
				contact the customer at {email}.
			</p>
		</div>
	</div>
);
