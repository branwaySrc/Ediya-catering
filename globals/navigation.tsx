import Link from "next/link";
import Image from "next/image";
import { ArrowRight, House, Gift, Donut, Coffee } from "lucide-react";
import { Button } from "@/share/button";
import { ScreenSection } from "@/share/screen-section";
import { type LucideIcon } from "lucide-react";
import { Menubar } from "@/globals/menubar";

export default function Navigation() {
	return (
		<nav className="sticky top-0 z-50 border-b border-[#1B2E74]/10 bg-white/95 backdrop-blur-xl">
			<ScreenSection className=" flex h-20  items-center justify-between">
				<Link href="/" className="group flex items-center gap-3 w-35 sm:w-40">
					<Image src={"/logo.svg"} alt="logo" width={180} height={70} priority />
				</Link>
				<div>
					<ul className="hidden lg:flex gap-4 items-center justify-center">
						<li>
							<MenuTab icon={House} title="지점소개" href="/about" />
						</li>
						<li>
							<MenuTab icon={Coffee} title="케이터링" href="/catering" />
						</li>
						<li>
							<MenuTab icon={Donut} title="프리미엄 스낵바" href="/snackbar" />
						</li>
						<li>
							<MenuTab icon={Gift} title="시즌 기프트" href="/gift" />
						</li>
					</ul>
				</div>
				<div className="flex items-center gap-2 sm:gap-3">
					<div className="hidden lg:flex">
						<Button.Link href="#contact" variant="primary" className="px-4" icon={ArrowRight} iconPosition="right">
							견적 문의하기
						</Button.Link>
					</div>
					<Menubar />
				</div>
			</ScreenSection>
		</nav>
	);
}

function MenuTab({ title, href, icon }: { title: string; href: string; icon: LucideIcon }) {
	return (
		<Button.Link href={href} variant="ghost" className="text-slate-800 hover:text-primary" icon={icon}>
			{title}
		</Button.Link>
	);
}
