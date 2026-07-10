import { SnackbarMobileRouteHeader } from "@/domains/snackbar/mobile-route-header";
import { SnackbarSecondaryNavigation } from "@/domains/snackbar/secondary-navigation";

export default function SnackbarLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="relative min-h-screen">
			<SnackbarSecondaryNavigation />
			<SnackbarMobileRouteHeader />

			<section className="bg-[#F8F9FC]" aria-label="스낵바 상세 콘텐츠">
				{children}
			</section>
		</div>
	);
}
