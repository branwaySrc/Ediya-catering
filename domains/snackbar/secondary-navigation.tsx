"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Coffee, LayoutPanelTop, MessagesSquare, Refrigerator, Truck } from "lucide-react";
import { usePathname } from "next/navigation";

import { ScreenSection } from "@/share/screen-section";
import { routes } from "@/share/routes";

const snackbarTabs = [
	{
		id: "intro",
		href: routes.snackbar.intro,
		label: "솔루션 소개",
		description: "오피스 스낵바",
		icon: Coffee,
	},
	{
		id: "stations",
		href: routes.snackbar.stations,
		label: "스테이션 구성",
		description: "공간별 장비 선택",
		icon: LayoutPanelTop,
	},
	{
		id: "products",
		href: routes.snackbar.products,
		label: "상품 라인업",
		description: "음료와 간식 구성",
		icon: Refrigerator,
	},
	{
		id: "care",
		href: routes.snackbar.care,
		label: "배송/관리",
		description: "예산별 운영 방식",
		icon: Truck,
	},
	{
		id: "consult",
		href: routes.snackbar.consult,
		label: "상담 시작",
		description: "맞춤 구성 문의",
		icon: MessagesSquare,
	},
] as const;

type SnackbarTabId = (typeof snackbarTabs)[number]["id"];

type SnackbarSecondaryNavigationProps = {
	orientation?: "row" | "column";
};

function getActiveStyles(id: SnackbarTabId) {
	if (id === "stations" || id === "consult") {
		return {
			container: "border-[#E96106] bg-[#E96106] text-white shadow-md shadow-[#E96106]/20",
			icon: "bg-white/15",
			description: "text-white/75",
		};
	}

	if (id === "products") {
		return {
			container: "border-[#1C5DBE] bg-[#1C5DBE] text-white shadow-md shadow-[#1C5DBE]/20",
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

function isActivePath(pathname: string, href: string) {
	if (href === routes.snackbar.intro) {
		return pathname === routes.snackbar.root || pathname === href;
	}

	return pathname === href || pathname.startsWith(`${href}/`);
}

export function SnackbarSecondaryNavigation({ orientation = "row" }: SnackbarSecondaryNavigationProps) {
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
			{snackbarTabs.map(({ href, id, label, description, icon: Icon }) => {
				const isActive = isActivePath(pathname, href);
				const activeStyles = getActiveStyles(id);

				return (
					<Link
						key={id}
						href={href}
						aria-current={isActive ? "page" : undefined}
						data-active={isActive ? "true" : undefined}
						className={`flex rounded-lg border px-3 py-3 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:px-4 ${
							isColumn ? "items-center gap-4 text-left" : "min-w-45 snap-center flex-row items-center gap-3 text-left"
						} ${isActive ? activeStyles.container : "border-primary/30 bg-white text-primary hover:border-primary/80 hover:bg-slate-50"}`}
					>
						<span className={`inline-flex size-10 shrink-0 items-center justify-center rounded-md ${isActive ? activeStyles.icon : "bg-blue-50"}`}>
							<Icon aria-hidden="true" className="size-5" />
						</span>
						<span className="min-w-0">
							<span className="block truncate text-[13px] font-bold leading-tight sm:text-sm">{label}</span>
							<span className={`mt-1 block truncate text-[11px] font-bold leading-tight sm:text-xs ${isActive ? activeStyles.description : "text-slate-500"}`}>
								{description}
							</span>
						</span>
					</Link>
				);
			})}
		</div>
	);

	if (orientation === "column") {
		return <nav aria-label="스낵바 하위 메뉴">{content}</nav>;
	}

	return (
		<nav className="border-b border-primary/10 bg-white/95 backdrop-blur-xl" aria-label="스낵바 하위 메뉴">
			<ScreenSection className="py-3">{content}</ScreenSection>
		</nav>
	);
}
