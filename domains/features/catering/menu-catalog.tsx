"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Check, PackageSearch } from "lucide-react";
import { Button } from "@/share/button";
import { ScreenSection } from "@/share/screen-section";
import { cateringMenuCategories, type CateringMenuCategoryId } from "./data";

export function MenuCatalog() {
	const [activeCategoryId, setActiveCategoryId] = useState<CateringMenuCategoryId>("drinks");
	const activeCategory = cateringMenuCategories.find((category) => category.id === activeCategoryId) ?? cateringMenuCategories[0];

	return (
		<section className="bg-white py-16 sm:py-20 lg:py-24" aria-labelledby="menu-catalog-heading">
			<ScreenSection>
				<header className="mx-auto max-w-3xl text-center">
					<p className="text-sm font-black uppercase tracking-[0.18em] text-primary/55">Catering Menu</p>
					<h1 id="menu-catalog-heading" className="mt-3 text-3xl font-black tracking-tight text-primary sm:text-4xl">
						행사에 필요한 메뉴를 살펴보세요
					</h1>
					<p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
						커피와 티부터 스낵, 베이커리, 기프트까지 패키지에 함께 구성할 수 있는 대표 제품군입니다.
					</p>
				</header>

				<div className="scrollbar-x-thin mt-8 overflow-x-auto pb-2">
					<div className="mx-auto flex min-w-max justify-center gap-2" role="group" aria-label="케이터링 메뉴 카테고리">
						{cateringMenuCategories.map((category) => {
							const isActive = category.id === activeCategoryId;

							return (
								<Button.Action
									key={category.id}
									variant="none"
									onClick={() => setActiveCategoryId(category.id)}
									aria-pressed={isActive}
									className={`h-11 rounded-xl border px-5 text-sm ${
										isActive ? "border-primary bg-primary text-white shadow-md" : "border-primary/10 bg-white text-primary hover:border-primary/25 hover:bg-slate-50"
									}`}
								>
									{category.name}
								</Button.Action>
							);
						})}
					</div>
				</div>

				<div className="mx-auto mt-8 grid max-w-5xl overflow-hidden rounded-3xl border border-primary/10 bg-[#F8F9FC] shadow-lg shadow-primary/5 lg:grid-cols-[0.9fr_1.1fr]" aria-live="polite">
					<div className="relative min-h-72 overflow-hidden bg-white sm:min-h-96">
						<Image
							src={activeCategory.image}
							alt={activeCategory.imageAlt}
							fill
							sizes="(max-width: 1024px) 100vw, 45vw"
							className="object-contain p-8 sm:p-12"
						/>
						<span className="absolute left-5 top-5 rounded-full px-3 py-1.5 text-[11px] font-black text-white shadow-sm" style={{ backgroundColor: activeCategory.accent }}>
							{activeCategory.nameEn}
						</span>
					</div>

					<div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
						<div className="flex items-center gap-3">
							<span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary text-white">
								<PackageSearch className="size-5" aria-hidden="true" />
							</span>
							<div>
								<p className="text-xs font-black uppercase tracking-[0.16em] text-primary/45">{activeCategory.nameEn}</p>
								<h2 className="mt-1 text-2xl font-black text-primary">{activeCategory.name}</h2>
							</div>
						</div>
						<p className="mt-6 text-sm leading-7 text-slate-600 sm:text-base">{activeCategory.description}</p>
						<p className="mt-5 text-sm font-black text-primary">{activeCategory.service}</p>

						<ul className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
							{activeCategory.menus.map((menu) => (
								<li key={menu} className="flex items-center gap-2 rounded-xl border border-primary/10 bg-white px-3 py-3 text-sm font-bold text-slate-700">
									<Check className="size-3.5 shrink-0 text-[#1C5DBE]" aria-hidden="true" />
									{menu}
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="mx-auto mt-6 flex max-w-5xl flex-col items-center justify-between gap-4 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 sm:flex-row">
					<p className="text-sm leading-6 text-amber-950/75">
						<span className="font-black text-amber-950">대표 메뉴 안내</span> 실제 제공 제품은 행사 일정, 시즌과 재고에 따라 달라질 수 있습니다.
					</p>
					<Button.Link href="#estimate" variant="primary" icon={ArrowRight} iconPosition="right" className="w-full shrink-0 sm:w-auto">
						패키지 견적 확인하기
					</Button.Link>
				</div>
			</ScreenSection>
		</section>
	);
}
