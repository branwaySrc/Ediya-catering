import { GiftHero, GiftMomentIntro } from "@/domains/gift/sections";

export { metadata } from "./meta";

export default function GiftPage() {
	return (
		<div className="bg-white text-slate-900">
			<GiftHero />
			<GiftMomentIntro />
		</div>
	);
}
