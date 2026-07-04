"use client";

import Link from "next/link";
import { Calculator, ClipboardList, MenuSquare, Coffee } from "lucide-react";
import { usePathname } from "next/navigation";

import { ScreenSection } from "@/share/screen-section";

const cateringTabs = [
	{
		href: "/catering",
		label: "솔루션 소개",
		description: "이디야 케이터링",
		icon: Coffee,
	},
	{
		href: "/catering/calculator",
		label: "견적 계산",
		description: "인원 기준 빠른 확인",
		icon: Calculator,
	},
	{
		href: "/catering/order",
		label: "일반주문",
		description: "메뉴와 수량 상담",
		icon: ClipboardList,
	},
	{
		href: "/catering/menu",
		label: "세부메뉴보기",
		description: "카테고리별 메뉴 확인",
		icon: MenuSquare,
	},
] as const;

function isActivePath(pathname: string, href: string) {
	if (href === "/catering") {
		return pathname === href;
	}

	return pathname === href || pathname.startsWith(`${href}/`);
}

function getActiveStyles(href: string) {
	if (href === "/catering/order") {
		return {
			container: "border-[#E96106] bg-[#E96106] text-white shadow-md shadow-[#E96106]/20",
			icon: "bg-white/15",
			description: "text-white/75",
		};
	}

	if (href === "/catering/menu") {
		return {
			container: "border-[#009249] bg-[#009249] text-white shadow-md shadow-[#009249]/20",
			icon: "bg-white/15",
			description: "text-white/75",
		};
	}

	return {
		container: "border-primary bg-primary text-white shadow-md shadow-primary/15",
		icon: "bg-white/15",
		description: "text-white/75",
	};
}

type CateringSecondaryNavigationProps = {
	orientation?: "row" | "column";
};

export function CateringSecondaryNavigation({ orientation = "row" }: CateringSecondaryNavigationProps) {
	const pathname = usePathname();

	const content = (
		<div className={orientation === "column" ? "grid gap-3" : "grid grid-cols-4 gap-2"}>
			{cateringTabs.map(({ href, label, description, icon: Icon }) => {
				const isActive = isActivePath(pathname, href);
				const activeStyles = getActiveStyles(href);

				return (
					<Link
						key={href}
						href={href}
						aria-current={isActive ? "page" : undefined}
						className={`flex min-w-0 rounded-lg border px-3 py-3 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:px-4 ${
							orientation === "column" ? "items-center gap-4 text-left" : "flex-col items-center justify-center gap-2 text-center sm:flex-row sm:justify-start sm:gap-4 sm:text-start"
						} ${
							isActive
								? activeStyles.container
								: "border-primary/30 bg-white text-primary hover:border-2.5 hover:border-primary/80 hover:bg-slate-50"
						}`}
					>
						<span
							className={`inline-flex size-10 shrink-0 items-center justify-center rounded-md ${isActive ? activeStyles.icon : "bg-blue-50"}`}
						>
							<Icon aria-hidden="true" className="size-5" />
						</span>
						<span className="min-w-0">
							<span className="block text-[13px] font-bold leading-tight sm:text-sm">{label}</span>
							<span
								className={`mt-1 block text-[11px] font-bold leading-tight sm:text-xs ${isActive ? activeStyles.description : "text-slate-500"}`}
							>
								{description}
							</span>
						</span>
					</Link>
				);
			})}
		</div>
	);

	if (orientation === "column") {
		return <nav aria-label="케이터링 하위 메뉴">{content}</nav>;
	}

	return (
		<nav className="border-b border-primary/10 bg-white/95 backdrop-blur-xl" aria-label="케이터링 하위 메뉴">
			<ScreenSection className="py-3">{content}</ScreenSection>
		</nav>
	);
}
