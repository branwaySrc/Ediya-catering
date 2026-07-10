import { CateringMobileRouteHeader } from "@/domains/catering/mobile-route-header";
import { CateringSecondaryNavigation } from "@/domains/catering/secondary-navigation";

export default function CateringLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="relative min-h-screen">
			<CateringSecondaryNavigation />
			<CateringMobileRouteHeader />

			<section className="bg-[#F8F9FC]" aria-label="케이터링 상세 콘텐츠">
				{children}
			</section>
		</div>
	);
}
