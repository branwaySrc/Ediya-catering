import { Category } from "@/domains/features/catering/category";
import { Cost } from "@/domains/features/catering/cost";
import { MenuCatalog } from "@/domains/features/catering/menu-catalog";

export default function CateringPage() {
	return (
		<div className="min-h-screen bg-[#F8F9FC]">
			<MenuCatalog />
			<Category />
			<Cost />
		</div>
	);
}
