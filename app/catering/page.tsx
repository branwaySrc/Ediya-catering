import { CateringSolutionIntro } from "@/domains/catering/solution-intro";

export { metadata } from "./meta";

export default function CateringPage() {
	return (
		<div className="min-h-screen bg-[#F8F9FC]">
			<CateringSolutionIntro />
		</div>
	);
}
