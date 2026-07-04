import Image from "next/image";

import { CateringSecondaryNavigation } from "@/domains/catering/secondary-navigation";

export default function CateringLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="relative min-h-screen">
			<div className="lg:hidden">
				<CateringSecondaryNavigation />
			</div>

			<div className="mx-auto w-full max-w-7xl lg:grid lg:grid-cols-2">
				<aside className="hidden border-r border-primary/10 bg-white lg:block">
					<div className="sticky top-[4.5rem] flex h-[calc(100vh-4.5rem)] items-center">
						<div className="mx-auto w-full max-w-lg px-10 py-12">
							<Image src="/catering/Catering-letter.svg" alt="EDIYA CATERING" width={169} height={45} priority className="h-auto w-[130px] sm:w-38" />
							<h1 className="mt-5 text-5xl font-bold leading-tight tracking-[-0.03em] text-slate-800">
								이디야
								<br />
								케이터링
							</h1>
							<p className="mt-6 max-w-sm text-lg leading-7 text-slate-600">
								규모와 목적에 맞춰 커피, 음료, 다과 구성을 제안하고
								<br />
								모든 케이터링 준비 과정을 대신합니다.
							</p>
							<div className="mt-10">
								<CateringSecondaryNavigation orientation="column" />
							</div>
						</div>
					</div>
				</aside>

				<section className="bg-[#F8F9FC]" aria-label="케이터링 상세 콘텐츠">
					{children}
				</section>
			</div>
		</div>
	);
}
