"use client";

import { usePathname } from "next/navigation";

import { RouteHeader } from "@/share/route-header";
import { getGiftRouteHeader } from "@/domains/gift/route-header-data";

export function GiftMobileRouteHeader() {
	const pathname = usePathname();
	const header = getGiftRouteHeader(pathname);

	return <RouteHeader {...header} />;
}
