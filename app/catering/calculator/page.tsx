import type { Metadata } from "next";
import { CateringPriceCalculator } from "@/domains/catering/price-calculator";

export const metadata: Metadata = {
	title: "케이터링 패키지 | 이디야 안산지점 케이터링",
	description: "이디야 케이터링 패키지와 세부 옵션을 선택하고 예상 금액을 확인하세요.",
};

export default function CateringCalculatorPage() {
	return <CateringPriceCalculator />;
}
