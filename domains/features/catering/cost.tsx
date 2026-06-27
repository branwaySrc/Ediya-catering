"use client";

import { ArrowRight, Headphones } from "lucide-react";
import { Button } from "@/share/button";
import { getCateringPackage } from "./data";
import { useCateringStore } from "./store";

const priceFormatter = new Intl.NumberFormat("ko-KR");

export function Cost() {
	const selectedPackageId = useCateringStore(state => state.selectedPackageId);
	const selectedChoiceId = useCateringStore(state => state.selectedChoiceId);
	const selectedPackage = getCateringPackage(selectedPackageId);
	const selectedChoice = selectedPackage.choices.find(choice => choice.id === selectedChoiceId) ?? selectedPackage.choices[0];
	const totalPrice = selectedPackage.basePrice + selectedChoice.additionalPrice;

	return (
		<aside
			className="pointer-events-none fixed bottom-4 left-4 right-20 z-40 md:left-1/2 md:right-auto md:w-[min(48rem,calc(100%-3rem))] md:-translate-x-1/2"
			aria-label="선택 견적"
		>
			<div className="pointer-events-auto rounded-2xl border-3 border-primary bg-white/95 p-4 shadow-2xl shadow-slate-900/20 backdrop-blur-xl sm:p-5 lg:flex lg:items-center lg:gap-6">
				<div className="flex min-w-0 items-center justify-between gap-4 lg:flex-1">
					<div className="min-w-0">
						<p className="truncate font-black text-primary">{selectedPackage.name}</p>
						<p className="mt-1 truncate text-xs font-bold text-slate-500 sm:text-sm">{selectedChoice.name}</p>
					</div>
					<div className="shrink-0 text-right">
						<p className="text-[11px] font-bold text-slate-400">예상 견적</p>
						<p className="mt-0.5 text-lg font-black tracking-tight text-primary sm:text-2xl">{priceFormatter.format(totalPrice)}원</p>
					</div>
				</div>

				<div className="mt-4 grid grid-cols-2 gap-2 lg:mt-0 lg:w-80">
					<Button.Link
						href="/contact?type=self-estimate"
						variant="ghost"
						icon={ArrowRight}
						iconPosition="right"
						className="h-10 px-3 text-xs sm:h-11 sm:text-sm"
					>
						셀프 견적보기
					</Button.Link>
					<Button.Link href="/contact?type=consulting" variant="primary" icon={Headphones} className="h-10 px-3 text-xs sm:h-11 sm:text-sm">
						전문상담원 연결
					</Button.Link>
				</div>
			</div>
		</aside>
	);
}
