import { Button } from "@/share/button";
import { CardSection } from "@/share/screen-section";
import { ScreenSection } from "@/share/screen-section";
import { ArrowRight, Coffee } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TitleBadge } from "@/share/title-badge";

function CateringLayout({ children }: { children: React.ReactNode }) {
	return (
		<section className="bg-white px-0 mx-auto max-w-7xl">
			<div className="pt-20 pb-10">{children}</div>
		</section>
	);
}

function CateringHeader() {
	const baseColor = "#1C5DBE";
	return (
		<ScreenSection className="pb-4 md:pb-8 flex flex-col text-2xl">
			<TitleBadge>
				<TitleBadge.Icon backgroundColor={["#4A8DF1", `${baseColor}`]} icon={Coffee} className="text-white" />
				<TitleBadge.Title>EDIYA 케이터링</TitleBadge.Title>
				<TitleBadge.Badge className={`border-[#1C5DBE] text-[#1C5DBE]`}>CUSTOM</TitleBadge.Badge>
			</TitleBadge>
			<span className="font-bold text-slate-800">
				다양한 제품을 통해<br />
				시작부터 마지막까지, 기억에 남는
				<br />
				품격 있는 행사를 만듭니다.
			</span>
		</ScreenSection>
	);
}

function CateringHero() {
	return (
		<div className="relative h-120 sm:h-180 overflow-hidden mb-4">
			<aside className="z-10 absolute bottom-6 sm:place-self-end left-6 right-6 grid grid-cols-2 gap-3 sm:gap-1.5 sm:grid-cols-1">
				<Button.Link href={"/"} className="" variant="primary" icon={ArrowRight} iconPosition="right">
					지금 바로 문의하기
				</Button.Link>
				<Button.Link
					href={"/"}
					className="text-slate-600 bg-white hover:bg-slate-800 hover:text-slate-100"
					variant="none"
					icon={ArrowRight}
					iconPosition="right"
				>
					자세히보기
				</Button.Link>
			</aside>
			<figure className=" h-120 sm:h-180 mb-4 overflow-hidden shrink-0 inset-0 bg-[#EDEADD]">
				<Image
					src={"/catering-herobgv03.png"}
					alt="catering-hero-img"
					width={2300}
					height={500}
					className="object-contain md:object-cover w-150 sm:w-full h-120 sm:h-180"
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
};

function CateringCategory({ packageName, className, image, href }: CateringContentProps) {
	return (
		<CardSection
			className={`relative rounded-none overflow-hidden bg-slate-100 h-70 border-none w-full max-w-70 lg:max-w-none shrink-0 ml-4 md:ml-0 md:min-w-0 md:shrink ${className ?? ""}`}
		>
			<Link href={href || "/"} className="flex flex-col items-center justify-between h-full">
				<div className="flex flex-col gap-3">
					<div className="font-bold text-2xl flex flex-col z-30">
						<span className="text-slate-800 text-xl">{packageName}</span>
					</div>
				</div>
				<figure className="absolute inset-0 flex items-center justify-center overflow-hidden bottom-2">
					<Image src={image} alt="catering-bg" height={250} width={250} className="size-[15.625rem] max-w-none object-contain" />
				</figure>
				<aside className="z-30">
					<div className="relative text-slate-800 font-bold text-sm z-30 flex items-center gap-1 transition-all hover:gap-4">
						<span>가능 메뉴 보기</span>
						<ArrowRight size={14} />
					</div>
				</aside>
			</Link>
		</CardSection>
	);
}

export const Catering = {
	Layout: CateringLayout,
	Header: CateringHeader,
	Hero: CateringHero,
	Category: CateringCategory,
};
