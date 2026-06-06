import { Button } from "@/share/button";
import { CardSection } from "@/share/screen-section";
import { ScreenSection } from "@/share/screen-section";
import { LinkProps } from "@/share/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function SolutionLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-slate-800 py-10">
			<div className="mx-auto max-w-7xl sm:pt-10 relative flex flex-col">{children}</div>
		</div>
	);
}

function SolutionHeading({ action }: { action: React.ReactNode }) {
	return (
		<ScreenSection className="p-4 flex w-full justify-between mb-4">
			<h2 className="text-white text-2xl flex flex-col">
				<span className="">케이터링이 처음이신가요?</span>
				<span className="font-bold">최적화된 패키지를 소개합니다!</span>
			</h2>
			{action}
		</ScreenSection>
	);
}

type SolutionContentProps = {
	packageName: string;
	subtitle: string;
	desc: string;
	className?: string;
	image: string;
	href: string;
};

function SolutionContent({ packageName, subtitle, desc, className, image, href }: SolutionContentProps) {
	return (
		<CardSection className={`relative overflow-hidden h-86 border-none min-w-86 shrink-0 ml-4 md:min-w-0 md:shrink ${className ?? ""}`}>
			<Link href={href || "/"}>
				<div className="flex flex-col gap-3">
					<div className="font-bold text-2xl flex flex-col z-30">
						<span className="text-slate-800 text-lg">{packageName}</span>
						<span className="text-slate-800">{subtitle}</span>
					</div>
					<aside className="text-slate-700 text-sm z-30">
						<p>{desc}</p>
					</aside>
				</div>
				<figure className="absolute inset-0 overflow-hidden bottom-0">
					<Image src={image} alt="package-bg" height={650} width={650} className="max-w-none object-cover w-110 h-100" />
				</figure>
				<aside className="mt-0.5 z-30">
					<div className="relative text-slate-800 font-bold text-sm z-30 flex items-center gap-1 transition-all hover:gap-4">
						<span>자세히 보기</span>
						<ArrowRight size={14} />
					</div>
				</aside>
			</Link>
		</CardSection>
	);
}

type SolutionActionProps = Omit<LinkProps, "children">;
function SolutionAction({ title, href, className, ...rest }: SolutionActionProps) {
	return (
		<Button.Link href={href} className={`${className}`} {...rest} icon={ArrowRight} iconPosition="right">
			{title}
		</Button.Link>
	);
}

export const Solution = {
	Layout: SolutionLayout,
	Heading: SolutionHeading,
	Content: SolutionContent,
	Action: SolutionAction,
};
