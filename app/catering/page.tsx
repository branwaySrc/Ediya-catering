import type { Metadata } from "next";
import { CateringFAQ } from "@/domains/features/catering/faq";
import { CateringFinalCTA } from "@/domains/features/catering/final-cta";
import { CateringHero } from "@/domains/features/catering/hero";
import { CateringNotice } from "@/domains/features/catering/notice";
import { CateringPackageCards } from "@/domains/features/catering/package-cards";
import { CateringPackageOverview } from "@/domains/features/catering/package-overview";
import { CateringPriceCalculator } from "@/domains/features/catering/price-calculator";
import { CateringProcess } from "@/domains/features/catering/process";
import { CateringSecondaryNavigation } from "@/domains/features/catering/secondary-navigation";
import { CustomCateringSection } from "@/domains/features/catering/custom-catering";

export const metadata: Metadata = {
	title: "규모패키지 | 이디야 안산지점 케이터링",
	description: "행사 인원수에 맞춰 커피와 음료 케이터링 예상 견적을 확인하고 상담을 요청하세요.",
};

export default function CateringPage() {
	return (
		<div className="min-h-screen bg-[#F8F9FC]">
			<CateringHero />
			<CateringSecondaryNavigation />
			<CateringPackageOverview />
			<CateringPriceCalculator />
			<CateringPackageCards />
			<CustomCateringSection />
			<CateringProcess />
			<CateringNotice />
			<CateringFAQ />
			<CateringFinalCTA />
		</div>
	);
}
