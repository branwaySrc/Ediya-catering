import { BarChart3, CalendarSync, CheckCircle2, PackageCheck, RefreshCw, Truck, type LucideIcon } from "lucide-react";

import { Button } from "@/share/button";
import { routes } from "@/share/routes";
import { ScreenSection } from "@/share/screen-section";
import { careBudgetTiers, careManagementSteps, type CareBudgetTier } from "./data";

const careTierToneById: Record<CareBudgetTier["id"], { bg: string; border: string; text: string; ring: string }> = {
	starter: { bg: "bg-blue-50", border: "border-blue-100", text: "text-[#1C5DBE]", ring: "ring-blue-100" },
	consult: { bg: "bg-slate-50", border: "border-slate-200", text: "text-slate-600", ring: "ring-slate-200" },
	standard: { bg: "bg-orange-50", border: "border-orange-100", text: "text-[#E96106]", ring: "ring-orange-100" },
	plus: { bg: "bg-emerald-50", border: "border-emerald-100", text: "text-[#009249]", ring: "ring-emerald-100" },
};

const careTierIconById: Record<CareBudgetTier["id"], LucideIcon> = {
	starter: Truck,
	consult: CheckCircle2,
	standard: PackageCheck,
	plus: RefreshCw,
};

const managementIconById: Record<(typeof careManagementSteps)[number]["id"], LucideIcon> = {
	visit: CalendarSync,
	stock: PackageCheck,
	velocity: BarChart3,
	refill: Truck,
};

export function Delivery() {
	return (
		<section id="care" className="scroll-mt-24 bg-[#F3F6FB] py-16 sm:py-24" aria-labelledby="delivery-heading">
			<ScreenSection>
				<header className="max-w-3xl">
					<p className="text-sm font-bold tracking-[0.16em] text-[#1C5DBE]">DELIVERY & CARE</p>
					<h2 id="delivery-heading" className="mt-4 break-keep text-3xl font-bold leading-tight tracking-[-0.03em] text-slate-900 sm:text-4xl">
						월 예산에 따라
						<br className="hidden sm:block" />
						배송과 케어 방식이 달라집니다.
					</h2>
					<p className="mt-5 break-keep text-sm leading-7 text-slate-600 sm:text-base">
						스낵바 운영은 상품을 보내는 것에서 끝나지 않습니다. 일정 예산 이상부터는 직접 방문해 정리하고, 이용량이 커지면 소진 속도를 기준으로 계속 케어합니다.
					</p>
				</header>

				<div className="mt-10 grid gap-4 lg:grid-cols-4">
					{careBudgetTiers.map(tier => {
						const tone = careTierToneById[tier.id];
						const Icon = careTierIconById[tier.id];

						return (
							<article key={tier.id} className={`rounded-lg border bg-white p-5 shadow-sm ${tone.border}`}>
								<div className="flex items-start justify-between gap-4">
									<span className={`inline-flex size-11 items-center justify-center rounded-lg ${tone.bg} ${tone.text} ring-4 ${tone.ring}`}>
										<Icon className="size-5" aria-hidden="true" />
									</span>
									<span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${tone.bg} ${tone.text}`}>{tier.badge}</span>
								</div>
								<p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-slate-400">{tier.budget}</p>
								<h3 className="mt-2 break-keep text-xl font-bold text-slate-950">{tier.title}</h3>
								<p className="mt-3 break-keep text-sm leading-6 text-slate-600">{tier.detail}</p>
							</article>
						);
					})}
				</div>

				<div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
					<article className="rounded-lg border border-primary/10 bg-white p-6 shadow-sm sm:p-7">
						<p className="text-xs font-bold tracking-[0.16em] text-[#E96106]">DIRECT MANAGEMENT</p>
						<h3 className="mt-3 break-keep text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
							직접 배송은
							<br />
							채우고 끝나지 않습니다.
						</h3>
						<p className="mt-5 break-keep text-sm leading-7 text-slate-600">
							월 30만원 이상부터는 무료 직접 배송과 정기 관리가 함께 제공됩니다. 방문 시 제품을 전달하고, 남은 수량과 진열 상태를 확인해 부족한 품목을 정리합니다.
						</p>
						<p className="mt-4 break-keep text-sm leading-7 text-slate-600">
							월 50만원 이상처럼 이용량이 큰 구성은 재고 소진 속도를 기준으로 다음 방문과 품목 구성을 계속 조정합니다.
						</p>
						<Button.Link href={routes.snackbar.consult} variant="primary" className="mt-6 w-full sm:w-auto">
							우리 사무실 조건 상담하기
						</Button.Link>
					</article>

					<ol className="grid gap-4 sm:grid-cols-2">
						{careManagementSteps.map(({ id, title, description }, index) => {
							const Icon = managementIconById[id];

							return (
								<li key={id} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
									<div className="flex items-center justify-between gap-4">
										<span className="inline-flex size-10 items-center justify-center rounded-md bg-blue-50 text-[#1C5DBE]">
											<Icon className="size-5" aria-hidden="true" />
										</span>
										<span className="text-2xl font-bold text-slate-100">{String(index + 1).padStart(2, "0")}</span>
									</div>
									<h4 className="mt-4 font-bold text-slate-900">{title}</h4>
									<p className="mt-2 break-keep text-sm leading-6 text-slate-600">{description}</p>
								</li>
							);
						})}
					</ol>
				</div>

				<p className="mt-8 break-keep rounded-lg border border-slate-200 bg-white px-5 py-4 text-sm leading-7 text-slate-600">
					무료 직접 배송과 방문 관리 조건은 지역, 설치 공간, 품목 구성에 따라 상담 후 최종 확정됩니다.
				</p>
			</ScreenSection>
		</section>
	);
}
