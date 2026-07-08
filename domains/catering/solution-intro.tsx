import Image from "next/image";
import {
	ArrowRight,
	Calculator,
	CheckCircle2,
	ClipboardCheck,
	ClipboardList,
	Coffee,
	Download,
	Info,
	Lightbulb,
	PackageCheck,
	Route,
	Scale,
	ShieldCheck,
	TriangleAlert,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "@/share/button";
import { ScreenSection } from "@/share/screen-section";

const routes = {
	estimate: "/catering/calculator",
	order: "/catering/order",
	catalogue: "#",
};

const serviceLinks = [
	{
		title: "패키지 예상 금액",
		description: "케이터링 패키지와 세부 옵션, 인원을 선택해 예상 금액을 확인합니다.",
		href: routes.estimate,
		icon: Calculator,
	},
	{
		title: "커스텀 주문",
		description: "원하는 메뉴와 수량이 정해져 있다면 직접 선택해 주문 문의를 진행합니다.",
		href: routes.order,
		icon: ClipboardList,
	},
	{
		title: "소개서 다운받기",
		description: "케이터링 소개서는 추후 구글 드라이브 링크로 연결됩니다.",
		href: routes.catalogue,
		icon: Download,
	},
];

const useCases = [
	"사내 회의에는 아메리카노, 라떼, 병음료 중심의 간단한 구성이 적합합니다.",
	"세미나나 강연에는 음료와 쿠키, 베이커리를 함께 구성할 수 있습니다.",
	"기업 행사에는 커피, 논커피, 디저트를 함께 구성해 다양한 참석자의 취향을 고려할 수 있습니다.",
	"학교나 학원 행사에는 논커피, 주스, 간식류 중심의 구성이 적합합니다.",
	"촬영장이나 스태프 현장에는 아이스 음료, 대용량 커피, 간편 스낵처럼 운영 시간이 긴 현장에 맞는 구성이 필요합니다.",
];

const orderingSteps = [
	"먼저 예상 인원과 행사 유형을 정합니다.",
	"그다음 패키지 견적으로 빠르게 확인할지, 커스텀 주문으로 직접 메뉴를 고를지 선택합니다.",
	"마지막으로 메뉴, 수량, 수령 방식, 준비 시간을 확인한 뒤 최종 가능 여부와 견적을 안내받습니다.",
];

const noticeItems = [
	"견적 모의 계산기의 금액은 예상 비용을 확인하기 위한 참고용입니다.",
	"실제 주문 가능 여부와 최종 견적은 메뉴, 수량, 행사 일정, 매장 상황, 수령 방식에 따라 달라질 수 있습니다.",
	"배송이나 현장 세팅이 필요한 경우에도 상담을 통해 가능 여부를 확인합니다.",
];

type StoryChapterProps = {
	id: string;
	number: string;
	label: string;
	icon: LucideIcon;
	title: ReactNode;
	children: ReactNode;
	tone?: "blue" | "orange" | "green" | "slate";
};

function getToneClasses(tone: StoryChapterProps["tone"] = "blue") {
	const tones = {
		blue: {
			icon: "bg-blue-50 text-primary",
			border: "border-primary/15",
			number: "text-primary/45",
		},
		orange: {
			icon: "bg-orange-50 text-[#E96106]",
			border: "border-[#E96106]/20",
			number: "text-[#E96106]/55",
		},
		green: {
			icon: "bg-emerald-50 text-[#009249]",
			border: "border-[#009249]/20",
			number: "text-[#009249]/55",
		},
		slate: {
			icon: "bg-slate-100 text-slate-700",
			border: "border-slate-200",
			number: "text-slate-400",
		},
	};

	return tones[tone];
}

function StoryChapter({ id, number, label, icon: Icon, title, children, tone = "blue" }: StoryChapterProps) {
	const toneClasses = getToneClasses(tone);

	return (
		<section id={id} className="scroll-mt-24 bg-[#F8F9FC] py-14 sm:py-20" aria-labelledby={`${id}-heading`}>
			<ScreenSection>
				<article className={`relative rounded-lg border bg-white p-6 shadow-sm sm:p-8 ${toneClasses.border}`}>
					<div className="flex items-center justify-between gap-4">
						<div className="flex items-center gap-3">
							<span className={`inline-flex size-11 shrink-0 items-center justify-center rounded-md ${toneClasses.icon}`}>
								<Icon aria-hidden="true" className="size-5" />
							</span>
							<p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">{label}</p>
						</div>
						<span className={`text-3xl font-bold ${toneClasses.number}`}>{number}</span>
					</div>
					<h2 id={`${id}-heading`} className="mt-7 text-3xl font-bold leading-tight tracking-[-0.03em] text-slate-900 sm:text-4xl">
						{title}
					</h2>
					<div className="mt-6 space-y-5 text-sm leading-7 text-slate-600 sm:text-base">{children}</div>
				</article>
			</ScreenSection>
		</section>
	);
}

function StoryParagraph({ children }: { children: ReactNode }) {
	return <p>{children}</p>;
}

export function CateringSolutionIntro() {
	return (
		<div className="bg-[#F8F9FC] text-slate-900">
			<section className="overflow-hidden bg-white py-14 sm:py-20" aria-labelledby="catering-story-opening-heading">
				<ScreenSection className="grid gap-10">
					<div>
						<p className="inline-flex rounded-full border border-primary/10 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">
							Ediya Catering Story
						</p>
						<h1 id="catering-story-opening-heading" className="mt-6 text-4xl font-bold leading-tight tracking-[-0.03em] text-primary sm:text-5xl">
							행사 커피 준비를
							<br />
							더 쉽고, 더 익숙하고,
							<br />더 예측 가능하게.
						</h1>
						<div className="mt-6 space-y-5 text-sm leading-7 text-slate-600 sm:text-base">
							<StoryParagraph>
								회의, 세미나, 기업 행사, 학교 행사, 촬영 현장까지. 이디야 커피 메뉴를 기반으로 인원과 예산에 맞는 음료와 간식 구성을 제안합니다.
							</StoryParagraph>
							<StoryParagraph>
								단순한 대량 주문이 아니라, 행사 담당자가 필요한 수량과 예산을 빠르게 확인하고 상황에 맞게 주문할 수 있는 케이터링 솔루션입니다.
							</StoryParagraph>
						</div>
						<div className="mt-8 flex flex-col gap-3">
							<Button.Link href={routes.estimate} variant="primary" icon={Calculator}>
								견적 모의 계산하기
							</Button.Link>
							<Button.Link href={routes.order} variant="ghost" icon={ClipboardList}>
								커스텀 주문하기
							</Button.Link>
							<Button.Link href={routes.catalogue} variant="ghost" icon={Download}>
								소개서 다운받기
							</Button.Link>
						</div>
					</div>

					<div className="grid gap-4">
						<div className="relative min-h-80 overflow-hidden rounded-lg border border-primary/10 bg-slate-50 shadow-xl shadow-primary/5">
							<Image src="/catering-herobgv03.png" alt="이디야 커피 케이터링 이미지" fill priority sizes="100vw" className="object-cover" />
						</div>
						<div className="rounded-lg border border-primary/10 bg-[#F8F9FC] p-5">
							<p className="text-xs font-bold uppercase tracking-[0.16em] text-primary/55">Scroll Story</p>
							<p className="mt-3 text-sm font-bold leading-6 text-primary">
								문제에서 해결 방식까지, 행사 담당자의 의사결정 흐름을 따라 내려가며 확인하세요.
							</p>
						</div>
					</div>
				</ScreenSection>
			</section>

			<StoryChapter
				id="catering-story-problem"
				number="02"
				label="Problem"
				icon={TriangleAlert}
				title={
					<>
						행사 준비에서 커피와 간식은
						<br />
						생각보다 번거로운 일입니다.
					</>
				}
				tone="orange"
			>
				<StoryParagraph>행사 인원은 정해졌지만, 몇 잔을 준비해야 할지 애매합니다.</StoryParagraph>
				<StoryParagraph>커피만 준비하면 되는지, 논커피와 디저트까지 함께 준비해야 하는지도 고민됩니다.</StoryParagraph>
				<StoryParagraph>예산은 정해져 있지만, 인원별 단가와 총액을 매번 따로 계산해야 합니다.</StoryParagraph>
				<StoryParagraph>
					대량 주문의 경우 준비 가능 수량, 수령 시간, 포장 방식까지 확인해야 하기 때문에 작은 주문보다 오히려 더 많은 조율이 필요합니다.
				</StoryParagraph>
			</StoryChapter>

			<StoryChapter
				id="catering-story-gap"
				number="03"
				label="Current Gap"
				icon={Scale}
				title={
					<>
						기존 방식은
						<br />
						너무 단순하거나, 너무 복잡합니다.
					</>
				}
				tone="slate"
			>
				<StoryParagraph>일반 매장 주문은 원하는 메뉴를 고를 수는 있지만, 행사 규모에 맞는 구성이나 예산 계산이 어렵습니다.</StoryParagraph>
				<StoryParagraph>반대로 일반 케이터링 서비스는 구성은 갖춰져 있지만, 가격 부담이 크거나 메뉴가 낯설 수 있습니다.</StoryParagraph>
				<StoryParagraph>
					행사 담당자에게 필요한 것은 화려한 케이터링보다 참석자들이 익숙하게 마실 수 있고, 예산 안에서 빠르게 결정할 수 있는 현실적인 선택지입니다.
				</StoryParagraph>
			</StoryChapter>

			<StoryChapter
				id="catering-story-insight"
				number="04"
				label="Insight"
				icon={Lightbulb}
				title={
					<>
						행사 케이터링의 핵심은
						<br />
						화려함보다 실패하지 않는 구성입니다.
					</>
				}
				tone="blue"
			>
				<StoryParagraph>참석자의 취향은 다양합니다. 누군가는 커피를 원하고, 누군가는 논커피를 원합니다.</StoryParagraph>
				<StoryParagraph>담당자는 한정된 시간 안에서 수량, 예산, 메뉴, 수령 방식을 모두 결정해야 합니다.</StoryParagraph>
				<StoryParagraph>그래서 단체 음료 준비에는 익숙한 브랜드 메뉴, 예측 가능한 가격, 빠른 선택 구조가 필요합니다.</StoryParagraph>
				<StoryParagraph>이디야 커피 케이터링은 바로 이 지점에 집중합니다.</StoryParagraph>
			</StoryChapter>

			<StoryChapter
				id="catering-story-solution"
				number="05"
				label="Solution"
				icon={PackageCheck}
				title={
					<>
						이디야 커피 메뉴를 기반으로
						<br />
						행사에 맞는 단체 구성을 만듭니다.
					</>
				}
				tone="green"
			>
				<StoryParagraph>이디야 커피 케이터링은 누구에게나 익숙한 음료와 간식 메뉴를 기반으로 행사 규모에 맞는 구성을 제안합니다.</StoryParagraph>
				<StoryParagraph>
					인원 기준 패키지로 빠르게 견적을 확인할 수 있고, 원하는 메뉴가 있다면 커스텀 주문 방식으로 직접 구성할 수도 있습니다.
				</StoryParagraph>
				<StoryParagraph>즉, 정해진 패키지의 간편함과 개별 주문의 자유도를 함께 제공하는 방식입니다.</StoryParagraph>
			</StoryChapter>

			<StoryChapter
				id="catering-story-value"
				number="06"
				label="Key Value"
				icon={Calculator}
				title={
					<>
						인원만 정해져도
						<br />
						예산과 구성을 빠르게 가늠할 수 있습니다.
					</>
				}
				tone="blue"
			>
				<StoryParagraph>이 서비스의 가장 큰 장점은 행사 담당자의 판단 시간을 줄여주는 것입니다.</StoryParagraph>
				<StoryParagraph>
					몇 명이 참석하는지, 어떤 분위기의 행사인지, 예산을 어느 정도로 잡고 싶은지만 정하면 기본적인 구성을 빠르게 확인할 수 있습니다.
				</StoryParagraph>
				<StoryParagraph>패키지는 빠른 판단을 돕고, 커스텀 주문은 세부 조정을 가능하게 합니다.</StoryParagraph>
			</StoryChapter>

			<StoryChapter
				id="catering-story-structure"
				number="07"
				label="Service Structure"
				icon={Route}
				title={
					<>
						패키지로 빠르게,
						<br />
						커스텀 주문으로 자유롭게.
					</>
				}
				tone="orange"
			>
				<StoryParagraph>서비스는 크게 세 가지 방식으로 연결됩니다.</StoryParagraph>
				<div className="grid gap-3">
					{serviceLinks.map(({ title, description, href, icon: Icon }) => (
						<Button.Link key={title} href={href} variant="ghost" icon={Icon} className="h-auto justify-start whitespace-normal p-4 text-left">
							<span className="grid gap-1">
								<span>{title}</span>
								<span className="text-xs font-medium leading-5 text-slate-500">{description}</span>
							</span>
						</Button.Link>
					))}
				</div>
			</StoryChapter>

			<StoryChapter
				id="catering-story-usecase"
				number="08"
				label="Use Case"
				icon={Coffee}
				title={
					<>
						회의부터 촬영 현장까지,
						<br />
						필요한 순간에 맞춰 구성합니다.
					</>
				}
				tone="green"
			>
				<ul className="grid gap-3">
					{useCases.map(item => (
						<li key={item} className="flex gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700">
							<CheckCircle2 aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-[#1C5DBE]" />
							<span>{item}</span>
						</li>
					))}
				</ul>
			</StoryChapter>

			<StoryChapter
				id="catering-story-why"
				number="09"
				label="Why EDIYA"
				icon={ShieldCheck}
				title={
					<>
						낯선 메뉴보다
						<br />
						익숙한 선택이 더 안전합니다.
					</>
				}
				tone="blue"
			>
				<StoryParagraph>행사장에서 제공되는 음료는 특별함보다 안정성이 중요할 때가 많습니다.</StoryParagraph>
				<StoryParagraph>
					이디야 커피 메뉴는 대중적으로 익숙하고, 커피와 논커피 선택지가 함께 있어 다양한 참석자에게 무난하게 제공할 수 있습니다.
				</StoryParagraph>
				<StoryParagraph>
					익숙한 브랜드 메뉴를 기반으로 하기 때문에 담당자는 메뉴 선택에 대한 부담을 줄이고, 참석자는 편하게 음료를 선택할 수 있습니다.
				</StoryParagraph>
			</StoryChapter>

			<StoryChapter
				id="catering-story-flow"
				number="10"
				label="Ordering Flow"
				icon={ClipboardCheck}
				title={
					<>
						복잡한 단체 주문을
						<br />
						간단한 흐름으로 줄입니다.
					</>
				}
				tone="slate"
			>
				<ol className="grid gap-3">
					{orderingSteps.map((step, index) => (
						<li key={step} className="rounded-lg border border-slate-200 bg-white p-4">
							<p className="text-xs font-bold uppercase tracking-[0.14em] text-primary/45">Step {String(index + 1).padStart(2, "0")}</p>
							<p className="mt-2 text-sm font-bold leading-6 text-slate-800">{step}</p>
						</li>
					))}
				</ol>
			</StoryChapter>

			<StoryChapter
				id="catering-story-notice"
				number="11"
				label="Notice"
				icon={Info}
				title={
					<>
						최종 구성은
						<br />
						행사 조건에 맞춰 상담 후 확정됩니다.
					</>
				}
				tone="orange"
			>
				<ul className="grid gap-3">
					{noticeItems.map(item => (
						<li key={item} className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-950">
							{item}
						</li>
					))}
				</ul>
			</StoryChapter>

			<section className="bg-blue-50 py-14 sm:py-20" aria-labelledby="catering-story-final-heading">
				<ScreenSection>
					<div className="rounded-lg border border-primary/10 bg-white p-6 shadow-xl shadow-primary/5 sm:p-10">
						<p className="text-xs font-bold uppercase tracking-[0.16em] text-primary/55">Final Message</p>
						<h2 id="catering-story-final-heading" className="mt-4 text-3xl font-bold leading-tight tracking-[-0.03em] text-primary sm:text-4xl">
							예상 인원만 있어도
							<br />
							견적 확인을 시작할 수 있습니다.
						</h2>
						<div className="mt-6 space-y-5 text-sm leading-7 text-slate-600 sm:text-base">
							<StoryParagraph>행사 커피와 간식 준비가 필요하다면 먼저 인원과 예산에 맞는 구성을 확인해보세요.</StoryParagraph>
							<StoryParagraph>패키지로 빠르게 견적을 가늠하고, 필요한 메뉴와 수량은 커스텀 주문을 통해 조정할 수 있습니다.</StoryParagraph>
							<StoryParagraph>
								이디야 커피 케이터링은 행사 담당자가 더 쉽게 결정하고, 참석자가 더 익숙하게 즐길 수 있는 실용적인 단체 음료·간식 솔루션입니다.
							</StoryParagraph>
						</div>
						<div className="mt-8 flex flex-col gap-3">
							<Button.Link href={routes.estimate} variant="primary" icon={Calculator}>
								견적 모의 계산하기
							</Button.Link>
							<Button.Link href={routes.order} variant="ghost" icon={ArrowRight} iconPosition="right">
								커스텀 주문하기
							</Button.Link>
							<Button.Link href={routes.catalogue} variant="ghost" icon={Download}>
								소개서 다운받기
							</Button.Link>
						</div>
					</div>
				</ScreenSection>
			</section>
		</div>
	);
}
