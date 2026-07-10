import Navigation from "@/globals/navigation";
import Footer from "@/globals/footer";
import { Shortcut } from "@/globals/shortcut";
import { BottomCTA } from "@/globals/bottom-cta";
import "./globals.css";
import "./animate.css";

export { rootMetadata as metadata } from "./meta";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko" className="h-full bg-white antialiased">
			<body className="min-h-full text-[#1B2E74]">
				<Navigation />
				<Shortcut />
				<main className="overflow-x-clip">{children}</main>
				<BottomCTA />
				<Footer />
			</body>
		</html>
	);
}
