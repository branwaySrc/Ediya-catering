"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Gift, Mail, PackageCheck, PartyPopper, Sparkles } from "lucide-react";
import { usePathname } from "next/navigation";

import { ScreenSection } from "@/share/screen-section";
import { routes } from "@/share/routes";

const giftTabs = [
	{
		href: routes.gift.root,
		label: "기프트 소개",
		description: "MD 선물 솔루션",
		icon: Gift,
	},
	{
		href: routes.gift.moments,
		label: "활용 장면",
		description: "상황별 선물 제안",
		icon: PartyPopper,
	},
	{
		href: routes.gift.collection,
		label: "시즌 컬렉션",
		description: "상품 구성 예시",
		icon: Sparkles,
	},
	{
		href: routes.gift.service,
		label: "준비 서비스",
		description: "포장/배송 안내",
		icon: PackageCheck,
	},
	{
		href: routes.gift.news,
		label: "최신 MD",
		description: "소식 받아보기",
		icon: Mail,
	},
] as const;

type GiftSecondaryNavigationProps = {
	orientation?: "row" | "column";
};

export function GiftSecondaryNavigation({ orientation = "row" }: GiftSecondaryNavigationProps) {
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
			className={isColumn ? "grid gap-3" : "scrollbar-x-thin -mx-4 flex snap-x snap-mandatory scroll-px-4 gap-2 overflow-x-auto px-4 pb-1 sm:-mx-6 sm:px-6"}
		>
			{giftTabs.map(({ href, label, description, icon: Icon }) => {
				const isActive = pathname === href || (href !== routes.gift.root && pathname.startsWith(`${href}/`));

				return (
					<Link
						key={href}
						href={href}
						aria-current={isActive ? "page" : undefined}
						data-active={isActive ? "true" : undefined}
						className={`flex rounded-lg border px-3 py-3 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#102B24] focus-visible:ring-offset-2 sm:px-4 ${
							isColumn ? "items-center gap-4 text-left" : "min-w-45 snap-center flex-row items-center gap-3 text-left"
						} ${isActive ? "border-[#102B24] bg-[#102B24] text-white" : "border-[#102B24]/25 bg-white text-[#102B24] hover:border-[#102B24]/80 hover:bg-[#F7F8F5]"}`}
					>
						<span className={`inline-flex size-10 shrink-0 items-center justify-center rounded-md ${isActive ? "bg-white/15" : "bg-emerald-50"}`}>
							<Icon aria-hidden="true" className="size-5" />
						</span>
						<span className="min-w-0">
							<span className="block truncate text-[13px] font-bold leading-tight sm:text-sm">{label}</span>
							<span className={`mt-1 block truncate text-[11px] font-bold leading-tight sm:text-xs ${isActive ? "text-white/75" : "text-slate-500"}`}>
								{description}
							</span>
						</span>
					</Link>
				);
			})}
		</div>
	);

	if (orientation === "column") {
		return <nav aria-label="기프트 하위 메뉴">{content}</nav>;
	}

	return (
		<nav className="border-b border-[#102B24]/10 bg-white/95 backdrop-blur-xl" aria-label="기프트 하위 메뉴">
			<ScreenSection className="py-3">{content}</ScreenSection>
		</nav>
	);
}
