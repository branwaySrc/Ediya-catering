import { Button } from "@/share/button";
import { CardSection } from "@/share/screen-section";
import { ScreenSection } from "@/share/screen-section";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function CatalogueLayout({ children }: { children: React.ReactNode }) {
	return (
		<section className="bg-white px-0 mx-auto max-w-7xl">
			<div className="py-20">{children}</div>
		</section>
	);
}

function CatalogueHeader() {
	return (
		<ScreenSection className="pb-4 md:pb-8 flex flex-col text-2xl">
			<span className="font-bold text-slate-500">이디야 커피 케이터링</span>
			<span className="font-bold text-slate-800">세부 카테고리</span>
		</ScreenSection>
	);
}

function CatalgueHero() {
	return (
		<div className="relative h-120 sm:h-180 overflow-hidden mb-4">
			<Button.Link href={"/"} className="z-10 absolute bottom-6 left-6 right-6" variant="primary" icon={ArrowRight} iconPosition="right">
				지금 바로 문의하기
			</Button.Link>
			<figure className=" h-120 sm:h-180 mb-4 overflow-hidden shrink-0 inset-0 bg-[#EDEADD]">
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

type SolutionContentProps = {
	packageName: string;
	className?: string;
	image: string;
	href: string;
};

function CatalogueCategory({ packageName, className, image, href }: SolutionContentProps) {
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

export const Catalogue = {
	Layout: CatalogueLayout,
	Header: CatalogueHeader,
	Hero: CatalgueHero,
	Category: CatalogueCategory,
};
