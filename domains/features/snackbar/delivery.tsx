import { BarChart3, CalendarSync, PackageCheck, Truck } from "lucide-react";
import { ScreenSection } from "@/share/screen-section";

const managementSteps = [
	{ icon: CalendarSync, title: "주 1~2회 방문", description: "기본 방문 주기를 정하고 소진 속도에 따라 일정을 조정합니다." },
	{ icon: PackageCheck, title: "재고 수량 확인", description: "남은 품목과 수량을 확인해 필요한 제품을 파악합니다." },
	{ icon: BarChart3, title: "소진 속도 반영", description: "빠르게 소진되는 품목을 중심으로 다음 구성을 조정합니다." },
	{ icon: Truck, title: "예산 내 보충", description: "정해진 월 예산의 남은 범위에서 부족한 품목을 추가합니다." },
];

export function Delivery() {
	return (
		<section id="care" className="scroll-mt-24 bg-[#F3F6FB] py-20 sm:py-28" aria-labelledby="delivery-heading">
			<ScreenSection>
				<header className="mx-auto max-w-3xl text-center">
					<p className="text-sm font-bold tracking-[0.16em] text-[#1C5DBE]">DELIVERY & CARE</p>
					<h2 id="delivery-heading" className="mt-4 text-3xl font-bold tracking-[-0.03em] text-slate-900 sm:text-4xl">예산에 맞춰 배송과 관리를 구분합니다</h2>
				</header>

				<div className="mt-10 grid overflow-hidden rounded-lg border border-slate-200 bg-white">
					<div className="p-6 sm:p-7"><p className="text-xs font-bold text-slate-400">월 예산</p><p className="mt-2 text-xl font-bold text-slate-900">10만원 이하</p><p className="mt-3 text-sm font-bold text-[#1C5DBE]">별도 배송</p><p className="mt-2 text-sm leading-6 text-slate-500">제품 구성과 배송 일정을 개별 안내합니다.</p></div>
					<div className="border-y border-slate-200 bg-slate-50 p-6 sm:p-7"><p className="text-xs font-bold text-slate-400">월 예산</p><p className="mt-2 text-xl font-bold text-slate-900">10만원 초과~30만원 미만</p><p className="mt-3 text-sm font-bold text-slate-600">배송 방식 상담</p><p className="mt-2 text-sm leading-6 text-slate-500">구성과 지역을 확인한 뒤 배송 방식을 안내합니다.</p></div>
					<div className="p-6 sm:p-7"><p className="text-xs font-bold text-slate-400">월 예산</p><p className="mt-2 text-xl font-bold text-slate-900">30만원 이상</p><p className="mt-3 text-sm font-bold text-[#E96106]">직접 배달·정기 관리</p><p className="mt-2 text-sm leading-6 text-slate-500">정기 방문으로 재고를 확인하고 부족분을 채웁니다.</p></div>
				</div>

				<div className="mt-14 grid gap-10">
					<div><p className="text-xs font-bold tracking-[0.16em] text-[#E96106]">DIRECT MANAGEMENT</p><h3 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">직접 배달은<br />채우고 끝나지 않습니다</h3><p className="mt-5 text-sm leading-7 text-slate-600">정해진 월 예산을 기준으로 재고와 소진 속도를 살피며 필요한 품목을 계속 조정합니다.</p></div>
					<ol className="grid gap-4">
						{managementSteps.map(({ icon: Icon, title, description }) => <li key={title} className="rounded-lg border border-slate-200 bg-white p-6"><span className="inline-flex size-10 items-center justify-center rounded-md bg-blue-50 text-[#1C5DBE]"><Icon className="size-5" aria-hidden="true" /></span><h4 className="mt-4 font-bold text-slate-900">{title}</h4><p className="mt-2 text-sm leading-6 text-slate-600">{description}</p></li>)}
					</ol>
				</div>
			</ScreenSection>
		</section>
	);
}
