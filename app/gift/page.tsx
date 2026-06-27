import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
	ArrowRight,
	BadgeCheck,
	Building2,
	CalendarDays,
	Check,
	Gift,
	Mail,
	MapPinOff,
	MessageCircle,
	PackageCheck,
	PartyPopper,
	Sparkles,
	Truck,
	type LucideIcon,
} from "lucide-react";

import { ScreenSection } from "@/share/screen-section";
import { TitleBadge } from "@/share/title-badge";

export const metadata: Metadata = {
	title: "시즌 MD 선물 솔루션 | 이디야커피 안산지점",
	description: "행사와 명절에 필요한 이디야커피 MD 상품을 제안하고 포장부터 무료 배송 준비까지 대행하는 기업 선물 솔루션입니다.",
};

const KAKAO_CHANNEL_URL = "/contact?type=kakao";
const emailSubscriptionHref = `mailto:contact@ediya-catering.kr?subject=${encodeURIComponent("[MD 구독 신청] 최신 상품 소식 받아보기")}&body=${encodeURIComponent(
	"최신 이디야 MD 상품과 시즌 선물 소식을 이메일로 받아보고 싶습니다.\n\n이름 또는 회사명:\n연락처:\n관심 있는 선물 유형:\n",
)}`;

const giftMoments: Array<{ icon: LucideIcon; eyebrow: string; title: string; description: string }> = [
	{
		icon: CalendarDays,
		eyebrow: "HOLIDAY",
		title: "명절 선물",
		description: "임직원과 거래처에 감사의 마음을 전할 수 있도록 예산과 수량에 맞는 시즌 MD를 제안합니다.",
	},
	{
		icon: PartyPopper,
		eyebrow: "EVENT",
		title: "행사·답례 선물",
		description: "참석자 선물과 답례품, 기념품까지 행사의 성격과 대상에 어울리는 구성을 함께 찾습니다.",
	},
	{
		icon: Building2,
		eyebrow: "BUSINESS",
		title: "기업 단체 선물",
		description: "프로모션과 복지, 고객 감사 선물에 필요한 수량 확보부터 배송 준비까지 간편하게 진행합니다.",
	},
];

const giftImages = [
	"/gift/gift-1.png",
	"/gift/gift-2.png",
	"/gift/gift-3.png",
	"/gift/gift-4.png",
	"/gift/gift-5.png",
	"/gift/gift-6.png",
];

const strengths: Array<{ icon: LucideIcon; title: string; description: string; badge?: string }> = [
	{
		icon: Sparkles,
		title: "최신 MD 맞춤 제안",
		description: "시즌마다 달라지는 상품과 재고를 확인해 용도, 대상, 예산에 어울리는 구성을 제안합니다.",
	},
	{
		icon: PackageCheck,
		title: "포장·출고 준비 대행",
		description: "상품 선택 이후의 포장과 배송지 확인, 출고 준비까지 한 번에 맡아 복잡한 실무를 줄입니다.",
	},
	{
		icon: Truck,
		title: "내륙 지역 배송비 무료",
		description: "제주 및 도서·산간 지역을 제외한 내륙 배송은 별도의 배송비 부담 없이 준비합니다.",
		badge: "FREE DELIVERY",
	},
	{
		icon: Gift,
		title: "맞춤 포장 지원",
		description: "별도 포장이 필요한 경우 수량과 견적 조건에 따라 맞춤 포장을 무료로 제공할 수 있습니다.",
		badge: "CUSTOM WRAPPING",
	},
];

const process = [
	{ number: "01", title: "용도·예산 상담", description: "선물 대상과 일정, 예산, 필요한 수량을 알려주세요." },
	{ number: "02", title: "MD·재고 제안", description: "준비 가능한 최신 MD와 추천 구성을 안내합니다." },
	{ number: "03", title: "상품·포장 확정", description: "상품 수량과 포장 방식, 배송 정보를 최종 확인합니다." },
	{ number: "04", title: "배송 준비·출고", description: "포장부터 배송 준비까지 마친 뒤 일정에 맞춰 출고합니다." },
];

