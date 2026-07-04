import { ChevronDown } from "lucide-react";
import { ScreenSection } from "@/share/screen-section";
import { cateringFaqs } from "./data";

export function CateringFAQ() {
	return (
		<section className="bg-[#F8F9FC] py-20 sm:py-24" aria-labelledby="catering-faq-heading">
			<ScreenSection>
				<div className="mx-auto max-w-3xl text-center">
					<p className="text-sm font-bold uppercase tracking-[0.16em] text-primary/55">FAQ</p>
					<h2 id="catering-faq-heading" className="mt-4 text-3xl font-bold text-primary sm:text-4xl">
						자주 묻는 질문
					</h2>
				</div>

				<div className="mx-auto mt-10 grid max-w-4xl gap-3">
					{cateringFaqs.map((item) => (
						<details key={item.question} className="group rounded-lg border border-primary/10 bg-white p-5 shadow-sm">
							<summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-bold text-primary">
								<span>{item.question}</span>
								<ChevronDown aria-hidden="true" className="size-5 shrink-0 transition group-open:rotate-180" />
							</summary>
							<p className="mt-4 text-sm leading-7 text-slate-600">{item.answer}</p>
						</details>
					))}
				</div>
			</ScreenSection>
		</section>
	);
}
