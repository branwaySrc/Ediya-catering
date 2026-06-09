import { Hero } from "@/domains/landing/hero";
import { Package } from "@/domains/landing/packages";
import { Catering } from "@/domains/landing/catering";
import { SnackBar } from "@/domains/landing/snackbar";
import { GiftBox } from "@/domains/landing/giftbox";

export default function Home() {
	return (
		<div className="font-sans">
			<section className="min-h-screen w-full">
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
				<Package.Layout>
					<Package.Heading
						action={
							<aside className="hidden sm:inline">
								<Package.Action href="/" title={"더 많은 패키지 보기"} variant="outlined" />
							</aside>
						}
					/>
					<div className="scrollbar-x-thin flex overflow-x-auto pb-2 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:gap-4 md:pb-0">
						<Package.Content image="/live/basic-package.png" packageName="Basic" subtitle="베이직 패키지" desc="커피 80% / 티 20%" href="/" />
						<Package.Content
							image="/live/standard-package.png"
							packageName="Standard"
							subtitle="스탠다드 패키지"
							desc="커피 40% / 티 30% / 다과 30%"
							href="/"
						/>
						<Package.Content
							image="/live/premium-package.png"
							packageName="Special"
							subtitle="스페셜 패키지"
							desc="이디야 야외 전용 커피트럭"
							href="/"
						/>
						<div className="ml-5" />
					</div>
					<aside className="px-3 py-3 sm:hidden">
						<Package.Action href="/" title={"더 많은 패키지 보기"} variant="outlined" />
					</aside>
				</Package.Layout>

				<Catering.Layout>
					<Catering.Header />
					<Catering.Hero />
					<div className="scrollbar-x-thin flex overflow-x-auto pb-2 snap-x snap-mandatory md:grid md:grid-cols-4 md:overflow-visible md:gap-4 md:pb-0">
						<Catering.Category packageName="커피/티" image="/catering-drinks.png" href="/" />
						<Catering.Category packageName="스낵" image="/catering-snacks.png" href="/" />
						<Catering.Category packageName="베이커리" image="/catering-bakery.png" href="/" />
						<Catering.Category packageName="기프트" image="/catering-gift.png" href="/" />
						<div className="ml-5" />
					</div>
				</Catering.Layout>

				<SnackBar.Layout>
					<SnackBar.Header />
					<SnackBar.Hero />
					<div className="scrollbar-x-thin flex overflow-x-auto pb-2 snap-x snap-mandatory md:grid md:grid-cols-2 md:overflow-visible md:gap-4 md:pb-0">
						<SnackBar.Category packageName="커피/티" image="/catering-drinks.png" href="/" />
						<SnackBar.Category packageName="스낵" image="/catering-snacks.png" href="/" />
						<div className="ml-5" />
					</div>
				</SnackBar.Layout>

				<GiftBox.Layout>
					<GiftBox.Header />
					<GiftBox.Hero />
					<div className="scrollbar-x-thin flex overflow-x-auto pb-2 snap-x snap-mandatory md:grid md:grid-cols-2 md:overflow-visible md:gap-4 md:pb-0">
						<GiftBox.Category packageName="커피/티" image="/catering-drinks.png" href="/" />
						<GiftBox.Category packageName="스낵" image="/catering-snacks.png" href="/" />
						<div className="ml-5" />
					</div>
				</GiftBox.Layout>
			</section>
		</div>
	);
}
