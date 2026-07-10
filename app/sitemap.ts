import type { MetadataRoute } from "next";
import { routes } from "@/share/routes";
import { SITE_URL } from "@/share/meta";

const routeEntries = [
	{ path: routes.home, priority: 1 },
	{ path: routes.catering.root, priority: 0.95 },
	{ path: routes.catering.package, priority: 0.9 },
	{ path: routes.catering.customOrder, priority: 0.9 },
	{ path: routes.catering.faq, priority: 0.7 },
	{ path: routes.snackbar.root, priority: 0.75 },
	{ path: routes.snackbar.intro, priority: 0.72 },
	{ path: routes.snackbar.stations, priority: 0.7 },
	{ path: routes.snackbar.products, priority: 0.7 },
	{ path: routes.snackbar.care, priority: 0.65 },
	{ path: routes.snackbar.consult, priority: 0.6 },
	{ path: routes.gift.root, priority: 0.7 },
	{ path: routes.gift.moments, priority: 0.65 },
	{ path: routes.gift.collection, priority: 0.65 },
	{ path: routes.gift.service, priority: 0.65 },
	{ path: routes.gift.news, priority: 0.6 },
	{ path: routes.about, priority: 0.65 },
	{ path: routes.rental, priority: 0.55 },
	{ path: routes.contact, priority: 0.5 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
	const lastModified = new Date();

	return routeEntries.map(({ path, priority }) => ({
		url: new URL(path, SITE_URL).toString(),
		lastModified,
		changeFrequency: "weekly",
		priority,
	}));
}
