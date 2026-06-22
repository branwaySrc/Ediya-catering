import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/share/button";
import { ScreenSection } from "@/share/screen-section";

export function ContactCta() {
	return (
		<section id="consult" className="scroll-mt-24 bg-white pb-20 sm:pb-28">
			<ScreenSection>
				<div className="relative overflow-hidden rounded-[2rem] bg-[#172966] px-6 py-12 text-white sm:px-12 sm:py-16 lg:px-16">
					<div className="absolute -right-24 -top-28 size-80 rounded-full border-[3rem] border-white/5" />
					<div className="relative grid gap-9 lg:grid-cols-[1fr_auto] lg:items-end">
						<div>
							<p className="text-sm font-black tracking-[0.16em] text-blue-200">START YOUR STATION</p>
							<h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.03em] sm:text-4xl">공간과 인원만 알려주시면<br className="hidden sm:block" /> 알맞은 구성을 함께 찾겠습니다.</h2>
							<p className="mt-5 max-w-2xl text-sm leading-7 text-blue-100/75 sm:text-base">아직 정해진 구성이 없어도 괜찮습니다. 필요한 상품과 설치 환경을 상담하며 구체화해 보세요.</p>
						</div>
						<div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
							<Button.Link href="tel:01045147173" variant="none" icon={Phone} className="h-12 bg-white px-6 text-[#172966] hover:bg-blue-50">전화 상담하기</Button.Link>
							<Button.Link href="mailto:contact@ediya-catering.kr" variant="outlined" icon={ArrowRight} iconPosition="right" className="h-12 px-6">이메일 문의하기</Button.Link>
						</div>
					</div>
				</div>
			</ScreenSection>
		</section>
	);
}
