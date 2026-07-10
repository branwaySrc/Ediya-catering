import { ChoiceGuide } from "@/domains/snackbar/choice-guide";
import { Hero } from "@/domains/snackbar/hero";

export { metadata } from "./meta";

export default function SnackbarIntroPage() {
	return (
		<div className="bg-white text-slate-900">
			<Hero />
			<ChoiceGuide />
		</div>
	);
}
