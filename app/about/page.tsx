import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
	ArrowRight,
	Building2,
	Check,
	Coffee,
	Gift,
	HeartHandshake,
	MapPin,
	MessageCircleMore,
	PackageCheck,
	Phone,
	RefreshCw,
	Sparkles,
	Store,
	Truck,
	Utensils,
} from "lucide-react";

import { ScreenSection } from "@/share/screen-section";

export const metadata: Metadata = {
	title: "지점 소개 | 이디야커피 안산 비즈니스 솔루션",
	description: "이디야커피 안산 월피동점과 동안산병원점이 함께 제공하는 커피 케이터링, 오피스 스낵바, 시즌 커피 선물 솔루션을 소개합니다.",
};

const branches = [
	{
		name: "이디야커피 안산 월피동점",
		address: "경기도 안산시 상록구 월피동 492-16번지 103호",
		label: "운영 지점",
		image: "/catering-herobgv03.png",
		imageAlt: "월피동점에서 제공하는 이디야 케이터링 서비스",
	},
	{
		name: "이디야커피 안산 동안산병원점",
		address: "경기도 안산시 상록구 월피동 474-11",
		label: "공동 운영점",
		image: "/snackbar-lounge-station.png",
		imageAlt: "동안산병원점에서 제공하는 이디야 스낵바 서비스",
	},
];

const services = [
	{
		number: "01",
		title: "커피 케이터링",
		subtitle: "행사에 카페를 더합니다",
		description: "기업 행사와 세미나, 기관 모임의 규모와 분위기에 맞춰 음료와 다과 구성을 제안합니다.",
		image: "/catering-herobgv03.png",
		href: "#contact",
		icon: Coffee,
		accent: "bg-[#1C5DBE]",
		imageClassName: "object-cover object-center",
	},
	{
		number: "02",
		title: "오피스 스낵바",
		subtitle: "일하는 공간에 여유를 더합니다",
		description: "사무실 환경과 이용 인원에 맞춘 음료·스낵 구성을 정기적으로 채우고 관리합니다.",
		image: "/snackbar-lounge-station.png",
		href: "#contact",
		icon: Utensils,
		accent: "bg-[#E96106]",
		imageClassName: "object-contain p-7",
	},
	{
		number: "03",
		title: "시즌 커피 선물",
		subtitle: "감사의 마음을 알맞게 전합니다",
		description: "연말과 명절, 기념일의 목적과 예산에 맞춰 이디야 커피 선물 구성을 제안합니다.",
		image: "/gift/gift.png",
		href: "#contact",
		icon: Gift,
		accent: "bg-[#009249]",
		imageClassName: "object-contain p-7",
	},
];

const strengths = [
	{
		icon: Store,
		title: "매장에서 시작된 경험",
		description: "고객을 매일 만나는 두 매장의 운영 경험을 바탕으로 필요한 구성을 현실적으로 제안합니다.",
	},
	{
		icon: Sparkles,
		title: "목적에 맞춘 구성",
		description: "행사의 성격, 이용 인원, 공간과 예산을 함께 살펴 불필요함은 줄이고 만족도는 높입니다.",
	},
	{
		icon: PackageCheck,
		title: "한 번에 준비하는 솔루션",
		description: "커피와 티, 다과, 스낵, 선물까지 여러 준비를 하나의 상담으로 간편하게 해결합니다.",
	},
	{
		icon: HeartHandshake,
		title: "안산 지역의 유연한 대응",
		description: "지역을 잘 아는 운영자가 상담부터 준비까지 직접 소통하며 꼼꼼하게 대응합니다.",
	},
];

const process = [
	{ icon: MessageCircleMore, title: "상담", description: "일정과 장소, 인원, 예산을 알려주세요." },
	{ icon: Check, title: "맞춤 제안", description: "목적에 맞는 구성과 견적을 안내합니다." },
	{ icon: Truck, title: "준비·진행", description: "약속한 일정에 맞춰 납품 또는 설치합니다." },
	{ icon: RefreshCw, title: "운영 지원", description: "필요에 따라 현장 및 정기 운영을 지원합니다." },
];

