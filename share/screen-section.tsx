import { HTMLAttributes } from "react";

interface ScreenSectionProps extends HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	className?: string;
}

export function ScreenSection({ children, className, ...rest }: ScreenSectionProps) {
	return (
		<section className={`${className} mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`} {...rest}>
			{children}
		</section>
	);
}

export function CardSection({ children, className, ...rest }: ScreenSectionProps) {
	return (
		<section className={`${className} theme-border py-7 px-6`} {...rest}>
			{children}
		</section>
	);
}
