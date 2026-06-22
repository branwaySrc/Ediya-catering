"use client";

import { AlertCircle, CalendarDays, Check, Clock3, Coffee, Crown, PackageCheck, Sparkles, type LucideIcon } from "lucide-react";
import { ScreenSection } from "@/share/screen-section";
import { cateringPackages, getCateringPackage, type CateringPackageId } from "./data";
import { useCateringStore } from "./store";

const packageIcons: Record<CateringPackageId, LucideIcon> = {
	basic: Coffee,
	standard: Sparkles,
	special: Crown,
};

const priceFormatter = new Intl.NumberFormat("ko-KR");

const preparationGuides: Record<
	CateringPackageId,
	{
		minimumLeadTime: string;
		recommendedLeadTime: string;
		setupTime: string;
	}
> = {
	basic: {
		minimumLeadTime: "3영업일 전",
		recommendedLeadTime: "5~7일 전",
		setupTime: "30~60분 전",
	},
	standard: {
		minimumLeadTime: "5영업일 전",
		recommendedLeadTime: "7~10일 전",
		setupTime: "약 60분 전",
	},
	special: {
		minimumLeadTime: "7영업일 전",
		recommendedLeadTime: "10~14일 전",
		setupTime: "60~90분 전",
	},
};

export function Category() {
	const selectedPackageId = useCateringStore(state => state.selectedPackageId);
	const selectedChoiceId = useCateringStore(state => state.selectedChoiceId);
	const selectPackage = useCateringStore(state => state.selectPackage);
	const selectChoice = useCateringStore(state => state.selectChoice);
	const selectedPackage = getCateringPackage(selectedPackageId);
	const preparationGuide = preparationGuides[selectedPackageId];

	return (
		<ScreenSection id="estimate" className="scroll-mt-24 py-12 pb-48 sm:py-16 sm:pb-44 lg:py-20 lg:pb-40">
			<header className="max-w-2xl">
				<p className="text-sm font-black uppercase tracking-[0.18em] text-primary/60">Catering Package</p>
				<h1 className="mt-3 text-3xl font-black tracking-tight text-primary sm:text-4xl">행사에 꼭 맞는 패키지를 선택하세요</h1>
				<p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">패키지와 세부 구성을 선택하면 예상 견적을 바로 확인할 수 있습니다.</p>
			</header>

			<section className="mt-10" aria-labelledby="package-heading">
				<div className="flex items-end justify-between gap-4">
					<div>
						<p className="text-xs font-black text-primary/50">STEP 01</p>
						<h2 id="package-heading" className="mt-1 text-xl font-black text-primary sm:text-2xl">
							패키지 선택
						</h2>
					</div>
					<p className="hidden text-sm text-slate-500 sm:block">원하는 서비스 규모를 먼저 골라주세요.</p>
				</div>

				<div className="mt-5 grid gap-3 sm:grid-cols-3" role="group" aria-label="케이터링 패키지">
					{cateringPackages.map(item => {
						const isSelected = item.id === selectedPackageId;
						const Icon = packageIcons[item.id];

						return (
							<button
								key={item.id}
								type="button"
								onClick={() => selectPackage(item.id)}
								aria-pressed={isSelected}
								className={`group relative min-h-52 overflow-hidden rounded-2xl border p-6 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
									isSelected
										? "border-primary bg-primary text-white shadow-xl shadow-primary/15"
										: "border-primary/10 bg-white text-primary hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg"
								}`}
							>
								<div className={`flex size-11 items-center justify-center rounded-xl ${isSelected ? "bg-white/15" : "bg-primary/6"}`}>
									<Icon aria-hidden="true" className="size-5" />
								</div>
								<p className={`mt-7 text-xs font-black uppercase tracking-[0.16em] ${isSelected ? "text-white/60" : "text-primary/45"}`}>
									{item.nameEn}
								</p>
								<h3 className="mt-1 text-xl font-black">{item.name}</h3>
								<p className={`mt-3 text-sm leading-6 ${isSelected ? "text-white/70" : "text-slate-500"}`}>{item.description}</p>
								<p className="mt-5 text-sm font-black">{priceFormatter.format(item.basePrice)}원부터</p>
								{isSelected ? <Check aria-hidden="true" className="absolute top-6 right-6 size-5" /> : null}
							</button>
						);
					})}
				</div>
			</section>

			<section className="mt-14" aria-labelledby="choice-heading">
				<div className="flex items-end justify-between gap-4">
					<div>
						<p className="text-xs font-black text-primary/50">STEP 02</p>
						<h2 id="choice-heading" className="mt-1 text-xl font-black text-primary sm:text-2xl">
							세부 옵션 선택
						</h2>
					</div>
					<p className="hidden text-sm font-bold text-primary sm:block">{selectedPackage.name}</p>
				</div>

				<div className="mt-5 grid gap-3 md:grid-cols-3" role="group" aria-label={`${selectedPackage.name} 세부 옵션`}>
					{selectedPackage.choices.map(choice => {
						const isSelected = choice.id === selectedChoiceId;

						return (
							<button
								key={choice.id}
								type="button"
								onClick={() => selectChoice(choice.id)}
								aria-pressed={isSelected}
								className={`relative rounded-2xl border p-5 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
									isSelected ? "border-primary bg-[#F3F6FF] shadow-md" : "border-slate-200 bg-white hover:border-primary/30 hover:bg-slate-50"
								}`}
							>
								<div className="flex items-start justify-between gap-4">
									<h3 className="font-black text-primary">{choice.name}</h3>
									<span
										className={`flex size-5 shrink-0 items-center justify-center rounded-full border ${isSelected ? "border-primary bg-primary text-white" : "border-slate-300"}`}
									>
										{isSelected ? <Check aria-hidden="true" className="size-3" /> : null}
									</span>
								</div>
								<p className="mt-3 min-h-12 text-sm leading-6 text-slate-500">{choice.description}</p>
								<p className="mt-4 text-sm font-black text-primary">
									{choice.additionalPrice === 0 ? "추가 금액 없음" : `+ ${priceFormatter.format(choice.additionalPrice)}원`}
								</p>
							</button>
						);
					})}
				</div>
			</section>

			<section className="mt-14" aria-labelledby="schedule-heading">
				<div className="flex items-end justify-between gap-4">
					<div>
						<p className="text-xs font-black text-primary/50">STEP 03</p>
						<h2 id="schedule-heading" className="mt-1 text-xl font-black text-primary sm:text-2xl">
							준비 일정 확인
						</h2>
					</div>
					<p className="hidden text-sm text-slate-500 sm:block">행사일을 기준으로 문의 시점을 확인해 주세요.</p>
				</div>

				<div className="mt-5 overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-lg shadow-primary/5">
					<div className="bg-primary px-6 py-7 text-white sm:px-8 sm:py-8">
						<div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
							<div>
								<p className="text-xs font-black uppercase tracking-[0.16em] text-white/55">Preparation Guide</p>
								<h3 className="mt-2 text-2xl font-black">{selectedPackage.name} 준비 안내</h3>
							</div>
							<p className="text-sm font-bold text-white/65">선택한 패키지 기준</p>
						</div>

						<dl className="mt-7 grid gap-3 sm:grid-cols-3">
							<div className="rounded-2xl border border-white/10 bg-white/8 p-5">
								<dt className="flex items-center gap-2 text-xs font-bold text-white/60">
									<CalendarDays aria-hidden="true" className="size-4" />
									최소 문의 시점
								</dt>
								<dd className="mt-3 text-xl font-black">{preparationGuide.minimumLeadTime}</dd>
							</div>
							<div className="rounded-2xl border border-blue-300/30 bg-blue-400/15 p-5 ring-1 ring-inset ring-blue-200/10">
								<dt className="flex items-center gap-2 text-xs font-bold text-blue-100/70">
									<PackageCheck aria-hidden="true" className="size-4" />
									권장 문의 시점
								</dt>
								<dd className="mt-3 text-xl font-black text-blue-100">{preparationGuide.recommendedLeadTime}</dd>
							</div>
							<div className="rounded-2xl border border-white/10 bg-white/8 p-5">
								<dt className="flex items-center gap-2 text-xs font-bold text-white/60">
									<Clock3 aria-hidden="true" className="size-4" />
									현장 세팅 시작
								</dt>
								<dd className="mt-3 text-xl font-black">행사 {preparationGuide.setupTime}</dd>
							</div>
						</dl>
					</div>

					<div className="px-6 py-7 sm:px-8 sm:py-8">
						<h3 className="text-base font-black text-primary">행사 준비 타임라인</h3>
						<ol className="mt-5 grid gap-3 lg:grid-cols-3">
							<li className="relative rounded-2xl bg-[#F3F6FF] p-5">
								<div className="flex items-center gap-3">
									<span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-black text-white">01</span>
									<div>
										<p className="font-black text-primary">일정 문의</p>
										<p className="mt-0.5 text-xs font-bold text-primary/55">행사 {preparationGuide.recommendedLeadTime} 권장</p>
									</div>
								</div>
								<p className="mt-4 text-sm leading-6 text-slate-600">원하는 일정과 장소, 예상 인원을 알려주시면 물량과 운영 가능 여부를 먼저 확인합니다.</p>
							</li>

							<li className="relative rounded-2xl bg-slate-50 p-5">
								<div className="flex items-center gap-3">
									<span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-black text-white">02</span>
									<div>
										<p className="font-black text-primary">메뉴·수량 확정</p>
										<p className="mt-0.5 text-xs font-bold text-primary/55">행사 3영업일 전까지</p>
									</div>
								</div>
								<p className="mt-4 text-sm leading-6 text-slate-600">최종 메뉴와 수량을 확정하고 필요한 제품, 소모품과 현장 운영 준비를 시작합니다.</p>
							</li>

							<li className="relative rounded-2xl bg-slate-50 p-5">
								<div className="flex items-center gap-3">
									<span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-black text-white">03</span>
									<div>
										<p className="font-black text-primary">현장 세팅</p>
										<p className="mt-0.5 text-xs font-bold text-primary/55">행사 {preparationGuide.setupTime} 시작</p>
									</div>
								</div>
								<p className="mt-4 text-sm leading-6 text-slate-600">현장 동선과 제공 방식에 맞춰 장비와 메뉴를 세팅하고 행사 시작 전 준비를 마칩니다.</p>
							</li>
						</ol>

						<div className="mt-5 flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-950">
							<AlertCircle aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-amber-600" />
							<div className="text-sm leading-6">
								<p className="font-black">준비 기간은 평균적인 예상 안내입니다.</p>
								<p className="mt-1 text-amber-900/75">
									대규모 행사, 특수 메뉴, 커피차는 최소 2주 전 문의를 권장합니다. 주말·공휴일·연말 성수기 또는 최소 기간 내 요청은 재고와 일정 확인 후 가능 여부를 안내해 드립니다.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</ScreenSection>
	);
}
