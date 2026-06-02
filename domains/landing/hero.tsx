import { Button } from "@/share/button";
import { CardSection } from "@/share/screen-section";
import Image from "next/image";

const HEADING_CONTENT = {
	HEADING: ["고민할 필요 없는 커피 케이터링!", "이디야 커피 케이터링"],
	DESC: "맛과 품격을 동시에 높이는 최고의 선택!",
};

function HeroLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-content overflow-hidden pb-30 relative">
			<div className="mx-auto max-w-7xl sm:pt-10 relative flex flex-col">{children}</div>
			<figure className="pointer-events-none absolute inset-x-0 bottom-0 h-36 overflow-hidden">
				<div className="animate-car-run motion-reduce:animate-none absolute bottom-0 left-0">
					<Image src={"/coffee-car.svg"} alt="ediya-car" width={150} height={150} priority className="h-auto" />
				</div>
			</figure>
		</div>
	);
}

function HeroHeading({ action }: { action: React.ReactNode }) {
	return (
		<CardSection>
			<div className="flex flex-col gap-3">
				<div className="font-bold text-2xl flex flex-col">
					<span className="text-slate-600">{HEADING_CONTENT.HEADING[0]}</span>
					<span className="text-primary">{HEADING_CONTENT.HEADING[1]}</span>
				</div>
				<aside className="text-slate-500 text-sm">
					<p>{HEADING_CONTENT.DESC}</p>
				</aside>
			</div>
			<aside className="mt-25">{action}</aside>
		</CardSection>
	);
}

function HeroAction() {
	return (
		<div className="flex gap-2">
			<Button.Link variant="primary" href={"/"} className="w-full">
				견적 문의하기
			</Button.Link>
			<Button.Link variant="ghost" href={"/"}>
				패키지 보기
			</Button.Link>
		</div>
	);
}

function HeroVideo() {
	return (
		<div className="max-w-7xl h-60 sm:h-150 flex items-center justify-center overflow-hidden">
			<video autoPlay muted loop className="object-cover h-60 sm:h-150 w-screen">
				<source src="/videos/hero.mp4" type="video/mp4" />
			</video>
		</div>
	);
}

export const Hero = {
	Layout: HeroLayout,
	Heading: HeroHeading,
	Action: HeroAction,
	Video: HeroVideo,
};
