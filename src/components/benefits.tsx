"use client";

import { motion } from "framer-motion";
import {
	CheckCircle,
	Clock,
	Users,
	Sparkles,
	Shield,
	TrendingUp,
} from "lucide-react";

export function Benefits() {
	const benefits = [
		{
			icon: <CheckCircle className="h-10 w-10 text-primary" />,
			title: "Quality Assurance",
			description:
				"Every chef in our network is thoroughly vetted for skills, experience, and professionalism.",
		},
		{
			icon: <Clock className="h-10 w-10 text-primary" />,
			title: "Time Efficiency",
			description:
				"Save valuable time with our streamlined recruitment process tailored to your schedule.",
		},
		{
			icon: <Users className="h-10 w-10 text-primary" />,
			title: "Perfect Cultural Fit",
			description:
				"We match not just skills, but personalities that align with your establishment's values.",
		},
		{
			icon: <Sparkles className="h-10 w-10 text-primary" />,
			title: "Specialized Expertise",
			description:
				"Access to chefs with niche skills and specializations across global cuisines.",
		},
		{
			icon: <Shield className="h-10 w-10 text-primary" />,
			title: "Risk Reduction",
			description:
				"Minimize hiring risks with our thorough background checks and reference verification.",
		},
		{
			icon: <TrendingUp className="h-10 w-10 text-primary" />,
			title: "Business Growth",
			description:
				"The right culinary talent can transform your menu and elevate your establishment's reputation.",
		},
	];

	return (
		<section id="services" className="py-20 bg-secondary">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					viewport={{ once: true }}
					className="max-w-3xl mx-auto text-center mb-16"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
						Why Choose <span className="dark-gold">Us</span>
					</h2>
					<p className="text-lg text-gray-700">
						HoReCa Workforce brings unparalleled value to your culinary staffing
						needs.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{benefits.map((benefit, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="bg-white p-8 rounded-xl shadow-sm border border-gray-200"
						>
							<div className="mb-6">{benefit.icon}</div>
							<h3 className="text-xl font-bold mb-3 text-gray-900">
								{benefit.title}
							</h3>
							<p className="text-gray-600">{benefit.description}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
