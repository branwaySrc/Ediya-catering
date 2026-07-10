import { CheckCircle2, ClipboardList, MessageCircle, PackageCheck, ShoppingCart, Info } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { ScreenSection } from "@/share/screen-section";

const customOrderSteps: Array<{ title: string; description: string; icon: LucideIcon }> = [
	{
		title: "카테고리 선택",
		description: "음료, 베이커리, 스낵 카테고리를 오가며 필요한 메뉴 후보를 확인합니다.",
		icon: ClipboardList,
	},
	{
		title: "메뉴 담기",
		description: "원하는 메뉴를 장바구니에 담아 상담 요청용 주문안을 만듭니다.",
		icon: ShoppingCart,
	},
	{
		title: "수량 조정",
		description: "메뉴별 수량을 조정하고 예상 금액을 확인합니다.",
		icon: PackageCheck,
	},
	{
		title: "장바구니로 문의",
		description: "담은 구성으로 문의하면 담당자가 상세 상담을 위해 연락드립니다.",
		icon: MessageCircle,
	},
];

const customOrderUseCases = ["직접 메뉴 조합", "예산별 구성", "행사별 다과", "수량 중심 상담"];

const customOrderTools = [
	{ label: "담기", description: "메뉴를 장바구니에 추가합니다." },
	{ label: "장바구니 보기", description: "담은 메뉴와 수량을 확인합니다." },
	{ label: "상담 신청", description: "장바구니 구성을 토대로 상담 진행" },
	{ label: "확정 안내", description: "조율을 통해 구성과 일정을 확정합니다." },
];

const customOrderFaqs = [
	{
		question: "장바구니에 담으면 주문이 확정되나요?",
		answer: "아닙니다. 장바구니는 상담을 위한 요청안입니다. 최종 주문은 메뉴 가능 여부와 행사 조건을 확인한 뒤 상담 후 확정됩니다.",
	},
	{
		question: "문의 후 메뉴 수량을 변경할 수 있나요?",
		answer: "가능합니다. 장바구니 구성은 상담 기준안이며, 담당자와 일정, 예산, 수량을 다시 확인하며 조정할 수 있습니다.",
	},
	{
		question: "선택한 메뉴가 준비되지 않으면 어떻게 되나요?",
		answer: "매장 상황이나 일정에 따라 일부 메뉴가 조정될 수 있습니다. 이 경우 가능한 대체 메뉴와 구성을 함께 안내드립니다.",
	},
];

const customOrderFaqJsonLd = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: customOrderFaqs.map(item => ({
		"@type": "Question",
		name: item.question,
		acceptedAnswer: {
			"@type": "Answer",
			text: item.answer,
		},
	})),
};

