import { GiftCollection } from "@/domains/gift/sections";

export { metadata } from "./meta";

export default function GiftCollectionPage() {
	return (
		<div className="bg-white text-slate-900">
			<GiftCollection />
		</div>
	);
}
