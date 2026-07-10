"use client";

import { useEffect } from "react";
import { ArrowRight, Check, Info } from "lucide-react";

import { Button } from "@/share/button";
import { ScreenSection } from "@/share/screen-section";
import { PackageFitFeedback } from "./package-fit-feedback";
import {
	cateringPackages,
	getCateringPackage,
	getCateringPackageOption,
	minimumCateringHeadcount,
	type CateringPackage,
	type CateringPackageId,
	type CateringPackageOption,
	type CateringPackageOptionId,
} from "./data";
import { useCateringEstimateStore } from "./store";

const priceFormatter = new Intl.NumberFormat("ko-KR");
const packageIds = cateringPackages.map(item => item.id);

type ChoiceTone = {
	card: string;
	selectedCard: string;
	eyebrow: string;
	selectedEyebrow: string;
	body: string;
	selectedBody: string;
	badge: string;
};

const packageToneById: Record<CateringPackageId, ChoiceTone> = {
	basic: {
		card: "border-[#BFD8FF] bg-[#F5F9FF] text-slate-800 hover:border-[#2F7DE1]/60 hover:bg-[#EEF6FF]",
		selectedCard: "border-[#2F7DE1] bg-[#2F7DE1] text-white shadow-lg shadow-[#2F7DE1]/20",
		eyebrow: "text-[#2F7DE1]/60",
		selectedEyebrow: "text-white/70",
		body: "text-[#1C5DBE]",
		selectedBody: "text-white",
		badge: "bg-[#2F7DE1] text-white shadow-sm shadow-[#2F7DE1]/20",
	},
	standard: {
		card: "border-[#A8C4F5] bg-[#EEF5FF] text-slate-800 hover:border-[#1C5DBE]/60 hover:bg-[#E7F0FF]",
		selectedCard: "border-[#1C5DBE] bg-[#1C5DBE] text-white shadow-lg shadow-[#1C5DBE]/20",
		eyebrow: "text-[#1C5DBE]/60",
		selectedEyebrow: "text-white/70",
		body: "text-[#173F9B]",
		selectedBody: "text-white",
		badge: "bg-[#1C5DBE] text-white shadow-sm shadow-[#1C5DBE]/20",
	},
	special: {
		card: "border-[#93A4D6] bg-[#EAF0FF] text-slate-800  hover:border-[#122B6A]/60 hover:bg-[#E0E9FF]",
		selectedCard: "border-[#122B6A] bg-[#122B6A] text-white shadow-lg shadow-[#122B6A]/20",
		eyebrow: "text-[#122B6A]/60",
		selectedEyebrow: "text-white/70",
		body: "text-[#122B6A]",
		selectedBody: "text-white",
		badge: "bg-[#122B6A] text-white shadow-sm shadow-[#122B6A]/20",
	},
};

const optionToneById: Record<CateringPackageOptionId, ChoiceTone> = {
	"basic-coffee": {
		card: "border-[#FED7AA] bg-[#FFF7ED] text-slate-800  hover:border-[#F59E0B]/60 hover:bg-[#FFEDD5]",
		selectedCard: "border-[#F59E0B] bg-[#F59E0B] text-white shadow-lg shadow-[#F59E0B]/20",
		eyebrow: "text-[#B45309]/60",
		selectedEyebrow: "text-white/75",
		body: "text-slate-800",
		selectedBody: "text-white",
		badge: "bg-[#F59E0B] text-white shadow-sm shadow-[#F59E0B]/20",
	},
	"beverage-mix": {
		card: "border-[#FDBA74] bg-[#FFF3E8] text-slate-800  hover:border-[#EA580C]/60 hover:bg-[#FFE8D4]",
		selectedCard: "border-[#EA580C] bg-[#EA580C] text-white shadow-lg shadow-[#EA580C]/20",
		eyebrow: "text-[#C2410C]/60",
		selectedEyebrow: "text-white/75",
		body: "text-slate-800",
		selectedBody: "text-white",
		badge: "bg-[#EA580C] text-white shadow-sm shadow-[#EA580C]/20",
	},
	"premium-refresh": {
		card: "border-[#FB923C] bg-[#FFF1E7] text-slate-800  hover:border-[#C2410C]/60 hover:bg-[#FFE1C7]",
		selectedCard: "border-[#C2410C] bg-[#C2410C] text-white shadow-lg shadow-[#C2410C]/20",
		eyebrow: "text-[#9A3412]/60",
		selectedEyebrow: "text-white/75",
		body: "text-slate-800",
		selectedBody: "text-white",
		badge: "bg-[#C2410C] text-white shadow-sm shadow-[#C2410C]/20",
	},
};

