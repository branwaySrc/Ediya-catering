import { ClipboardPenLine, Handshake, MessageCircle, type LucideIcon } from "lucide-react";
import { Button } from "@/share/button";

type ShortcutItem = {
	title: string;
	href: string;
	icon: LucideIcon;
	className: string;
};

const shortcuts: ShortcutItem[] = [
	{
		title: "카카오톡문의",
		href: "/contact?type=kakao",
		icon: MessageCircle,
		className: "border-[#FEE500] bg-[#FEE500] text-[#191919] hover:bg-[#F4DC00]",
	},
	{
		title: "맞춤상담",
		href: "/contact?type=consulting",
		icon: ClipboardPenLine,
		className: "border-white/20 bg-primary text-white hover:bg-[#15255F]",
	},
	{
		title: "협업제안",
		href: "/contact?type=partnership",
		icon: Handshake,
		className: "border-primary/15 bg-white text-primary hover:border-primary/30 hover:bg-slate-50",
	},
];

export function Shortcut() {
	return (
		<nav aria-label="빠른 문의" className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-99 md:right-0 md:bottom-20 ">
			<ul className="flex flex-col gap-2 md:gap-1.5">
				{shortcuts.map(({ title, href, icon, className }) => (
					<li key={title}>
						<Button.Link
							href={href}
							variant="none"
							icon={icon}
							iconPosition="right"
							ariaLabel={title}
							className={`h-12 w-12 justify-center rounded-xl border p-0 shadow-lg shadow-slate-900/10 md:rounded-r-none lg:w-[154px] lg:justify-between lg:px-5 [&>span]:hidden lg:[&>span]:inline ${className}`}
						>
							{title}
						</Button.Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
