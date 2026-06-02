import { Button } from "@/share/button";
import { CardSection } from "@/share/screen-section";
import { LinkProps } from "@/share/button";

function SolutionLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-slate-800 py-10">
			<div className="mx-auto max-w-7xl sm:pt-10 relative flex flex-col">{children}</div>
		</div>
	);
}

function SolutionHeading({ action }: { action: React.ReactNode }) {
	return (
		<div className="p-4 flex justify-between">
			<h2 className="text-white text-2xl font-bold flex flex-col">
				<span>케이터링이 처음이신가요?</span>
				<span>최적화된 패키지를 소개합니다!</span>
			</h2>
			{action}
		</div>
	);
}

type SolutionContentProps = {
	action: React.ReactNode;
	packageName: string;
	subtitle: string;
	desc: string;
	className?: string;
};

function SolutionContent({ action, packageName, subtitle, desc, className }: SolutionContentProps) {
	return (
		<CardSection className={`min-w-86 shrink-0 sm:min-w-0 sm:shrink ${className ?? ""}`}>
			<div className="flex flex-col gap-3">
				<div className="font-bold text-2xl flex flex-col">
					<span className="text-slate-600 text-lg">{packageName}</span>
					<span className="text-primary">{subtitle}</span>
				</div>
				<aside className="text-slate-500 text-sm">
					<p>{desc}</p>
				</aside>
			</div>
			<aside className="mt-25">{action}</aside>
		</CardSection>
	);
}

type SolutionActionProps = Omit<LinkProps, "children">;
function SolutionAction({ title, href, ...rest }: SolutionActionProps) {
	return (
		<Button.Link href={href} {...rest}>
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
