import type { RouteHeaderProps } from "@/share/route-header";
import { routes } from "@/share/routes";

const segmentLabels: Record<string, string> = {
	snackbar: "스낵바",
	intro: "솔루션 소개",
	stations: "스테이션 구성",
	products: "상품 라인업",
	care: "배송/관리",
	consult: "상담 시작",
};

const snackbarRouteHeaders: Record<string, RouteHeaderProps> = {
	[routes.snackbar.root]: {
		breadcrumbs: [{ label: "스낵바", href: routes.snackbar.root }, { label: "솔루션 소개" }],
		title: "오피스 스낵바",
		description: "사무실 환경과 예산에 맞춰 음료, 간식, 캡슐커피 구성을 제안합니다.",
	},
	[routes.snackbar.intro]: {
		breadcrumbs: [{ label: "스낵바", href: routes.snackbar.root }, { label: "솔루션 소개" }],
		title: "오피스 스낵바",
		description: "사무실 환경과 예산에 맞춰 음료, 간식, 캡슐커피 구성을 제안합니다.",
	},
	[routes.snackbar.stations]: {
		breadcrumbs: [{ label: "스낵바", href: routes.snackbar.root }, { label: "스테이션 구성" }],
		title: "스테이션 구성",
		description: "공간과 이용 인원에 맞는 오피스 스낵바 장비 구성을 확인합니다.",
	},
	[routes.snackbar.products]: {
		breadcrumbs: [{ label: "스낵바", href: routes.snackbar.root }, { label: "상품 라인업" }],
		title: "상품 라인업",
		description: "사무실에 채울 음료, 디저트, 캡슐커피 구성을 살펴봅니다.",
	},
	[routes.snackbar.care]: {
		breadcrumbs: [{ label: "스낵바", href: routes.snackbar.root }, { label: "배송/관리" }],
		title: "배송과 관리",
		description: "월 예산에 따라 달라지는 무료 배송, 직접 정리, 재고 케어 기준을 확인합니다.",
	},
	[routes.snackbar.consult]: {
		breadcrumbs: [{ label: "스낵바", href: routes.snackbar.root }, { label: "FAQ" }],
		title: "자주 묻는 질문",
		description: "도입 전 자주 묻는 질문과 상담 방법을 확인합니다.",
	},
};

function normalizePathname(pathname: string) {
	const pathnameOnly = pathname.split("?")[0]?.split("#")[0] ?? routes.snackbar.root;
	const withoutTrailingSlash = pathnameOnly.replace(/\/+$/, "");

	return withoutTrailingSlash || routes.snackbar.root;
}

function getSegmentLabel(segment: string) {
	return segmentLabels[segment] ?? segment.replaceAll("-", " ");
}

function createFallbackHeader(pathname: string): RouteHeaderProps {
	const segments = normalizePathname(pathname).split("/").filter(Boolean).slice(0, 3);

	if (segments[0] !== "snackbar") {
		return snackbarRouteHeaders[routes.snackbar.root];
	}

	const parentPath = `/${segments.slice(0, -1).join("/")}`;

	return {
		breadcrumbs: segments.map((segment, index) => {
			const isLast = index === segments.length - 1;
			const href = `/${segments.slice(0, index + 1).join("/")}`;

			return {
				label: index === 0 ? "스낵바" : getSegmentLabel(segment),
				href: isLast ? undefined : href,
			};
		}),
		title: getSegmentLabel(segments.at(-1) ?? "snackbar"),
		backHref: segments.length > 2 ? parentPath : undefined,
		backLabel: "상위 페이지로 이동",
	};
}

export function getSnackbarRouteHeader(pathname: string): RouteHeaderProps {
	const normalizedPathname = normalizePathname(pathname);

	return snackbarRouteHeaders[normalizedPathname] ?? createFallbackHeader(normalizedPathname);
}
