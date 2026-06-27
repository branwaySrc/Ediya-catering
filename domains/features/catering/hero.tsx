import Image from "next/image";
import { ArrowRight, Coffee, MessageCircle } from "lucide-react";
import { Button } from "@/share/button";
import { ScreenSection } from "@/share/screen-section";
import { TitleBadge } from "@/share/title-badge";

const heroStats = [
	["기본", "1인 가격"],
	["인원", "자동 계산"],
	["상담", "최종 확정"],
];

export function CateringHero() {
	return (
		<section className="relative isolate overflow-hidden bg-[#132760] text-white">
			<Image src="/catering-herobgv03.png" alt="" fill priority sizes="100vw" className="-z-20 object-cover opacity-35" />
			<div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#132760] via-[#132760]/90 to-[#132760]/45" />
			<div className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-gradient-to-t from-[#F8F9FC] to-transparent" />

			<ScreenSection className="grid min-h-[42rem] items-center gap-10 py-20 sm:py-24 lg:grid-cols-[1.05fr_0.95fr]">
				<div className="max-w-3xl">
					<TitleBadge className="pb-2">
						<TitleBadge.Icon backgroundColor={["#4A8DF1", "#1C5DBE"]} icon={Coffee} className="text-white shadow-none" />
						<TitleBadge.Title className="text-white">이디야 케이터링</TitleBadge.Title>
						<TitleBadge.Badge backgroundColor="transparent" className="border-white/25 text-white">
							PACKAGE
						</TitleBadge.Badge>
					</TitleBadge>

					<h1 className="mt-7 text-4xl font-black leading-tight sm:text-5xl lg:text-5xl">
						행사에 필요한 커피와 음료를
						<br />
						인원수에 맞춰 준비해드립니다.
					</h1>
					<p className="mt-6 max-w-2xl text-base leading-7 text-blue-50/85">
						이디야 안산지점에서 회의, 워크숍 및 기업 행사를 위한 커피·음료 케이터링 구성을 제안합니다.
						<br />
						정해진 패키지부터 맞춤형 구성까지, 행사 목적과 예산에 맞춰 상담받아보세요.
					</p>
					<div className="mt-9 flex flex-col gap-3 sm:flex-row">
						<Button.Link
							href="/contact?service=catering"
							variant="outlined"
							icon={ArrowRight}
							iconPosition="right"
							className="border-white bg-white text-primary hover:bg-blue-50"
						>
							패키지 문의하기
						</Button.Link>
						<Button.Link
							href="/contact?service=catering&type=custom"
							variant="base"
							icon={MessageCircle}
							className="border border-white/25 bg-white/10 backdrop-blur"
						>
							커스텀 상담하기
						</Button.Link>
					</div>
				</div>

				<div className="rounded-3xl border border-white/15 bg-white/10 p-5 shadow-2xl shadow-black/15 backdrop-blur-md sm:p-6">
					<div className="grid gap-3 sm:grid-cols-3">
						{heroStats.map(([label, value]) => (
							<div key={label} className="rounded-2xl border border-white/15 bg-white/10 p-4">
								<p className="text-xs font-bold text-blue-100/65">{label}</p>
								<p className="mt-2 text-lg font-black">{value}</p>
							</div>
						))}
					</div>
					<div className="mt-4 rounded-2xl bg-white p-5 text-primary">
						<p className="text-sm font-black">상담 전 빠른 확인</p>
						<p className="mt-2 text-sm leading-6 text-slate-600">
							원하는 패키지와 예상 인원만 입력하면 행사 규모에 맞는 예상 금액을 바로 확인할 수 있습니다.
						</p>
					</div>
				</div>
			</ScreenSection>
		</section>
	);
}
