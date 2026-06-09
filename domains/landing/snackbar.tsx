import { Button } from "@/share/button";
import { CardSection } from "@/share/screen-section";
import { ScreenSection } from "@/share/screen-section";
import { TitleBadge } from "@/share/title-badge";
import { ArrowRight, Donut, File } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function SnackBarLayout({ children }: { children: React.ReactNode }) {
	return (
		<section className="bg-white px-0 mx-auto max-w-7xl">
			<div className="py-10">{children}</div>
		</section>
	);
}

function SnackBarHeader() {
	const baseColor = "#E96106";
	return (
		<ScreenSection className="pb-4 md:pb-8 flex flex-col text-2xl">
			<TitleBadge>
				<TitleBadge.Icon backgroundColor={["#FFA600", `${baseColor}`]} icon={Donut} className="text-white" />
				<TitleBadge.Title>EDIYA 스낵바</TitleBadge.Title>
				<TitleBadge.Badge className={`border-[#E96106] text-[#E96106]`}>CUSTOM</TitleBadge.Badge>
			</TitleBadge>
			<span className="font-bold text-slate-800">
				사무실 한 켠, 여유로움을
				<br /> 이디야 스낵바로 즐겨보세요.
			</span>
		</ScreenSection>
	);
}

function SnackBarHero() {
	return (
		<div className="relative h-120 sm:h-180 overflow-hidden mb-4">
			<aside className="z-10 absolute bottom-6 sm:place-self-end left-6 right-6 grid grid-cols-2 gap-3 sm:gap-1.5 sm:grid-cols-1">
				<Button.Link href={"/"} className="bg-amber-600 text-white hover:bg-red-900" variant="none" icon={ArrowRight} iconPosition="right">
					지금 바로 문의하기
				</Button.Link>
				<Button.Link
					href={"/"}
					className="text-slate-600 bg-white hover:bg-slate-800 hover:text-slate-100"
					variant="none"
					icon={File}
					iconPosition="right"
				>
					소개서 PDF 다운로드
				</Button.Link>
			</aside>
			<figure className="h-120 sm:h-180 mb-4 overflow-hidden shrink-0 inset-0 bg-[#EDEADD]">
				<Image
					src={"/catalogue-herobgv03.png"}
					alt="catalogue-hero-img"
					width={2300}
					height={500}
					className="object-contain md:object-cover w-150 sm:w-full h-120 sm:h-180"
				/>
			</figure>
		</div>
	);
}

type SnackContentProps = {
	packageName: string;
	className?: string;
	image: string;
	href: string;
};

function SnackBarCategory({ packageName, className, image, href }: SnackContentProps) {
	return (
		<CardSection
			className={`relative rounded-none overflow-hidden bg-slate-100 h-70 border-none w-full max-w-100 lg:max-w-none shrink-0 ml-4 md:ml-0 md:min-w-0 md:shrink ${className ?? ""}`}
		>
			<Link href={href || "/"} className="flex flex-col items-center justify-between h-full">
				<div className="flex flex-col gap-3">
					<div className="font-bold text-2xl flex flex-col z-30">
						<span className="text-slate-800 text-xl">{packageName}</span>
					</div>
				</div>
				<figure className="absolute inset-0 flex items-center justify-center overflow-hidden bottom-2">
					<Image src={image} alt="catalogue-bg" height={250} width={250} className="size-[15.625rem] max-w-none object-contain" />
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

export const SnackBar = {
	Layout: SnackBarLayout,
	Header: SnackBarHeader,
	Hero: SnackBarHero,
	Category: SnackBarCategory,
};
