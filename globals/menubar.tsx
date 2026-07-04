"use client";

import Image from "next/image";
import { ArrowRight, Coffee, Donut, Gift, House, Menu, Store, X, type LucideIcon } from "lucide-react";
import { useEffect, useId, useState } from "react";

import { Button } from "@/share/button";

const menuItems = [
	{ title: "지점소개", href: "/about", icon: House, delayClass: "delay-[80ms]" },
	{ title: "케이터링", href: "/catering", icon: Coffee, delayClass: "delay-[125ms]" },
	{ title: "스낵바", href: "/snackbar", icon: Donut, delayClass: "delay-[170ms]" },
	{ title: "시즌 기프트", href: "/gift", icon: Gift, delayClass: "delay-[215ms]" },
	{ title: "공간대여", href: "/rental", icon: Store, delayClass: "delay-[260ms]" },
] satisfies Array<{ title: string; href: string; icon: LucideIcon; delayClass: string }>;

export function Menubar() {
	const [isOpen, setIsOpen] = useState(false);
	const [shouldRenderMenu, setShouldRenderMenu] = useState(false);
	const menuId = useId();

	useEffect(() => {
		if (isOpen) {
			return;
		}

		const timeoutId = window.setTimeout(() => {
			setShouldRenderMenu(false);
		}, 300);

		return () => window.clearTimeout(timeoutId);
	}, [isOpen]);

	useEffect(() => {
		document.body.style.overflow = isOpen ? "hidden" : "";

		function handleKeyDown(event: KeyboardEvent) {
			if (event.key === "Escape") {
				setIsOpen(false);
			}
		}

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [isOpen]);

	function closeMenu() {
		setIsOpen(false);
	}

	function openMenu() {
		setShouldRenderMenu(true);
		window.requestAnimationFrame(() => {
			setIsOpen(true);
		});
	}

	return (
		<div className="lg:hidden">
			<Button.Action
				size="icon"
				variant="ghost"
				ariaLabel="사이드 메뉴 열기"
				aria-controls={menuId}
				aria-expanded={isOpen}
				className="shrink-0"
				icon={Menu}
				onClick={openMenu}
			/>

			{shouldRenderMenu ? (
				<div
					id={menuId}
					className={`fixed inset-0 z-[60] bg-[#1B2E74]/20 backdrop-blur-sm transition-opacity duration-300 ease-out ${
						isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
					}`}
					onClick={closeMenu}
				>
					<div
						className={`ml-auto flex min-h-dvh w-full flex-col bg-white text-[#1B2E74] shadow-2xl shadow-[#1B2E74]/15 transition-all duration-300 ease-out ${
							isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
						}`}
						role="dialog"
						aria-modal="true"
						aria-label="모바일 사이드 메뉴"
						onClick={event => event.stopPropagation()}
					>
						<div className="flex h-20 items-center justify-between border-b border-[#1B2E74]/10 px-4 sm:px-6">
							<Image src="/logo.svg" alt="Ediya logo" width={160} height={62} priority className="w-35 sm:w-40" />
							<Button.Action size="icon" variant="ghost" ariaLabel="사이드 메뉴 닫기" icon={X} onClick={closeMenu} />
						</div>

						<div className="flex flex-1 flex-col px-4 py-7 sm:px-6">
							<nav aria-label="모바일 주요 메뉴">
								<ul className="space-y-3">
									{menuItems.map(item => (
										<li
											key={item.href}
											className={`transition-all duration-300 ease-out ${
												isOpen ? `translate-y-0 opacity-100 ${item.delayClass}` : "translate-y-3 opacity-0"
											}`}
										>
											<Button.Link
												href={item.href}
												variant="ghost"
												className="h-14 w-full justify-start rounded-lg border-[#1B2E74]/10 bg-white px-4 text-base text-[#1B2E74] shadow-sm shadow-slate-200/60 hover:bg-slate-50"
												icon={item.icon}
												onClick={closeMenu}
											>
												{item.title}
											</Button.Link>
										</li>
									))}
								</ul>
							</nav>

							<div
								className={`mt-6 transition-all duration-300 ease-out ${
									isOpen ? "translate-y-0 opacity-100 delay-[280ms]" : "translate-y-3 opacity-0"
								}`}
							>
								<Button.Link
									href="#contact"
									variant="primary"
									className="h-14 w-full rounded-lg px-4 text-base"
									icon={ArrowRight}
									iconPosition="right"
									onClick={closeMenu}
								>
									견적 문의하기
								</Button.Link>
							</div>
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
}