function isCateringPackageId(packageId: string | null): packageId is CateringPackageId {
	return packageId !== null && packageIds.includes(packageId as CateringPackageId);
}

type FloatingEstimatePanelProps = {
	selectedPackage: CateringPackage;
	selectedOption: CateringPackageOption;
	headcount: number;
	totalPrice: number;
	isBelowMinimum: boolean;
	onHeadcountChange: (headcount: number) => void;
};

function FloatingEstimatePanel({
	selectedPackage,
	selectedOption,
	headcount,
	totalPrice,
	isBelowMinimum,
	onHeadcountChange,
}: FloatingEstimatePanelProps) {
	const packageTone = packageToneById[selectedPackage.id];
	const optionTone = optionToneById[selectedOption.id];

	return (
		<aside className="fixed inset-x-0 bottom-0 z-[120] border-t border-primary/10 bg-white/95 p-4 shadow-[0_-18px_45px_rgba(15,23,42,0.18)] backdrop-blur-xl lg:static lg:mt-6 lg:w-full lg:rounded-lg lg:border lg:bg-white lg:p-5 lg:shadow-none lg:backdrop-blur-0">
			<div className="mx-auto max-w-md lg:max-w-none">
				<div className="grid grid-cols-[1fr_auto] items-start gap-4">
					<div className="min-w-0">
						<p className="text-[11px] font-bold uppercase leading-tight tracking-[0.12em] text-primary/50">
							{selectedPackage.name} / {selectedOption.name}
						</p>
						<div className="mt-2 flex flex-wrap gap-1.5" aria-label="선택된 패키지와 옵션">
							<span className={`inline-flex min-w-0 items-center rounded-md px-2.5 py-1.5 text-xs font-bold leading-4 ${packageTone.badge}`}>
								{selectedPackage.koreanName}
							</span>
							<span className={`inline-flex min-w-0 items-center rounded-md px-2.5 py-1.5 text-xs font-bold leading-4 ${optionTone.badge}`}>
								{selectedOption.koreanName}
							</span>
						</div>
					</div>
					<div className="text-right">
						<p className="text-sm font-bold text-primary">최소 주문 50명</p>
						<p className="mt-1 text-2xl font-bold tracking-tight text-slate-900">{priceFormatter.format(totalPrice)}원</p>
					</div>
				</div>

				<label className="mt-4 grid grid-cols-[auto_1fr_auto] items-center gap-3">
					<span className="text-xs font-bold text-primary">예상 인원</span>
					<input
						type="number"
						min={1}
						inputMode="numeric"
						value={headcount}
						onChange={event => onHeadcountChange(Number.parseInt(event.target.value, 10))}
						className="h-11 min-w-0 rounded-md border border-slate-500 bg-white px-3 text-right text-lg font-bold text-primary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
						aria-label="예상 인원"
					/>
					<span className="text-sm font-bold text-primary">명</span>
				</label>

				{isBelowMinimum ? (
					<div className="mt-3 flex gap-2 rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-xs leading-5 text-amber-950">
						<Info aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-amber-600" />
						<p>20명 미만 주문은 일반 단체 주문으로 상담해드립니다.</p>
					</div>
				) : null}

				<div className="mt-4 grid grid-cols-2 gap-2">
					<Button.Link
						href={`/contact?service=catering&package=${selectedPackage.id}&option=${selectedOption.id}`}
						variant="primary"
						icon={ArrowRight}
						iconPosition="right"
						className="px-3 sm:py-7"
					>
						문의 접수하기
					</Button.Link>
					<Button.Link href="/contact?service=catering&type=custom" variant="ghost" className="px-3 sm:py-7">
						전화 상담
					</Button.Link>
				</div>
			</div>
		</aside>
	);
}

