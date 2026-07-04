import { ChevronDown, CircleHelp } from "lucide-react";
import { ScreenSection } from "@/share/screen-section";
import { TitleBadge } from "@/share/title-badge";
import { cateringFaqs } from "./data";

export function CateringFAQ() {
	return (
		<section className="bg-white py-20 sm:py-28" aria-labelledby="catering-faq-heading">
			<ScreenSection>
				<div className="grid gap-10">
					<header>
						<TitleBadge>
							<TitleBadge.Icon backgroundColor={["#4A8DF1", "#1C5DBE"]} icon={CircleHelp} className="text-white shadow-none" />
							<TitleBadge.Title>자주 묻는 질문</TitleBadge.Title>
							<TitleBadge.Badge className="border-[#1C5DBE] text-[#1C5DBE]">FAQ</TitleBadge.Badge>
						</TitleBadge>
						<h2 id="catering-faq-heading" className="mt-4 text-3xl font-bold tracking-[-0.03em] text-slate-900 sm:text-4xl">
							상담 전에
							<br />
							많이 묻는 질문
						</h2>
						<p className="mt-5 text-sm leading-7 text-slate-600">정확한 조건은 메뉴와 수량, 일정, 제공 방식에 따라 달라질 수 있으며 상담 후 안내합니다.</p>
					</header>
					<div className="divide-y divide-slate-200 border-y border-slate-200">
						{cateringFaqs.map((item) => (
							<details key={item.question} className="group py-1">
								<summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 font-bold text-slate-900 marker:content-none">
									{item.question}
									<ChevronDown className="size-5 shrink-0 text-slate-400 transition group-open:rotate-180" aria-hidden="true" />
								</summary>
								<p className="pb-6 pr-9 text-sm leading-7 text-slate-600">{item.answer}</p>
							</details>
						))}
					</div>
				</div>
			</ScreenSection>
		</section>
	);
}
