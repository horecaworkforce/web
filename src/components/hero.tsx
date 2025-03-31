"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChefHat } from "lucide-react";

export default function Hero() {
	const fadeIn = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6 },
		},
	};

	return (
		<section
			id="hero"
			className="relative py-20 md:py-28 overflow-hidden bg-white"
		>
			<div className="container mx-auto px-4 relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					<motion.div
						initial="hidden"
						animate="visible"
						variants={fadeIn}
						className="space-y-6"
					>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
							Exceptional <span className="dark-gold">Culinary Talent</span> For
							Your Kitchen
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
							<Image
								priority
								fill
								src="/images/banner.png"
								alt="Professional chef in kitchen"
								className="w-full h-full object-cover rounded-2xl"
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
	);
}
