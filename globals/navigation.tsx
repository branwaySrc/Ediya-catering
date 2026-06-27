import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Coffee, Donut, Gift, House, Store, type LucideIcon } from "lucide-react";

import { Menubar } from "@/globals/menubar";
import { Button } from "@/share/button";
import { ScreenSection } from "@/share/screen-section";

export default function Navigation() {
	return (
		<nav className="sticky top-0 z-50 border-b border-[#1B2E74]/10 bg-white">
			<ScreenSection className="flex h-18 items-center justify-between">
				<Link href="/" className="group flex w-35 items-center gap-3 sm:w-40">
					<Image src="/logo.svg" alt="Ediya logo" width={180} height={70} priority />
				</Link>

				<div>
					<ul className="hidden items-center justify-center lg:flex">
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
						<li>
							<MenuTab icon={Store} title="공간대여" href="/rental" />
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
		<Button.Link href={href} variant="ghost" className="text-slate-800 hover:text-primary border-0" icon={icon}>
			{title}
		</Button.Link>
	);
}
