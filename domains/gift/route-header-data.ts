import type { RouteHeaderProps } from "@/share/route-header";
import { routes } from "@/share/routes";

const segmentLabels: Record<string, string> = {
	gift: "기프트",
	moments: "활용 장면",
	collection: "시즌 컬렉션",
	service: "준비 서비스",
	news: "최신 MD",
};

const giftRouteHeaders: Record<string, RouteHeaderProps> = {
	[routes.gift.root]: {
		title: "시즌 기프트",
		description: "이디야 MD 선물 솔루션",
		breadcrumbs: [{ label: "기프트", href: routes.gift.root }],
	},
	[routes.gift.moments]: {
		title: "기프트 활용 장면",
		description: "명절, 행사, 기업 단체 선물",
		breadcrumbs: [
			{ label: "기프트", href: routes.gift.root },
			{ label: "활용 장면", href: routes.gift.moments },
		],
	},
	[routes.gift.collection]: {
		title: "시즌 컬렉션",
		description: "시즌별 이디야 MD 구성",
		breadcrumbs: [
			{ label: "기프트", href: routes.gift.root },
			{ label: "컬렉션", href: routes.gift.collection },
		],
	},
	[routes.gift.service]: {
		title: "준비 서비스",
		description: "포장과 배송 준비까지",
		breadcrumbs: [
			{ label: "기프트", href: routes.gift.root },
			{ label: "서비스", href: routes.gift.service },
		],
	},
	[routes.gift.news]: {
		title: "최신 MD 소식",
		description: "상품 소식과 상담 연결",
		breadcrumbs: [
			{ label: "기프트", href: routes.gift.root },
			{ label: "소식", href: routes.gift.news },
		],
	},
};

function normalizePathname(pathname: string) {
	const pathnameOnly = pathname.split("?")[0]?.split("#")[0] ?? routes.gift.root;
	const withoutTrailingSlash = pathnameOnly.length > 1 ? pathnameOnly.replace(/\/$/, "") : pathnameOnly;

	return withoutTrailingSlash || routes.gift.root;
}

function getSegmentLabel(segment: string) {
	return segmentLabels[segment] ?? segment.replaceAll("-", " ");
}

function createFallbackHeader(pathname: string): RouteHeaderProps {
	const segments = normalizePathname(pathname).split("/").filter(Boolean).slice(0, 3);

	if (segments[0] !== "gift") {
		return giftRouteHeaders[routes.gift.root];
	}

	const parentPath = `/${segments.slice(0, -1).join("/")}`;

	return {
		breadcrumbs: segments.map((segment, index) => {
			const isLast = index === segments.length - 1;
			const href = `/${segments.slice(0, index + 1).join("/")}`;

			return {
				label: index === 0 ? "기프트" : getSegmentLabel(segment),
				href: isLast ? undefined : href,
			};
		}),
		title: getSegmentLabel(segments.at(-1) ?? "gift"),
		backHref: segments.length > 2 ? parentPath : undefined,
		backLabel: "상위 페이지로 이동",
	};
}

export function getGiftRouteHeader(pathname: string): RouteHeaderProps {
	const normalizedPathname = normalizePathname(pathname);

	return giftRouteHeaders[normalizedPathname] ?? createFallbackHeader(normalizedPathname);
}
