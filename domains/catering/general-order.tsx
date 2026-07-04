import Image from "next/image";
import { ArrowRight, CheckCircle2, ClipboardList, Clock3, PackageCheck } from "lucide-react";
import { Button } from "@/share/button";
import { ScreenSection } from "@/share/screen-section";
import { generalOrderChecklist, generalOrderExamples, generalOrderTypes } from "./data";

export function CateringGeneralOrder() {
	return (
		<div className="bg-[#F8F9FC] text-slate-900">
			<section className="bg-white py-20 sm:py-24">
				<ScreenSection className="grid gap-10">
					<div>
						<p className="inline-flex rounded-full border border-primary/10 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">
							General Order
						</p>
						<h1 className="mt-6 text-4xl font-bold leading-tight text-primary sm:text-5xl">
							필요한 메뉴와 수량만 정해졌다면
							<br />
							일반주문으로 빠르게 상담하세요.
						</h1>
						<p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
							규모패키지까지는 필요 없지만 회의, 미팅, 소규모 행사에 커피와 간식이 필요할 때 적합합니다.
							날짜, 수량, 픽업 또는 제공 방식을 알려주시면 가능한 구성을 확인해드립니다.
						</p>
						<div className="mt-8 flex flex-col gap-3">
							<Button.Link href="/contact?service=catering&type=general-order" variant="primary" icon={ArrowRight} iconPosition="right">
								일반주문 문의하기
							</Button.Link>
							<Button.Link href="/catering/menu" variant="ghost">
								메뉴 먼저 보기
							</Button.Link>
						</div>
					</div>

					<div className="grid gap-3">
						{generalOrderTypes.map((item) => (
							<article key={item.id} className="overflow-hidden rounded-lg border border-primary/10 bg-white shadow-sm">
								<div className="relative aspect-[4/3] bg-slate-50">
									<Image src={item.image} alt="" fill sizes="100vw" className="object-contain p-6" />
								</div>
								<div className="p-5">
									<h2 className="font-bold text-primary">{item.title}</h2>
									<p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
								</div>
							</article>
						))}
					</div>
				</ScreenSection>
			</section>

			<section className="py-20 sm:py-24">
				<ScreenSection className="grid gap-6">
					<article className="rounded-lg border border-primary/10 bg-white p-6 shadow-sm sm:p-8">
						<span className="inline-flex size-12 items-center justify-center rounded-lg bg-blue-50 text-primary">
							<ClipboardList aria-hidden="true" className="size-6" />
						</span>
						<h2 className="mt-6 text-2xl font-bold text-primary">문의 전에 알려주시면 좋은 정보</h2>
						<ul className="mt-6 grid gap-3">
							{generalOrderChecklist.map((item) => (
								<li key={item} className="flex gap-3 rounded-lg bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700">
									<CheckCircle2 aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-[#1C5DBE]" />
									{item}
								</li>
							))}
						</ul>
					</article>

					<article className="rounded-lg border border-primary/10 bg-primary p-6 text-white shadow-xl shadow-primary/15 sm:p-8">
						<span className="inline-flex size-12 items-center justify-center rounded-lg bg-white/10">
							<PackageCheck aria-hidden="true" className="size-6" />
						</span>
						<h2 className="mt-6 text-2xl font-bold">일반주문이 잘 맞는 경우</h2>
						<ul className="mt-6 grid gap-3">
							{generalOrderExamples.map((item) => (
								<li key={item} className="rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm font-bold">
									{item}
								</li>
							))}
						</ul>
					</article>
				</ScreenSection>
			</section>

			<section className="bg-white py-20 sm:py-24">
				<ScreenSection>
					<div className="grid gap-6 rounded-lg border border-amber-200 bg-amber-50 p-6 text-amber-950 sm:p-8">
						<span className="inline-flex size-12 items-center justify-center rounded-lg bg-white text-amber-600">
							<Clock3 aria-hidden="true" className="size-6" />
						</span>
						<div>
							<h2 className="text-xl font-bold">가능 여부와 최종 금액은 상담 후 확정됩니다</h2>
							<p className="mt-2 text-sm leading-7 text-amber-900/75">
								일반주문은 매장 상황, 재고, 일정, 수량에 따라 준비 가능 여부가 달라질 수 있습니다. 급한 일정은 전화 문의를 권장합니다.
							</p>
						</div>
						<Button.Link href="/contact?service=catering&type=general-order" variant="primary" icon={ArrowRight} iconPosition="right" className="shrink-0">
							상담 요청하기
						</Button.Link>
					</div>
				</ScreenSection>
			</section>
		</div>
	);
}
