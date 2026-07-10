import { ChevronDown, CircleHelp } from "lucide-react";
import { ScreenSection } from "@/share/screen-section";
import { TitleBadge } from "@/share/title-badge";
import { cateringFaqs } from "./data";

export function CateringFAQ() {
	return (
		<section className="bg-white py-10 sm:py-15" aria-labelledby="catering-faq-heading">
			<ScreenSection>
				<div className="grid gap-10">
					<header>
						<TitleBadge>
							<TitleBadge.Icon backgroundColor={["#4A8DF1", "#1C5DBE"]} icon={CircleHelp} className="text-white shadow-none" />
							<TitleBadge.Title>공통 FAQ</TitleBadge.Title>
							<TitleBadge.Badge className="border-[#1C5DBE] text-[#1C5DBE]">FAQ</TitleBadge.Badge>
						</TitleBadge>
						<h2 id="catering-faq-heading" className="mt-4 text-3xl font-bold tracking-[-0.03em] text-slate-900 sm:text-4xl">
							자주 묻는 질문을 모아보았습니다.
						</h2>
						<p className="mt-5 text-base text-slate-600">혹시, 찾는 답변이 없으신가요? 전화 상담을 통해 문의바랍니다.</p>
					</header>
					<div className="divide-y divide-slate-200 border-y border-slate-200">
						{cateringFaqs.map(item => (
							<details key={item.question} className="group py-1">
								<summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 font-bold text-slate-900 marker:content-none">
									{item.question}
									<ChevronDown className="size-5 shrink-0 text-slate-400 transition group-open:rotate-180" aria-hidden="true" />
								</summary>
								<p className="pb-6 pr-9 text-base leading-7 text-primary">🙋 {item.answer}</p>
							</details>
						))}
					</div>
				</div>
			</ScreenSection>
		</section>
	);
}
