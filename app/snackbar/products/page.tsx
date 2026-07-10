import { ProductCatalog } from "@/domains/snackbar/product-catalog";

export { metadata } from "./meta";

export default function SnackbarProductsPage() {
	return (
		<div className="bg-[#F8F9FC] text-slate-900">
			<ProductCatalog />
		</div>
	);
}
