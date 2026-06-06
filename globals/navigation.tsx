import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu } from "lucide-react";
import { Button } from "@/share/button";
import { ScreenSection } from "@/share/screen-section";

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
							<MenuTab title="지점소개" href="/" />
						</li>
						<li>
							<MenuTab title="이디야 메뉴" href="/" />
						</li>
						<li>
							<MenuTab title="케이터링 패키지" href="/" />
						</li>
						<li>
							<MenuTab title="오피스 스낵바" href="/" />
						</li>
					</ul>
				</div>
				<div className="flex items-center gap-2 sm:gap-3">
					<div className="hidden lg:flex">
						<Button.Link href="#contact" variant="primary" className="px-4" icon={ArrowRight} iconPosition="right">
							견적 문의하기
						</Button.Link>
					</div>
					<Button.Action size="icon" variant="ghost" ariaLabel="site-menu" className="lg:hidden shrink-0" icon={Menu} />
				</div>
			</ScreenSection>
		</nav>
	);
}

function MenuTab({ title, href }: { title: string; href: string }) {
	return (
		<Button.Link href={href} variant="ghost" className="text-slate-800 hover:text-primary">
			{title}
		</Button.Link>
	);
}
