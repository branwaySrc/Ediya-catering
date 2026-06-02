import Link from "next/link";
import type { ComponentPropsWithoutRef, ButtonHTMLAttributes, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

type ButtonVariant = "primary" | "ghost" | "outlined";
type ButtonSize = "md" | "icon";
type IconPosition = "left" | "right";

type CommonButtonProps = {
	variant?: ButtonVariant;
	size?: ButtonSize;
	icon?: LucideIcon;
	iconPosition?: IconPosition;
	className?: string;
	ariaLabel?: string;
	children?: ReactNode;
};

export type ActionProps = CommonButtonProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export type LinkProps = CommonButtonProps & Omit<ComponentPropsWithoutRef<typeof Link>, "className" | "children">;

function cn(...classes: Array<string | false | null | undefined>) {
	return classes.filter(Boolean).join(" ");
}

const baseStyles =
	"inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B2E74] focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-50";

const variantStyles: Record<ButtonVariant, string> = {
	primary: "bg-[#1B2E74] text-white hover:bg-[#15255F] hover:shadow-md active:translate-y-[1px]",
	ghost: "border border-[#1B2E74]/15 bg-white text-[#1B2E74] hover:border-[#1B2E74]/30 hover:bg-slate-100 active:translate-y-[1px]",
	outlined: "border border-white bg-transparent text-white hover:borer-white/50 hover:bg-white/20 active:translate-y-[1px]",
};

const sizeStyles: Record<ButtonSize, string> = {
	md: "h-11 rounded-lg px-5 text-sm",
	icon: "size-11 rounded-full",
};

function ButtonContent({
	icon: Icon,
	iconPosition = "left",
	size = "md",
	children,
}: Pick<CommonButtonProps, "icon" | "iconPosition" | "size" | "children">) {
	if (size === "icon") {
		return Icon ? <Icon aria-hidden="true" className="size-5 shrink-0" /> : null;
	}

	return (
		<>
			{Icon && iconPosition === "left" ? <Icon aria-hidden="true" className="size-4 shrink-0" /> : null}
			<span className="font-bold">{children}</span>
			{Icon && iconPosition === "right" ? <Icon aria-hidden="true" className="size-4 shrink-0" /> : null}
		</>
	);
}

function Action({ variant = "ghost", size = "md", icon, iconPosition = "left", className, ariaLabel, children, ...rest }: ActionProps) {
	const styles = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

	return (
		<button type="button" className={styles} aria-label={ariaLabel} {...rest}>
			<ButtonContent icon={icon} iconPosition={iconPosition} size={size}>
				{children}
			</ButtonContent>
		</button>
	);
}

function LinkButton({ variant = "ghost", size = "md", icon, iconPosition = "left", className, ariaLabel, children, ...rest }: LinkProps) {
	const styles = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

	return (
		<Link className={styles} aria-label={ariaLabel} {...rest}>
			<ButtonContent icon={icon} iconPosition={iconPosition} size={size}>
				{children}
			</ButtonContent>
		</Link>
	);
}

export const Button = {
	Action,
	Link: LinkButton,
};
