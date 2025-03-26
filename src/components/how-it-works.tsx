"use client";

import { motion } from "framer-motion";
import { Search, UserCheck, Calendar, Award } from "lucide-react";

export function HowItWorks() {
	const steps = [
		{
			icon: <Search className="h-8 w-8 text-primary" />,
			title: "Tell Us Your Needs",
			description:
				"Share your specific requirements, from cuisine specialization to team size and cultural fit.",
		},
		{
			icon: <UserCheck className="h-8 w-8 text-primary" />,
			title: "We Source Talent",
			description:
				"Our experts identify and vet the perfect culinary professionals for your establishment.",
		},
		{
			icon: <Calendar className="h-8 w-8 text-primary" />,
			title: "Interview & Select",
			description:
				"Meet your candidates, assess their skills, and select the perfect match for your kitchen.",
		},
		{
			icon: <Award className="h-8 w-8 text-primary" />,
			title: "Onboarding Support",
			description:
				"We ensure a smooth transition as your new culinary talent joins your team.",
		},
	];

	return (
		<section id="how-it-works" className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					viewport={{ once: true }}
					className="max-w-3xl mx-auto text-center mb-16"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
						How It <span className="dark-gold">Works</span>
					</h2>
					<p className="text-lg text-gray-700">
						Our streamlined process makes finding the perfect culinary talent
						simple and efficient.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{steps.map((step, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="relative"
						>
							<div className="bg-white rounded-xl p-8 h-full shadow-sm border border-gray-100">
								<div className="absolute -top-5 left-8 w-10 h-10 rounded-full bg-dark-gold-gradient shadow-md flex items-center justify-center text-lg font-bold text-white">
									{index + 1}
								</div>
								<div className="mb-6 mt-4">{step.icon}</div>
								<h3 className="text-xl font-bold mb-3 text-gray-900">
									{step.title}
								</h3>
								<p className="text-gray-600">{step.description}</p>
							</div>

							{index < steps.length - 1 && (
								<div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 text-primary">
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M9 5L16 12L9 19"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
							)}
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
