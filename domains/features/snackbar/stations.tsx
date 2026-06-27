import Image from "next/image";
import { Check, LayoutPanelTop } from "lucide-react";
import { ScreenSection } from "@/share/screen-section";
import { TitleBadge } from "@/share/title-badge";
import { stations } from "./data";

export function Stations() {
	return (
		<section id="stations" className="scroll-mt-24 bg-white py-20 sm:py-28">
			<ScreenSection>
				<header className="mx-auto max-w-3xl text-center">
					<TitleBadge className="justify-center">
						<TitleBadge.Icon backgroundColor={["#FFA600", "#E96106"]} icon={LayoutPanelTop} className="text-white shadow-none" />
						<TitleBadge.Title>스테이션 구성</TitleBadge.Title>
						<TitleBadge.Badge className="border-[#E96106] text-[#E96106]">3 OPTIONS</TitleBadge.Badge>
					</TitleBadge>
					<h2 className="mt-4 text-3xl font-black tracking-[-0.03em] text-slate-900 sm:text-4xl">필요한 방식으로 골라 구성하세요</h2>
					<p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">설비의 종류와 크기, 상품 구성은 현장 환경을 확인한 뒤 상담을 통해 확정합니다.</p>
				</header>

				<div className="mt-12 grid gap-6 lg:grid-cols-3">
					{stations.map((station) => {
						const Icon = station.icon;

						return (
							<article key={station.id} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
								<div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
									<Image src={station.image} alt={station.imageAlt} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-contain p-6 transition duration-500 group-hover:scale-105" />
									<span className="absolute left-5 top-5 inline-flex size-11 items-center justify-center rounded-xl text-white shadow-lg" style={{ backgroundColor: station.accent }}>
										<Icon className="size-5" aria-hidden="true" />
									</span>
								</div>
								<div className="p-6 sm:p-7">
									<p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">{station.nameEn}</p>
									<h3 className="mt-2 text-2xl font-black text-slate-900">{station.name}</h3>
									<p className="mt-4 min-h-20 text-sm leading-7 text-slate-600">{station.description}</p>
									<dl className="mt-6 space-y-4 border-t border-slate-100 pt-6">
										{station.features.map((feature) => (
											<div key={feature.label} className="grid grid-cols-[5rem_1fr] gap-3 text-sm">
												<dt className="font-black text-slate-900">{feature.label}</dt>
												<dd className="flex flex-wrap gap-2 text-slate-600">
													{feature.values.map((value) => (
														<span key={value} className="inline-flex items-center gap-1.5">
															<Check className="size-3.5 text-[#1C5DBE]" aria-hidden="true" />
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
			</ScreenSection>
		</section>
	);
}
