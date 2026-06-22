import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/share/button";
import { ScreenSection } from "@/share/screen-section";
import { pricePlans } from "./data";

export function Pricing() {
	return (
		<section className="bg-white py-20 sm:py-28" aria-labelledby="pricing-heading">
			<ScreenSection>
				<header className="mx-auto max-w-3xl text-center">
					<p className="text-sm font-black tracking-[0.16em] text-[#E96106]">BUDGET GUIDE</p>
					<h2 id="pricing-heading" className="mt-4 text-3xl font-black tracking-[-0.03em] text-slate-900 sm:text-4xl">우리 팀에 맞는 월 예산 가이드</h2>
					<p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">인원별 추천 시작 금액이며 실제 품목, 수량, 설비와 배송 조건에 따라 최종 견적이 달라집니다.</p>
				</header>

				<div className="mt-12 grid gap-5 lg:grid-cols-3">
					{pricePlans.map((plan, index) => (
						<article key={plan.id} className={`relative rounded-3xl border p-6 sm:p-7 ${index === 1 ? "border-primary bg-[#F3F6FF] shadow-xl shadow-primary/10" : "border-slate-200 bg-white shadow-sm"}`}>
							{index === 1 ? <span className="absolute right-5 top-5 rounded-full bg-primary px-3 py-1 text-[11px] font-black text-white">RECOMMENDED</span> : null}
							<p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">{plan.name}</p>
							<p className="mt-5 text-sm font-black text-[#1C5DBE]">{plan.people}</p>
							<h3 className="mt-1 text-3xl font-black tracking-tight text-slate-900">{plan.monthlyBudget}</h3>
							<p className="mt-3 text-sm leading-6 text-slate-600">{plan.description}</p>
							<p className="mt-6 inline-flex rounded-full bg-slate-100 px-3 py-1.5 text-xs font-black text-slate-700">{plan.delivery}</p>
							<ul className="mt-6 space-y-3">
								{plan.features.map((feature) => <li key={feature} className="flex gap-2 text-sm text-slate-600"><Check className="mt-0.5 size-4 shrink-0 text-[#1C5DBE]" aria-hidden="true" />{feature}</li>)}
							</ul>
							<Button.Link href="#consult" variant={index === 1 ? "primary" : "ghost"} icon={ArrowRight} iconPosition="right" className="mt-8 w-full">이 구성으로 상담하기</Button.Link>
						</article>
					))}
				</div>
			</ScreenSection>
		</section>
	);
}
