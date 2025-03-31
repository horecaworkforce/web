"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { EMAIL, PHONE_NUMBER } from "@/lib/constants";
import { formatPhoneNumber } from "@/lib/utils";

export default function Contact() {
	return (
		<section id="contact" className="py-20 bg-secondary">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					viewport={{ once: true }}
					className="max-w-3xl mx-auto text-center mb-16"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
						Get In <span className="dark-gold">Touch</span>
					</h2>
					<p className="text-lg text-gray-700">
						{
							"Ready to find the perfect culinary talent for your establishment? Fill out the form below and we'll get back to you shortly."
						}
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
					<div className="lg:col-span-2">
						<ContactForm />
					</div>

					<div className="space-y-8">
						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
							viewport={{ once: true }}
							className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
						>
							<div className="flex items-start gap-4">
								<div className="bg-dark-gold-subtle p-3 rounded-full">
									<Mail className="h-6 w-6 text-primary" />
								</div>
								<div>
									<h3 className="font-medium text-lg mb-1 text-gray-900">
										Email Us
									</h3>
									<p className="text-gray-600">{EMAIL}</p>
								</div>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.1 }}
							viewport={{ once: true }}
							className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
						>
							<div className="flex items-start gap-4">
								<div className="bg-dark-gold-subtle p-3 rounded-full">
									<Phone className="h-6 w-6 text-primary" />
								</div>
								<div>
									<h3 className="font-medium text-lg mb-1 text-gray-900">
										Call Us
									</h3>
									<p className="text-gray-600">
										{formatPhoneNumber(PHONE_NUMBER)}
									</p>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}
