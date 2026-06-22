import { ArrowDown, ArrowRight, Donut } from "lucide-react";
import { Button } from "@/share/button";
import { ScreenSection } from "@/share/screen-section";
import { TitleBadge } from "@/share/title-badge";

export function Hero() {
	return (
		<section className="relative isolate min-h-[42rem] overflow-hidden bg-[#101D4B] text-white sm:min-h-[48rem]">
		<video autoPlay muted loop playsInline className="absolute inset-0 -z-20 size-full object-cover" aria-hidden="true">
			<source src="/videos/snackbarV02.mp4" type="video/mp4" />
		</video>
		<div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#101D4B]/95 via-[#101D4B]/75 to-[#101D4B]/25" />
		<div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#101D4B]/70 via-transparent to-[#101D4B]/30" />

		<ScreenSection className="flex min-h-[42rem] items-center py-20 sm:min-h-[48rem] sm:py-28">
			<div className="max-w-3xl">
				<TitleBadge className="pb-5">
					<TitleBadge.Icon backgroundColor={["#FFA600", "#E96106"]} icon={Donut} className="text-white shadow-none" />
					<TitleBadge.Title className="text-white">EDIYA OFFICE STATION</TitleBadge.Title>
					<TitleBadge.Badge className="border-white/30 bg-white/10 text-white">NEW</TitleBadge.Badge>
				</TitleBadge>
				<h1 className="text-4xl font-black leading-[1.15] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
					일하는 공간에 맞춘
					<br />세 가지 <span className="text-[#FBB34B]">이디야 스테이션</span>
				</h1>
				<p className="mt-6 max-w-2xl text-base leading-8 text-blue-50/85 sm:text-lg">
					음료부터 디저트, 캡슐커피까지. 이용 인원과 공간, 예산을 살펴 사무실에 필요한 구성을 함께 설계합니다.
				</p>
				<div className="mt-9 flex flex-col gap-3 sm:flex-row">
					<Button.Link href="#consult" variant="none" icon={ArrowRight} iconPosition="right" className="h-12 bg-white px-6 text-[#172966] hover:bg-blue-50">
						맞춤 구성 상담
					</Button.Link>
					<Button.Link href="#stations" variant="outlined" icon={ArrowDown} iconPosition="right" className="h-12 px-6">
						솔루션 살펴보기
					</Button.Link>
				</div>
			</div>
		</ScreenSection>
	</section>
	);
}
