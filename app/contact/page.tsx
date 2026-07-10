import { ArrowRight, Clock3, Mail, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/share/button";
import { ScreenSection } from "@/share/screen-section";
import { TitleBadge } from "@/share/title-badge";

export { metadata } from "./meta";

const inquiryLabels: Record<string, string> = {
	kakao: "카카오톡 문의",
	consulting: "맞춤 상담",
	partnership: "협업 제안",
	"self-estimate": "셀프 견적",
	snackbar: "오피스 스낵바 상담",
	custom: "커스텀 상담",
	"custom-order": "커스텀 주문",
};

const serviceLabels: Record<string, string> = {
	catering: "케이터링 상담",
	snackbar: "오피스 스낵바 상담",
	gift: "기프트 상담",
};

const packageLabels: Record<string, string> = {
	"basic-coffee": "Basic Coffee",
	"beverage-mix": "Beverage Mix",
	"premium-refresh": "Premium Refresh",
};

const categoryLabels: Record<string, string> = {
	coffee: "커피",
	tea: "티/논커피",
	snack: "스낵",
	bakery: "베이커리",
	gift: "기프트/MD",
};

type ContactPageProps = {
	searchParams: Promise<{ category?: string | string[]; service?: string | string[]; package?: string | string[]; type?: string | string[] }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
	const params = await searchParams;
	const service = Array.isArray(params.service) ? params.service[0] : params.service;
	const packageId = Array.isArray(params.package) ? params.package[0] : params.package;
	const categoryId = Array.isArray(params.category) ? params.category[0] : params.category;
	const inquiryType = Array.isArray(params.type) ? params.type[0] : params.type;
	const serviceLabel = service ? (serviceLabels[service] ?? "서비스 문의") : undefined;
	const typeLabel = inquiryType ? inquiryLabels[inquiryType] : undefined;
	const baseInquiryLabel = serviceLabel && typeLabel ? `${serviceLabel} - ${typeLabel}` : (serviceLabel ?? typeLabel ?? "서비스 문의");
	const packageLabel = packageId ? packageLabels[packageId] : undefined;
	const categoryLabel = categoryId ? categoryLabels[categoryId] : undefined;
	const inquiryLabel = [baseInquiryLabel, packageLabel, categoryLabel].filter(Boolean).join(" - ");
	const emailSubject = encodeURIComponent(`[${inquiryLabel}] 상담 요청`);

	return (
		<div className="min-h-[calc(100vh-5rem)] bg-[#F5F7FB] text-slate-900">
			<section className="bg-[#172966] py-20 text-white sm:py-24">
				<ScreenSection className="text-center">
					<TitleBadge className="justify-center pb-2">
						<TitleBadge.Icon backgroundColor={["#4A8DF1", "#1C5DBE"]} icon={Phone} className="text-white shadow-none" />
						<TitleBadge.Title className="text-white">{inquiryLabel}</TitleBadge.Title>
						<TitleBadge.Badge className="border-white/25 bg-white/10 text-white">CONTACT</TitleBadge.Badge>
					</TitleBadge>
					<h1 className="mt-5 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">어떤 도움이 필요하신가요?</h1>
					<p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-blue-100/80 sm:text-base">
						일정과 장소, 예상 인원과 예산을 알려주시면 확인 후 알맞은 방법을 안내해 드립니다.
					</p>
				</ScreenSection>
			</section>

			<ScreenSection className="py-16 sm:py-24">
				<div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
					<article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
						<span className="inline-flex size-12 items-center justify-center rounded-2xl bg-blue-50 text-[#1C5DBE]">
							<Phone className="size-6" aria-hidden="true" />
						</span>
						<h2 className="mt-6 text-xl font-bold">전화 상담</h2>
						<p className="mt-3 text-sm leading-7 text-slate-600">담당자와 바로 통화하며 필요한 서비스와 일정을 상담할 수 있습니다.</p>
						<p className="mt-5 font-bold text-primary">010-4514-7173</p>
						<Button.Link href="tel:01045147173" variant="primary" icon={Phone} className="mt-6 w-full">
							전화 연결하기
						</Button.Link>
					</article>

					<article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
						<span className="inline-flex size-12 items-center justify-center rounded-2xl bg-blue-50 text-[#1C5DBE]">
							<Mail className="size-6" aria-hidden="true" />
						</span>
						<h2 className="mt-6 text-xl font-bold">이메일 문의</h2>
						<p className="mt-3 text-sm leading-7 text-slate-600">행사 정보나 요청 사항을 정리해 보내주시면 확인 후 연락드립니다.</p>
						<p className="mt-5 break-all text-sm font-bold text-primary">contact@ediya-catering.kr</p>
						<Button.Link
							href={`mailto:contact@ediya-catering.kr?subject=${emailSubject}`}
							variant="ghost"
							icon={ArrowRight}
							iconPosition="right"
							className="mt-6 w-full"
						>
							이메일 작성하기
						</Button.Link>
					</article>
				</div>

				<div className="mx-auto mt-5 flex max-w-4xl flex-col gap-4 rounded-2xl border border-[#F5D500] bg-[#FFF9C7] p-5 sm:flex-row sm:items-center sm:justify-between">
					<div className="flex gap-3">
						<MessageCircle className="mt-0.5 size-5 shrink-0 text-[#191919]" aria-hidden="true" />
						<div>
							<h2 className="font-bold text-[#191919]">카카오톡 문의</h2>
							<p className="mt-1 text-sm text-[#191919]/65">카카오톡 채널 연결을 준비하고 있습니다.</p>
						</div>
					</div>
					<span className="rounded-full bg-white/70 px-3 py-1.5 text-xs font-bold text-[#191919]/60">준비 중</span>
				</div>

				<div className="mx-auto mt-5 flex max-w-4xl gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-600">
					<Clock3 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
					<p className="leading-6">상담 가능 시간과 현장 일정에 따라 답변이 다소 늦어질 수 있습니다. 급한 일정은 전화 문의를 이용해 주세요.</p>
				</div>
			</ScreenSection>
		</div>
	);
}
