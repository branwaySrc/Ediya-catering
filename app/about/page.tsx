import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Coffee, MapPin, MapPinned, MessageCircleMore, RefreshCw, Sparkles, Store, Truck } from "lucide-react";

import { CopyAddressButton } from "@/domains/about/copy-address-button";
import { Button } from "@/share/button";
import { ScreenSection } from "@/share/screen-section";
import { TitleBadge } from "@/share/title-badge";

export { metadata } from "./meta";

const branches = [
	{
		name: "이디야커피 안산 월피동점",
		address: "경기도 안산시 상록구 월피동 492-16번지 103호",
		mapHref: `https://map.naver.com/p/search/${encodeURIComponent("이디야커피 안산 월피동점")}`,
		copyAddress: "경기도 안산시 상록구 월피동 492-16번지 103호",
		image: "/ediya-rental-wolfee.jpg",
		imageAlt: "월피동점 매장 전경",
	},
	{
		name: "이디야커피 안산 동안산병원점",
		address: "경기도 안산시 상록구 월피동 474-11",
		mapHref: `https://map.naver.com/p/search/${encodeURIComponent("이디야커피 안산 동안산병원점")}`,
		copyAddress: "경기도 안산시 상록구 월피동 474-11",
		image: "/ediya-rental-dongansan.jpg",
		imageAlt: "동안산병원점 매장 전경",
	},
];

const services = [
	{
		number: "01",
		title: "커피 케이터링",
		subtitle: "빠른 준비, 간편하고 확실하게",
		image: "/catering-herobgv03.png",
		contactHref: "/contact?service=catering",
		detailHref: "/catering",
		accent: "bg-[#1C5DBE]",
		imageClassName: "object-cover object-center",
	},
	{
		number: "02",
		title: "오피스 스낵바",
		subtitle: "비즈니스 공간에 탁월한 스낵바",
		image: "/snackbar-lounge-station.png",
		contactHref: "/contact?service=snackbar",
		detailHref: "/snackbar",
		accent: "bg-[#E96106]",
		imageClassName: "object-contain p-7",
	},
	{
		number: "03",
		title: "시즌 기프트",
		subtitle: "시즌에 알맞는 MD기프트 준비",
		image: "/gift/gift.png",
		contactHref: "/contact?service=gift",
		detailHref: "/gift",
		accent: "bg-[#009249]",
		imageClassName: "object-contain p-7",
	},
	{
		number: "04",
		title: "공간대여",
		subtitle: "야간 매장 공간 대여",
		image: "/ediya-rental-wolfee.jpg",
		contactHref: "/contact?service=rental",
		detailHref: "/rental",
		accent: "bg-[#8B5CF6]",
		imageClassName: "object-cover object-center",
	},
];

const consultationExamples = [
	{
		request: "🙍‍♂️  30명 규모 세미나에 커피와 간단한 다과가 필요해요.",
		solution: "커피 케이터링",
		answer: "행사 시간과 참석 인원에 맞춰 음료, 베이커리, 세팅 방식까지 한 번에 제안합니다.",
		tags: ["행사", "30명", "현장 세팅"],
	},
	{
		request: "🙎‍♀️  직원들이 매일 이용할 간식 코너를 만들고 싶어요.",
		solution: "오피스 스낵바",
		answer: "공간 크기와 이용 패턴을 기준으로 음료와 스낵 구성을 잡고, 정기 보충 방식까지 안내합니다.",
		tags: ["사무실", "정기 관리", "복지"],
	},
	{
		request: "🙍‍♂️  명절 선물을 준비해야 하는데 너무 무겁지 않았으면 해요.",
		solution: "시즌 기프트",
		answer: "예산과 전달 대상에 맞춰 부담 없는 커피 선물 구성을 추천하고 수량별 준비 일정을 맞춥니다.",
		tags: ["선물", "예산 맞춤", "수량 준비"],
	},
];

