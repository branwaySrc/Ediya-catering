import { GiftProcess, GiftService } from "@/domains/gift/sections";

export { metadata } from "./meta";

export default function GiftServicePage() {
	return (
		<div className="bg-white text-slate-900">
			<GiftService />
			<GiftProcess />
		</div>
	);
}
