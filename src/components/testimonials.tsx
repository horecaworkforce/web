"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Testimonials() {
	const testimonials = [
		{
			name: "Michael Rodriguez",
			position: "Restaurant Owner",
			company: "Fusion Bistro",
			quote:
				"HoReCa Workforce found us an executive chef who completely transformed our menu. Their attention to our specific needs was impressive.",
			rating: 5,
		},
		{
			name: "Sarah Johnson",
			position: "Hotel F&B Manager",
			company: "Grand Plaza Hotel",
			quote:
				"We needed to staff our new restaurant quickly without compromising on quality. HoReCa delivered exceptional talent within our tight timeline.",
			rating: 5,
		},
		{
			name: "David Chen",
			position: "Café Owner",
			company: "Artisan Coffee House",
			quote:
				"The pastry chef we hired through HoReCa has created signature desserts that have become the talk of the town. Couldn't be happier!",
			rating: 5,
		},
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	const nextTestimonial = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
	};

	const prevTestimonial = () => {
		setCurrentIndex(
			(prevIndex) =>
				(prevIndex - 1 + testimonials.length) % testimonials.length,
		);
	};

	return (
		<section className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					viewport={{ once: true }}
					className="max-w-3xl mx-auto text-center mb-16"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
						What Our <span className="dark-gold">Clients Say</span>
					</h2>
					<p className="text-lg text-gray-700">
						Hear from the businesses that have found their perfect culinary
						match through HoReCa Workforce.
					</p>
				</motion.div>

				<div className="max-w-4xl mx-auto">
					<div className="relative bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
						<div className="flex flex-col items-center text-center">
							<div className="flex mb-4">
								{[...Array(testimonials[currentIndex].rating)].map((_, i) => (
									<Star key={i} className="h-5 w-5 text-primary fill-current" />
								))}
							</div>

							<motion.blockquote
								key={currentIndex}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5 }}
								className="text-xl md:text-2xl italic text-gray-700 mb-8"
							>
								{`"${testimonials[currentIndex].quote}"`}
							</motion.blockquote>

							<div className="mt-4">
								<p className="font-bold text-lg text-gray-900">
									{testimonials[currentIndex].name}
								</p>
								<p className="text-gray-600">
									{testimonials[currentIndex].position},{" "}
									{testimonials[currentIndex].company}
								</p>
							</div>
						</div>

						<div className="flex justify-center mt-8 gap-4">
							<Button
								variant="outline"
								size="icon"
								onClick={prevTestimonial}
								className="rounded-full border-primary/50 text-primary hover:bg-primary/10 hover:text-primary"
							>
								<ChevronLeft className="h-5 w-5" />
								<span className="sr-only">Previous testimonial</span>
							</Button>

							<Button
								variant="outline"
								size="icon"
								onClick={nextTestimonial}
								className="rounded-full border-primary/50 text-primary hover:bg-primary/10 hover:text-primary"
							>
								<ChevronRight className="h-5 w-5" />
								<span className="sr-only">Next testimonial</span>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
