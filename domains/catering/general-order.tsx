"use client";

import Image from "next/image";
import { ArrowRight, Check, ChevronDown, ChevronUp, Minus, Minimize2, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";

import { Button } from "@/share/button";
import { ScreenSection } from "@/share/screen-section";
import { customOrderCategories, customOrderItems, type CustomOrderFilterId, type CustomOrderItem, type CustomOrderItemId } from "./data";
import { useCateringCustomOrderStore } from "./store";

const priceFormatter = new Intl.NumberFormat("ko-KR");

type CartLine = {
	item: CustomOrderItem;
	quantity: number;
};

type CartCategorySummary = {
	total: number;
	beverage: number;
	bakery: number;
	snack: number;
};

const cartCategoryLabels: Array<{ key: keyof CartCategorySummary; label: string }> = [
	{ key: "total", label: "총" },
	{ key: "beverage", label: "음료" },
	{ key: "bakery", label: "베이커리" },
	{ key: "snack", label: "스낵" },
];

function getCartLines(cartItems: Array<{ itemId: CustomOrderItemId; quantity: number }>) {
	return cartItems
		.map((cartItem) => {
			const item = customOrderItems.find((orderItem) => orderItem.id === cartItem.itemId);

			return item ? { item, quantity: cartItem.quantity } : null;
		})
		.filter((line): line is CartLine => line !== null);
}

function getCartCategorySummary(lines: CartLine[]): CartCategorySummary {
	return lines.reduce<CartCategorySummary>(
		(summary, line) => ({
			...summary,
			total: summary.total + line.quantity,
			[line.item.category]: summary[line.item.category] + line.quantity,
		}),
		{ total: 0, beverage: 0, bakery: 0, snack: 0 },
	);
}

function CustomOrderCartList({ lines }: { lines: CartLine[] }) {
	const increaseItem = useCateringCustomOrderStore((state) => state.increaseItem);
	const decreaseItem = useCateringCustomOrderStore((state) => state.decreaseItem);
	const setItemQuantity = useCateringCustomOrderStore((state) => state.setItemQuantity);
	const removeItem = useCateringCustomOrderStore((state) => state.removeItem);

	return (
		<div className="mt-4 grid max-h-48 gap-2 overflow-y-auto pr-1 lg:max-h-64">
			{lines.map(({ item, quantity }) => (
				<div key={item.id} className="grid grid-cols-[1fr_auto] gap-3 rounded-md border border-slate-200 bg-slate-50 p-3">
					<div className="min-w-0">
						<p className="break-keep text-sm font-bold leading-5 text-primary">{item.name}</p>
						<p className="mt-1 text-xs font-bold text-slate-500">
							{priceFormatter.format(item.price)}원 x {quantity}
						</p>
						<p className="mt-1 text-sm font-bold text-slate-900">{priceFormatter.format(item.price * quantity)}원</p>
					</div>
					<div className="flex shrink-0 items-center gap-1">
						<button
							type="button"
							onClick={() => decreaseItem(item.id)}
							className="inline-flex size-8 items-center justify-center rounded-md border border-slate-200 bg-white text-primary transition hover:bg-slate-100"
							aria-label={`${item.name} 수량 줄이기`}
						>
							<Minus aria-hidden="true" className="size-3.5" />
						</button>
						<input
							type="number"
							min={1}
							inputMode="numeric"
							value={quantity}
							onChange={(event) => setItemQuantity(item.id, Number.parseInt(event.target.value, 10))}
							className="h-8 w-11 rounded-md border border-slate-200 bg-white text-center text-sm font-bold text-primary outline-none focus:border-primary focus:ring-2 focus:ring-primary/15"
							aria-label={`${item.name} 수량`}
						/>
						<button
							type="button"
							onClick={() => increaseItem(item.id)}
							className="inline-flex size-8 items-center justify-center rounded-md border border-slate-200 bg-white text-primary transition hover:bg-slate-100"
							aria-label={`${item.name} 수량 늘리기`}
						>
							<Plus aria-hidden="true" className="size-3.5" />
						</button>
						<button
							type="button"
							onClick={() => removeItem(item.id)}
							className="inline-flex size-8 items-center justify-center rounded-md border border-red-100 bg-white text-red-500 transition hover:bg-red-50"
							aria-label={`${item.name} 장바구니에서 삭제`}
						>
							<Trash2 aria-hidden="true" className="size-3.5" />
						</button>
					</div>
				</div>
			))}
		</div>
	);
}

function CustomOrderSummaryPanel({
	lines,
	totalPrice,
	itemCount,
	categorySummary,
}: {
	lines: CartLine[];
	totalPrice: number;
	itemCount: number;
	categorySummary: CartCategorySummary;
}) {
	const [isExpanded, setIsExpanded] = useState(false);
	const [isHidden, setIsHidden] = useState(false);
	const clearCart = useCateringCustomOrderStore((state) => state.clearCart);

	if (itemCount === 0) {
		return null;
	}

	if (isHidden) {
		return (
			<div className="fixed inset-x-0 bottom-0 z-[120] flex h-20 items-center justify-center border-t border-primary/10 bg-white/95 px-4 shadow-[0_-18px_45px_rgba(15,23,42,0.18)] backdrop-blur-xl lg:left-1/2 lg:right-auto lg:bottom-6 lg:w-[calc(100vw-24rem)] lg:max-w-4xl lg:-translate-x-1/2 lg:rounded-lg lg:border lg:shadow-2xl lg:shadow-slate-950/20">
				<button
					type="button"
					onClick={() => setIsHidden(false)}
					className="inline-flex h-12 w-full max-w-md items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-bold text-white transition hover:bg-[#15255F] lg:max-w-xs"
				>
					<ChevronUp aria-hidden="true" className="size-4" />
					계산기 펼치기
				</button>
			</div>
		);
	}

	return (
		<aside className="fixed inset-x-0 bottom-0 z-[120] border-t border-primary/10 bg-white/95 p-4 shadow-[0_-18px_45px_rgba(15,23,42,0.18)] backdrop-blur-xl lg:left-1/2 lg:right-auto lg:bottom-6 lg:w-[calc(100vw-24rem)] lg:max-w-4xl lg:-translate-x-1/2 lg:rounded-lg lg:border lg:bg-white lg:p-5 lg:shadow-2xl lg:shadow-slate-950/20 lg:backdrop-blur-0">
			<div className="mx-auto max-w-md lg:max-w-none">
				<div className="grid grid-cols-[1fr_auto] items-start gap-4 lg:grid-cols-[1fr_auto_auto] lg:items-center">
					<div className="min-w-0">
						<p className="text-[11px] font-bold uppercase leading-tight tracking-[0.12em] text-primary/50">Custom Cart</p>
						<div className="mt-2 grid grid-cols-4 gap-1.5">
							{cartCategoryLabels.map(({ key, label }) => (
								<span
									key={key}
									className={`inline-flex min-h-8 flex-col justify-center rounded-md px-2 py-1 text-center text-[10px] font-bold leading-tight ${
										key === "total" ? "bg-[#E96106] text-white shadow-sm shadow-[#E96106]/20" : "bg-orange-50 text-[#B45309]"
									}`}
								>
									<span>{label}</span>
									<span>{categorySummary[key]}개</span>
								</span>
							))}
						</div>
					</div>
					<div className="text-right">
						<p className="text-[11px] font-bold text-slate-500">총 주문 금액</p>
						<p className="mt-1 text-2xl font-bold tracking-tight text-primary lg:text-3xl">{priceFormatter.format(totalPrice)}원</p>
					</div>
					<div className="grid justify-items-end gap-2">
						<button
							type="button"
							onClick={() => setIsHidden(true)}
							className="inline-flex size-9 items-center justify-center rounded-full border border-slate-200 bg-white text-primary transition hover:bg-slate-100"
							aria-label="계산기 숨기기"
						>
							<Minimize2 aria-hidden="true" className="size-4" />
						</button>
					</div>
				</div>

				<div className={isExpanded ? "block" : "hidden"}>
					<CustomOrderCartList lines={lines} />
				</div>

				<div className="mt-4 grid grid-cols-[auto_1fr_auto] gap-2">
					<button
						type="button"
						onClick={() => setIsExpanded((current) => !current)}
						className="inline-flex h-11 items-center justify-center gap-1 rounded-lg border border-primary/15 bg-white px-2 text-xs font-bold text-primary transition hover:bg-slate-100 sm:gap-1.5 sm:px-3 sm:text-sm"
						aria-label={isExpanded ? "장바구니 목록 닫기" : "장바구니보기"}
						aria-expanded={isExpanded}
					>
						<ShoppingCart aria-hidden="true" className="size-4" />
						<span className="whitespace-nowrap">{isExpanded ? "목록닫기" : "장바구니보기"}</span>
						{isExpanded ? <ChevronDown aria-hidden="true" className="size-3.5" /> : <ChevronUp aria-hidden="true" className="size-3.5" />}
					</button>
					<Button.Link
						href="/contact?service=catering&type=custom-order"
						variant="primary"
						icon={ArrowRight}
						iconPosition="right"
						className="px-3"
					>
						주문 상담
					</Button.Link>
					<button
						type="button"
						onClick={clearCart}
						className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-200 bg-white px-4 text-sm font-bold text-slate-600 transition hover:bg-slate-100"
					>
						비우기
					</button>
				</div>
			</div>
		</aside>
	);
}

export function CateringGeneralOrder() {
	const [selectedCategory, setSelectedCategory] = useState<CustomOrderFilterId>("all");
	const cartItems = useCateringCustomOrderStore((state) => state.items);
	const addItem = useCateringCustomOrderStore((state) => state.addItem);

	const visibleItems = useMemo(() => {
		if (selectedCategory === "all") {
			return customOrderItems;
		}

		return customOrderItems.filter((item) => item.category === selectedCategory);
	}, [selectedCategory]);

	const cartLines = useMemo(() => getCartLines(cartItems), [cartItems]);
	const totalPrice = cartLines.reduce((sum, line) => sum + line.item.price * line.quantity, 0);
	const itemCount = cartLines.reduce((sum, line) => sum + line.quantity, 0);
	const categorySummary = useMemo(() => getCartCategorySummary(cartLines), [cartLines]);

	return (
		<div className="bg-[#F8F9FC] text-slate-900">
			<section className={`bg-white py-10 sm:py-16 ${itemCount > 0 ? "pb-48 sm:pb-52 lg:pb-72" : ""}`} aria-labelledby="custom-order-heading">
				<ScreenSection className="grid gap-8">
					<div>
						<p className="inline-flex rounded-full border border-[#E96106]/15 bg-orange-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#E96106]">
							Custom Order
						</p>
						<h1 id="custom-order-heading" className="mt-5 text-3xl font-bold leading-tight text-primary sm:text-4xl">
							필요한 메뉴를 직접 담고
							<br />
							예상 주문 금액을 확인하세요.
						</h1>
						<p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
							음료, 베이커리, 스낵을 선택해 장바구니에 담으면 현재 선택 기준의 예상 금액을 확인할 수 있습니다. 최종 가능 여부와 구성은 상담 후 확정됩니다.
						</p>
					</div>

					<div className="rounded-lg border border-primary/10 bg-[#F8F9FC] p-5 shadow-xl shadow-primary/5 sm:p-6">
						<div className="grid grid-cols-4 gap-2" role="tablist" aria-label="커스텀 주문 카테고리">
							{customOrderCategories.map((category) => {
								const isSelected = category.id === selectedCategory;

								return (
									<button
										key={category.id}
										type="button"
										onClick={() => setSelectedCategory(category.id)}
										className={`h-10 rounded-md border px-2 text-xs font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:text-sm ${
											isSelected ? "border-[#E96106] bg-[#E96106] text-white shadow-sm shadow-[#E96106]/20" : "border-slate-200 bg-white text-primary hover:border-[#E96106]/40"
										}`}
										aria-selected={isSelected}
										role="tab"
									>
										{category.label}
									</button>
								);
							})}
						</div>

						<div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3" role="list" aria-label="커스텀 주문 메뉴">
							{visibleItems.map((item) => {
								const quantity = cartItems.find((cartItem) => cartItem.itemId === item.id)?.quantity ?? 0;

								return (
									<article key={item.id} className="min-w-0 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm" role="listitem">
										<div className="relative aspect-square bg-slate-50">
											<Image src={item.image} alt={item.imageAlt} fill sizes="(min-width: 1024px) 180px, 33vw" className="object-contain p-3 sm:p-4" />
											{quantity > 0 ? (
												<span className="absolute right-2 top-2 inline-flex size-6 items-center justify-center rounded-full bg-[#E96106] text-white shadow-sm">
													<Check aria-hidden="true" className="size-3.5" />
												</span>
											) : null}
										</div>
										<div className="grid min-h-36 gap-2 p-3 sm:p-4">
											<div>
												<h2 className="break-keep text-sm font-bold leading-5 text-primary sm:text-base">{item.name}</h2>
												<p className="mt-1 text-xs font-bold text-[#E96106] sm:text-sm">{priceFormatter.format(item.price)}원</p>
											</div>
											<button
												type="button"
												onClick={() => addItem(item.id)}
												className="mt-auto inline-flex h-9 items-center justify-center gap-1.5 rounded-md bg-primary px-2 text-xs font-bold text-white transition hover:bg-[#15255F] sm:text-sm"
											>
												<ShoppingCart aria-hidden="true" className="size-3.5" />
												담기
											</button>
										</div>
									</article>
								);
							})}
						</div>

						<CustomOrderSummaryPanel lines={cartLines} totalPrice={totalPrice} itemCount={itemCount} categorySummary={categorySummary} />
					</div>
				</ScreenSection>
			</section>
		</div>
	);
}
