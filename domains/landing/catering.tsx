import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Coffee } from "lucide-react";

import { Button } from "@/share/button";
import { CardSection, ScreenSection } from "@/share/screen-section";
import { TitleBadge } from "@/share/title-badge";

function CateringLayout({ children }: { children: React.ReactNode }) {
	return (
		<section className="mx-auto max-w-7xl bg-white px-0">
			<div className="py-20 sm:py-28">{children}</div>
		</section>
	);
}

function CateringHeader() {
	const baseColor = "#1C5DBE";

	return (
		<ScreenSection className="flex flex-col pb-8 sm:gap-1.5 text-2xl sm:text-3xl md:pb-10">
			<TitleBadge>
				<TitleBadge.Icon backgroundColor={["#4A8DF1", baseColor]} icon={Coffee} className="text-white" />
				<TitleBadge.Title>EDIYA 케이터링</TitleBadge.Title>
				<TitleBadge.Badge className="border-[#1C5DBE] text-[#1C5DBE]">COFFEE</TitleBadge.Badge>
			</TitleBadge>
			<span className="text-slate-800">어려운 케이터링 준비,</span>
			<span className="font-bold text-slate-800">이디야 커피 케이터링으로 해결!</span>
		</ScreenSection>
	);
}

function CateringHero() {
	return (
		<div className="relative mb-4 h-120 overflow-hidden sm:mb-5 sm:h-180 rounded-md">
			<aside className="absolute bottom-6 left-6 right-6 z-10 grid grid-cols-2 gap-3 sm:place-self-end sm:grid-cols-1 sm:gap-1.5">
				<Button.Link href="/" variant="primary" icon={ArrowRight} iconPosition="right">
					지금 바로 문의하기
				</Button.Link>
				<Button.Link
					href="/"
					className="bg-white text-slate-600 hover:bg-slate-800 hover:text-slate-100"
					variant="none"
					icon={ArrowRight}
					iconPosition="right"
				>
					자세히보기
				</Button.Link>
			</aside>
			<figure className="inset-0 mb-4 h-120 shrink-0 overflow-hidden bg-[#EDEADD] sm:h-180">
				<Image
					src="/catering-herobgv03.png"
					alt="catering-hero-img"
					width={2300}
					height={500}
					className="h-120 w-150 object-contain sm:h-180 sm:w-full md:object-cover"
				/>
			</figure>
		</div>
	);
}

type CateringContentProps = {
	packageName: string;
	className?: string;
	image: string;
	href: string;
	summary: [string, string];
};

function CateringCategory({ packageName, className, image, href, summary }: CateringContentProps) {
	return (
		<div className={`relative ml-4 flex min-w-70 shrink-0 snap-start flex-col md:ml-0 md:min-w-0 md:shrink ${className ?? ""}`}>
			<div className="w-full max-w-70 lg:max-w-none">
				<CardSection className="relative h-70 w-full shrink-0 overflow-hidden rounded-lg border-none bg-slate-100">
					<Link href={href || "/"} className="flex h-full flex-col items-center justify-between">
						<div className="flex flex-col gap-3">
							<div className="z-30 flex flex-col text-2xl font-bold">
								<span className="text-xl text-slate-800">{packageName}</span>
							</div>
						</div>
						<figure className="absolute inset-0 bottom-2 flex items-center justify-center overflow-hidden">
							<Image src={image} alt="catering-bg" height={250} width={250} className="size-[15.625rem] max-w-none object-contain" />
						</figure>
						<aside className="z-30">
							<div className="relative z-30 flex items-center gap-1 text-sm font-bold text-slate-800 transition-all hover:gap-4">
								<span>커스텀 주문하기</span>
								<ArrowRight size={14} />
							</div>
						</aside>
					</Link>
				</CardSection>
				<aside className="mt-3 w-full px-1">
					<div className="flex max-w-full flex-col align-top text-center items-center">
						<span className="break-keep text-xs font-bold leading-5 text-slate-500">{summary[0]}</span>
						<span className="break-keep text-xs leading-5 text-slate-500">{summary[1]}</span>
					</div>
				</aside>
			</div>
		</div>
	);
}

export const Catering = {
	Layout: CateringLayout,
	Header: CateringHeader,
	Hero: CateringHero,
	Category: CateringCategory,
};
