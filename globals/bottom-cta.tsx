import { ClipboardPenLine, Handshake, MessageCircle, type LucideIcon } from "lucide-react";
import { Button } from "@/share/button";
import { ScreenSection } from "@/share/screen-section";

type BottomCTAAction = {
	title: string;
	href: string;
	icon: LucideIcon;
	className: string;
};

const ctaActions: BottomCTAAction[] = [
	{
		title: "카카오톡문의",
		href: "/contact?type=kakao",
		icon: MessageCircle,
		className: "border-[#FEE500] bg-[#FEE500] text-[#191919] hover:bg-[#F4DC00]",
	},
	{
		title: "맞춤상담",
		href: "/contact?type=consulting",
		icon: ClipboardPenLine,
		className: "border-white bg-white text-primary hover:bg-blue-50",
	},
	{
		title: "협업제안",
		href: "/contact?type=partnership",
		icon: Handshake,
		className: "border-white/25 bg-white/10 text-white hover:border-white/50 hover:bg-white/20",
	},
];

export function BottomCTA() {
	return (
		<section className="bg-primary py-20 text-center text-white sm:py-30">
			<ScreenSection className="flex flex-col items-center gap-5">
				<h2 className="max-w-3xl text-2xl font-black sm:text-3xl">
					행사 커피부터 기업 선물,
					<br /> 오피스 스낵바까지 이디야답게 준비해드릴게요.
				</h2>
				<p className="mt-3 max-w-2xl text-base leading-6 text-blue-100/80">
					필요한 날짜와 인원만 알려주시면
					<br />
					가장 어울리는 구성으로 빠르게 상담해드립니다.
				</p>

				<nav aria-label="하단 문의" className="mt-8 w-full">
					<ul className="mx-auto flex w-full max-w-3xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
						{ctaActions.map(({ title, href, icon, className }) => (
							<li key={title} className="sm:w-auto">
								<Button.Link
									href={href}
									variant="none"
									icon={icon}
									iconPosition="right"
									ariaLabel={title}
									className={`h-12 w-full rounded-lg border px-8 shadow-lg shadow-slate-950/10 sm:w-auto ${className}`}
								>
									{title}
								</Button.Link>
							</li>
						))}
					</ul>
				</nav>
			</ScreenSection>
		</section>
	);
}
