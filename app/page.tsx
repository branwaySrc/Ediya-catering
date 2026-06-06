import { Hero } from "@/domains/landing/hero";
import { Solution } from "@/domains/landing/solution";
import { Catalogue } from "@/domains/landing/catalogue";

export default function Home() {
	return (
		<div className="font-sans">
			<div className="min-h-screen w-full">
				<Hero.Layout>
					<Hero.Welcome />
					<Hero.Video />
					<div className="sm:grid sm:grid-cols-2 sm:gap-3 max-h-200">
						<div>
							<Hero.Card action={<Hero.Action />} />
						</div>
						<div className="sm:flex sm:flex-col sm:gap-3 my-4">
							<Hero.Download />
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
					<div className="scrollbar-x-thin flex overflow-x-auto pb-2 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:gap-4 md:pb-0">
						<Solution.Content image="/live/basic-package.png" packageName="Basic" subtitle="베이직 패키지" desc="커피 80% / 티 20%" href="/" />
						<Solution.Content
							image="/live/standard-package.png"
							packageName="Standard"
							subtitle="스탠다드 패키지"
							desc="커피 40% / 티 30% / 다과 30%"
							href="/"
						/>
						<Solution.Content
							image="/live/premium-package.png"
							packageName="Special"
							subtitle="스페셜 패키지"
							desc="이디야 야외 전용 커피트럭"
							href="/"
						/>
						<div className="ml-5" />
					</div>
					<aside className="px-3 py-3 sm:hidden">
						<Solution.Action href="/" title={"더 많은 패키지 보기"} variant="outlined" />
					</aside>
				</Solution.Layout>
				<Catalogue.Layout>
					<Catalogue.Header />
					<Catalogue.Hero />
					<div className="scrollbar-x-thin flex overflow-x-auto pb-2 snap-x snap-mandatory md:grid md:grid-cols-4 md:overflow-visible md:gap-4 md:pb-0">
						<Catalogue.Category packageName="커피/티" image="/category-drinks.png" href="/" />
						<Catalogue.Category packageName="스낵" image="/category-snacks.png" href="/" />
						<Catalogue.Category packageName="베이커리" image="/category-bakery.png" href="/" />
						<Catalogue.Category packageName="기프트" image="/category-gift.png" href="/" />
						<div className="ml-5" />
					</div>
				</Catalogue.Layout>
			</div>
		</div>
	);
}
