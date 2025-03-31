import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toast";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "HoReCa Workforce - Expert Culinary Talent",
	description:
		"Connecting exceptional culinary talent with leading establishments in the hospitality industry.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} min-h-screen bg-white`}>
				<Header />
				{children}
				<Footer />
				<Toaster />
			</body>
		</html>
	);
}