export default function GiftPage() {
	return (
		<div className="bg-white text-slate-900">
			<section className="relative isolate min-h-[44rem] overflow-hidden bg-[#102B24] text-white">
				<video className="absolute inset-0 -z-20 size-full object-cover" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
					<source src="/videos/gift.mp4" type="video/mp4" />
				</video>
				<div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#102B24]/95 via-[#102B24]/75 to-[#102B24]/25" />
				<div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#102B24]/75 via-transparent to-black/15" />

				<ScreenSection className="flex min-h-[44rem] items-center py-20 sm:py-28">
					<div className="max-w-3xl">
						<TitleBadge className="pb-2">
							<TitleBadge.Icon backgroundColor={["#04D48F", "#009249"]} icon={Gift} className="text-white shadow-none" />
							<TitleBadge.Title className="text-white">이디야 시즌 기프트</TitleBadge.Title>
							<TitleBadge.Badge className="border-white/25 bg-white/10 text-white">SEASONAL</TitleBadge.Badge>
						</TitleBadge>
						<h1 className="mt-7 text-4xl font-black leading-[1.16] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
							이디야 MD 선물,
							<br />
							선택부터 <span className="text-[#91E2BD]">포장·배송까지</span> 한 번에
						</h1>
						<p className="mt-7 max-w-2xl text-base leading-8 text-emerald-50/85 sm:text-lg">
							행사와 명절, 기업의 특별한 순간에 어울리는 이디야 MD를 제안합니다. 상품 확보부터 포장과 배송 준비까지 맡기고,
							 전하고 싶은 마음에만 집중하세요.
						</p>
						<div className="mt-9 flex flex-col gap-3 sm:flex-row">
							<Link
								href="#gift-solution"
								className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-white px-6 text-sm font-black text-[#102B24] transition hover:bg-emerald-50"
							>
								선물 솔루션 살펴보기
								<ArrowRight aria-hidden="true" className="size-4" />
							</Link>
							<Link
								href="#latest-md"
								className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/5 px-6 text-sm font-black text-white backdrop-blur-md transition hover:bg-white/15"
							>
								최신 MD 받아보기
							</Link>
						</div>
					</div>
				</ScreenSection>
			</section>

			<section className="border-b border-slate-200 bg-[#F7F8F5] py-16 sm:py-20">
				<ScreenSection className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
					<div>
						<TitleBadge>
							<TitleBadge.Icon backgroundColor={["#04D48F", "#009249"]} icon={Sparkles} className="text-white shadow-none" />
							<TitleBadge.Title>상황별 선물 제안</TitleBadge.Title>
							<TitleBadge.Badge className="border-[#009249] text-[#009249]">MOMENT</TitleBadge.Badge>
						</TitleBadge>
						<h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.035em] sm:text-4xl">
							선물이 필요한 순간마다
							<br />알맞은 방법을 제안합니다.
						</h2>
					</div>
					<p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
						MD 상품은 시즌과 재고에 따라 계속 달라집니다. 정해진 세트를 일방적으로 권하기보다 선물의 목적과 받는 분, 예산과
						 수량을 먼저 확인하고 그 시점에 준비할 수 있는 가장 알맞은 구성을 찾아드립니다.
					</p>
				</ScreenSection>
			</section>

			<section id="gift-solution" className="scroll-mt-24 py-20 sm:py-28">
				<ScreenSection>
					<div className="max-w-2xl">
						<TitleBadge>
							<TitleBadge.Icon backgroundColor={["#04D48F", "#009249"]} icon={PartyPopper} className="text-white shadow-none" />
							<TitleBadge.Title>기프트 활용 장면</TitleBadge.Title>
							<TitleBadge.Badge className="border-[#009249] text-[#009249]">OCCASION</TitleBadge.Badge>
						</TitleBadge>
						<h2 className="mt-4 text-3xl font-black tracking-[-0.035em] sm:text-4xl">어떤 선물을 준비하고 계신가요?</h2>
					</div>

					<div className="mt-10 grid gap-5 lg:grid-cols-3">
						{giftMoments.map(({ icon: Icon, eyebrow, title, description }) => (
							<article key={title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
								<div className="flex items-center justify-between gap-4">
									<span className="inline-flex size-12 items-center justify-center rounded-2xl bg-emerald-50 text-[#087443]">
										<Icon aria-hidden="true" className="size-5" />
									</span>
									<span className="text-[0.6875rem] font-black tracking-[0.16em] text-slate-400">{eyebrow}</span>
								</div>
								<h3 className="mt-7 text-xl font-black">{title}</h3>
								<p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
							</article>
						))}
					</div>
				</ScreenSection>
			</section>

			<section className="overflow-hidden bg-[#F3EAE5] py-20 sm:py-28">
				<ScreenSection>
					<div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
						<div className="max-w-2xl">
							<TitleBadge>
								<TitleBadge.Icon backgroundColor={["#D69373", "#9A553E"]} icon={Gift} className="text-white shadow-none" />
								<TitleBadge.Title>시즌 컬렉션</TitleBadge.Title>
								<TitleBadge.Badge className="border-[#9A553E] text-[#9A553E]">COLLECTION</TitleBadge.Badge>
							</TitleBadge>
							<h2 className="mt-4 text-3xl font-black tracking-[-0.035em] sm:text-4xl">시즌마다 새롭게 만나는 이디야 MD</h2>
						</div>
						<p className="text-sm font-bold text-[#7C5A4E]">아래 이미지는 상품 구성 예시입니다.</p>
					</div>

					<div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
						{giftImages.map((image, index) => (
							<figure key={image} className={`relative overflow-hidden rounded-2xl bg-white/70 ${index === 0 || index === 5 ? "aspect-[4/5] md:row-span-2 md:aspect-auto" : "aspect-square"}`}>
								<Image src={image} alt={`이디야 시즌 MD 상품 구성 예시 ${index + 1}`} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-contain p-3 transition duration-500 hover:scale-105 sm:p-5" />
							</figure>
						))}
					</div>

					<div className="mt-6 flex gap-3 rounded-2xl border border-[#C89C8A]/35 bg-white/55 p-5 text-sm leading-6 text-[#6D4A3E]">
						<BadgeCheck aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-[#9A553E]" />
						<p>실제 판매 상품과 구성은 시즌, 주문 시점, 재고 상황에 따라 달라질 수 있습니다. 상담 시 준비 가능한 최신 목록을 별도로 안내해 드립니다.</p>
					</div>
				</ScreenSection>
			</section>

			<section className="py-20 sm:py-28">
				<ScreenSection>
					<div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
						<div>
							<TitleBadge>
								<TitleBadge.Icon backgroundColor={["#04D48F", "#009249"]} icon={PackageCheck} className="text-white shadow-none" />
								<TitleBadge.Title>올인원 준비 서비스</TitleBadge.Title>
								<TitleBadge.Badge className="border-[#009249] text-[#009249]">SERVICE</TitleBadge.Badge>
							</TitleBadge>
							<h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.035em] sm:text-4xl">
								상품만 고르세요.
								<br />나머지는 준비해 드립니다.
							</h2>
							<p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
								많은 수량의 선물을 직접 포장하고 배송하는 번거로움까지 줄일 수 있도록 상품 확보 이후의 과정도 함께합니다.
							</p>
						</div>

						<div className="grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 sm:grid-cols-2">
							{strengths.map(({ icon: Icon, title, description, badge }) => (
								<article key={title} className="relative bg-white p-7 sm:p-8">
									<div className="flex items-start justify-between gap-3">
										<span className="inline-flex size-11 items-center justify-center rounded-xl bg-emerald-50 text-[#087443]">
											<Icon aria-hidden="true" className="size-5" />
										</span>
										{badge ? <span className="rounded-full bg-[#102B24] px-3 py-1 text-[0.625rem] font-black tracking-[0.12em] text-white">{badge}</span> : null}
									</div>
									<h3 className="mt-5 text-lg font-black">{title}</h3>
									<p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
								</article>
							))}
						</div>
					</div>

					<div className="mt-8 grid gap-4 rounded-3xl bg-[#102B24] p-6 text-white sm:p-8 lg:grid-cols-[auto_1fr_auto] lg:items-center">
						<span className="inline-flex size-12 items-center justify-center rounded-2xl bg-white/10 text-[#91E2BD]">
							<MapPinOff aria-hidden="true" className="size-5" />
						</span>
						<div>
							<h3 className="font-black">배송 및 맞춤 포장 안내</h3>
							<p className="mt-2 text-sm leading-6 text-emerald-50/70">
								무료 배송은 내륙 지역 기준이며 제주 및 도서·산간 지역은 서비스가 제한될 수 있습니다. 맞춤 포장 무료 제공 여부는 주문 수량과 견적 조건 확인 후 안내합니다.
							</p>
						</div>
						<Link href="#latest-md" className="inline-flex items-center gap-2 text-sm font-black text-[#91E2BD]">
							최신 구성 문의하기
							<ArrowRight aria-hidden="true" className="size-4" />
						</Link>
					</div>
				</ScreenSection>
			</section>

			<section className="bg-[#F7F8F5] py-20 sm:py-28">
				<ScreenSection>
					<div className="text-center">
						<TitleBadge className="justify-center">
							<TitleBadge.Icon backgroundColor={["#04D48F", "#009249"]} icon={ArrowRight} className="text-white shadow-none" />
							<TitleBadge.Title>진행 단계</TitleBadge.Title>
							<TitleBadge.Badge className="border-[#009249] text-[#009249]">PROCESS</TitleBadge.Badge>
						</TitleBadge>
						<h2 className="mt-4 text-3xl font-black tracking-[-0.035em] sm:text-4xl">상담부터 출고까지 네 단계로</h2>
					</div>

					<ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
						{process.map((step, index) => (
							<li key={step.number} className="relative rounded-2xl border border-slate-200 bg-white p-6">
								<div className="flex items-center justify-between">
									<span className="text-xs font-black tracking-[0.16em] text-[#087443]">STEP {step.number}</span>
									{index < process.length - 1 ? <ArrowRight aria-hidden="true" className="hidden size-4 text-slate-300 lg:block" /> : <Check aria-hidden="true" className="size-4 text-[#087443]" />}
								</div>
								<h3 className="mt-6 text-lg font-black">{step.title}</h3>
								<p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
							</li>
						))}
					</ol>
				</ScreenSection>
			</section>

			<section id="latest-md" className="scroll-mt-24 py-20 sm:py-28">
				<ScreenSection>
					<div className="relative overflow-hidden rounded-[2rem] bg-[#153D32] px-6 py-12 text-white sm:px-12 sm:py-16 lg:px-16 lg:py-20">
						<div className="absolute -right-20 -top-24 size-72 rounded-full border-[3rem] border-white/5" />
						<div className="absolute -bottom-24 left-1/3 size-56 rounded-full bg-emerald-300/5 blur-2xl" />
						<div className="relative grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end">
							<div className="max-w-2xl">
								<TitleBadge className="pb-0">
									<TitleBadge.Icon backgroundColor={["#04D48F", "#009249"]} icon={Mail} className="text-white shadow-none" />
									<TitleBadge.Title className="text-white">최신 MD 소식</TitleBadge.Title>
									<TitleBadge.Badge className="border-white/25 bg-white/10 text-white">NEWS</TitleBadge.Badge>
								</TitleBadge>
								<h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.035em] sm:text-4xl">
									새로운 이디야 MD,
									<br />가장 먼저 받아보세요.
								</h2>
								<p className="mt-5 text-sm leading-7 text-emerald-50/75 sm:text-base">
									시즌마다 달라지는 최신 MD 상품과 단체 선물 구성을 카카오톡 또는 이메일로 안내해 드립니다.
								</p>
							</div>

							<div className="grid gap-3">
								<Link
									href={KAKAO_CHANNEL_URL}
									className="inline-flex min-h-14 items-center justify-between gap-4 rounded-xl bg-[#FEE500] px-6 text-sm font-black text-[#191919] transition hover:bg-[#F4DC00]"
								>
									<span className="inline-flex items-center gap-3">
										<MessageCircle aria-hidden="true" className="size-5" />
										최신 MD 상품 받아보기
									</span>
									<ArrowRight aria-hidden="true" className="size-4" />
								</Link>
								<a
									href={emailSubscriptionHref}
									className="inline-flex min-h-14 items-center justify-between gap-4 rounded-xl border border-white/25 bg-white/10 px-6 text-sm font-black text-white transition hover:bg-white/15"
								>
									<span className="inline-flex items-center gap-3">
										<Mail aria-hidden="true" className="size-5" />
										이메일로 받아보기
									</span>
									<ArrowRight aria-hidden="true" className="size-4" />
								</a>
								<p className="px-1 text-xs leading-5 text-emerald-50/55">
									이메일 버튼을 누르면 구독 신청 내용이 입력된 메일 작성 화면이 열립니다. 카카오톡 채널 주소는 실제 채널 링크로 교체할 수 있습니다.
								</p>
							</div>
						</div>
					</div>
				</ScreenSection>
			</section>
		</div>
	);
}
