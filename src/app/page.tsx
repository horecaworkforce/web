"use client";

import { motion } from "framer-motion";
import { ChefHat, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { HowItWorks } from "@/components/how-it-works";
import { Testimonials } from "@/components/testimonials";
import { Benefits } from "@/components/benefits";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Home() {
	const fadeIn = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6 },
		},
	};

	return (
		<div className="min-h-screen bg-white">
			<Header />

			{/* Hero Section */}
			<section className="relative py-20 md:py-28 overflow-hidden bg-white">
				<div className="container mx-auto px-4 relative z-10">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
						<motion.div
							initial="hidden"
							animate="visible"
							variants={fadeIn}
							className="space-y-6"
						>
							<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
								Exceptional <span className="dark-gold">Culinary Talent</span>{" "}
								For Your Kitchen
							</h1>
							<p className="text-xl text-gray-700 max-w-lg">
								We specialize in sourcing highly skilled chefs, ensuring the
								perfect match for your culinary needs.
							</p>
							<div className="pt-4">
								<Link
									href="#contact"
									className="inline-flex h-12 items-center justify-center rounded-md bg-dark-gold-gradient px-8 text-base font-medium text-white shadow transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
								>
									Find Your Chef
								</Link>
							</div>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.7 }}
							className="relative"
						>
							<div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
								<img
									src="/placeholder.svg?height=600&width=800"
									alt="Professional chef in kitchen"
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-md border border-gray-100">
								<div className="flex items-center gap-3">
									<ChefHat className="h-8 w-8 text-primary" />
									<div>
										<p className="font-medium">Expert Selection</p>
										<p className="text-sm text-gray-500">
											Tailored to your needs
										</p>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section className="py-20 bg-secondary">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
						viewport={{ once: true }}
						className="max-w-3xl mx-auto text-center mb-16"
					>
						<h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
							About <span className="dark-gold">HoReCa Workforce</span>
						</h2>
						<p className="text-lg text-gray-700">
							At HoReCa Workforce, we understand that the heart of any
							successful culinary establishment is its kitchen team. Our expert
							selection process guarantees talented professionals tailored to
							your specific requirements, whether you're running a boutique
							hotel, a fine dining restaurant, or a trendy café.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.1 }}
							viewport={{ once: true }}
							className="bg-white p-8 rounded-xl shadow-sm border border-gray-200"
						>
							<div className="w-14 h-14 bg-dark-gold-subtle rounded-full flex items-center justify-center mb-6">
								<ChefHat className="h-7 w-7 text-primary" />
							</div>
							<h3 className="text-xl font-bold mb-3 text-gray-900">Hotels</h3>
							<p className="text-gray-600">
								From executive chefs to specialized culinary artists, we provide
								the talent that elevates your hotel's dining experience.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							viewport={{ once: true }}
							className="bg-white p-8 rounded-xl shadow-sm border border-gray-200"
						>
							<div className="w-14 h-14 bg-dark-gold-subtle rounded-full flex items-center justify-center mb-6">
								<ChefHat className="h-7 w-7 text-primary" />
							</div>
							<h3 className="text-xl font-bold mb-3 text-gray-900">
								Restaurants
							</h3>
							<p className="text-gray-600">
								Find the perfect chef to bring your restaurant's vision to life,
								from casual dining to Michelin-star aspirations.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}
							viewport={{ once: true }}
							className="bg-white p-8 rounded-xl shadow-sm border border-gray-200"
						>
							<div className="w-14 h-14 bg-dark-gold-subtle rounded-full flex items-center justify-center mb-6">
								<ChefHat className="h-7 w-7 text-primary" />
							</div>
							<h3 className="text-xl font-bold mb-3 text-gray-900">Cafés</h3>
							<p className="text-gray-600">
								Source talented pastry chefs and baristas who can create
								signature items that keep customers coming back.
							</p>
						</motion.div>
					</div>
				</div>
			</section>

			{/* How It Works Section */}
			<HowItWorks />

			{/* Benefits Section */}
			<Benefits />

			{/* Testimonials Section */}
			<Testimonials />

			{/* Contact Section */}
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
							Ready to find the perfect culinary talent for your establishment?
							Fill out the form below and we'll get back to you shortly.
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
										<p className="text-gray-600">info@horecaworkforce.com</p>
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
										<p className="text-gray-600">+1 (555) 123-4567</p>
									</div>
								</div>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, x: 30 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: 0.2 }}
								viewport={{ once: true }}
								className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
							>
								<div className="flex items-start gap-4">
									<div className="bg-dark-gold-subtle p-3 rounded-full">
										<MapPin className="h-6 w-6 text-primary" />
									</div>
									<div>
										<h3 className="font-medium text-lg mb-1 text-gray-900">
											Visit Us
										</h3>
										<p className="text-gray-600">
											123 Culinary Avenue, Foodie District, NY 10001
										</p>
									</div>
								</div>
							</motion.div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
