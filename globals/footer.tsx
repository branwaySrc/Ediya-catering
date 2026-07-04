import { ScreenSection } from "@/share/screen-section";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t border-primary/10 bg-footer text-slate-500">
			<ScreenSection className="px-4 pt-12 pb-4 lg:py-16">
				<div className="grid gap-10 lg:grid-cols-[1.5fr_0.5fr]">
					<section className="space-y-2">
						<p className="text-sm font-bold uppercase tracking-wide leading-7">EDIYA COFFEE 케이터링 안산지점</p>

						<p className="max-w-2xl text-sm">
							본 케이터링 서비스는 <span className="font-bold">이디야 안산 월피동점/동안산병원점</span>이 함께 제공하는 케이터링 서비스입니다.
						</p>
						<section className="max-w-2xl">
							<p className="leading-7 text-sm">[케이터링 공동 운영점]</p>
							<p className="text-xs">
								<span className="font-bold">이디야커피 안산 월피동점</span> | 경기도 안산시 상록구 월피동 492-16번지 103호
							</p>
							<p className="text-xs">
								<span className="font-bold">이디야커피 안산 동안산병원점</span> | 경기도 안산시 상록구 월피동 474-11
							</p>
						</section>
						<section>
							<p className="pt-2 text-sm font-bold leading-6">문의</p>
							<div className="text-xs flex flex-col gap-0.5 tracking-wider">
								<p>contact@ediya-catering.kr</p>
								<p className="font-inter font-bold">010-4514-7173 / 070-4171-7412</p>
							</div>
						</section>
					</section>

					<section className="flex flex-col gap-5">
						<div>
							<p className="text-xs font-bold leading-7">운영 사업자</p>
							<dl className="space-y-1 text-xs">
								<div className="flex gap-2">
									<dt className="shrink-0 font-bold">대 표 자:</dt>
									<dd>김 민 석</dd>
								</div>
								<div className="flex gap-2">
									<dt className="shrink-0 font-bold">사 업 장:</dt>
									<dd className="shrink-0">이디야커피 안산 월피동점</dd>
								</div>
								<div className="flex gap-2">
									<dt className="shrink-0 font-bold">사업자등록번호</dt>
									<dd>211-39-63056</dd>
								</div>
							</dl>
						</div>

						<div className="text-xs flex flex-col gap-1">
							<p className="font-bold leading-7">위탁 마케팅 · 사이트 운영</p>
							<p>브랜웨이(Branway)</p>
							<p>개인정보처리자: 김 민 기</p>
						</div>
					</section>
				</div>

				<div className="mt-12 text-xs tracking-wide font-bold">©{currentYear} EDIYA COFFEE CATERING 안산 월피동점</div>
			</ScreenSection>
		</footer>
	);
}
