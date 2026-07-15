"use client";

import Image from "next/image";
import { PackageOpen } from "lucide-react";
import { useState } from "react";

import { ScreenSection } from "@/share/screen-section";
import { productCategories, products, type ProductBadgeId, type ProductCategoryId } from "./data";

const priceFormatter = new Intl.NumberFormat("ko-KR");

const productBadgeTone: Record<ProductBadgeId, { label: string; className: string }> = {
	cold: {
		label: "냉장",
		className: "border-blue-200 bg-blue-50 text-blue-600",
	},
	room: {
		label: "상온",
		className: "border-amber-200 bg-amber-50 text-amber-700",
	},
	"drink-station": {
		label: "음료 스테이션",
		className: "border-[#1C5DBE]/20 bg-blue-50 text-[#1C5DBE]",
	},
	"dessert-station": {
		label: "디저트 스테이션",
		className: "border-[#E96106]/20 bg-orange-50 text-[#B45309]",
	},
	"lounge-station": {
		label: "라운지 스테이션",
		className: "border-emerald-200 bg-emerald-50 text-emerald-700",
	},
};

export function ProductCatalog() {
	const [activeCategory, setActiveCategory] = useState<ProductCategoryId>("drink");
	const visibleProducts = products.filter(product => product.category === activeCategory);

	return (
		<section id="products" className="scroll-mt-24 bg-white py-10" aria-labelledby="product-catalog-heading">
			<ScreenSection className="grid gap-8">
				<div>
					<h2 id="product-catalog-heading" className="text-xl font-bold leading-tight text-primary">
						어떤 제품을 채울지 <br className="flex sm:hidden" />
						살펴보세요.
					</h2>
				</div>

				<div className="rounded-lg border border-primary/10 bg-[#F8F9FC] p-3 shadow-xl shadow-primary/5 sm:p-6">
					<div className="grid grid-cols-3 gap-2" role="tablist" aria-label="제품 카테고리">
						{productCategories.map(category => {
							const isActive = category.id === activeCategory;

							return (
								<button
									key={category.id}
									type="button"
									onClick={() => setActiveCategory(category.id)}
									className={`h-10 rounded-sm border px-2 text-xs font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:text-sm ${
										isActive
											? "border-[#E96106] bg-[#E96106] text-white shadow-sm shadow-[#E96106]/20"
											: "border-slate-200 bg-white text-primary hover:border-[#E96106]/40"
									}`}
									aria-selected={isActive}
									role="tab"
								>
									{category.label}
								</button>
							);
						})}
					</div>

					<div className="mt-5 grid grid-cols-1 gap-2 sm:gap-3 lg:grid-cols-4" role="list" aria-label="스낵바 제품 목록" aria-live="polite">
						{visibleProducts.map(product => (
							<article
								key={product.id}
								className="flex min-w-0 overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm lg:flex-col"
								role="listitem"
							>
								<div className="relative aspect-square w-28 shrink-0 bg-slate-50 sm:w-32 lg:w-full">
									<Image
										src={product.image}
										alt={product.imageAlt}
										fill
										sizes="(min-width: 1024px) 320px, 50vw"
										className="object-contain p-3 sm:p-4"
									/>
								</div>

								<div className="flex min-h-36 min-w-0 flex-1 flex-col justify-between gap-3 p-3 sm:p-4">
									<div className="min-w-0">
										<div className="min-w-0">
											<h3 className="break-keep text-sm font-bold leading-5 text-primary sm:text-base">{product.name}</h3>
											<p className="my-1 text-lg font-bold text-slate-900">{priceFormatter.format(product.price)}원</p>
										</div>
										<div className="mt-2 flex flex-wrap gap-1">
											{product.badges.map(badge => {
												const tone = productBadgeTone[badge];

												return (
													<span key={badge} className={`inline-flex rounded-xs border px-2 py-0.5 text-[9px] font-bold ${tone.className}`}>
														{tone.label}
													</span>
												);
											})}
										</div>
										<p className="mt-2 break-keep text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">{product.description}</p>
									</div>

									<p className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400">
										<PackageOpen className="size-4" aria-hidden="true" />
										구성 및 재고 상담
									</p>
								</div>
							</article>
						))}
					</div>
				</div>
			</ScreenSection>
		</section>
	);
}