export function CateringPriceCalculator() {
	const selectedPackageId = useCateringEstimateStore(state => state.selectedPackageId);
	const selectedOptionId = useCateringEstimateStore(state => state.selectedOptionId);
	const headcount = useCateringEstimateStore(state => state.headcount);
	const selectPackage = useCateringEstimateStore(state => state.selectPackage);
	const selectPackageOption = useCateringEstimateStore(state => state.selectPackageOption);
	const setHeadcount = useCateringEstimateStore(state => state.setHeadcount);

	useEffect(() => {
		const packageId = new URLSearchParams(window.location.search).get("package");

		if (isCateringPackageId(packageId)) {
			selectPackage(packageId);
		}
	}, [selectPackage]);

	const selectedPackage = getCateringPackage(selectedPackageId);
	const selectedOption = getCateringPackageOption(selectedPackageId, selectedOptionId);
	const totalPrice = selectedOption.pricePerPerson * headcount;
	const isBelowMinimum = headcount < minimumCateringHeadcount;

	return (
		<section id="estimate" className="scroll-mt-24 bg-white py-10 pb-20 sm:pb-60 lg:pb-24" aria-labelledby="catering-calculator-heading">
			<ScreenSection>
				<div className="grid gap-6">
					<div>
						<p className="hidden text-sm font-bold uppercase tracking-[0.16em] text-primary/55">Catering Package</p>
						<h2 id="catering-calculator-heading" className="text-lg font-bold text-primary">
							패키지와 옵션을 선택하고 예상 금액을 확인하세요.
						</h2>
					</div>

					<div className="rounded-md border border-primary/10 bg-[#F8F9FC] p-5 shadow-xl shadow-primary/5 sm:p-6">
						<div>
							<p className="text-base font-bold text-slate-800">패키지 선택</p>
							<div className="mt-3 grid grid-cols-3 gap-2" role="group" aria-label="케이터링 패키지 선택">
								{cateringPackages.map(item => {
									const isSelected = item.id === selectedPackageId;
									const tone = packageToneById[item.id];

									return (
										<button
											key={item.id}
											type="button"
											onClick={() => selectPackage(item.id)}
											aria-pressed={isSelected}
											className={`relative min-w-0 rounded-sm border h-50 px-4 py-5 text-left flex transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
												isSelected ? tone.selectedCard : tone.card
											}`}
										>
											<span className="block min-w-0">
												<span
													className={`block whitespace-normal pr-3 text-xs font-bold uppercase ${isSelected ? tone.selectedEyebrow : tone.eyebrow}`}
												>
													{item.name}
												</span>
												<span className="mt-1.5 block break-keep text-base font-bold leading-5">{item.koreanName}</span>
												<span className={`mt-5 block break-keep text-xs ${isSelected ? tone.selectedBody : tone.body}`}>
													{item.landingDescription}
												</span>
											</span>
											{isSelected ? (
												<div className="absolute flex right-3 top-3">
													<span className="text-xs hidden sm:block">적용됨</span>
													<Check aria-hidden="true" className="size-3.5" />
												</div>
											) : null}
										</button>
									);
								})}
							</div>
						</div>

						<div className="mt-6">
							<p className="text-base font-bold text-slate-800">세부 옵션 선택</p>
							<div className="mt-3 grid grid-cols-3 gap-2" role="group" aria-label={`${selectedPackage.koreanName} 세부 옵션 선택`}>
								{selectedPackage.options.map(item => {
									const isSelected = item.id === selectedOptionId;
									const tone = optionToneById[item.id];

									return (
										<button
											key={item.id}
											type="button"
											onClick={() => selectPackageOption(item.id)}
											aria-pressed={isSelected}
											className={`relative min-w-0 rounded-sm flex flex-col items-start justify-between h-40 border px-4 py-5 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:px-3.5 ${
												isSelected ? tone.selectedCard : tone.card
											}`}
										>
											<div>
												<p className={`whitespace-normal pr-3 text-xs font-bold uppercase ${isSelected ? tone.selectedEyebrow : tone.eyebrow}`}>
													{item.name}
												</p>
												<h3 className="mt-1.5 break-keep text-base font-bold leading-5">{item.koreanName}</h3>
											</div>
											<p className={`mt-2 break-keep text-xs leading-4 sm:text-sm font-bold ${isSelected ? tone.selectedBody : tone.body}`}>
												1인 {priceFormatter.format(item.pricePerPerson)}원부터
											</p>
											{isSelected ? <Check aria-hidden="true" className="absolute right-2 top-2 size-3.5" /> : null}
										</button>
									);
								})}
							</div>
						</div>

						<PackageFitFeedback selectedOption={selectedOption} />

						<FloatingEstimatePanel
							selectedPackage={selectedPackage}
							selectedOption={selectedOption}
							headcount={headcount}
							totalPrice={totalPrice}
							isBelowMinimum={isBelowMinimum}
							onHeadcountChange={setHeadcount}
						/>
					</div>
				</div>
			</ScreenSection>
		</section>
	);
}
