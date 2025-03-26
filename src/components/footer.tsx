"use client";

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
	return (
		<footer className="bg-gray-50 text-gray-700 border-t border-gray-200">
			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div className="space-y-4">
						<Link href="/" className="inline-flex items-center">
							<div className="logo-container h-12 w-12 shadow-sm border border-gray-100">
								<Image
									src="/images/logo.png"
									alt="HoReCa Workforce Logo"
									width={48}
									height={48}
									className="object-contain"
								/>
							</div>
							<span className="ml-3 text-lg font-bold text-gray-900">
								HoReCa <span className="dark-gold">Workforce</span>
							</span>
						</Link>
						<p className="text-gray-600 max-w-xs">
							Connecting exceptional culinary talent with leading establishments
							in the hospitality industry.
						</p>
						<div className="flex space-x-4">
							<Link
								href="#"
								className="text-gray-500 hover:text-primary transition-colors"
							>
								<Facebook className="h-5 w-5" />
								<span className="sr-only">Facebook</span>
							</Link>
							<Link
								href="#"
								className="text-gray-500 hover:text-primary transition-colors"
							>
								<Twitter className="h-5 w-5" />
								<span className="sr-only">Twitter</span>
							</Link>
							<Link
								href="#"
								className="text-gray-500 hover:text-primary transition-colors"
							>
								<Instagram className="h-5 w-5" />
								<span className="sr-only">Instagram</span>
							</Link>
							<Link
								href="#"
								className="text-gray-500 hover:text-primary transition-colors"
							>
								<Linkedin className="h-5 w-5" />
								<span className="sr-only">LinkedIn</span>
							</Link>
						</div>
					</div>

					<div>
						<h3 className="text-lg font-bold mb-4 text-gray-900">Services</h3>
						<ul className="space-y-3">
							<li>
								<Link
									href="#"
									className="text-gray-600 hover:text-primary transition-colors"
								>
									Chef Recruitment
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-gray-600 hover:text-primary transition-colors"
								>
									Culinary Consulting
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-gray-600 hover:text-primary transition-colors"
								>
									Kitchen Team Building
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-gray-600 hover:text-primary transition-colors"
								>
									Temporary Staffing
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-lg font-bold mb-4 text-gray-900">Company</h3>
						<ul className="space-y-3">
							<li>
								<Link
									href="#"
									className="text-gray-600 hover:text-primary transition-colors"
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-gray-600 hover:text-primary transition-colors"
								>
									Our Process
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-gray-600 hover:text-primary transition-colors"
								>
									Testimonials
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-gray-600 hover:text-primary transition-colors"
								>
									Careers
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-lg font-bold mb-4 text-gray-900">Legal</h3>
						<ul className="space-y-3">
							<li>
								<Link
									href="#"
									className="text-gray-600 hover:text-primary transition-colors"
								>
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-gray-600 hover:text-primary transition-colors"
								>
									Terms of Service
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-gray-600 hover:text-primary transition-colors"
								>
									Cookie Policy
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
					<p>
						&copy; {new Date().getFullYear()} HoReCa Workforce. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
