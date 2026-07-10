import Image from "next/image";
import Link from "next/link";
import {
	ArrowRight,
	CalendarClock,
	Coffee,
	CreditCard,
	MapPin,
	MapPinned,
	MessageSquareMore,
	Package,
	Store,
	UtensilsCrossed,
} from "lucide-react";

import { ScreenSection } from "@/share/screen-section";
import { TitleBadge } from "@/share/title-badge";

export { metadata } from "./meta";

const rentalNotes = [
	{
		title: "대여 가능 시간",
		description: "매일 21시부터 다음날 07시까지 이용 가능합니다.",
		icon: CalendarClock,
	},
	{
		title: "기본 단가",
		description: "매장별 기본 대여료는 10만원에서 20만원 사이이며, 세부 요청에 따라 상담 후 확정됩니다.",
		icon: CreditCard,
	},
	{
		title: "메뉴 준비 안내",
		description: "메뉴가 필요할 경우 사전 요청을 통해 미리 준비합니다. 가능한 메뉴는 전 메뉴입니다.",
		icon: UtensilsCrossed,
	},
	{
		title: "용기 제공 방식",
		description: "모든 메뉴와 음료는 배달용 용기로 제공됩니다.",
		icon: Package,
	},
];

const rentalSpaces = [
	{
		name: "이디야 월피동점",
		address: "경기도 안산시 상록구 월피로 492-16 103호",
		price: "대여료 10만원",
		image: "/ediya-rental-wolfee.jpg",
		naverHref: "https://map.naver.com/p/search/%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EC%95%88%EC%82%B0%EC%8B%9C%20%EC%83%81%EB%A1%9D%EA%B5%AC%20%EC%9B%94%ED%94%BC%EB%A1%9C%20492-16%20103%ED%98%B8",
		kakaoHref: "https://map.kakao.com/link/search/%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EC%95%88%EC%82%B0%EC%8B%9C%20%EC%83%81%EB%A1%9D%EA%B5%AC%20%EC%9B%94%ED%94%BC%EB%A1%9C%20492-16%20103%ED%98%B8",
	},
	{
		name: "이디야 동안산병원점",
		address: "경기도 안산시 상록구 월피로 474-11",
		price: "대여료 20만원",
		image: "/ediya-rental-dongansan.jpg",
		naverHref: "https://map.naver.com/p/search/%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EC%95%88%EC%82%B0%EC%8B%9C%20%EC%83%81%EB%A1%9D%EA%B5%AC%20%EC%9B%94%ED%94%BC%EB%A1%9C%20474-11",
		kakaoHref: "https://map.kakao.com/link/search/%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EC%95%88%EC%82%B0%EC%8B%9C%20%EC%83%81%EB%A1%9D%EA%B5%AC%20%EC%9B%94%ED%94%BC%EB%A1%9C%20474-11",
	},
];

