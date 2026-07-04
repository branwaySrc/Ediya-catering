import Image from "next/image";

import { SnackbarSecondaryNavigation } from "@/domains/features/snackbar/secondary-navigation";

export default function SnackbarLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="relative min-h-screen lg:min-h-0">
			<div className="lg:hidden">
				<SnackbarSecondaryNavigation />
			</div>

			<div className="mx-auto w-full max-w-7xl lg:grid lg:h-[calc(100vh-4.5rem)] lg:grid-cols-2">
				<aside className="sticky top-[4.5rem] hidden h-[calc(100vh-4.5rem)] items-center border-r border-primary/10 bg-white lg:flex">
					<div className="mx-auto w-full max-w-lg px-10 py-12">
						<Image
							src="/snackbar/Snackbar-letter.svg"
							alt="EDIYA OFFICE SNACK"
							width={291}
							height={50}
							priority
							className="h-auto w-[200px] sm:w-[200px]"
						/>
						<h1 className="mt-5 text-5xl font-bold leading-tight tracking-[-0.03em] text-primary">
							이디야
							<br />
							오피스 스낵바
						</h1>
						<p className="mt-6 max-w-sm text-lg leading-7 text-slate-600">
							사무실 환경과 예산에 맞춰 음료, 간식, 캡슐커피까지 필요한 구성을 제안합니다.
						</p>
						<div className="mt-10">
							<SnackbarSecondaryNavigation orientation="column" />
						</div>
					</div>
				</aside>

				<section className="bg-[#F8F9FC] lg:h-[calc(100vh-4.5rem)] lg:overflow-y-auto" aria-label="스낵바 상세 콘텐츠">
					{children}
				</section>
			</div>
		</div>
	);
}
