import { Delivery } from "@/domains/snackbar/delivery";
import { Pricing } from "@/domains/snackbar/pricing";
import { Process } from "@/domains/snackbar/process";

export { metadata } from "./meta";

export default function SnackbarCarePage() {
	return (
		<div className="bg-white text-slate-900">
			<Pricing />
			<Delivery />
			<Process />
		</div>
	);
}
