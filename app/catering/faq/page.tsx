import { CateringFAQ } from "@/domains/catering/faq";

export { metadata } from "./meta";

export default function CateringFaqPage() {
	return (
		<div className="min-h-screen bg-white">
			<CateringFAQ />
		</div>
	);
}
