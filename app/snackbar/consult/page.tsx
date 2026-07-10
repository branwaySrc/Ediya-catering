import { ContactCta } from "@/domains/snackbar/contact-cta";
import { Faq } from "@/domains/snackbar/faq";

export { metadata } from "./meta";

export default function SnackbarConsultPage() {
	return (
		<div className="bg-white text-slate-900">
			<Faq />
			<ContactCta />
		</div>
	);
}
