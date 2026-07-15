import Image from "next/image";
import { ArrowRight, Check, ClipboardCheck, PackageCheck, RefreshCw, Truck, type LucideIcon } from "lucide-react";

import { Button } from "@/share/button";
import { routes } from "@/share/routes";
import { ScreenSection } from "@/share/screen-section";
import { careBudgetTiers, stations, type CareBudgetTier } from "./data";

const careTierToneById: Record<CareBudgetTier["id"], { bg: string; border: string; text: string }> = {
	starter: { bg: "bg-blue-50", border: "border-blue-100", text: "text-[#1C5DBE]" },
	consult: { bg: "bg-slate-50", border: "border-slate-200", text: "text-slate-600" },
	standard: { bg: "bg-orange-50", border: "border-orange-100", text: "text-[#E96106]" },
	plus: { bg: "bg-emerald-50", border: "border-emerald-100", text: "text-[#009249]" },
};

const careTierIconById: Record<CareBudgetTier["id"], LucideIcon> = {
	starter: Truck,
	consult: ClipboardCheck,
	standard: PackageCheck,
	plus: RefreshCw,
};

export function Stations() {
	return (
		<section id="stations" className="scroll-mt-24 bg-[#F8F9FC] py-16">
			<ScreenSection>
				<header className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end">
					<h2 className="mt-4 max-w-2xl break-keep text-2xl font-bold tracking-[-0.02em] text-slate-900">
						공간과 이용 패턴에 맞춰 <br className="sm:hidden" />
						스테이션을 선택하세요.
					</h2>
				</header>

				<div className="-mx-4 mt-10 overflow-x-auto px-4 pb-3 sm:mx-0 sm:px-0 lg:overflow-visible lg:pb-0">
					<div className="flex snap-x snap-mandatory gap-4 after:block after:w-2 after:shrink-0 after:content-[''] lg:grid lg:grid-cols-3 lg:gap-5 lg:after:hidden">
						{stations.map(station => {
							const Icon = station.icon;

							return (
								<article
									key={station.id}
									className="group flex min-h-[34rem] basis-[86%] shrink-0 snap-center flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-300 hover:border-slate-300 hover:shadow-xl sm:basis-[58%] lg:min-h-0 lg:basis-auto"
								>
									<div className="relative aspect-[5/4] overflow-hidden bg-white">
										<div className="absolute inset-x-4 bottom-0 top-4 rounded-lg bg-[#F8F9FC]" />
										<Image
											src={station.image}
											alt={station.imageAlt}
											fill
											sizes="(min-width: 1024px) 33vw, 86vw"
											className="object-contain p-7 transition duration-500 group-hover:scale-[1.03] sm:p-8"
										/>
										<span
											className="absolute left-5 top-5 inline-flex size-10 items-center justify-center rounded-md text-white shadow-lg shadow-slate-950/15"
											style={{ backgroundColor: station.accent }}
										>
											<Icon className="size-5" aria-hidden="true" />
										</span>
										<span
											className="absolute bottom-4 right-5 rounded-md bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] shadow-sm"
											style={{ color: station.accent }}
										>
											{station.nameEn}
										</span>
									</div>

									<div className="flex flex-1 flex-col p-5 sm:p-6">
										<h3 className="break-keep text-xl font-bold text-slate-900 sm:text-2xl">{station.name}</h3>
										<p className="mt-3 break-keep text-sm text-slate-600">{station.description}</p>

										<dl className="mt-5 grid gap-3 border-t border-slate-100 pt-5">
											{station.features.map(feature => (
												<div key={feature.label} className="grid gap-2 text-sm">
													<dt className="font-bold text-slate-900">{feature.label}</dt>
													<dd className="flex flex-wrap gap-1.5 text-slate-600">
														{feature.values.map(value => (
															<span
																key={value}
																className="inline-flex min-h-8 items-center gap-1.5 rounded-md bg-slate-50 px-2.5 py-1 text-xs font-bold text-slate-700"
															>
																<Check className="size-3.5 shrink-0" style={{ color: station.accent }} aria-hidden="true" />
																{value}
															</span>
														))}
													</dd>
												</div>
											))}
										</dl>
									</div>
								</article>
							);
						})}
					</div>
				</div>

				<div className="mt-16 border-t border-slate-200 pt-10">
					<div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
						<div>
							<p className="text-xs font-bold uppercase tracking-[0.16em] text-[#E96106]">Budget & Care</p>
							<h3 className="mt-4 break-keep text-2xl font-bold tracking-[-0.03em] text-slate-950 sm:text-3xl">
								스테이션을 고른 뒤에는
								<br className="hidden sm:block" />
								예산에 맞춰 채우는 방식을 정합니다.
							</h3>
							<p className="mt-4 max-w-3xl break-keep text-sm text-slate-600 sm:text-base">
								월 예산과 이용량에 따라 별도 배송, 무료 직접 배송, 정기 정리, 재고 소진 기반 케어까지 단계가 달라집니다.
							</p>
						</div>

						<Button.Link href={routes.snackbar.care} variant="primary" icon={ArrowRight} iconPosition="right" className="w-full sm:w-auto">
							배송/관리 기준 보기
						</Button.Link>
					</div>

					<div className="-mx-4 mt-8 overflow-x-auto px-4 pb-3 sm:mx-0 sm:px-0 lg:overflow-visible lg:pb-0">
						<div className="flex snap-x snap-mandatory gap-3 after:block after:w-2 after:shrink-0 after:content-[''] lg:grid lg:grid-cols-4 lg:after:hidden">
							{careBudgetTiers.map((tier, index) => {
								const Icon = careTierIconById[tier.id];
								const tone = careTierToneById[tier.id];

								return (
									<article key={tier.id} className={`min-h-48 basis-[78%] shrink-0 snap-center rounded-lg border bg-white p-5 shadow-sm sm:basis-[42%] lg:basis-auto ${tone.border}`}>
										<div className="flex items-start justify-between gap-4">
											<span className={`inline-flex size-11 items-center justify-center rounded-lg ${tone.bg} ${tone.text}`}>
												<Icon className="size-5" aria-hidden="true" />
											</span>
											<span className="text-2xl font-bold text-slate-100">{String(index + 1).padStart(2, "0")}</span>
										</div>
										<div className="mt-5 flex flex-wrap items-center gap-2">
											<p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">{tier.budget}</p>
											<span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${tone.bg} ${tone.text}`}>{tier.badge}</span>
										</div>
										<h4 className="mt-2 break-keep text-lg font-bold text-slate-950">{tier.title}</h4>
										<p className="mt-2 break-keep text-sm text-slate-600">{tier.summary}</p>
									</article>
								);
							})}
						</div>
					</div>
				</div>
			</ScreenSection>
		</section>
	);
}
