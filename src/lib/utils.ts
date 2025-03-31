import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatPhoneNumber(phone: string) {
	if (!phone.startsWith("+")) {
		throw new Error("phone number must start with a country code");
	}

	const countryCode = phone.slice(0, 3); // "+61"
	const mainNumber = phone.slice(3); // "402410487"

	const formattedMainNumber = mainNumber.replace(
		/(\d{3})(\d{3})(\d{3})/,
		"$1 $2 $3",
	);

	return `${countryCode} ${formattedMainNumber}`;
}
