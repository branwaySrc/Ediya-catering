import { CheckCircle2, Gift, PackageCheck } from "lucide-react";

import { ScreenSection } from "@/share/screen-section";

const loungePoints = [
	{
		icon: CheckCircle2,
		title: "머신 임대료 무료",
		description: "공간과 이용 인원에 맞춰 커피머신을 제공합니다.",
	},
	{
		icon: PackageCheck,
		title: "캡슐 정기 이용",
		description: "필요한 캡슐만 정기적으로 받아보면 됩니다.",
	},
];

export function LoungePlan() {
	return (
		<section className="bg-white py-16 sm:py-24">
			<ScreenSection>
				<div className="overflow-hidden rounded-lg bg-[#172966] text-white">
					<div className="grid lg:grid-cols-[1.05fr_0.95fr]">
						<div className="p-6 sm:p-10">
							<p className="inline-flex rounded-md bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#FBB34B]">
								Lounge Station
							</p>
							<h2 className="mt-4 break-keep text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl">
								커피머신 임대료 0원,
								<br />
								캡슐 정기 이용으로 시작하세요.
							</h2>
							<p className="mt-5 max-w-xl break-keep text-sm leading-7 text-blue-100/80 sm:text-base">
								초기 머신 비용 부담 없이 오피스 커피 라운지를 구성합니다.
							</p>
						</div>

						<div className="border-t border-white/10 bg-white/[0.06] p-6 sm:p-10 lg:border-l lg:border-t-0">
							<div className="grid gap-4">
								{loungePoints.map(({ icon: Icon, title, description }) => (
									<div key={title} className="flex gap-4">
										<span className="inline-flex size-10 shrink-0 items-center justify-center rounded-md bg-white/10 text-[#FBB34B]">
											<Icon aria-hidden="true" className="size-5" />
										</span>
										<div>
											<h3 className="font-bold">{title}</h3>
											<p className="mt-1 break-keep text-sm leading-6 text-blue-100/70">{description}</p>
										</div>
									</div>
								))}
							</div>

							<div className="mt-7 rounded-lg border border-[#FBB34B]/40 bg-[#FBB34B] p-4 text-[#172966]">
								<div className="flex gap-3">
									<Gift aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
									<div>
										<h3 className="font-bold">디저트 스테이션 함께 진행 시</h3>
										<p className="mt-1 break-keep text-sm font-bold leading-6">
											커피와 디저트를 함께 구성하는 고객에게 추가 혜택을 안내드립니다.
										</p>
									</div>
								</div>
							</div>

							<p className="mt-4 break-keep text-xs leading-6 text-blue-100/55">
								머신 수량, 캡슐 구성, 정기 공급 조건은 상담 후 확정됩니다.
							</p>
						</div>
					</div>
				</div>
			</ScreenSection>
		</section>
	);
}
