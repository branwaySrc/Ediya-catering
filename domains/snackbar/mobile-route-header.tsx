"use client";

import { usePathname } from "next/navigation";

import { RouteHeader } from "@/share/route-header";
import { getSnackbarRouteHeader } from "@/domains/snackbar/route-header-data";

export function SnackbarMobileRouteHeader() {
	const pathname = usePathname();
	const routeHeader = getSnackbarRouteHeader(pathname);

	return <RouteHeader {...routeHeader} />;
}
