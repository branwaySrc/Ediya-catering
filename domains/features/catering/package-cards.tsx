import { ArrowRight, CheckCircle2, Users } from "lucide-react";
import { Button } from "@/share/button";
import { ScreenSection } from "@/share/screen-section";
import { TitleBadge } from "@/share/title-badge";
import { estimatePackages } from "./data";

const priceFormatter = new Intl.NumberFormat("ko-KR");

export function CateringPackageCards() {
	return (
		<section className="bg-[#F8F9FC] py-20 sm:py-24" aria-labelledby="catering-package-cards-heading">
			<ScreenSection>
				<div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
					<div className="max-w-2xl">
						<TitleBadge>
							<TitleBadge.Icon backgroundColor={["#4A8DF1", "#1C5DBE"]} icon={Users} className="text-white shadow-none" />
							<TitleBadge.Title>패키지 구성</TitleBadge.Title>
							<TitleBadge.Badge className="border-[#1C5DBE] text-[#1C5DBE]">PACKAGES</TitleBadge.Badge>
						</TitleBadge>
						<p className="hidden text-sm font-bold uppercase tracking-[0.16em] text-primary/55">Packages</p>
						<h2 id="catering-package-cards-heading" className="mt-4 text-3xl font-bold text-primary sm:text-4xl">
							행사 규모에 맞춰 고르는 3가지 패키지
						</h2>
					</div>
					<Button.Link href="#estimate" variant="ghost" icon={ArrowRight} iconPosition="right">
						예상 견적 계산하기
					</Button.Link>
				</div>

				<div className="mt-10 grid gap-4 lg:grid-cols-3">
					{estimatePackages.map((item) => (
						<article key={item.id} className="flex flex-col rounded-lg border border-primary/10 bg-white p-6 shadow-sm sm:p-7">
							<div className="flex items-start justify-between gap-4">
								<div>
									<p className="text-xs font-bold uppercase tracking-[0.14em] text-primary/45">{item.name}</p>
									<h3 className="mt-2 text-2xl font-bold text-primary">{item.koreanName}</h3>
								</div>
								<span className="inline-flex size-11 shrink-0 items-center justify-center rounded-md bg-blue-50 text-primary">
									<Users aria-hidden="true" className="size-5" />
								</span>
							</div>

							<p className="mt-5 text-2xl font-bold text-primary">1인 {priceFormatter.format(item.pricePerPerson)}원부터</p>
							<p className="mt-4 min-h-16 text-sm leading-7 text-slate-600">{item.description}</p>

							<div className="mt-6">
								<p className="text-sm font-bold text-primary">추천 대상</p>
								<div className="mt-3 flex flex-wrap gap-2">
									{item.recommendedFor.map((target) => (
										<span key={target} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600">
											{target}
										</span>
									))}
								</div>
							</div>

							<ul className="mt-6 grid gap-3">
								{item.features.map((feature) => (
									<li key={feature} className="flex gap-2 text-sm leading-6 text-slate-700">
										<CheckCircle2 aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-[#1C5DBE]" />
										{feature}
									</li>
								))}
							</ul>

							<Button.Link href={`/contact?service=catering&package=${item.id}`} variant="primary" icon={ArrowRight} iconPosition="right" className="mt-8 w-full">
								이 패키지 문의하기
							</Button.Link>
						</article>
					))}
				</div>
			</ScreenSection>
		</section>
	);
}
