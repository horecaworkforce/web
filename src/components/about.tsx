"use client";

import { motion } from "framer-motion";
import { ChefHat } from "lucide-react";

export default function About() {
	return (
		<section id="about" className="py-20 bg-secondary">
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
						{
							"At HoReCa Workforce, we understand that the heart of any successful culinary establishment is its kitchen team. Our expert selection process guarantees talented professionals tailored to your specific requirements, whether you're running a boutique hotel, a fine dining restaurant, or a trendy café."
						}
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
							{
								"From executive chefs to specialized culinary artists, we provide the talent that elevates your hotel's dining experience."
							}
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
							{
								"Find the perfect chef to bring your restaurant's vision to life, from casual dining to Michelin-star aspirations."
							}
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
							Source talented pastry chefs who can create signature items that
							keep customers coming back.
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
