import type { Metadata } from "next";
import Navigation from "@/globals/navigation";
import Footer from "@/globals/footer";
import "./globals.css";
import "./animate.css";

export const metadata: Metadata = {
	title: "이디야 안산지점 | 행사에 카페를 더하다.",
	description: "대한민국 대표 커피 브랜드 이디야와 함께하는 프리미엄 케이터링 서비스. 행사 규모에 맞춘 맞춤형 커피 솔루션을 제공합니다.",
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