const process = [
	{ icon: MessageCircleMore, title: "상담 신청", description: "일정과 장소, 인원, 예산 산정" },
	{ icon: Check, title: "맞춤 제안", description: "목적에 맞는 구성과 견적 안내" },
	{ icon: Truck, title: "준비 및 진행", description: "일정에 맞춘 납품 및 운영 설치" },
	{ icon: RefreshCw, title: "운영 지원", description: "필요에 따라 현장 및 정기 운영 지원" },
];

export default function AboutPage() {
	return (
		<div className="bg-white text-slate-900">
			<section className="relative isolate overflow-hidden bg-[#172966] text-white">
				<div className="absolute -right-28 top-24 -z-10 size-96 rounded-full border border-white/10" />
				<div className="absolute -right-5 top-48 -z-10 size-52 rounded-full border border-white/10" />

				<ScreenSection className="flex min-h-[42rem] items-center justify-center py-20 text-center lg:py-28">
					<div className="mx-auto max-w-3xl">
						<TitleBadge className="justify-center pb-2">
							<TitleBadge.Icon backgroundColor={["#4A8DF1", "#1C5DBE"]} icon={MapPin} className="text-white shadow-none" />
							<TitleBadge.Title className="text-white">이디야 커피 안산</TitleBadge.Title>
							<TitleBadge.Badge backgroundColor="" className="border-white/25 text-white">
								BRANCH
							</TitleBadge.Badge>
						</TitleBadge>
						<h1 className="font-bold leading-[1.2] tracking-[-0.04em] text-5xl lg:text-6xl py-5">
							비즈니스도
							<br />
							이디야 커피와 함께
						</h1>
						<p className="mx-auto mt-7 max-w-xl text-blue-100/90 text-lg">
							비즈니스 커피 솔루션, 이디야 커피.
							<br />
							비즈니스에 알맞는 목적과 예산에 맞춰 제안합니다.
						</p>
						<div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
							<Link
								href="#solutions"
								className="inline-flex h-12 items-center justify-center w-full gap-2 rounded-lg bg-white px-6 text-sm font-bold text-[#172966] transition hover:bg-blue-50"
							>
								서비스 살펴보기
								<ArrowRight className="size-4" aria-hidden="true" />
							</Link>
							<Link
								href="#contact"
								className="inline-flex h-12 items-center justify-center w-full gap-2 rounded-lg border border-white/30 px-6 text-sm font-bold text-white transition hover:bg-white/10"
							>
								맞춤 상담하기
							</Link>
						</div>
					</div>
				</ScreenSection>
			</section>

			<section className="border-b border-slate-200 bg-slate-50">
				<ScreenSection className="py-20 lg:py-28">
					<div className="mx-auto max-w-3xl text-center">
						<TitleBadge className="justify-center">
							<TitleBadge.Icon backgroundColor={["#4A8DF1", "#1C5DBE"]} icon={Store} className="text-white shadow-none" />
							<TitleBadge.Title>이디야 커피 매장 소개</TitleBadge.Title>
							<TitleBadge.Badge className="border-[#1C5DBE] text-[#1C5DBE]">ABOUT</TitleBadge.Badge>
						</TitleBadge>
						<h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.03em] text-slate-900 sm:text-4xl">
							깊은 노하우를 가진
							<br />
							이디야 커피 안산 지점입니다.
						</h2>
						<p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600 text-lg">
							실제 매장을 운영하며 만든 노하우로, 메뉴 추천과 구성을
							<br />더 빠르고 책임있는 준비를 약속합니다.
						</p>
					</div>

					<div className="-mx-4 mt-12 overflow-x-auto overscroll-x-contain px-4 pb-3 sm:-mx-6 sm:px-6 md:mx-auto md:grid md:max-w-5xl md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
						<div className="flex snap-x snap-mandatory gap-5 md:contents">
							{branches.map(branch => (
								<article
									key={branch.name}
									className="group flex w-[84vw] max-w-[24rem] shrink-0 snap-center flex-col overflow-hidden rounded-lg border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:w-[22rem] md:w-auto md:max-w-none md:shrink md:snap-none"
								>
									<div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
										<Image
											src={branch.image}
											alt={branch.imageAlt}
											fill
											sizes="(max-width: 768px) 84vw, 40vw"
											className="object-cover transition duration-500 group-hover:scale-105"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-[#101D4B]/45 via-transparent to-transparent" />
									</div>
									<div className="flex flex-1 flex-col p-4 sm:p-6">
										<div className="flex items-start">
											<div>
												<h3 className="text-lg font-bold text-slate-900 sm:text-xl">{branch.name}</h3>
												<p className="mt-3 flex gap-2 text-sm leading-6 text-slate-500">
													<MapPin className="mt-1 size-4 shrink-0 text-[#1C5DBE]" aria-hidden="true" />
													{branch.address}
												</p>
											</div>
										</div>
										<div className="mt-auto grid gap-2 pt-5 sm:grid-cols-2">
											<Button.Link
												href={branch.mapHref}
												target="_blank"
												rel="noopener noreferrer"
												variant="primary"
												icon={MapPinned}
												className="w-full bg-green-700"
											>
												네이버지도 검색
											</Button.Link>
											<CopyAddressButton address={branch.copyAddress} className="w-full" />
										</div>
									</div>
								</article>
							))}
						</div>
					</div>
				</ScreenSection>
			</section>

			<section id="solutions" className="scroll-mt-24 py-20 sm:py-28">
				<ScreenSection>
					<div className="max-w-2xl">
						<TitleBadge>
							<TitleBadge.Icon backgroundColor={["#4A8DF1", "#1C5DBE"]} icon={Coffee} className="text-white shadow-none" />
							<TitleBadge.Title>운영 솔루션</TitleBadge.Title>
							<TitleBadge.Badge className="border-[#1C5DBE] text-[#1C5DBE]">SOLUTIONS</TitleBadge.Badge>
						</TitleBadge>
						<h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-slate-900 sm:text-4xl">필요한 순간마다, 편리하고 간편하게.</h2>
					</div>

					<div className="-mx-4 mt-12 overflow-x-auto overscroll-x-contain px-4 pb-3 sm:-mx-6 sm:px-6 md:mx-0 md:overflow-visible md:px-0 md:pb-0">
						<div className="flex snap-x snap-mandatory gap-5 md:grid md:grid-cols-2 md:gap-6 xl:grid-cols-4">
							{services.map(service => {
								return (
									<div
										key={service.title}
										className="flex w-[82vw] max-w-[22rem] shrink-0 snap-start flex-col sm:w-[21rem] md:w-auto md:max-w-none md:shrink md:snap-none"
									>
										<TitleBadge className="gap-2 pb-0">
											<TitleBadge.Badge backgroundColor="" className={`${service.accent} border-transparent px-3 py-1 text-white`}>
												{`SOLUTION ${service.number}`}
											</TitleBadge.Badge>
										</TitleBadge>
										<article className="group flex flex-1 flex-col overflow-hidden rounded-lg border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg">
											<div className="relative aspect-4/3 overflow-hidden bg-slate-100">
												<Image
													src={service.image}
													alt={`${service.title} 서비스 이미지`}
													fill
													sizes="(max-width: 767px) 82vw, (max-width: 1279px) 50vw, 25vw"
													className={`${service.imageClassName} transition duration-500 group-hover:scale-105`}
												/>
											</div>
											<div className="flex flex-1 flex-col p-4">
												<h3 className="mt-3 text-xl font-bold text-slate-900">{service.title}</h3>
												<p className="mt-1 text-base text-slate-500">{service.subtitle}</p>
												<div className="mt-auto flex flex-col gap-3 pt-5">
													<Link
														href={service.contactHref}
														className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#1B2E74] px-5 text-sm font-bold text-white transition hover:bg-[#15255F]"
													>
														서비스 상담하기
														<ArrowRight className="size-4" aria-hidden="true" />
													</Link>
													<Link
														href={service.detailHref}
														className="inline-flex h-11 items-center justify-center rounded-lg border border-[#1B2E74]/15 px-5 text-sm font-bold text-[#1B2E74] transition hover:bg-slate-50"
													>
														자세히보기
													</Link>
												</div>
											</div>
										</article>
									</div>
								);
							})}
						</div>
					</div>
				</ScreenSection>
			</section>

			<section className="bg-[#F3F6FB] py-20 sm:py-28">
				<ScreenSection>
					<div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr] lg:gap-16">
						<div className="lg:sticky lg:top-28 lg:self-start">
							<TitleBadge>
								<TitleBadge.Icon backgroundColor={["#4A8DF1", "#1C5DBE"]} icon={Sparkles} className="text-white shadow-none" />
								<TitleBadge.Title>상담 제안</TitleBadge.Title>
								<TitleBadge.Badge className="border-[#1C5DBE] text-[#1C5DBE]">REPLY</TitleBadge.Badge>
							</TitleBadge>
							<h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.03em] text-slate-900 sm:text-4xl">
								함께 고민하는 <br /> 비즈니스 파트너
							</h2>
							<p className="mt-5 text-lg leading-7 text-slate-600">
								함께 고민하는 최적의 행사 파트너가
								<br />
								되어 드리겠습니다.
							</p>
							<div className="mt-8 rounded-lg border border-[#1C5DBE]/15 bg-white p-5">
								<p className="text-sm font-bold text-[#1C5DBE]">상담 시, 필요 내용</p>
								<ul className="mt-4 space-y-2 text-base leading-6 text-slate-600">
									<li>✔️ ​일정과 장소, 예상 인원</li>
									<li>✔️​ 필요한 상품 범위와 예산</li>
									<li>✔️​ 세팅, 배송, 정기 관리 여부</li>
								</ul>
							</div>
						</div>

						<div className="grid gap-5">
							{consultationExamples.map(example => {
								return (
									<article key={example.solution} className="rounded-lg border border-slate-200 bg-white p-5 sm:p-6">
										<div className="flex items-start gap-4">
											<div className="min-w-0 flex-1">
												<p className="text-xs font-bold tracking-[0.14em] text-slate-400">상담내용</p>
												<p className="mt-2 rounded-lg bg-slate-100 px-4 py-3 text-base font-bold leading-7 text-slate-800">{example.request}</p>
											</div>
										</div>
										<div className="mt-5 grid gap-4 border-t border-slate-100 pt-5 sm:grid-cols-[auto_1fr]">
											<div>
												<div className="flex flex-wrap items-center gap-2">
													<span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-[#1C5DBE]">추천 솔루션</span>
													<h3 className="text-xl font-bold text-slate-900">{example.solution}</h3>
												</div>
												<p className="mt-3 text-base text-slate-600">{example.answer}</p>
												<div className="mt-4 flex flex-wrap gap-2">
													{example.tags.map(tag => (
														<span key={tag} className="rounded-full border border-slate-200 px-3 py-1 text-xs font-bold text-slate-500">
															{tag}
														</span>
													))}
												</div>
											</div>
										</div>
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
						<TitleBadge className="justify-center">
							<TitleBadge.Icon backgroundColor={["#4A8DF1", "#1C5DBE"]} icon={RefreshCw} className="text-white shadow-none" />
							<TitleBadge.Title>운영 방식</TitleBadge.Title>
							<TitleBadge.Badge className="border-[#1C5DBE] text-[#1C5DBE]">PROCESS</TitleBadge.Badge>
						</TitleBadge>
						<h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-slate-900 sm:text-4xl">솔루션 진행 프로세스 안내</h2>
					</div>

					<ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
						{process.map((step, index) => {
							const Icon = step.icon;

							return (
								<li key={step.title} className="relative rounded-lg border border-slate-200 p-5">
									<div className="flex items-center justify-between">
										<span className="inline-flex size-11 items-center justify-center rounded-md bg-[#172966] text-white">
											<Icon className="size-5" aria-hidden="true" />
										</span>
										<span className="text-3xl font-bold text-slate-300">{String(index + 1).padStart(2, "0")}</span>
									</div>
									<h3 className="mt-6 text-lg font-bold text-slate-900">{step.title}</h3>
									<p className="mt-2 text-base leading-6 text-slate-600">{step.description}</p>
								</li>
							);
						})}
					</ol>
				</ScreenSection>
			</section>
		</div>
	);
}
