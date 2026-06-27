import { Button } from "@/share/button";
import { CardSection } from "@/share/screen-section";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const HEADING_CONTENT = {
	HEADING: ["고민할 필요 없는 커피 케이터링!", "이디야 커피 케이터링"],
	DESC: "맛과 품격을 동시에 높이는 최고의 선택!",
};

const HERO_WELCOME_WORDS = ["커피 케이터링", "프라이빗 스낵바", "기프트 패키지"];

function HeroLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-content overflow-hidden pb-30 relative">
			<div className="mx-auto max-w-7xl sm:pt-10 relative z-10 flex flex-col">{children}</div>
			<figure className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-40 overflow-hidden sm:h-44">
				<div className="absolute bottom-0 left-0" style={{ animation: "car-run 8s linear infinite" }}>
					<div
						className="relative"
						style={{
							animation: "car-bob 900ms ease-in-out infinite",
							transformOrigin: "center bottom",
						}}
					>
						<Image
							src={"/coffee-car.svg"}
							alt="ediya-car"
							width={150}
							height={150}
							priority
							className="h-auto w-40 drop-shadow-[0_16px_24px_rgba(27,46,116,0.18)]"
						/>
					</div>
				</div>
			</figure>
			<figure className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-full overflow-hidden">
				<div className="absolute bottom-0 left-1/2 w-180 -translate-x-1/2">
					<Image src={"/background.svg"} alt="city-background" width={600} height={380} priority className="h-100 w-full max-w-none" />
				</div>
			</figure>
		</div>
	);
}

function HeroWelcome({ words = HERO_WELCOME_WORDS }: { words?: string[] }) {
	const rollingWords = words.length > 0 ? [...words, words[0]] : [...HERO_WELCOME_WORDS, HERO_WELCOME_WORDS[0]];

	return (
		<div className="sm:flex sm:flex-col md:flex-row items-start justify-between sm:pl-6 gap-4 py-15 sm:pb-10 sm:pt-0">
			<div className="flex flex-col font-bold text-3xl sm:text-5xl gap-2 sm:gap-2 text-center sm:text-start">
				<span className="block h-[1.15em] overflow-hidden">
					<span className="flex animate-hero-welcome-slide flex-col text-primary">
						{rollingWords.map((word, index) => (
							<span key={`${word}-${index}`} className="block leading-[1.15]">
								{word}
							</span>
						))}
					</span>
				</span>
				<span className="block text-slate-600 text-2xl sm:text-3xl">이디야와 함께 쉽고 완벽하게!</span>
			</div>
			<div className="hidden sm:flex md:flex-col items-end text-xl font-bold sm:gap-4 sm:text-lg md:gap-0 md:border-t-2 border-slate-400 w-full md:w-[50%] md:mt-5 pt-4 mr-4">
				<span className="text-primary">신뢰할 수 있는 커피</span>
				<span className="text-slate-500">품격 있는 행사 브랜딩</span>
				<span className="text-slate-400">합리적인 맞춤 견적</span>
			</div>
		</div>
	);
}

function HeroDownload() {
	const MENU = ["이디야 케이터링", "메뉴 카달로그"];
	const COMPANY = ["이디야 케이터링", "지점 소개"];

	return (
		<aside className="flex flex-col h-full gap-2 px-2 sm:px-0">
			<CardSection className="relative h-20 flex flex-col justify-center bg-primary sm:h-full overflow-hidden">
				<figure className="opacity-0 sm:opacity-100 absolute inset-0 overflow-hidden bottom-0">
					<Image
						src={"/catalogue-background.png"}
						alt="catalogue-bg"
						loading="lazy"
						height={475}
						width={750}
						className="max-w-none object-cover w-175 h-62 opacity-90"
					/>
				</figure>
				<div className="relative flex justify-between items-center sm:flex-col sm:items-baseline sm:justify-between sm:h-full">
					<article className="flex flex-col gap-0.5 font-bold sm:text-lg text-sm">
						<span className="text-slate-400 leading-tight">{MENU[0]}</span>
						<span className="text-white leading-tight">{MENU[1]}</span>
					</article>
					<figure className="hidden absolute -bottom-14 left-0 sm:flex rotate-6">
						<Image src={"/catalogue.svg"} alt="catalogue-book" height={80} width={220} />
					</figure>
					<Button.Link variant="outlined" href={"/"} className="w-[160px] sm:self-end z-10" icon={ArrowRight} iconPosition="right">
						PDF 다운로드
					</Button.Link>
				</div>
			</CardSection>
			<CardSection className="h-20 flex flex-col justify-center bg-slate-800">
				<div className="flex justify-between items-center">
					<article className="flex flex-col gap-0.5 font-bold sm:text-lg text-sm">
						<span className="text-slate-400 leading-tight">{COMPANY[0]}</span>
						<span className="text-white leading-tight">{COMPANY[1]}</span>
					</article>
					<Button.Link variant="outlined" href={"/about"} className="w-[160px]" icon={ArrowRight} iconPosition="right">
						소개 바로가기
					</Button.Link>
				</div>
			</CardSection>
		</aside>
	);
}

function HeroCard({ action }: { action: React.ReactNode }) {
	return (
		<CardSection className="relative overflow-hidden my-4 sm:mt-4">
			<div className="flex flex-col gap-3 z-20">
				<div className="font-bold text-2xl flex flex-col">
					<span className="text-slate-600">{HEADING_CONTENT.HEADING[0]}</span>
					<span className="text-primary">{HEADING_CONTENT.HEADING[1]}</span>
				</div>
				<aside className="text-slate-500 text-sm">
					<p>{HEADING_CONTENT.DESC}</p>
				</aside>
			</div>
			<figure className="pointer-events-none absolute bottom-0 -right-2 z-0 md:right-8">
				<div className="absolute inset-x-0 bottom-0 z-10 h-30 bg-linear-to-t from-white via-white/80 to-transparent" />
				<Image src={"/coffee-americano.png"} alt="ediya-americano" width={190} height={190} />
			</figure>
			<aside className="relative z-10 mt-25">{action}</aside>
		</CardSection>
	);
}

function HeroAction() {
	return (
		<div className="flex gap-2">
			<Button.Link variant="primary" href={"/"} className="w-full">
				상세 페이지 바로가기
			</Button.Link>
			<Button.Link variant="ghost" href={"/"}>
				패키지 보기
			</Button.Link>
		</div>
	);
}

function HeroVideo() {
	return (
		<div className="max-w-7xl h-80 sm:h-150 flex items-center justify-center overflow-hidden sm:rounded-xl">
			<video autoPlay muted loop className="object-cover h-80 sm:h-150 w-screen">
				<source src="/videos/hero.mp4" type="video/mp4" />
			</video>
		</div>
	);
}

export const Hero = {
	Layout: HeroLayout,
	Card: HeroCard,
	Action: HeroAction,
	Video: HeroVideo,
	Welcome: HeroWelcome,
	Download: HeroDownload,
};
