"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={cn(
				"fixed top-0 left-0 right-0 z-50 transition-all duration-300",
				isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5",
			)}
		>
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between">
					<Link href="/" className="flex items-center">
						<div className="logo-container h-14 w-14 md:h-16 md:w-16 shadow-sm border border-gray-100">
							<Image
								src="/logo.png"
								alt="HoReCa Workforce Logo"
								width={64}
								height={64}
								className="object-contain"
								priority
							/>
						</div>
						<span className="ml-3 text-xl font-bold text-gray-900">
							HoReCa <span className="dark-gold">Workforce</span>
						</span>
					</Link>

					<nav className="hidden md:flex items-center space-x-8">
						<Link
							href="/"
							className="text-gray-800 hover:text-primary font-medium"
						>
							Home
						</Link>
						<Link
							href="#about"
							className="text-gray-800 hover:text-primary font-medium"
						>
							About
						</Link>
						<Link
							href="#services"
							className="text-gray-800 hover:text-primary font-medium"
						>
							Services
						</Link>
						<Link
							href="#how-it-works"
							className="text-gray-800 hover:text-primary font-medium"
						>
							How It Works
						</Link>
						<Link
							href="#contact"
							className="text-gray-800 hover:text-primary font-medium"
						>
							Contact
						</Link>
					</nav>

					<div className="hidden md:block">
						<Button
							className="bg-dark-gold-gradient text-white hover:opacity-90"
							asChild
						>
							<Link href="#contact">Get Started</Link>
						</Button>
					</div>

					<button
						type="button"
						className="md:hidden text-gray-800"
						onClick={() => setMobileMenuOpen(true)}
					>
						<Menu className="h-6 w-6" />
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, x: "100%" }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: "100%" }}
						transition={{ duration: 0.3 }}
						className="fixed inset-0 bg-white z-50 md:hidden"
					>
						<div className="flex flex-col h-full">
							<div className="flex items-center justify-between p-4 border-b border-gray-200">
								<Link
									href="/"
									className="flex items-center"
									onClick={() => setMobileMenuOpen(false)}
								>
									<div className="logo-container h-12 w-12 shadow-sm border border-gray-100">
										<Image
											src="/logo.png"
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
								<button
									type="button"
									className="text-gray-800"
									onClick={() => setMobileMenuOpen(false)}
								>
									<X className="h-6 w-6" />
								</button>
							</div>

							<nav className="flex flex-col p-4 space-y-6 mt-8">
								<Link
									href="/"
									className="text-xl text-gray-800 hover:text-primary font-medium"
									onClick={() => setMobileMenuOpen(false)}
								>
									Home
								</Link>
								<Link
									href="#about"
									className="text-xl text-gray-800 hover:text-primary font-medium"
									onClick={() => setMobileMenuOpen(false)}
								>
									About
								</Link>
								<Link
									href="#services"
									className="text-xl text-gray-800 hover:text-primary font-medium"
									onClick={() => setMobileMenuOpen(false)}
								>
									Services
								</Link>
								<Link
									href="#how-it-works"
									className="text-xl text-gray-800 hover:text-primary font-medium"
									onClick={() => setMobileMenuOpen(false)}
								>
									How It Works
								</Link>
								<Link
									href="#contact"
									className="text-xl text-gray-800 hover:text-primary font-medium"
									onClick={() => setMobileMenuOpen(false)}
								>
									Contact
								</Link>
							</nav>

							<div className="mt-auto p-4 border-t border-gray-200">
								<Button
									className="w-full bg-dark-gold-gradient text-white hover:opacity-90"
									asChild
								>
									<Link
										href="#contact"
										onClick={() => setMobileMenuOpen(false)}
									>
										Get Started
									</Link>
								</Button>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
