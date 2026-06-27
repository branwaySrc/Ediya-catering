import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ScreenSection } from "@/share/screen-section";
import { TitleBadge } from "@/share/title-badge";
import { cateringProcessSteps } from "./data";

export function CateringProcess() {
	return (
		<section className="bg-[#F8F9FC] py-16 sm:py-20" aria-labelledby="catering-process-heading">
			<ScreenSection>
				<div className="mx-auto max-w-3xl text-center">
					<TitleBadge className="justify-center">
						<TitleBadge.Icon backgroundColor={["#4A8DF1", "#1C5DBE"]} icon={ArrowRight} className="text-white shadow-none" />
						<TitleBadge.Title>진행 프로세스</TitleBadge.Title>
						<TitleBadge.Badge className="border-[#1C5DBE] text-[#1C5DBE]">PROCESS</TitleBadge.Badge>
					</TitleBadge>
					<p className="hidden text-sm font-black uppercase tracking-[0.16em] text-primary/55">Process</p>
					<h2 id="catering-process-heading" className="mt-4 text-3xl font-black text-primary sm:text-4xl">
						복잡한 준비 과정은 줄이고 필요한 구성만 빠르게 제안드립니다
					</h2>
				</div>

				<ol className="mt-10 grid gap-4 md:grid-cols-5">
					{cateringProcessSteps.map((step, index) => (
						<li key={step} className="relative rounded-2xl border border-primary/10 bg-white p-5 shadow-sm">
							<div className="flex items-center justify-between gap-3">
								<span className="text-xs font-black uppercase tracking-[0.14em] text-primary/45">Step {String(index + 1).padStart(2, "0")}</span>
								{index === cateringProcessSteps.length - 1 ? (
									<CheckCircle2 aria-hidden="true" className="size-4 text-[#1C5DBE]" />
								) : (
									<ArrowRight aria-hidden="true" className="hidden size-4 text-slate-300 md:block" />
								)}
							</div>
							<h3 className="mt-6 text-base font-black leading-6 text-primary">{step}</h3>
						</li>
					))}
				</ol>
			</ScreenSection>
		</section>
	);
}
