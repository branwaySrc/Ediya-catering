import { Calculator, CheckCircle2, ClipboardCheck, MessageCircle, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { ScreenSection } from "@/share/screen-section";

const packageSteps: Array<{ title: string; description: string; icon: LucideIcon }> = [
	{
		title: "예상 인원 입력",
		description: "행사 참석 인원을 입력하면 패키지 기준 예상 금액이 함께 계산됩니다.",
		icon: Users,
	},
	{
		title: "패키지와 옵션 선택",
		description: "커피 중심, 음료 혼합, 다과 포함 구성 중 행사 목적에 가까운 조합을 고릅니다.",
		icon: ClipboardCheck,
	},
	{
		title: "예상 견적 확인",
		description: "선택한 조건을 기준으로 내부 공유와 상담에 활용할 견적 기준안을 확인합니다.",
		icon: Calculator,
	},
	{
		title: "선택안으로 문의",
		description: "요청안이 접수되면 담당자가 일정, 장소, 제공 방식 확인을 위해 연락드립니다.",
		icon: MessageCircle,
	},
];

const packageUseCases = ["회의와 세미나", "기업 행사", "촬영 현장", "내부 예산 검토"];

const packageFaqs = [
	{
		question: "패키지 견적 금액이 최종 주문 금액인가요?",
		answer: "페이지에 표시되는 금액은 상담을 위한 예상 견적입니다. 최종 금액은 일정, 장소, 수량, 메뉴 구성, 제공 방식 확인 후 확정됩니다.",
	},
	{
		question: "선택한 패키지 구성은 변경할 수 있나요?",
		answer: "가능합니다. 선택한 패키지는 상담을 시작하기 위한 기준안이며, 행사 목적과 예산에 맞춰 메뉴와 수량을 조정할 수 있습니다.",
	},
	{
		question: "문의 후에는 어떻게 진행되나요?",
		answer: "선택한 패키지와 옵션으로 문의를 남기면 담당자가 요청 내용을 확인하고 행사 조건에 맞는 최종 견적 안내를 위해 연락드립니다.",
	},
];

const packageFaqJsonLd = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: packageFaqs.map(item => ({
		"@type": "Question",
		name: item.question,
		acceptedAnswer: {
			"@type": "Answer",
			text: item.answer,
		},
	})),
};

export function CateringPackageGuide() {
	return (
		<section className="border-t border-primary/10 bg-[#F8F9FC] py-16 pb-72 sm:py-24 sm:pb-72 lg:pb-24" aria-labelledby="package-guide-heading">
			<ScreenSection>
				<div className="grid gap-10">
					<header className="max-w-3xl">
						<p className="inline-flex rounded-full border border-primary/15 bg-white px-4 py-2 text-base font-bold text-primary">PACKAGE GUIDE</p>
						<h2 id="package-guide-heading" className="mt-5 text-3xl font-bold tracking-[-0.03em] text-slate-950 sm:text-4xl">
							패키지를 고르면, 상담 요청안이 만들어집니다.
						</h2>
						<p className="mt-5 text-base text-slate-600">
							패키지 견적은 바로 주문을 확정하는 화면이 아니라, 행사 조건을 빠르게 정리해 담당자에게 전달하는 요청안입니다.
						</p>
					</header>

					<div className="grid gap-5 lg:grid-cols-[0.86fr_1.14fr]">
						<article className="rounded-lg border border-primary/10 bg-white p-6">
							<div className="rounded-lg border border-primary/15 bg-[#F5F9FF] p-5">
								<p className="text-base font-bold text-primary">고객 요청안</p>
								<div className="mt-5 grid gap-3">
									<div className="rounded-lg bg-white p-4 text-base text-slate-700">30명 세미나에 커피와 간단한 음료 구성이 필요해요.</div>
									<div className="ml-auto rounded-lg bg-primary p-4 text-base font-bold text-white">Standard / Beverage Mix 선택</div>
									<div className="rounded-lg bg-white p-4 text-base text-slate-700">선택한 옵션과 인원 기준으로 예상 견적을 확인했어요.</div>
								</div>
							</div>

							<div className="mt-5 rounded-lg border border-[#E96106]/25 bg-orange-50 p-5">
								<p className="text-base font-bold text-[#E96106]">담당자 확인 예정</p>
								<p className="mt-3 text-base text-slate-700">
									요청 내용을 기준으로 행사 일정, 장소, 수량, 제공 방식을 확인한 뒤 연락드립니다. 표시 금액은 상담을 위한 예상 견적이며, 최종 견적은
									상담 후 확정됩니다.
								</p>
							</div>
						</article>

						<div className="grid gap-4">
							<ol className="grid gap-4">
								{packageSteps.map(({ title, description, icon: Icon }, index) => (
									<li key={title} className="grid gap-4 rounded-lg border border-slate-200 bg-white p-5 sm:grid-cols-[auto_1fr_auto] sm:items-center">
										<span className="inline-flex size-12 items-center justify-center rounded-lg bg-blue-50 text-primary">
											<Icon aria-hidden="true" className="size-6" />
										</span>
										<div>
											<h3 className="text-xl font-bold text-slate-950">{title}</h3>
											<p className="mt-2 text-base text-slate-600">{description}</p>
										</div>
										<span className="text-4xl font-bold text-primary/15">{String(index + 1).padStart(2, "0")}</span>
									</li>
								))}
							</ol>
						</div>
					</div>

					<div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
						<article className="rounded-lg border border-primary/10 bg-white p-6">
							<h3 className="text-2xl font-bold text-slate-950">패키지 견적이 잘 맞는 상황</h3>
							<div className="mt-5 grid grid-cols-2 gap-3">
								{packageUseCases.map(item => (
									<div key={item} className="rounded-lg border border-primary/10 bg-blue-50 p-4 text-base font-bold text-primary">
										{item}
									</div>
								))}
							</div>
						</article>

						<article className="rounded-lg border border-slate-200 bg-white p-6">
							<h3 className="text-2xl font-bold text-slate-950">견적 요청 전에 기억할 점</h3>
							<ul className="mt-5 grid gap-3">
								<li className="flex gap-3 text-base text-slate-700">
									<CheckCircle2 aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
									<span>선택한 패키지는 상담을 시작하기 위한 기준안입니다.</span>
								</li>
								<li className="flex gap-3 text-base text-slate-700">
									<CheckCircle2 aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
									<span>최종 견적은 일정, 장소, 메뉴 가능 여부 확인 후 확정됩니다.</span>
								</li>
								<li className="flex gap-3 text-base text-slate-700">
									<CheckCircle2 aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
									<span>문의 후 담당자가 요청안을 확인하고 연락드립니다.</span>
								</li>
							</ul>
						</article>
					</div>

					<div className="rounded-lg border border-slate-200 bg-white">
						{packageFaqs.map(item => (
							<details key={item.question} className="group border-b border-slate-200 p-5 last:border-b-0">
								<summary className="cursor-pointer list-none text-lg font-bold text-slate-950 marker:content-none">{item.question}</summary>
								<p className="mt-4 text-base text-slate-600">{item.answer}</p>
							</details>
						))}
					</div>
				</div>
			</ScreenSection>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(packageFaqJsonLd) }} />
		</section>
	);
}
