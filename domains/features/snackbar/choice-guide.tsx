import { Ruler, ThermometerSnowflake, Users } from "lucide-react";
import { ScreenSection } from "@/share/screen-section";

const guides = [
	{ icon: Users, title: "이용 인원", description: "상시 이용 인원과 사용 빈도를 확인해 필요한 설비 용량을 정합니다." },
	{ icon: Ruler, title: "설치 공간", description: "사무실 동선과 가용 면적을 살펴 소형·중형·대형 중 알맞은 크기를 찾습니다." },
	{ icon: ThermometerSnowflake, title: "보관 방식", description: "상품 특성에 따라 냉장 또는 상온 보관 방식과 쇼케이스를 선택합니다." },
];

export function ChoiceGuide() {
	return (
		<section className="bg-[#F3F6FB] py-20 sm:py-28">
			<ScreenSection>
				<div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-16">
					<header>
						<p className="text-sm font-black tracking-[0.16em] text-[#1C5DBE]">SELECTION GUIDE</p>
						<h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.03em] text-slate-900 sm:text-4xl">정답은 공간마다<br />다르니까요</h2>
						<p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">정해진 패키지를 그대로 적용하기보다 실제 이용 환경을 확인하고 필요한 만큼 구성합니다.</p>
					</header>
					<div className="grid gap-4 sm:grid-cols-3">
						{guides.map(({ icon: Icon, title, description }) => (
							<article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
								<span className="inline-flex size-11 items-center justify-center rounded-xl bg-blue-50 text-[#1C5DBE]">
									<Icon className="size-5" aria-hidden="true" />
								</span>
								<h3 className="mt-5 text-lg font-black text-slate-900">{title}</h3>
								<p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
							</article>
						))}
					</div>
				</div>
			</ScreenSection>
		</section>
	);
}
