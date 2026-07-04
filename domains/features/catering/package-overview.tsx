import { Calculator, CheckCircle2, PackageCheck, SlidersHorizontal } from "lucide-react";
import { ScreenSection } from "@/share/screen-section";
import { TitleBadge } from "@/share/title-badge";
import { cateringOverviewPoints } from "./data";

const icons = [PackageCheck, Calculator, CheckCircle2, SlidersHorizontal];

export function CateringPackageOverview() {
	return (
		<section className="bg-[#F8F9FC] py-20 sm:py-24" aria-labelledby="catering-overview-heading">
			<ScreenSection className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
				<div>
					<TitleBadge>
						<TitleBadge.Icon backgroundColor={["#4A8DF1", "#1C5DBE"]} icon={Calculator} className="text-white shadow-none" />
						<TitleBadge.Title>패키지 가격 안내</TitleBadge.Title>
						<TitleBadge.Badge className="border-[#1C5DBE] text-[#1C5DBE]">PRICING</TitleBadge.Badge>
					</TitleBadge>
					<p className="hidden text-sm font-bold uppercase tracking-[0.16em] text-primary/55">Package Pricing</p>
					<h2 id="catering-overview-heading" className="mt-4 text-3xl font-bold leading-tight text-primary sm:text-4xl">
						인원수에 따라 계산하는
						<br />
						케이터링 패키지
					</h2>
					<p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
						기본 패키지는 1인 기준 가격으로 구성되며, 예상 인원수에 따라 전체 견적을 확인할 수 있습니다.
						행사 목적, 메뉴 구성, 제공 방식에 따라 최종 견적은 상담 후 확정됩니다.
					</p>
				</div>

				<div className="grid gap-3 sm:grid-cols-2">
					{cateringOverviewPoints.map((point, index) => {
						const Icon = icons[index] ?? CheckCircle2;

						return (
							<article key={point} className="rounded-lg border border-primary/10 bg-white p-6 shadow-sm">
								<span className="inline-flex size-11 items-center justify-center rounded-md bg-blue-50 text-primary">
									<Icon aria-hidden="true" className="size-5" />
								</span>
								<h3 className="mt-5 text-lg font-bold text-primary">{point}</h3>
							</article>
						);
					})}
				</div>
			</ScreenSection>
		</section>
	);
}
