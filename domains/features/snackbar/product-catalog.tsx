"use client";

import { useState } from "react";
import Image from "next/image";
import { PackageOpen } from "lucide-react";
import { Button } from "@/share/button";
import { ScreenSection } from "@/share/screen-section";
import { productCategories, products, type ProductCategoryId } from "./data";

export function ProductCatalog() {
	const [activeCategory, setActiveCategory] = useState<ProductCategoryId>("drink");
	const visibleProducts = products.filter((product) => product.category === activeCategory);

	return (
		<section className="bg-[#F8F9FC] py-20 sm:py-28" aria-labelledby="product-catalog-heading">
			<ScreenSection>
				<header className="mx-auto max-w-3xl text-center">
					<p className="text-sm font-black tracking-[0.16em] text-[#1C5DBE]">PRODUCT LINEUP</p>
					<h2 id="product-catalog-heading" className="mt-4 text-3xl font-black tracking-[-0.03em] text-slate-900 sm:text-4xl">어떤 제품을 채울지 살펴보세요</h2>
					<p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">실제 납품 제품은 시즌과 재고, 예산에 따라 달라질 수 있으며 아래 제품군을 기준으로 상담합니다.</p>
				</header>

				<div className="mt-8 flex justify-center" role="group" aria-label="제품 카테고리">
					<div className="inline-flex rounded-xl border border-slate-200 bg-white p-1 shadow-sm">
						{productCategories.map((category) => {
							const isActive = category.id === activeCategory;

							return (
								<Button.Action
									key={category.id}
									variant="none"
									onClick={() => setActiveCategory(category.id)}
									aria-pressed={isActive}
									className={`h-10 rounded-lg px-5 text-sm ${isActive ? "bg-primary text-white shadow-sm" : "text-slate-500 hover:bg-slate-100 hover:text-primary"}`}
								>
									{category.label}
								</Button.Action>
							);
						})}
					</div>
				</div>

				<div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
					{visibleProducts.map((product) => (
						<article key={product.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
							<div className="relative aspect-[4/3] overflow-hidden bg-white">
								<Image src={product.image} alt={product.imageAlt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain p-6" />
							</div>
							<div className="border-t border-slate-100 p-6">
								<div className="flex items-start justify-between gap-4">
									<h3 className="text-lg font-black text-slate-900">{product.name}</h3>
									<span className="shrink-0 rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-black text-[#1C5DBE]">{product.storage}</span>
								</div>
								<p className="mt-3 text-sm leading-7 text-slate-600">{product.description}</p>
								<p className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-slate-400"><PackageOpen className="size-4" aria-hidden="true" />구성 및 재고 상담</p>
							</div>
						</article>
					))}
				</div>
			</ScreenSection>
		</section>
	);
}
