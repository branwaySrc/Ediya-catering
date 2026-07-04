import { ArrowRight, Phone, Sparkles } from "lucide-react";
import { Button } from "@/share/button";
import { ScreenSection } from "@/share/screen-section";
import { TitleBadge } from "@/share/title-badge";

export function ContactCta() {
	return (
		<section id="consult" className="scroll-mt-24 bg-white py-20 sm:py-28">
			<ScreenSection>
				<div className="relative overflow-hidden rounded-lg bg-[#172966] px-6 py-12 text-white sm:px-12 sm:py-16 lg:px-16">
					<div className="absolute -right-24 -top-28 size-80 rounded-full border-[3rem] border-white/5" />
					<div className="relative grid gap-9 lg:grid-cols-[1fr_auto] lg:items-end">
						<div>
							<TitleBadge className="pb-0">
								<TitleBadge.Icon backgroundColor={["#4A8DF1", "#1C5DBE"]} icon={Sparkles} className="text-white shadow-none" />
								<TitleBadge.Title className="text-white">스낵바 상담 시작</TitleBadge.Title>
								<TitleBadge.Badge className="border-white/25 bg-white/10 text-white">START</TitleBadge.Badge>
							</TitleBadge>
							<h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl">공간과 인원만 알려주시면<br className="hidden sm:block" /> 알맞은 구성을 함께 찾겠습니다.</h2>
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
