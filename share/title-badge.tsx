import type { HTMLAttributes, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

function cn(...classes: Array<string | false | null | undefined>) {
	return classes.filter(Boolean).join(" ");
}

type TitleBadgeLayoutProps = HTMLAttributes<HTMLDivElement> & {
	children: ReactNode;
};

type TitleBadgeIconProps = HTMLAttributes<HTMLDivElement> & {
	backgroundColor?: [string, string];
	children?: ReactNode;
	icon?: LucideIcon;
};

type TitleBadgeTitleProps = HTMLAttributes<HTMLSpanElement> & {
	children: ReactNode;
};

type TitleBadgeBadgeProps = HTMLAttributes<HTMLSpanElement> & {
	backgroundColor?: string;
	children: ReactNode;
};

function TitleBadgeLayout({ children, className, ...rest }: TitleBadgeLayoutProps) {
	return (
		<div className={cn("inline-flex items-center gap-3 pb-4", className)} {...rest}>
			{children}
		</div>
	);
}

function Icon({ backgroundColor = ["#ffffff", "#f8fafc"], children, className, icon: IconComponent, style, ...rest }: TitleBadgeIconProps) {
	return (
		<div
			className={cn("flex size-7.5 shrink-0 items-center justify-center rounded-lg shadow-lg shadow-slate-200", className)}
			style={{ backgroundImage: `linear-gradient(to bottom right, ${backgroundColor[0]}, ${backgroundColor[1]})`, ...style }}
			{...rest}
		>
			{IconComponent ? <IconComponent aria-hidden="true" className="size-5" /> : children}
		</div>
	);
}

function Title({ children, className, ...rest }: TitleBadgeTitleProps) {
	return (
		<span className={cn("text-[17px] font-bold text-slate-600", className)} {...rest}>
			{children}
		</span>
	);
}

function Badge({ backgroundColor = "#ffffff", children, className, style, ...rest }: TitleBadgeBadgeProps) {
	return (
		<span
			className={cn("inline-flex items-center rounded-full border font-bold px-2 py-0.5 text-[10px] ", className)}
			style={{ backgroundColor, ...style }}
			{...rest}
		>
			{children}
		</span>
	);
}

export const TitleBadge = Object.assign(TitleBadgeLayout, {
	Icon,
	Title,
	Badge,
});
