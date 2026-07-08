import Image from "next/image";

type CateringHeroProps = {
	variant?: "desktop" | "mobile";
	className?: string;
	priority?: boolean;
};

function cn(...classes: Array<string | false | null | undefined>) {
	return classes.filter(Boolean).join(" ");
}

export function CateringHero({ variant = "desktop", className, priority = false }: CateringHeroProps) {
	const isMobile = variant === "mobile";

	return (
		<div className={className}>
			<Image
				src="/catering/Catering-letter.svg"
				alt="EDIYA CATERING"
				width={169}
				height={45}
				priority={priority}
				className={cn("h-auto", isMobile ? "w-[118px]" : "w-[130px] sm:w-38")}
			/>
			<h1 className={cn("font-bold leading-tight tracking-[-0.03em] text-slate-800", isMobile ? "mt-4 text-4xl" : "mt-5 text-5xl")}>
				이디야
				{isMobile ? " " : <br />}
				케이터링
			</h1>
			<p className={cn("text-slate-600", isMobile ? "mt-5 max-w-md text-md leading-6" : "mt-6 max-w-sm text-lg leading-7")}>
				규모와 목적에 맞춰 커피, 음료, 다과 구성을 제안하고
				<br />
				모든 케이터링 준비 과정을 대신합니다.
			</p>
		</div>
	);
}
