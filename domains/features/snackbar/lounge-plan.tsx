import { CheckCircle2, Coffee, FileText } from "lucide-react";
import { ScreenSection } from "@/share/screen-section";
import { TitleBadge } from "@/share/title-badge";

export function LoungePlan() {
	return (
		<section className="bg-white py-20 sm:py-28">
			<ScreenSection>
				<div className="overflow-hidden rounded-[2rem] bg-[#172966] text-white">
					<div className="grid lg:grid-cols-[0.9fr_1.1fr]">
						<div className="p-7 sm:p-10 lg:p-14">
							<TitleBadge className="pb-0">
								<TitleBadge.Icon backgroundColor={["#FBB34B", "#8A5A11"]} icon={Coffee} className="text-white shadow-none" />
								<TitleBadge.Title className="text-white">머신 라운지 플랜</TitleBadge.Title>
								<TitleBadge.Badge className="border-white/25 bg-white/10 text-white">SUBSCRIPTION</TitleBadge.Badge>
							</TitleBadge>
							<h2 className="mt-3 text-3xl font-black leading-tight tracking-[-0.03em] sm:text-4xl">머신 제공과 캡슐 공급을<br />하나의 계약으로</h2>
							<p className="mt-5 text-sm leading-7 text-blue-100/80 sm:text-base">필요한 수량의 캡슐커피 머신을 제공하고, 계약 기간 동안 약정한 캡슐을 정기적으로 납품합니다.</p>
						</div>
						<div className="border-t border-white/10 bg-white/[0.06] p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-14">
							<div className="space-y-6">
								<div className="flex gap-4">
									<CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#FBB34B]" aria-hidden="true" />
									<div><h3 className="font-black">머신 수량 맞춤</h3><p className="mt-2 text-sm leading-6 text-blue-100/70">설치 공간과 예상 이용량에 맞춰 필요한 머신 수량을 상담합니다.</p></div>
								</div>
								<div className="flex gap-4">
									<FileText className="mt-0.5 size-5 shrink-0 text-[#FBB34B]" aria-hidden="true" />
									<div><h3 className="font-black">캡슐 납품 약정</h3><p className="mt-2 text-sm leading-6 text-blue-100/70">최소 납품량과 계약 기간은 머신 수량과 예상 소비량을 기준으로 협의합니다.</p></div>
								</div>
							</div>
							<p className="mt-8 rounded-xl border border-white/10 bg-black/10 p-4 text-xs leading-6 text-blue-100/65">계약 전 머신 제공 조건, 최소 캡슐 납품량, 계약 기간을 견적서에 명확하게 안내합니다.</p>
						</div>
					</div>
				</div>
			</ScreenSection>
		</section>
	);
}
