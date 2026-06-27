import { ArrowRight, Headphones } from "lucide-react";
import { Button } from "@/share/button";
import { ScreenSection } from "@/share/screen-section";

export function CateringFinalCTA() {
	return (
		<section className="bg-white py-16 sm:py-20">
			<ScreenSection>
				<div className="rounded-3xl bg-[#132760] px-6 py-12 text-center text-white shadow-2xl shadow-primary/20 sm:px-10 sm:py-16">
					<span className="mx-auto inline-flex size-12 items-center justify-center rounded-2xl bg-white/10">
						<Headphones aria-hidden="true" className="size-6" />
					</span>
					<h2 className="mx-auto mt-6 max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
						행사 인원과 예산을 알려주시면 가장 적합한 케이터링 구성을 제안드립니다.
					</h2>
					<p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-blue-100/75 sm:text-base">
						정해진 패키지부터 커스텀 구성까지, 필요한 상황에 맞춰 상담받아보세요.
					</p>
					<Button.Link href="/contact?service=catering" variant="outlined" icon={ArrowRight} iconPosition="right" className="mt-8 border-white bg-white text-primary hover:bg-blue-50">
						케이터링 상담하기
					</Button.Link>
				</div>
			</ScreenSection>
		</section>
	);
}
