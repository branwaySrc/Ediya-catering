import { ArrowRight, SlidersHorizontal } from "lucide-react";
import { Button } from "@/share/button";
import { ScreenSection } from "@/share/screen-section";
import { customCateringCases } from "./data";

export function CustomCateringSection() {
	return (
		<section className="bg-white py-16 sm:py-20" aria-labelledby="custom-catering-heading">
			<ScreenSection>
				<div className="grid gap-8 rounded-3xl bg-primary p-6 text-white shadow-2xl shadow-primary/20 sm:p-8 lg:grid-cols-[1fr_0.9fr] lg:p-10">
					<div>
						<span className="inline-flex size-12 items-center justify-center rounded-2xl bg-white/10">
							<SlidersHorizontal aria-hidden="true" className="size-6" />
						</span>
						<h2 id="custom-catering-heading" className="mt-6 text-3xl font-black leading-tight sm:text-4xl">
							정해진 패키지로 어렵다면,
							<br />
							커스텀 케이터링으로 상담받아보세요.
						</h2>
						<p className="mt-5 max-w-2xl text-sm leading-7 text-blue-100/80 sm:text-base">
							행사마다 필요한 구성은 다릅니다. 참석자 연령대, 행사 시간, 예산, 제공 장소에 따라 커피, 음료, 스낵, 디저트를 조합해 제안드립니다.
						</p>
						<Button.Link href="/contact?service=catering&type=custom" variant="outlined" icon={ArrowRight} iconPosition="right" className="mt-8 border-white bg-white text-primary hover:bg-blue-50">
							커스텀 케이터링 문의하기
						</Button.Link>
					</div>

					<div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
						{customCateringCases.map((item) => (
							<div key={item} className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-sm font-black">
								{item}
							</div>
						))}
					</div>
				</div>
			</ScreenSection>
		</section>
	);
}
