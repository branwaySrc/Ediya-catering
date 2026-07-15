import { Building2, CircleCheck, Presentation, TriangleAlert, UsersRound, type LucideIcon } from "lucide-react";

import type { CateringPackageOption } from "./data";

type PackageFitFeedbackProps = {
	selectedOption: CateringPackageOption;
};

const optionFeedback: Record<CateringPackageOption["id"], { title: string }> = {
	"basic-coffee": {
		title: "회의나 세미나에 탁월한 선택입니다!",
	},
	"beverage-mix": {
		title: "참석자 취향이 다양한 행사에 잘 맞습니다.",
	},
	"premium-refresh": {
		title: "장시간 행사와 고객 초청 자리에 안정적인 구성입니다.",
	},
};

type FitStatus = "fit" | "normal" | "limited";

type FitCard = {
	label: string;
	status: FitStatus;
	icon: LucideIcon;
};

const fitCardsByOption: Record<CateringPackageOption["id"], FitCard[]> = {
	"basic-coffee": [
		{ label: "세미나 적합", status: "fit", icon: Presentation },
		{ label: "워크숍 보통", status: "normal", icon: UsersRound },
		{ label: "기업 설명회 부족", status: "limited", icon: Building2 },
	],
	"beverage-mix": [
		{ label: "세미나 적합", status: "fit", icon: Presentation },
		{ label: "워크숍 적합", status: "fit", icon: UsersRound },
		{ label: "기업 설명회 적합", status: "fit", icon: Building2 },
	],
	"premium-refresh": [
		{ label: "세미나 적합", status: "fit", icon: Presentation },
		{ label: "워크숍 최적", status: "fit", icon: UsersRound },
		{ label: "기업 설명회 적합", status: "fit", icon: Building2 },
	],
};

const statusTone: Record<FitStatus, { card: string; icon: string; marker: LucideIcon }> = {
	fit: {
		card: "border-primary/15 bg-blue-50 text-primary",
		icon: "bg-primary text-white",
		marker: CircleCheck,
	},
	normal: {
		card: "border-slate-200 bg-slate-50 text-slate-700",
		icon: "bg-slate-200 text-slate-700",
		marker: CircleCheck,
	},
	limited: {
		card: "border-amber-200 bg-amber-50 text-amber-900",
		icon: "bg-amber-500 text-white",
		marker: TriangleAlert,
	},
};

export function PackageFitFeedback({ selectedOption }: PackageFitFeedbackProps) {
	const optionMessage = optionFeedback[selectedOption.id];
	const fitCards = fitCardsByOption[selectedOption.id];

	return (
		<div className="mt-6 overflow-hidden rounded-lg sm:border border-primary/10 sm:bg-white">
			<div className="grid gap-4 p-0 sm:p-5">
				<h3 className="break-keep text-sm text-slate-800 font-bold">선택 피드백</h3>

				<div className="flex w-full flex-col items-start gap-2 rounded-md border border-slate-200 bg-slate-100 px-3 py-3 sm:mr-auto sm:w-auto sm:flex-row sm:items-center sm:py-2">
					<h3 className="break-keep text-sm text-slate-800">👀 {optionMessage.title}</h3>
				</div>

				<div className="grid grid-cols-1 gap-2 border-t border-slate-100 pt-4 sm:grid-cols-3">
					{fitCards.map(({ label, status, icon: Icon }) => {
						const tone = statusTone[status];
						const Marker = tone.marker;

						return (
							<div key={label} className={`min-w-0 rounded-md border px-3 py-3 ${tone.card}`}>
								<div className="flex items-center justify-between gap-2">
									<span className={`inline-flex size-8 shrink-0 items-center justify-center rounded-md ${tone.icon}`}>
										<Icon aria-hidden="true" className="size-4" />
									</span>
									<Marker aria-hidden="true" className="size-4 shrink-0" />
								</div>
								<p className="mt-3 break-keep text-sm font-bold sm:text-base">{label}</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
