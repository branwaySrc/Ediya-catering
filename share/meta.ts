import type { Metadata } from "next";

export const SITE_URL = "https://www.ediya-catering.kr";
export const SITE_NAME = "이디야 안산 비즈니스 솔루션";
export const SITE_DESCRIPTION =
	"이디야커피 안산 지점이 제공하는 기업 행사 커피 케이터링, 오피스 스낵바, 시즌 기프트, 공간대여 상담 서비스입니다.";

export const SEO_KEYWORDS = [
	"이디야 케이터링",
	"커피 케이터링",
	"기업 행사 커피",
	"행사 음료 준비",
	"안산 케이터링",
	"오피스 스낵바",
	"이디야 기업 선물",
	"이디야 안산",
];

type CreatePageMetadataOptions = {
	title: string;
	description: string;
	path: string;
	openGraphTitle?: string;
	openGraphDescription?: string;
	image?: string;
	keywords?: string[];
};

export function createPageMetadata({
	title,
	description,
	path,
	openGraphTitle = title,
	openGraphDescription = description,
	image,
	keywords = [],
}: CreatePageMetadataOptions): Metadata {
	return {
		title,
		description,
		keywords: [...SEO_KEYWORDS, ...keywords],
		alternates: {
			canonical: path,
		},
		openGraph: {
			title: openGraphTitle,
			description: openGraphDescription,
			url: path,
			...(image
				? {
						images: [
							{
								url: image,
								width: 1200,
								height: 630,
								alt: openGraphTitle,
							},
						],
					}
				: {}),
		},
	};
}
