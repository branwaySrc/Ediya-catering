import { Button } from "@/share/button";
import { CardSection } from "@/share/screen-section";
import { ScreenSection } from "@/share/screen-section";
import { TitleBadge } from "@/share/title-badge";
import { ArrowRight, Gift } from "lucide-react";
import Image from "next/image";

function GiftBoxLayout({ children }: { children: React.ReactNode }) {
	return (
		<section className="bg-white px-0 mx-auto max-w-7xl">
			<div className="py-10">{children}</div>
		</section>
	);
}

function GiftBoxHeader() {
	const baseColor = "#009249";
	return (
		<ScreenSection className="pb-4 md:pb-8 flex flex-col text-2xl">
			<TitleBadge>
				<TitleBadge.Icon backgroundColor={["#04D48F", `${baseColor}`]} icon={Gift} className="text-white" />
				<TitleBadge.Title>EDIYA 시즌 기프트</TitleBadge.Title>
				<TitleBadge.Badge className={`border-[#009249] text-[#009249]`}>SEASONAL</TitleBadge.Badge>
			</TitleBadge>
			<span className="font-bold text-slate-800">
				모두가 부담없이 즐길 수 있는
				<br /> 이디야 선물 세트로 마음을 전하세요.
			</span>
		</ScreenSection>
	);
}

function GiftBoxHero() {
	return (
		<div className="relative h-120 sm:h-150 overflow-hidden mb-4">
			<aside className="z-10 absolute bottom-6 sm:place-self-end left-6 right-6 grid grid-cols-2 gap-3 sm:gap-1.5 sm:grid-cols-1">
				<Button.Link href={"/"} className="text-white bg-green-700 hover:bg-emerald-900" variant="none" icon={ArrowRight} iconPosition="right">
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
					<source src="/videos/gift.mp4" type="video/mp4" />
				</video>
			</div>
			<div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-full bg-gradient-to-t from-black/30 via-black/10 to-[#0000]" />
		</div>
	);
}

type GiftBoxContentProps = {
	className?: string;
	images?: string[];
};

const GIFTBOX_IMAGES = [
	"/gift/gift-1.png",
	"/gift/gift-2.png",
	"/gift/gift-3.png",
	"/gift/gift-4.png",
	"/gift/gift-5.png",
	"/gift/gift-6.png",
	"/gift/gift-7.png",
	"/gift/gift-8.png",
];

function GiftBoxSlider({ className, images = GIFTBOX_IMAGES }: GiftBoxContentProps) {
	const sliderImages = [...images, ...images];

	return (
		<div className={`overflow-hidden ${className ?? ""}`}>
			<div className="flex w-max gap-4 animate-giftbox-slider">
				{sliderImages.map((image, index) => (
					<CardSection key={`${image}-${index}`} className="relative h-60 w-60 shrink-0 overflow-hidden border-none md:h-65 md:w-65">
						<figure className="absolute inset-0 flex items-center justify-center overflow-hidden bottom-2">
							<Image src={image} alt="giftbox-slide" height={250} width={250} className="size-60 sm:size-65 max-w-none object-contain" />
						</figure>
					</CardSection>
				))}
			</div>
		</div>
	);
}

export const GiftBox = {
	Layout: GiftBoxLayout,
	Header: GiftBoxHeader,
	Hero: GiftBoxHero,
	Slider: GiftBoxSlider,
};
