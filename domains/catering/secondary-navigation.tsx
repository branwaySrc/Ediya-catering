"use client";

import Link from "next/link";
import { Calculator, CircleHelp, ClipboardList, Coffee } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

import { routes } from "@/share/routes";
import { ScreenSection } from "@/share/screen-section";

const cateringTabs = [
	{
		href: routes.catering.root,
		label: "솔루션 소개",
		description: "이디야 케이터링",
		icon: Coffee,
	},
	{
		href: routes.catering.package,
		label: "패키지 구성",
		description: "구성별 예상 금액",
		icon: Calculator,
	},
	{
		href: routes.catering.customOrder,
		label: "커스텀 주문",
		description: "메뉴별 장바구니",
		icon: ClipboardList,
	},
	{
		href: routes.catering.faq,
		label: "FAQ",
		description: "자주 묻는 질문",
		icon: CircleHelp,
	},
] as const;

function isActivePath(pathname: string, href: string) {
	if (href === routes.catering.root) {
		return pathname === href;
	}

	return pathname === href || pathname.startsWith(`${href}/`);
}

function getActiveStyles(href: string) {
	if (href === routes.catering.customOrder) {
		return {
			container: "border-[#E96106] bg-[#E96106] text-white shadow-md shadow-[#E96106]/20",
			icon: "bg-white/15",
			description: "text-white/75",
		};
	}

	if (href === routes.catering.package) {
		return {
			container: "border-primary bg-slate-800 text-white shadow-md shadow-primary/15",
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
	const isColumn = orientation === "column";
	const scrollContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (isColumn) {
			return;
		}

		const activeItem = scrollContainerRef.current?.querySelector<HTMLElement>('[data-active="true"]');
		activeItem?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
	}, [isColumn, pathname]);

	const content = (
		<div
			ref={scrollContainerRef}
			className={
				isColumn ? "grid gap-3" : "scrollbar-x-thin -mx-4 flex snap-x snap-mandatory scroll-px-4 gap-2 overflow-x-auto px-4 pb-1 sm:-mx-6 sm:px-6"
			}
		>
			{cateringTabs.map(({ href, label, description, icon: Icon }) => {
				const isActive = isActivePath(pathname, href);
				const activeStyles = getActiveStyles(href);

				return (
					<Link
						key={href}
						href={href}
						aria-current={isActive ? "page" : undefined}
						data-active={isActive ? "true" : undefined}
						className={`flex rounded-lg border px-3 py-3 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:px-4 ${
							isColumn ? "items-center gap-4 text-left" : "min-w-45 snap-center flex-row items-center gap-3 text-left"
						} ${
							isActive ? activeStyles.container : "border-primary/30 bg-white text-primary hover:border-2.5 hover:border-primary/80 hover:bg-slate-50"
						}`}
					>
						<span className={`inline-flex size-10 shrink-0 items-center justify-center rounded-md ${isActive ? activeStyles.icon : "bg-blue-50"}`}>
							<Icon aria-hidden="true" className="size-5" />
						</span>
						<span className="min-w-0">
							<span className="block truncate text-[13px] font-bold leading-tight sm:text-sm">{label}</span>
							<span
								className={`mt-1 block truncate text-[11px] font-bold leading-tight sm:text-xs ${isActive ? activeStyles.description : "text-slate-500"}`}
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
