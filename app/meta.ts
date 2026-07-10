import type { Metadata } from "next";
import { createPageMetadata, SEO_KEYWORDS, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/share/meta";

export const rootMetadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	applicationName: SITE_NAME,
	title: {
		default: "이디야 안산지점 | 행사에 카페를 더하다",
		template: "%s | 이디야 안산 비즈니스 솔루션",
	},
	description: SITE_DESCRIPTION,
	keywords: SEO_KEYWORDS,
	authors: [{ name: "이디야커피 안산 지점" }],
	creator: "이디야커피 안산 지점",
	publisher: "이디야커피 안산 지점",
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		locale: "ko_KR",
		url: "/",
		siteName: SITE_NAME,
		title: "이디야 안산지점 | 행사에 카페를 더하다",
		description: SITE_DESCRIPTION,
		images: [
			{
				url: "/catering-herobgv03.png",
				width: 1200,
				height: 630,
				alt: "이디야 커피 케이터링 서비스",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "이디야 안산지점 | 행사에 카페를 더하다",
		description: SITE_DESCRIPTION,
		images: ["/catering-herobgv03.png"],
	},
	robots: {
		index: true,
		follow: true,
	},
};

export const homeMetadata = createPageMetadata({
	title: "이디야 케이터링 · 오피스 스낵바 · 기업 선물",
	description: "행사 커피 케이터링부터 오피스 스낵바, 시즌 기프트, 공간대여까지 이디야커피 안산 지점의 비즈니스 솔루션을 확인하세요.",
	path: "/",
	openGraphTitle: "이디야 안산 비즈니스 솔루션",
	openGraphDescription: "기업 행사와 사무실 운영에 필요한 커피 케이터링, 스낵바, 선물 솔루션을 제공합니다.",
});
