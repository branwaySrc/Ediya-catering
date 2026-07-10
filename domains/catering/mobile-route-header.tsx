"use client";

import { usePathname } from "next/navigation";

import { RouteHeader } from "@/share/route-header";
import { getCateringRouteHeader } from "@/domains/catering/route-header-data";

export function CateringMobileRouteHeader() {
	const pathname = usePathname();
	const routeHeader = getCateringRouteHeader(pathname);

	return <RouteHeader {...routeHeader} />;
}
