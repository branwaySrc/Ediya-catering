import { Button } from "@/share/button";
import { CardSection } from "@/share/screen-section";
import { ScreenSection } from "@/share/screen-section";
import { TitleBadge } from "@/share/title-badge";
import { ArrowRight, Donut } from "lucide-react";
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
				<TitleBadge.Badge className={`border-[#E96106] text-[#E96106]`}>CURATED</TitleBadge.Badge>
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
		<div className="relative h-120 sm:h-150 overflow-hidden mb-4">
			<aside className="z-10 absolute bottom-6 sm:place-self-end left-6 right-6 grid grid-cols-2 gap-3 sm:gap-1.5 sm:grid-cols-1">
				<Button.Link href={"/"} className="bg-amber-600 text-white hover:bg-red-900" variant="none" icon={ArrowRight} iconPosition="right">
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
			<div className="max-w-7xl h-120 sm:h-150 flex items-center justify-center overflow-hidden">
				<video autoPlay muted loop className="object-cover h-120 sm:h-150 w-screen">
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
};

function SnackBarCategory({ packageName, className, image, href }: SnackContentProps) {
	return (
		<div className={`relative ml-4 flex min-w-86 shrink-0 snap-start flex-col md:ml-0 md:min-w-0 md:shrink ${className ?? ""}`}>
			<CardSection className="relative h-70 w-full overflow-hidden rounded-none border-none bg-slate-100">
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
							<span>세부 구성 보기</span>
							<ArrowRight size={14} />
						</div>
					</aside>
				</Link>
			</CardSection>
			<aside className="flex w-full flex-col px-1 pt-3">
				<span className="text-sm">다양한 음료들의 구성을</span>
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
