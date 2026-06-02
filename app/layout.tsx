import type { Metadata } from "next";
import Navigation from "@/globals/navigation";
import Footer from "@/globals/footer";
import "./globals.css";

export const metadata: Metadata = {
	title: "이디야 케이터링 | 안산지점",
	description: "이디야 케이터링 서비스에 오신 것을 환영합니다.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko" className="h-full bg-white antialiased">
			<body className="min-h-full text-[#1B2E74]">
				<Navigation />
				<main className="overflow-x-hidden">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
