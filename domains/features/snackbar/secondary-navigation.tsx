"use client";

import { type MouseEvent, useEffect, useState } from "react";
import { LayoutPanelTop, MessagesSquare, Refrigerator, Truck } from "lucide-react";

import { ScreenSection } from "@/share/screen-section";

const snackbarTabs = [
	{
		id: "stations",
		href: "/snackbar#stations",
		label: "스테이션 구성",
		description: "공간별 장비 선택",
		icon: LayoutPanelTop,
	},
	{
		id: "products",
		href: "/snackbar#products",
		label: "상품 라인업",
		description: "음료와 간식 구성",
		icon: Refrigerator,
	},
	{
		id: "care",
		href: "/snackbar#care",
		label: "배송/관리",
		description: "예산별 운영 방식",
		icon: Truck,
	},
	{
		id: "consult",
		href: "/snackbar#consult",
		label: "상담 시작",
		description: "맞춤 구성 문의",
		icon: MessagesSquare,
	},
] as const;

type SnackbarTabId = (typeof snackbarTabs)[number]["id"];

type SnackbarSecondaryNavigationProps = {
	orientation?: "row" | "column";
};

function isSnackbarTabId(value: string): value is SnackbarTabId {
	return snackbarTabs.some((tab) => tab.id === value);
}

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

export function SnackbarSecondaryNavigation({ orientation = "row" }: SnackbarSecondaryNavigationProps) {
	const [activeId, setActiveId] = useState<SnackbarTabId>("stations");

	useEffect(() => {
		const syncFromHash = () => {
			const hash = window.location.hash.replace("#", "");

			if (isSnackbarTabId(hash)) {
				setActiveId(hash);
				window.requestAnimationFrame(() => {
					document.getElementById(hash)?.scrollIntoView({ block: "start" });
					window.setTimeout(() => setActiveId(hash), 150);
				});
			}
		};

		syncFromHash();
		window.addEventListener("hashchange", syncFromHash);

		return () => {
			window.removeEventListener("hashchange", syncFromHash);
		};
	}, []);

	const handleNavigation = (event: MouseEvent<HTMLAnchorElement>, id: SnackbarTabId, href: string) => {
		event.preventDefault();
		setActiveId(id);
		window.history.pushState(null, "", href);
		document.getElementById(id)?.scrollIntoView({ block: "start" });
		window.setTimeout(() => setActiveId(id), 150);
	};

	const content = (
		<div className={orientation === "column" ? "grid gap-3" : "grid grid-cols-4 gap-2"}>
			{snackbarTabs.map(({ href, id, label, description, icon: Icon }) => {
				const isActive = id === activeId;
				const activeStyles = getActiveStyles(id);

				return (
					<a
						key={id}
						href={href}
						aria-current={isActive ? "location" : undefined}
						onClick={(event) => handleNavigation(event, id, href)}
						className={`flex min-w-0 rounded-lg border px-3 py-3 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:px-4 ${
							orientation === "column" ? "items-center gap-4 text-left" : "flex-col items-center justify-center gap-2 text-center sm:flex-row sm:justify-start sm:gap-4 sm:text-start"
						} ${
							isActive
								? activeStyles.container
								: "border-primary/30 bg-white text-primary hover:border-primary/80 hover:bg-slate-50"
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
					</a>
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