export default function RentalPage() {
	return (
		<div className="bg-white text-slate-900">
			<section className="border-b border-slate-200 bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)]">
				<ScreenSection className="py-18 sm:py-24 lg:py-28">
					<div className="mx-auto max-w-4xl text-center">
						<TitleBadge className="justify-center">
							<TitleBadge.Icon backgroundColor={["#4A8DF1", "#1C5DBE"]} icon={Store} className="text-white shadow-none" />
							<TitleBadge.Title>공간대여</TitleBadge.Title>
							<TitleBadge.Badge className="border-[#1C5DBE] text-[#1C5DBE]">RENTAL</TitleBadge.Badge>
						</TitleBadge>
						<h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
							이디야 안산 매장을
							<br className="hidden sm:block" /> 야간 공간으로 대여합니다
						</h1>
						<p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
							행사 뒤풀이, 소규모 모임, 야간 사용이 필요한 일정에 맞춰 월피동점과 동안산병원점을 대여할 수 있습니다.
							필요 시 메뉴도 사전 요청으로 함께 준비해드립니다.
						</p>
						<div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
							<Link
								href="#spaces"
								className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#1B2E74] px-6 text-sm font-bold text-white transition hover:bg-[#15255F]"
							>
								대여 공간 보기
								<ArrowRight className="size-4" aria-hidden="true" />
							</Link>
							<Link
								href="#contact"
								className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-[#1B2E74]/15 px-6 text-sm font-bold text-[#1B2E74] transition hover:bg-slate-50"
							>
								문의 안내 보기
							</Link>
						</div>
					</div>
				</ScreenSection>
			</section>

			<section className="py-20 sm:py-24">
				<ScreenSection>
					<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
						{rentalNotes.map((note) => {
							const Icon = note.icon;

							return (
								<article key={note.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
									<span className="inline-flex size-11 items-center justify-center rounded-xl bg-blue-50 text-[#1C5DBE]">
										<Icon className="size-5" aria-hidden="true" />
									</span>
									<h2 className="mt-4 text-lg font-bold text-slate-900">{note.title}</h2>
									<p className="mt-3 text-sm leading-7 text-slate-600">{note.description}</p>
								</article>
							);
						})}
					</div>
				</ScreenSection>
			</section>

			<section id="spaces" className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
				<ScreenSection>
					<div className="max-w-2xl">
						<TitleBadge>
							<TitleBadge.Icon backgroundColor={["#4A8DF1", "#1C5DBE"]} icon={MapPinned} className="text-white shadow-none" />
							<TitleBadge.Title>대여 가능 매장</TitleBadge.Title>
							<TitleBadge.Badge className="border-[#1C5DBE] text-[#1C5DBE]">SPACES</TitleBadge.Badge>
						</TitleBadge>
						<h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">두 매장 모두 대여 가능합니다</h2>
						<p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
							매장별 대여료를 각 카드에 함께 표기했습니다. 아래 버튼으로 네이버지도와 카카오지도에서도 위치를 바로 확인할 수 있습니다.
						</p>
					</div>

					<div className="mt-10 grid gap-6 lg:grid-cols-2">
						{rentalSpaces.map((space) => (
							<article key={space.name} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
								<div className="relative aspect-[16/9] overflow-hidden border-b border-slate-200 bg-slate-100">
									<Image src={space.image} alt={space.name} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
								</div>

								<div className="p-6 sm:p-7">
									<div className="flex items-center gap-2 text-slate-900">
										<Store className="size-4 shrink-0 text-[#1B2E74]" aria-hidden="true" />
										<h3 className="text-xl font-bold">{space.name}</h3>
									</div>

									<div className="mt-3 flex items-start gap-2 text-sm leading-7 text-slate-600">
										<MapPin className="mt-1 size-4 shrink-0 text-[#1B2E74]" aria-hidden="true" />
										<p>{space.address}</p>
									</div>

									<div className="mt-5 inline-flex rounded-full border border-[#1B2E74]/15 bg-[#F3F6FB] px-4 py-2 text-sm font-bold text-[#1B2E74]">
										{space.price}
									</div>

									<div className="mt-5 flex flex-col gap-3 sm:flex-row">
										<a
											href={space.naverHref}
											target="_blank"
											rel="noreferrer"
											className="inline-flex h-11 items-center justify-center rounded-lg border border-[#1B2E74]/15 px-5 text-sm font-bold text-[#1B2E74] transition hover:bg-slate-50"
										>
											네이버지도로 보기
										</a>
										<a
											href={space.kakaoHref}
											target="_blank"
											rel="noreferrer"
											className="inline-flex h-11 items-center justify-center rounded-lg bg-[#1B2E74] px-5 text-sm font-bold text-white transition hover:bg-[#15255F]"
										>
											카카오지도로 보기
										</a>
									</div>
								</div>
							</article>
						))}
					</div>
				</ScreenSection>
			</section>

			<section id="contact" className="py-20 sm:py-28">
				<ScreenSection>
					<div className="rounded-[2rem] bg-[#172966] px-6 py-12 text-white sm:px-10 sm:py-14">
						<TitleBadge className="pb-0">
							<TitleBadge.Icon backgroundColor={["#4A8DF1", "#1C5DBE"]} icon={MessageSquareMore} className="text-white shadow-none" />
							<TitleBadge.Title className="text-white">문의 전 참고</TitleBadge.Title>
							<TitleBadge.Badge className="border-white/25 bg-white/10 text-white">GUIDE</TitleBadge.Badge>
						</TitleBadge>
						<h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">공간만 대여해도 되고, 메뉴까지 함께 준비해드립니다</h2>
						<p className="mt-5 max-w-3xl text-sm leading-7 text-blue-100/85 sm:text-base">
							원하시는 일정과 사용 목적, 메뉴 필요 여부를 미리 알려주시면 대여 가능 여부와 준비 범위를 빠르게 안내해드립니다.
							메뉴는 전 메뉴 기준으로 사전 협의 후 준비되며, 모든 제공 품목은 배달용 용기로 전달됩니다.
						</p>
						<div className="mt-8 flex flex-wrap gap-3 text-sm font-bold text-white/90">
							<span className="rounded-full border border-white/20 px-4 py-2">대여 시간 21:00 - 07:00</span>
							<span className="rounded-full border border-white/20 px-4 py-2">기본 단가 10~20만원</span>
							<span className="rounded-full border border-white/20 px-4 py-2">전 메뉴 사전 준비 가능</span>
							<span className="rounded-full border border-white/20 px-4 py-2">전 품목 배달용 용기 제공</span>
						</div>
						<div className="mt-8 flex flex-col gap-3 sm:flex-row">
							<Link
								href="/contact"
								className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-white px-6 text-sm font-bold text-[#172966] transition hover:bg-blue-50"
							>
								상담 페이지로 이동
								<ArrowRight className="size-4" aria-hidden="true" />
							</Link>
							<Link
								href="/about"
								className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/30 px-6 text-sm font-bold text-white transition hover:bg-white/10"
							>
								매장 소개 보기
								<Coffee className="size-4" aria-hidden="true" />
							</Link>
						</div>
					</div>
				</ScreenSection>
			</section>
		</div>
	);
}
