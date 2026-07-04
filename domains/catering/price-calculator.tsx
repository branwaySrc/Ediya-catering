"use client";

import { ArrowRight, Calculator, Check, Info } from "lucide-react";
import { Button } from "@/share/button";
import { ScreenSection } from "@/share/screen-section";
import { TitleBadge } from "@/share/title-badge";
import { estimatePackages, getEstimatePackage, minimumCateringHeadcount } from "./data";
import { useCateringEstimateStore } from "./store";

const priceFormatter = new Intl.NumberFormat("ko-KR");

export function CateringPriceCalculator() {
	const selectedPackageId = useCateringEstimateStore((state) => state.selectedEstimatePackageId);
	const headcount = useCateringEstimateStore((state) => state.headcount);
	const selectPackage = useCateringEstimateStore((state) => state.selectEstimatePackage);
	const setHeadcount = useCateringEstimateStore((state) => state.setHeadcount);

	const selectedPackage = getEstimatePackage(selectedPackageId);
	const totalPrice = selectedPackage.pricePerPerson * headcount;
	const isBelowMinimum = headcount < minimumCateringHeadcount;

	return (
		<section id="estimate" className="scroll-mt-24 bg-white py-20 sm:py-24" aria-labelledby="catering-calculator-heading">
			<ScreenSection>
				<div className="grid gap-8">
					<div>
						<TitleBadge>
							<TitleBadge.Icon backgroundColor={["#4A8DF1", "#1C5DBE"]} icon={Calculator} className="text-white shadow-none" />
							<TitleBadge.Title>예상 견적 계산기</TitleBadge.Title>
							<TitleBadge.Badge className="border-[#1C5DBE] text-[#1C5DBE]">ESTIMATE</TitleBadge.Badge>
						</TitleBadge>
						<p className="hidden text-sm font-bold uppercase tracking-[0.16em] text-primary/55">Estimate Calculator</p>
						<h2 id="catering-calculator-heading" className="mt-4 text-3xl font-bold leading-tight text-primary sm:text-4xl">
							예상 인원으로
							<br />
							빠르게 견적을 확인하세요
						</h2>
						<p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
							패키지와 인원수를 선택하면 기본 구성 기준의 예상 금액을 계산합니다. 최종 금액은 메뉴, 수량, 일정, 제공 방식에 따라 달라질 수 있습니다.
						</p>
					</div>

					<div className="rounded-lg border border-primary/10 bg-[#F8F9FC] p-5 shadow-xl shadow-primary/5 sm:p-6">
						<div className="grid gap-3" role="group" aria-label="케이터링 패키지 선택">
							{estimatePackages.map((item) => {
								const isSelected = item.id === selectedPackageId;

								return (
									<button
										key={item.id}
										type="button"
										onClick={() => selectPackage(item.id)}
										aria-pressed={isSelected}
										className={`relative rounded-lg border p-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
											isSelected ? "border-primary bg-primary text-white shadow-lg shadow-primary/20" : "border-primary/10 bg-white text-primary hover:border-primary/30"
										}`}
									>
										<p className={`text-xs font-bold uppercase tracking-[0.12em] ${isSelected ? "text-white/60" : "text-primary/45"}`}>{item.name}</p>
										<h3 className="mt-2 text-base font-bold">{item.koreanName}</h3>
										<p className={`mt-3 text-sm font-bold ${isSelected ? "text-white" : "text-primary"}`}>1인 {priceFormatter.format(item.pricePerPerson)}원부터</p>
										{isSelected ? <Check aria-hidden="true" className="absolute right-4 top-4 size-4" /> : null}
									</button>
								);
							})}
						</div>

						<div className="mt-6 grid gap-5">
							<label className="block rounded-lg border border-primary/10 bg-white p-5">
								<span className="text-sm font-bold text-primary">예상 인원</span>
								<div className="mt-4 flex items-center gap-3">
									<input
										type="number"
										min={1}
										inputMode="numeric"
										value={headcount}
										onChange={(event) => setHeadcount(Number.parseInt(event.target.value, 10))}
										className="h-14 w-full rounded-md border border-slate-200 bg-white px-4 text-2xl font-bold text-primary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
										aria-describedby="headcount-help"
									/>
									<span className="shrink-0 text-lg font-bold text-primary">명</span>
								</div>
								<p id="headcount-help" className="mt-3 text-xs leading-5 text-slate-500">
									기본값은 50명이며, 최소 1명 이상 입력할 수 있습니다.
								</p>
							</label>

							<div className="rounded-lg bg-primary p-6 text-white" aria-live="polite">
								<div className="flex items-center justify-between gap-4">
									<div>
										<p className="text-xs font-bold uppercase tracking-[0.14em] text-white/55">{selectedPackage.name}</p>
										<h3 className="mt-2 text-xl font-bold">{selectedPackage.koreanName} 기준</h3>
									</div>
									<span className="inline-flex size-11 items-center justify-center rounded-md bg-white/10">
										<Calculator aria-hidden="true" className="size-5" />
									</span>
								</div>
								<p className="mt-7 text-sm font-bold text-blue-100/70">{headcount}명 예상 금액</p>
								<p className="mt-1 text-4xl font-bold tracking-tight">{priceFormatter.format(totalPrice)}원</p>
								<p className="mt-5 text-sm leading-6 text-blue-100/75">
									표기된 금액은 기본 구성 기준의 예상 가격입니다. 최종 금액은 상담 후 확정됩니다.
								</p>
							</div>
						</div>

						{isBelowMinimum ? (
							<div className="mt-5 flex gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
								<Info aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-amber-600" />
								<p>20명 미만 주문은 일반 단체 주문으로 상담해드립니다.</p>
							</div>
						) : null}

						<div className="mt-6 flex flex-col gap-3">
							<Button.Link href={`/contact?service=catering&package=${selectedPackage.id}`} variant="primary" icon={ArrowRight} iconPosition="right">
								이 패키지 문의하기
							</Button.Link>
							<Button.Link href="/contact?service=catering&type=custom" variant="ghost">
								커스텀 상담하기
							</Button.Link>
						</div>
					</div>
				</div>
			</ScreenSection>
		</section>
	);
}
