import { Delivery } from "@/domains/snackbar/delivery";

export { metadata } from "./meta";

export default function SnackbarCarePage() {
	return (
		<div className="bg-white text-slate-900">
			<Delivery />
		</div>
	);
}