export default function AboutPage() {
	return (
		<div className="bg-white text-slate-900">
			<section className="relative isolate overflow-hidden bg-[#172966] text-white">
				<div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_75%_18%,rgba(67,117,220,0.7),transparent_28%),radial-gradient(circle_at_10%_85%,rgba(12,25,71,0.9),transparent_35%)]" />
				<div className="absolute -right-28 top-24 -z-10 size-96 rounded-full border border-white/10" />
				<div className="absolute -right-5 top-48 -z-10 size-52 rounded-full border border-white/10" />

				<ScreenSection className="grid min-h-[42rem] items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
					<div className="max-w-2xl">
						<p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold tracking-[0.14em] text-blue-100">
							<MapPin className="size-3.5" aria-hidden="true" />
							EDIYA COFFEE · ANSAN
						</p>
						<h1 className="text-4xl font-black leading-[1.2] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
							안산의 두 이디야 매장이
							<br />
							함께 만드는 <span className="text-[#8FB8FF]">커피 솔루션</span>
						</h1>
						<p className="mt-7 max-w-xl text-base leading-8 text-blue-100/90 sm:text-lg">
							이디야커피 안산 월피동점과 동안산병원점이 함께 운영하는 안산 지역 비즈니스 커피 솔루션입니다. 행사의 한 잔부터 사무실의 매일, 감사의
							선물까지 목적과 예산에 맞춰 제안합니다.
						</p>
						<div className="mt-9 flex flex-col gap-3 sm:flex-row">
							<Link
								href="#solutions"
								className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-white px-6 text-sm font-bold text-[#172966] transition hover:bg-blue-50"
							>
								서비스 살펴보기
								<ArrowRight className="size-4" aria-hidden="true" />
							</Link>
							<Link
								href="#contact"
								className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/30 px-6 text-sm font-bold text-white transition hover:bg-white/10"
							>
								맞춤 상담하기
							</Link>
						</div>
					</div>

					<div className="relative mx-auto w-full max-w-xl lg:mx-0">
						<div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 shadow-2xl shadow-black/20 sm:aspect-[5/4]">
							<Image
								src="/catering-herobgv03.png"
								alt="커피와 디저트로 구성된 이디야 케이터링"
								fill
								priority
								sizes="(max-width: 1024px) 100vw, 45vw"
								className="object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-[#101D4B]/80 via-transparent to-transparent" />
							<div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/20 bg-[#101D4B]/80 p-5 backdrop-blur-md sm:inset-x-8 sm:bottom-8">
								<p className="text-xs font-bold tracking-[0.16em] text-blue-200">TWO STORES, ONE TEAM</p>
								<p className="mt-2 text-lg font-bold">두 매장의 경험을 하나의 서비스로</p>
							</div>
						</div>
					</div>
				</ScreenSection>
			</section>

			<section className="border-b border-slate-200 bg-slate-50">
				<ScreenSection className="py-16 lg:py-24">
					<div className="mx-auto max-w-3xl text-center">
						<p className="text-sm font-black tracking-[0.15em] text-[#1C5DBE]">WHO WE ARE</p>
						<h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.03em] text-slate-900 sm:text-4xl">
							지역을 잘 아는 두 매장이
							<br />한 팀으로 움직입니다.
						</h2>
						<p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
							이 서비스는 이디야커피 월피동점과 동안산병원점이 공동 운영하는 안산 지역 서비스입니다. 실제 매장을 운영하는 담당자와 직접 소통하며 더
							빠르고 구체적인 준비가 가능합니다.
						</p>
					</div>

					<div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
						{branches.map(branch => (
							<article
								key={branch.name}
								className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
							>
								<div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
									<Image
										src={branch.image}
										alt={branch.imageAlt}
										fill
										sizes="(max-width: 768px) 100vw, 40vw"
										className="object-cover transition duration-500 group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-[#101D4B]/45 via-transparent to-transparent" />
									<span className="absolute left-5 top-5 rounded-full border border-white/40 bg-white/90 px-3 py-1.5 text-[0.6875rem] font-black text-[#1C5DBE] shadow-sm backdrop-blur-sm">
										{branch.label}
									</span>
								</div>
								<div className="p-6 sm:p-7">
									<div className="flex items-start gap-4">
										<span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#172966] text-white">
											<Building2 className="size-5" aria-hidden="true" />
										</span>
										<div>
											<h3 className="text-lg font-black text-slate-900 sm:text-xl">{branch.name}</h3>
											<p className="mt-3 flex gap-2 text-sm leading-6 text-slate-500">
												<MapPin className="mt-1 size-4 shrink-0 text-[#1C5DBE]" aria-hidden="true" />
												{branch.address}
											</p>
										</div>
									</div>
								</div>
							</article>
						))}
					</div>
				</ScreenSection>
			</section>

			<section id="solutions" className="scroll-mt-24 py-20 sm:py-28">
				<ScreenSection>
					<div className="max-w-2xl">
						<p className="text-sm font-black tracking-[0.15em] text-[#1C5DBE]">OUR SOLUTIONS</p>
						<h2 className="mt-4 text-3xl font-black tracking-[-0.03em] text-slate-900 sm:text-4xl">필요한 순간마다, 알맞은 커피 경험</h2>
						<p className="mt-5 text-base leading-7 text-slate-600">
							한 번의 행사부터 매일 이용하는 사무실, 마음을 전하는 시즌 선물까지 세 가지 방식으로 함께합니다.
						</p>
					</div>

					<div className="mt-12 grid gap-6 lg:grid-cols-3">
						{services.map(service => {
							const Icon = service.icon;

							return (
								<article
									key={service.title}
									className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
								>
									<div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
										<Image
											src={service.image}
											alt={`${service.title} 서비스 이미지`}
											fill
											sizes="(max-width: 1024px) 100vw, 33vw"
											className={`${service.imageClassName} transition duration-500 group-hover:scale-105`}
										/>
										<span
											className={`absolute left-5 top-5 inline-flex size-11 items-center justify-center rounded-xl text-white shadow-lg ${service.accent}`}
										>
											<Icon className="size-5" aria-hidden="true" />
										</span>
									</div>
									<div className="p-6 sm:p-7">
										<p className="text-xs font-black tracking-[0.16em] text-slate-400">SOLUTION {service.number}</p>
										<h3 className="mt-3 text-2xl font-black text-slate-900">{service.title}</h3>
										<p className="mt-1 text-sm font-bold text-[#1C5DBE]">{service.subtitle}</p>
										<p className="mt-4 min-h-20 text-sm leading-7 text-slate-600">{service.description}</p>
										<Link
											href={service.href}
											className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition group-hover:gap-3 group-hover:text-[#1C5DBE]"
										>
											서비스 상담하기
											<ArrowRight className="size-4" aria-hidden="true" />
										</Link>
									</div>
								</article>
							);
						})}
					</div>
				</ScreenSection>
			</section>

			<section className="bg-[#F3F6FB] py-20 sm:py-28">
				<ScreenSection>
					<div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
						<div>
							<p className="text-sm font-black tracking-[0.15em] text-[#1C5DBE]">WHY US</p>
							<h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.03em] text-slate-900 sm:text-4xl">
								준비는 간편하게,
								<br />
								경험은 더 만족스럽게
							</h2>
							<p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
								정해진 상품을 단순히 전달하는 데 그치지 않고, 필요한 이유부터 함께 살펴 가장 잘 맞는 방법을 찾습니다.
							</p>
						</div>

						<div className="grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 sm:grid-cols-2">
							{strengths.map(strength => {
								const Icon = strength.icon;

								return (
									<article key={strength.title} className="bg-white p-7 sm:p-8">
										<span className="inline-flex size-11 items-center justify-center rounded-xl bg-blue-50 text-[#1C5DBE]">
											<Icon className="size-5" aria-hidden="true" />
										</span>
										<h3 className="mt-5 text-lg font-black text-slate-900">{strength.title}</h3>
										<p className="mt-3 text-sm leading-7 text-slate-600">{strength.description}</p>
									</article>
								);
							})}
						</div>
					</div>
				</ScreenSection>
			</section>

			<section className="py-20 sm:py-28">
				<ScreenSection>
					<div className="text-center">
						<p className="text-sm font-black tracking-[0.15em] text-[#1C5DBE]">HOW IT WORKS</p>
						<h2 className="mt-4 text-3xl font-black tracking-[-0.03em] text-slate-900 sm:text-4xl">상담부터 운영까지 함께합니다</h2>
					</div>

					<ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
						{process.map((step, index) => {
							const Icon = step.icon;

							return (
								<li key={step.title} className="relative rounded-2xl border border-slate-200 p-6">
									<div className="flex items-center justify-between">
										<span className="inline-flex size-11 items-center justify-center rounded-xl bg-[#172966] text-white">
											<Icon className="size-5" aria-hidden="true" />
										</span>
										<span className="text-3xl font-black text-slate-100">{String(index + 1).padStart(2, "0")}</span>
									</div>
									<h3 className="mt-6 text-lg font-black text-slate-900">{step.title}</h3>
									<p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
								</li>
							);
						})}
					</ol>
				</ScreenSection>
			</section>

			<section id="contact" className="scroll-mt-24 pb-20 sm:pb-28">
				<ScreenSection>
					<div className="relative overflow-hidden rounded-[2rem] bg-[#172966] px-6 py-12 text-white sm:px-12 sm:py-16 lg:px-16">
						<div className="absolute -right-24 -top-28 size-80 rounded-full border-[3rem] border-white/5" />
						<div className="relative grid gap-9 lg:grid-cols-[1fr_auto] lg:items-end">
							<div>
								<p className="text-sm font-bold tracking-[0.15em] text-blue-200">LET&apos;S TALK</p>
								<h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.03em] sm:text-4xl">
									행사의 한 잔부터 사무실의 매일,
									<br className="hidden sm:block" /> 감사의 선물까지 함께 준비합니다.
								</h2>
								<p className="mt-5 max-w-2xl text-sm leading-7 text-blue-100/80 sm:text-base">
									필요한 서비스와 예상 인원, 일정만 알려주셔도 좋습니다. 안산 지역 운영 담당자가 확인 후 알맞은 방법을 안내해 드립니다.
								</p>
							</div>
							<div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
								<a
									href="tel:01045147173"
									className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-white px-6 text-sm font-bold text-[#172966] transition hover:bg-blue-50"
								>
									<Phone className="size-4" aria-hidden="true" />
									010-4514-7173
								</a>
								<a
									href="mailto:contact@ediya-catering.kr"
									className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/30 px-6 text-sm font-bold text-white transition hover:bg-white/10"
								>
									이메일 문의하기
									<ArrowRight className="size-4" aria-hidden="true" />
								</a>
							</div>
						</div>
					</div>
				</ScreenSection>
			</section>
		</div>
	);
}
