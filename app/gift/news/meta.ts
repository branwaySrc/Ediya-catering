import { routes } from "@/share/routes";
import { createPageMetadata } from "@/share/meta";

export const metadata = createPageMetadata({
	title: "최신 MD 소식 | 이디야 시즌 기프트",
	description: "시즌마다 바뀌는 이디야 MD 상품과 기업 선물 구성을 카카오톡 또는 이메일로 받아보세요.",
	path: routes.gift.news,
	keywords: ["이디야 MD 소식", "시즌 선물 문의", "기업 선물 상담"],
});
