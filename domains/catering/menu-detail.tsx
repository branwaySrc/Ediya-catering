import Image from "next/image";
import { ArrowRight, CheckCircle2, Search } from "lucide-react";
import { Button } from "@/share/button";
import { ScreenSection } from "@/share/screen-section";
import { detailedMenuCategories } from "./data";

export function CateringMenuDetail() {
	return (
		<div className="bg-[#F8F9FC] text-slate-900">
			<section className="bg-white py-20 sm:py-24">
				<ScreenSection className="grid gap-10">
					<div>
						<p className="inline-flex rounded-full border border-primary/10 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">
							Menu Catalog
						</p>
						<h1 className="mt-6 text-4xl font-bold leading-tight text-primary sm:text-5xl">
							커피부터 베이커리까지
							<br />
							필요한 메뉴를 먼저 확인하세요.
						</h1>
						<p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
							카테고리별로 단체 주문과 케이터링 상담에 활용할 수 있는 메뉴 예시를 모았습니다.
							실제 제공 가능 메뉴와 수량은 매장 상황과 일정에 따라 상담 후 확정됩니다.
						</p>
					</div>

					<div className="rounded-lg border border-primary/10 bg-primary p-6 text-white shadow-xl shadow-primary/15 sm:p-8">
						<span className="inline-flex size-12 items-center justify-center rounded-lg bg-white/10">
							<Search aria-hidden="true" className="size-6" />
						</span>
						<h2 className="mt-6 text-2xl font-bold">카테고리별 확인 후 바로 문의</h2>
						<p className="mt-3 text-sm leading-7 text-blue-100/75">
							원하는 메뉴군이 있으면 문의 링크에 카테고리를 함께 전달합니다. 상담 시 메뉴 구성과 수량을 더 빠르게 정리할 수 있습니다.
						</p>
						<Button.Link href="/contact?service=catering&type=menu" variant="none" icon={ArrowRight} iconPosition="right" className="mt-7 border border-white bg-white text-primary hover:bg-blue-50">
							메뉴 상담하기
						</Button.Link>
					</div>
				</ScreenSection>
			</section>

			<section className="py-20 sm:py-24">
				<ScreenSection className="grid gap-6">
					{detailedMenuCategories.map((category) => (
						<article key={category.id} id={category.id} className="scroll-mt-40 overflow-hidden rounded-lg border border-primary/10 bg-white shadow-sm">
							<div className="grid">
								<div className="relative min-h-72 bg-slate-50">
									<Image src={category.image} alt="" fill sizes="100vw" className="object-contain p-8" />
								</div>
								<div className="p-6 sm:p-8">
									<div className="flex flex-col gap-4">
										<div>
											<p className="text-xs font-bold uppercase tracking-[0.16em] text-primary/45">{category.id}</p>
											<h2 className="mt-2 text-2xl font-bold text-primary">{category.name}</h2>
											<p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">{category.description}</p>
										</div>
										<Button.Link href={`/contact?service=catering&type=menu&category=${category.id}`} variant="ghost" icon={ArrowRight} iconPosition="right" className="shrink-0">
											이 메뉴로 문의
										</Button.Link>
									</div>

									<div className="mt-7 grid gap-3">
										{category.items.map((item) => (
											<div key={item.name} className="rounded-lg border border-slate-200 bg-white p-5">
												<h3 className="font-bold text-primary">{item.name}</h3>
												<p className="mt-3 min-h-20 text-sm leading-6 text-slate-600">{item.description}</p>
												<div className="mt-4 flex flex-wrap gap-2">
													{item.tags.map((tag) => (
														<span key={tag} className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-primary">
															<CheckCircle2 aria-hidden="true" className="size-3" />
															{tag}
														</span>
													))}
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</article>
					))}
				</ScreenSection>
			</section>
		</div>
	);
}
