import { GiftMobileRouteHeader } from "@/domains/gift/mobile-route-header";
import { GiftSecondaryNavigation } from "@/domains/gift/secondary-navigation";

export default function GiftLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="relative min-h-screen">
			<GiftSecondaryNavigation />
			<GiftMobileRouteHeader />

			<section className="bg-white" aria-label="기프트 상세 콘텐츠">
				{children}
			</section>
		</div>
	);
}
