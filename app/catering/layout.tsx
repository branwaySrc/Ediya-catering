import { CateringSecondaryNavigation } from "@/domains/features/catering/secondary-navigation";

export default function CateringLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="relative min-h-screen">
			<CateringSecondaryNavigation />
			{children}
		</div>
	);
}
