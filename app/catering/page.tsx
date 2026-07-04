import type { Metadata } from "next";
import { CateringFAQ } from "@/domains/catering/faq";
import { CateringSolutionIntro } from "@/domains/catering/solution-intro";

export const metadata: Metadata = {
	title: "솔루션 소개 | 이디야 안산지점 케이터링",
	description: "이디야 커피 메뉴를 기반으로 행사 인원과 예산에 맞춘 음료와 간식 구성을 안내합니다.",
};

export default function CateringPage() {
	return (
		<div className="min-h-screen bg-[#F8F9FC]">
			<CateringSolutionIntro />
			<CateringFAQ />
		</div>
	);
}
