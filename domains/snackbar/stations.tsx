import Image from "next/image";
import { Check } from "lucide-react";

import { ScreenSection } from "@/share/screen-section";
import { stations } from "./data";

export function Stations() {
	return (
		<section id="stations" className="scroll-mt-24 bg-[#F8F9FC] py-16">
			<ScreenSection>
				<header className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end">
					<h2 className="mt-4 max-w-2xl break-keep text-2xl font-bold leading-tight tracking-[-0.02em] text-slate-900">
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
			</ScreenSection>
		</section>
	);
}
