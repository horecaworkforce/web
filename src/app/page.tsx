import { HowItWorks } from "@/components/how-it-works";
import { Fragment } from "react";
import Benefits from "@/components/benefits";
import Hero from "@/components/hero";
import About from "@/components/about";
import Contact from "@/components/contact";

export default function Home() {
	return (
		<Fragment>
			<Hero />
			<About />
			<HowItWorks />
			<Benefits />
			{/* Testimonials Section */}
			<Contact />
		</Fragment>
	);
}
