import { GiftMoments } from "@/domains/gift/sections";

export { metadata } from "./meta";

export default function GiftMomentsPage() {
	return (
		<div className="bg-white text-slate-900">
			<GiftMoments />
		</div>
	);
}
