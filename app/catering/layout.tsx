import { CateringHero } from "@/domains/catering/hero";
import { CateringSecondaryNavigation } from "@/domains/catering/secondary-navigation";
import { ScreenSection } from "@/share/screen-section";

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

			<div className="border-b border-primary/10 bg-white lg:hidden">
				<ScreenSection className="py-8">
					<CateringHero variant="mobile" priority />
				</ScreenSection>
			</div>

			<div className="mx-auto w-full max-w-7xl lg:grid lg:grid-cols-2">
				<aside className="hidden border-r border-primary/10 bg-white lg:block">
					<div className="sticky top-[4.5rem] flex h-[calc(100vh-4.5rem)] items-center">
						<div className="mx-auto w-full max-w-lg px-10 py-12">
							<CateringHero priority />
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
