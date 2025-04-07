"use server";

import { env } from "@/env";
import { Resend } from "resend";
import type { ContactForm } from "@/types/contact-form";
import { EMAIL } from "@/lib/constants";
import { ContactFormEmailTemplate } from "@/components/templates/contact-form";

export async function submitContactInfo(payload: ContactForm) {
	const resend = new Resend(env.RESEND_API_KEY);
	const { firstName, lastName, subject, email, message } = payload;

	const { error } = await resend.emails.send({
		from: "HoReCa <contact@horecaworkforce.com>",
		to: [EMAIL],
		subject,
		// @ts-expect-error: I don't know why this is throwing an error, because the documentation says it should work
		react: ContactFormEmailTemplate({
			firstName,
			lastName,
			subject,
			email,
			message,
		}),
	});

	if (error) {
		console.error(error);
		throw new Error("failed to send the email");
	}
}
