import type { Metadata } from "next";
import { ChoiceGuide } from "@/domains/features/snackbar/choice-guide";
import { ContactCta } from "@/domains/features/snackbar/contact-cta";
import { Delivery } from "@/domains/features/snackbar/delivery";
import { Faq } from "@/domains/features/snackbar/faq";
import { Hero } from "@/domains/features/snackbar/hero";
import { LoungePlan } from "@/domains/features/snackbar/lounge-plan";
import { Process } from "@/domains/features/snackbar/process";
import { Pricing } from "@/domains/features/snackbar/pricing";
import { ProductCatalog } from "@/domains/features/snackbar/product-catalog";
import { Stations } from "@/domains/features/snackbar/stations";

export const metadata: Metadata = {
	title: "오피스 스낵바 | 이디야커피 안산 비즈니스 솔루션",
	description: "음료, 디저트, 캡슐커피까지 사무실 환경에 맞춰 구성하는 이디야 오피스 스테이션 솔루션입니다.",
};

export default function SnackbarPage() {
	return (
		<div className="bg-white text-slate-900">
			<div className="lg:hidden">
				<Hero />
			</div>
			<Stations />
			<ProductCatalog />
			<Pricing />
			<Delivery />
			<ChoiceGuide />
			<LoungePlan />
			<Process />
			<Faq />
			<ContactCta />
		</div>
	);
}
