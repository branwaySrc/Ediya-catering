import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Donut } from "lucide-react";

import { Button } from "@/share/button";
import { CardSection, ScreenSection } from "@/share/screen-section";
import { TitleBadge } from "@/share/title-badge";

function SnackBarLayout({ children }: { children: React.ReactNode }) {
	return (
		<section className="mx-auto max-w-7xl bg-white px-0">
			<div className="py-20 sm:py-28">{children}</div>
		</section>
	);
}

function SnackBarHeader() {
	const baseColor = "#E96106";

	return (
		<ScreenSection className="flex flex-col pb-8 sm:gap-1.5 text-2xl sm:text-3xl md:pb-10">
			<TitleBadge>
				<TitleBadge.Icon backgroundColor={["#FFA600", baseColor]} icon={Donut} className="text-white" />
				<TitleBadge.Title>EDIYA 스낵바</TitleBadge.Title>
				<TitleBadge.Badge className="border-[#E96106] text-[#E96106]">CURATED</TitleBadge.Badge>
			</TitleBadge>
			<span className="text-slate-800">사무실 한 켠, 여유로움을</span>
			<span className="font-bold text-slate-800">이디야 스낵바로 즐겨보세요.</span>
		</ScreenSection>
	);
}

function SnackBarHero() {
	return (
		<div className="relative mb-4 h-120 overflow-hidden sm:mb-5 sm:h-150 rounded-md">
			<aside className="absolute bottom-6 left-6 right-6 z-10 grid grid-cols-2 gap-3 sm:place-self-end sm:grid-cols-1 sm:gap-1.5">
				<Button.Link href="/" className="bg-amber-600 text-white hover:bg-red-900" variant="none" icon={ArrowRight} iconPosition="right">
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
			<div className="flex h-120 max-w-7xl items-center justify-center overflow-hidden sm:h-150">
				<video autoPlay muted loop className="h-120 w-screen object-cover sm:h-150">
					<source src="/videos/snackbarV02.mp4" type="video/mp4" />
				</video>
			</div>
			<div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-full bg-gradient-to-t from-black/30 via-black/10 to-[#0000]" />
		</div>
	);
}

type SnackContentProps = {
	packageName: string;
	className?: string;
	image: string;
	href: string;
	summary: [string, string];
};

function SnackBarCategory({ packageName, className, image, href, summary }: SnackContentProps) {
	return (
		<div className={`relative ml-4 flex min-w-86 shrink-0 snap-start flex-col md:ml-0 md:min-w-0 md:shrink ${className ?? ""}`}>
			<CardSection className="relative h-70 w-full overflow-hidden rounded-lg border-none bg-slate-100">
				<Link href={href || "/"} className="flex h-full flex-col items-center justify-between">
					<div className="flex flex-col gap-3">
						<div className="z-30 flex flex-col text-2xl font-bold">
							<span className="text-xl text-slate-800">{packageName}</span>
						</div>
					</div>
					<figure className="absolute inset-0 bottom-2 flex items-center justify-center overflow-hidden">
						<Image src={image} alt="catalogue-bg" height={250} width={250} className="size-[15.625rem] max-w-none object-contain" />
					</figure>
					<aside className="z-30">
						<div className="relative z-30 flex items-center gap-1 text-sm font-bold text-slate-800 transition-all hover:gap-4">
							<span>세부 구성 보기</span>
							<ArrowRight size={14} />
						</div>
					</aside>
				</Link>
			</CardSection>
			<aside className="flex min-h-14 w-full flex-col px-1 pt-3 items-center">
				<span className="break-keep text-xs leading-5 text-slate-500 font-bold">{summary[0]}</span>
				<span className="break-keep text-xs leading-5 text-slate-500">{summary[1]}</span>
			</aside>
		</div>
	);
}

export const SnackBar = {
	Layout: SnackBarLayout,
	Header: SnackBarHeader,
	Hero: SnackBarHero,
	Category: SnackBarCategory,
};
