import { CateringCustomOrderGuide } from "@/domains/catering/custom-order-guide";
import { CateringGeneralOrder } from "@/domains/catering/general-order";

export { metadata } from "./meta";

export default function CateringCustomOrderPage() {
	return (
		<>
			<CateringGeneralOrder />
			<CateringCustomOrderGuide />
		</>
	);
}
