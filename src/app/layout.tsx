import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/toaster";

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
			<body className={inter.className}>
				{children}
				<Toaster />
			</body>
		</html>
	);
}
