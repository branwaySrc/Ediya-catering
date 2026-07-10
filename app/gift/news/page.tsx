import { GiftNews } from "@/domains/gift/sections";

export { metadata } from "./meta";

export default function GiftNewsPage() {
	return (
		<div className="bg-white text-slate-900">
			<GiftNews />
		</div>
	);
}
