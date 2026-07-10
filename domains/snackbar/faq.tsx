import { ChevronDown, CircleHelp } from "lucide-react";
import { ScreenSection } from "@/share/screen-section";
import { TitleBadge } from "@/share/title-badge";
import { faqs } from "./data";

export function Faq() {
	return (
		<section className="bg-white py-10 sm:py-20">
			<ScreenSection>
				<div className="grid gap-10">
					<header>
						<TitleBadge>
							<TitleBadge.Icon backgroundColor={["#4A8DF1", "#1C5DBE"]} icon={CircleHelp} className="text-white shadow-none" />
							<TitleBadge.Title>공통 FAQ</TitleBadge.Title>
							<TitleBadge.Badge className="border-[#1C5DBE] text-[#1C5DBE]">FAQ</TitleBadge.Badge>
						</TitleBadge>
						<h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-slate-900 sm:text-4xl">
							도입 전에
							<br />
							많이 묻는 질문
						</h2>
						<p className="mt-5 text-base text-slate-600">정확한 조건은 공간과 구성에 따라 달라질 수 있으며 상담 후 견적서로 안내합니다.</p>
					</header>
					<div className="divide-y divide-slate-200 border-y border-slate-200">
						{faqs.map(faq => (
							<details key={faq.question} className="group py-1">
								<summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 font-bold text-slate-900 marker:content-none">
									{faq.question}
									<ChevronDown className="size-5 shrink-0 text-slate-400 transition group-open:rotate-180" aria-hidden="true" />
								</summary>
								<p className="pb-6 pr-9 text-base text-primary">{faq.answer}</p>
							</details>
						))}
					</div>
				</div>
			</ScreenSection>
		</section>
	);
}
