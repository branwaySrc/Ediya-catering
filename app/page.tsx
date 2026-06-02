import { Hero } from "@/domains/landing/hero";
import { Solution } from "@/domains/landing/solution";

export default function Home() {
	return (
		<div className="font-sans">
			<div className="min-h-screen w-full">
				<Hero.Layout>
					<Hero.Video />
					<div className="sm:grid sm:grid-cols-2 sm:gap-3">
						<div>
							<Hero.Heading action={<Hero.Action />} />
						</div>
						<div className="hidden sm:block">
							<Hero.Heading action={<Hero.Action />} />
						</div>
					</div>
				</Hero.Layout>
				<Solution.Layout>
					<Solution.Heading
						action={
							<aside className="hidden sm:inline">
								<Solution.Action href="/" title={"더 많은 패키지 보기"} variant="outlined" />
							</aside>
						}
					/>
					<div className="scrollbar-x-thin flex overflow-x-auto pb-2 snap-x snap-mandatory sm:grid sm:grid-cols-3 sm:overflow-visible sm:gap-4 sm:pb-0">
						<Solution.Content
							packageName="PACKAGE A"
							subtitle="커피와 티에 몰빵한"
							desc="음료 80% / 다과 20%"
							action={<Solution.Action href="/" title={"패키지 자세히 보기"} />}
						/>
						<Solution.Content
							packageName="PACKAGE B"
							subtitle="커피와 다과를 균등하게"
							desc="음료 60% / 다과 40%"
							action={<Solution.Action href="/" title={"패키지 자세히 보기"} />}
						/>
						<Solution.Content
							packageName="PACKAGE C"
							subtitle="오직 음료만을 몰빵한"
							desc="음료 100%"
							action={<Solution.Action href="/" title={"패키지 자세히 보기"} />}
						/>
					</div>
					<aside className="px-3 py-3 sm:hidden">
						<Solution.Action href="/" title={"더 많은 패키지 보기"} variant="outlined" />
					</aside>
				</Solution.Layout>
			</div>
		</div>
	);
}
