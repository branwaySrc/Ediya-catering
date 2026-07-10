import { LoungePlan } from "@/domains/snackbar/lounge-plan";
import { Stations } from "@/domains/snackbar/stations";

export { metadata } from "./meta";

export default function SnackbarStationsPage() {
	return (
		<div className="bg-white text-slate-900">
			<Stations />
			<LoungePlan />
		</div>
	);
}
