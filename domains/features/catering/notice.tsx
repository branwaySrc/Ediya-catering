import { AlertCircle } from "lucide-react";
import { ScreenSection } from "@/share/screen-section";
import { cateringNoticeItems } from "./data";

export function CateringNotice() {
	return (
		<section className="bg-white py-16 sm:py-20" aria-labelledby="catering-notice-heading">
			<ScreenSection>
				<div className="grid gap-8 rounded-3xl border border-amber-200 bg-amber-50 p-6 text-amber-950 sm:p-8 lg:grid-cols-[0.72fr_1.28fr]">
					<div>
						<span className="inline-flex size-12 items-center justify-center rounded-2xl bg-white text-amber-600">
							<AlertCircle aria-hidden="true" className="size-6" />
						</span>
						<h2 id="catering-notice-heading" className="mt-5 text-2xl font-black sm:text-3xl">
							케이터링 상담 전 확인해주세요
						</h2>
						<p className="mt-4 text-sm leading-7 text-amber-900/75">
							케이터링 패키지는 기본 구성 기준으로 안내하며, 최종 구성과 금액은 메뉴, 수량, 일정, 매장 상황에 따라 달라질 수 있습니다.
						</p>
					</div>

					<ul className="grid gap-3 sm:grid-cols-2">
						{cateringNoticeItems.map((item) => (
							<li key={item} className="rounded-2xl bg-white/70 px-4 py-3 text-sm font-bold leading-6">
								{item}
							</li>
						))}
					</ul>
				</div>
			</ScreenSection>
		</section>
	);
}
