import type { RouteHeaderProps } from "@/share/route-header";
import { routes } from "@/share/routes";

const segmentLabels: Record<string, string> = {
	catering: "케이터링",
	package: "패키지 구성",
	"custom-order": "커스텀 주문",
	faq: "FAQ",
	detail: "상세",
};

const cateringRouteHeaders: Record<string, RouteHeaderProps> = {
	[routes.catering.root]: {
		breadcrumbs: [
			{ label: "케이터링", href: routes.catering.root },
			{ label: "솔루션 소개" },
		],
		title: "이디야 케이터링",
		description: "규모와 목적에 맞춰 커피, 음료, 다과 구성을 제안합니다.",
	},
	[routes.catering.package]: {
		breadcrumbs: [
			{ label: "케이터링", href: routes.catering.root },
			{ label: "패키지 구성" },
		],
		title: "패키지 구성",
		description: "인원과 옵션을 기준으로 케이터링 예상 견적을 확인합니다.",
	},
	[routes.catering.customOrder]: {
		breadcrumbs: [
			{ label: "케이터링", href: routes.catering.root },
			{ label: "커스텀 주문" },
		],
		title: "커스텀 주문",
		description: "필요한 음료와 다과를 직접 골라 행사에 맞는 구성을 만듭니다.",
	},
	[routes.catering.faq]: {
		breadcrumbs: [
			{ label: "케이터링", href: routes.catering.root },
			{ label: "FAQ" },
		],
		title: "자주 묻는 질문",
		description: "상담 전에 많이 묻는 주문, 가격, 구성 관련 질문을 확인합니다.",
	},
};

function normalizePathname(pathname: string) {
	const pathnameOnly = pathname.split("?")[0]?.split("#")[0] ?? routes.catering.root;
	const withoutTrailingSlash = pathnameOnly.replace(/\/+$/, "");

	return withoutTrailingSlash || routes.catering.root;
}

function getSegmentLabel(segment: string) {
	return segmentLabels[segment] ?? segment.replaceAll("-", " ");
}

function getParentPath(segments: string[]) {
	if (segments.length <= 1) {
		return routes.catering.root;
	}

	return `/${segments.slice(0, -1).join("/")}`;
}

function createFallbackHeader(pathname: string): RouteHeaderProps {
	const segments = normalizePathname(pathname).split("/").filter(Boolean).slice(0, 3);

	if (segments[0] !== "catering") {
		return cateringRouteHeaders[routes.catering.root];
	}

	const currentLabel = getSegmentLabel(segments.at(-1) ?? "catering");
	const parentPath = getParentPath(segments);

	return {
		breadcrumbs: segments.map((segment, index) => {
			const isLast = index === segments.length - 1;
			const href = `/${segments.slice(0, index + 1).join("/")}`;

			return {
				label: index === 0 ? "케이터링" : getSegmentLabel(segment),
				href: isLast ? undefined : href,
			};
		}),
		title: currentLabel,
		backHref: segments.length > 2 ? parentPath : undefined,
		backLabel: "상위 페이지로 이동",
	};
}

export function getCateringRouteHeader(pathname: string): RouteHeaderProps {
	const normalizedPathname = normalizePathname(pathname);

	return cateringRouteHeaders[normalizedPathname] ?? createFallbackHeader(normalizedPathname);
}
