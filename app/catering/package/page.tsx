import { CateringPackageGuide } from "@/domains/catering/package-guide";
import { CateringPriceCalculator } from "@/domains/catering/price-calculator";

export { metadata } from "./meta";

export default function CateringPackagePage() {
	return (
		<>
			<CateringPriceCalculator />
			<CateringPackageGuide />
		</>
	);
}
