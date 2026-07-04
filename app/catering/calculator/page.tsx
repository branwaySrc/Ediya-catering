import type { Metadata } from "next";
import { CateringPriceCalculator } from "@/domains/features/catering/price-calculator";

export const metadata: Metadata = {
	title: "견적 계산 | 이디야 안산지점 케이터링",
	description: "행사 인원과 패키지 기준으로 이디야 케이터링 예상 견적을 빠르게 확인하세요.",
};

export default function CateringCalculatorPage() {
	return <CateringPriceCalculator />;
}
