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
				<div className="rounded-lg border border-primary/10 bg-[#F8F9FC] p-5 sm:p-8">
					<div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
						<div>
							<p className="inline-flex rounded-md bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-primary">
								Lounge Station
							</p>
							<h2 className="mt-4 break-keep text-3xl font-bold tracking-[-0.03em] text-slate-950 sm:text-4xl">
								커피머신 임대료 0원,
								<br />
								캡슐 정기 이용으로 시작하세요.
							</h2>
							<p className="mt-5 max-w-xl break-keep text-sm text-slate-600 sm:text-base">
								초기 머신 비용 부담 없이 오피스 커피 라운지를 구성합니다.
							</p>
						</div>

						<div>
							<div className="grid gap-4">
								{loungePoints.map(({ icon: Icon, title, description }) => (
									<div key={title} className="flex gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
										<span className="inline-flex size-10 shrink-0 items-center justify-center rounded-md bg-blue-50 text-primary">
											<Icon aria-hidden="true" className="size-5" />
										</span>
										<div>
											<h3 className="font-bold text-slate-950">{title}</h3>
											<p className="mt-1 break-keep text-sm text-slate-600">{description}</p>
										</div>
									</div>
								))}
							</div>

							<div className="mt-5 rounded-lg border border-[#E96106]/20 bg-orange-50 p-5 text-slate-900">
								<div className="flex gap-3">
									<span className="inline-flex size-10 shrink-0 items-center justify-center rounded-md bg-white text-[#E96106]">
										<Gift aria-hidden="true" className="size-5" />
									</span>
									<div>
										<h3 className="font-bold">디저트 스테이션 함께 진행 시</h3>
										<p className="mt-1 break-keep text-sm font-bold text-slate-700">
											커피와 디저트를 함께 구성하는 고객에게 추가 혜택을 안내드립니다.
										</p>
									</div>
								</div>
							</div>

							<p className="mt-4 break-keep text-xs text-slate-500">
								머신 수량, 캡슐 구성, 정기 공급 조건은 상담 후 확정됩니다.
							</p>
						</div>
					</div>
				</div>
			</ScreenSection>
		</section>
	);
}
