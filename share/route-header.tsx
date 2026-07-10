import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { ScreenSection } from "@/share/screen-section";

export type RouteHeaderBreadcrumbItem = {
	label: string;
	href?: string;
};

export type RouteHeaderProps = {
	breadcrumbs: RouteHeaderBreadcrumbItem[];
	title: string;
	description?: string;
	backHref?: string;
	backLabel?: string;
	className?: string;
};

function getBreadcrumbContext(breadcrumbs: RouteHeaderBreadcrumbItem[]) {
	return breadcrumbs
		.slice(0, -1)
		.map(item => item.label)
		.join(" / ");
}

export function RouteHeader({ breadcrumbs, title, description, backHref, backLabel = "이전 페이지로 이동", className }: RouteHeaderProps) {
	if (backHref) {
		const breadcrumbContext = getBreadcrumbContext(breadcrumbs);

		return (
			<header className={`border-b border-primary/10 bg-white ${className ?? ""}`}>
				<ScreenSection className="py-3">
					<div className="grid min-h-11 grid-cols-[2.75rem_1fr_2.75rem] items-center">
						<Link
							href={backHref}
							aria-label={backLabel}
							className="inline-flex size-10 items-center justify-center rounded-full text-slate-900 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
						>
							<ChevronLeft className="size-6" aria-hidden="true" />
						</Link>

						<div className="min-w-0 text-center">
							<h1 className="truncate text-base font-bold leading-6 text-slate-950">{title}</h1>
							{breadcrumbContext ? <p className="truncate text-[11px] font-bold leading-4 text-slate-400">{breadcrumbContext}</p> : null}
						</div>

						<span aria-hidden="true" />
					</div>
				</ScreenSection>
			</header>
		);
	}

	return (
		<header className={`border-b border-primary/10 bg-white ${className ?? ""}`}>
			<ScreenSection className="py-5">
				<div className="flex items-start gap-3">
					<div className="min-w-0">
						<nav aria-label="현재 위치">
							<ol className="flex min-w-0 flex-wrap items-center gap-1 text-xs font-bold text-slate-500">
								{breadcrumbs.map((item, index) => {
									const isLast = index === breadcrumbs.length - 1;

									return (
										<li key={`${item.label}-${index}`} className="inline-flex min-w-0 items-center gap-1">
											{item.href && !isLast ? (
												<Link href={item.href} className="truncate transition hover:text-primary">
													{item.label}
												</Link>
											) : (
												<span className={`truncate ${isLast ? "text-primary" : ""}`}>{item.label}</span>
											)}
											{!isLast ? <ChevronRight className="size-3.5 shrink-0 text-slate-300" aria-hidden="true" /> : null}
										</li>
									);
								})}
							</ol>
						</nav>

						<h1 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.03em] text-slate-900">{title}</h1>
						{description ? <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">{description}</p> : null}
					</div>
				</div>
			</ScreenSection>
		</header>
	);
}
