import { ClipboardCheck, FileSignature, MessagesSquare, ScanSearch } from "lucide-react";
import { ScreenSection } from "@/share/screen-section";

const steps = [
	{ icon: MessagesSquare, title: "상담", description: "필요한 스테이션과 이용 인원, 예산을 알려주세요." },
	{ icon: ScanSearch, title: "환경 확인", description: "설치 공간과 전원, 보관 방식 등 필요한 조건을 확인합니다." },
	{ icon: ClipboardCheck, title: "구성 제안", description: "설비 크기와 상품 구성, 운영 조건을 견적과 함께 제안합니다." },
	{ icon: FileSignature, title: "계약 및 설치", description: "확정된 조건으로 계약하고 일정에 맞춰 설치와 납품을 진행합니다." },
];

export function Process() {
	return (
		<section className="bg-[#F8F9FC] py-20 sm:py-28">
			<ScreenSection>
				<header className="text-center">
					<p className="text-sm font-black tracking-[0.16em] text-[#E96106]">HOW IT WORKS</p>
					<h2 className="mt-4 text-3xl font-black tracking-[-0.03em] text-slate-900 sm:text-4xl">상담부터 설치까지 이렇게 진행합니다</h2>
				</header>
				<ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
					{steps.map(({ icon: Icon, title, description }, index) => (
						<li key={title} className="rounded-2xl border border-slate-200 bg-white p-6">
							<div className="flex items-center justify-between">
								<span className="inline-flex size-11 items-center justify-center rounded-xl bg-[#172966] text-white"><Icon className="size-5" aria-hidden="true" /></span>
								<span className="text-3xl font-black text-slate-100">{String(index + 1).padStart(2, "0")}</span>
							</div>
							<h3 className="mt-6 text-lg font-black text-slate-900">{title}</h3>
							<p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
						</li>
					))}
				</ol>
			</ScreenSection>
		</section>
	);
}