export function CateringCustomOrderGuide() {
	return (
		<section className="border-t border-primary/10 bg-[#F8F9FC] py-16 pb-72 sm:py-24 sm:pb-72 lg:pb-24" aria-labelledby="custom-order-guide-heading">
			<ScreenSection>
				<div className="grid gap-10">
					<header className="max-w-3xl">
						<div className="flex gap-2 items-center">
							<Info />
							<h2 id="custom-order-guide-heading" className="text-xl font-bold tracking-[-0.03em] text-slate-950 sm:text-2xl">
								장바구니가 상담 요청서가 됩니다.
							</h2>
						</div>
						<p className="mt-5 text-base text-slate-600">
							커스텀 주문은 상품을 바로 결제하는 과정이 아니라,
							<br />
							필요한 메뉴와 수량을 담아 담당자에게 전달하는 상담형 주문 방식입니다.
						</p>
					</header>

					<div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
						<article className="rounded-lg border border-[#E96106]/20 bg-white p-6">
							<div className="grid gap-4">
								<div className="mr-auto rounded-lg border border-slate-200 bg-slate-50 p-4 text-base text-slate-700">
									아이스 아메리카노 20개와 베이커리 10개 담기 완료.
								</div>
								<div className="mr-auto max-w-[88%] rounded-lg bg-[#E96106] p-4 text-base font-bold text-white">
									장바구니 기준 예상 금액 확인 완료
								</div>
								<div className="mr-auto rounded-lg border border-slate-200 bg-slate-50 p-4 text-base text-slate-700">
									이 구성 기준으로 세부적인 상담을 위한 준비 완료!
								</div>
								<div className="mr-auto rounded-lg bg-blue-300/30 p-4 text-base font-bold text-primary border border-slate-300">
									선택 메뉴 및 조건을 확인한 뒤 담당자가 연락드립니다.
								</div>
							</div>
						</article>

						<article className="rounded-lg border border-primary/10 bg-white p-6">
							<h3 className="text-xl font-bold text-slate-950">장바구니 문의 흐름</h3>
							<ol className="mt-5 grid gap-3">
								{customOrderSteps.map(({ title, description, icon: Icon }, index) => (
									<li key={title} className="grid grid-cols-[auto_1fr] gap-3 rounded-lg border border-slate-200 bg-white p-4">
										<span className="inline-flex size-11 items-center justify-center rounded-lg bg-orange-50 text-[#E96106]">
											<Icon aria-hidden="true" className="size-5" />
										</span>
										<div>
											<p className="text-sm font-bold text-[#E96106]">STEP {String(index + 1).padStart(2, "0")}</p>
											<h4 className="mt-1 text-lg font-bold text-slate-950">{title}</h4>
											<p className="mt-2 text-base text-slate-600">{description}</p>
										</div>
									</li>
								))}
							</ol>
						</article>
					</div>

					<div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
						<article className="rounded-lg border border-[#E96106]/20 bg-white p-6">
							<h3 className="text-xl font-bold text-slate-950">커스텀 주문이 잘 맞는 상황</h3>
							<div className="mt-5 grid grid-cols-2 gap-3">
								{customOrderUseCases.map(item => (
									<div key={item} className="rounded-lg border border-[#E96106]/20 bg-orange-50 p-4 text-base font-bold text-[#B45309]">
										{item}
									</div>
								))}
							</div>
						</article>

						<article className="rounded-lg border border-slate-200 bg-white p-6">
							<h3 className="text-xl font-bold text-slate-950">케이터링 확정 순서</h3>
							<div className="mt-5 grid gap-3 sm:grid-cols-2">
								{customOrderTools.map(item => (
									<div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
										<p className="text-base font-bold text-slate-950">{item.label}</p>
										<p className="mt-2 text-base text-slate-600">{item.description}</p>
									</div>
								))}
							</div>
						</article>
					</div>

					<article className="rounded-lg border border-primary/10 bg-white p-6">
						<h3 className="text-xl font-bold text-slate-950">문의 전에 기억할 점</h3>
						<ul className="mt-5 grid gap-3">
							<li className="flex gap-3 text-base text-slate-700">
								<CheckCircle2 aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-[#E96106]" />
								<span>장바구니는 결제 화면이 아니라 상담을 위한 요청안입니다.</span>
							</li>
							<li className="flex gap-3 text-base text-slate-700">
								<CheckCircle2 aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-[#E96106]" />
								<span>최종 주문은 메뉴 가능 여부, 일정, 수량 확인 후 확정됩니다.</span>
							</li>
							<li className="flex gap-3 text-base text-slate-700">
								<CheckCircle2 aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-[#E96106]" />
								<span>문의 후 담당자가 상세 상담을 위해 연락드립니다.</span>
							</li>
						</ul>
					</article>

					<div className="rounded-lg border border-slate-200 bg-white">
						{customOrderFaqs.map(item => (
							<details key={item.question} className="group border-b border-slate-200 p-5 last:border-b-0">
								<summary className="cursor-pointer list-none text-lg font-bold text-slate-950 marker:content-none">{item.question}</summary>
								<p className="mt-4 text-base text-slate-600">{item.answer}</p>
							</details>
						))}
					</div>
				</div>
			</ScreenSection>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(customOrderFaqJsonLd) }} />
		</section>
	);
}
