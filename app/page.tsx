import { Hero } from "@/domains/landing/hero";
import { Package } from "@/domains/landing/packages";
import { Catering } from "@/domains/landing/catering";
import { SnackBar } from "@/domains/landing/snackbar";
import { GiftBox } from "@/domains/landing/giftbox";
import { cateringPackages } from "@/domains/catering/data";
import { routes } from "@/share/routes";

export { homeMetadata as metadata } from "./meta";

export default function Home() {
	return (
		<div className="font-sans">
			<section className="min-h-screen w-full">
				<Hero.Layout>
					<Hero.Welcome />
					<Hero.Video />
					<div className="sm:grid sm:grid-cols-2 sm:gap-2.5 max-h-200">
						<div>
							<Hero.Card action={<Hero.Action />} />
						</div>
						<div className="sm:flex sm:flex-col sm:gap-5 my-6 sm:my-6">
							<Hero.Download />
						</div>
					</div>
				</Hero.Layout>
				<Package.Layout>
					<Package.Heading
						action={
							<aside className="hidden sm:inline">
								<Package.Action href={routes.catering.package} title={"더 많은 패키지 보기"} variant="outlined" />
							</aside>
						}
					/>
					<div className="scrollbar-x-thin flex overflow-x-auto pb-2 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:gap-5 md:pb-0">
						{cateringPackages.map((item) => (
							<Package.Content
								key={item.id}
								image={item.image}
								packageName={item.name}
								subtitle={item.koreanName}
								desc={item.landingDescription}
								href={`${routes.catering.package}?package=${item.id}`}
							/>
						))}
						<div className="ml-5" />
					</div>
					<aside className="px-3 py-3 sm:hidden">
						<Package.Action href={routes.catering.package} title={"더 많은 패키지 보기"} variant="outlined" />
					</aside>
				</Package.Layout>

				<Catering.Layout>
					<Catering.Header />
					<Catering.Hero />
					<div className="scrollbar-x-thin flex overflow-x-auto pb-2 snap-x snap-mandatory md:grid md:grid-cols-4 md:overflow-visible md:gap-5 md:pb-0">
						<Catering.Category
							packageName="커피/티"
							image="/catering-drinks.png"
							href={routes.catering.customOrder}
							summary={["1인 4,500원부터,", "20명 이상 행사에 맞는 기본 음료 구성입니다."]}
						/>
						<Catering.Category
							packageName="스낵"
							image="/catering-snacks.png"
							href={routes.catering.customOrder}
							summary={["1인 5,000원대부터,", "20~50명 미팅과 휴게 구성에 적합합니다."]}
						/>
						<Catering.Category
							packageName="베이커리"
							image="/catering-bakery.png"
							href={routes.catering.customOrder}
							summary={["1인 6,000원대부터,", "오전 행사와 브런치형 일정에 잘 맞습니다."]}
						/>
						<Catering.Category
							packageName="기프트"
							image="/catering-gift.png"
							href={routes.gift.root}
							summary={["20명 이상 선물용 추천,", "맞춤 예산 및 개별 포장과 배송을 지원합니다."]}
						/>
						<div className="ml-5" />
					</div>
				</Catering.Layout>

				<SnackBar.Layout>
					<SnackBar.Header />
					<SnackBar.Hero />
					<div className="scrollbar-x-thin flex overflow-x-auto pb-2 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:gap-5 md:pb-0">
						<SnackBar.Category
							packageName="음료 스테이션"
							image="/snackbar-drink-station.png"
							href={routes.snackbar.root}
							summary={["월 10만원대부터,", "10명 이하 팀에 맞는 음료 중심 솔루션입니다."]}
						/>
						<SnackBar.Category
							packageName="디저트 스테이션"
							image="/snackbar-snack-station.png"
							href={routes.snackbar.root}
							summary={["월 30만원대 기준,", "10~30명 사무실의 간식 구성에 권장됩니다."]}
						/>
						<SnackBar.Category
							packageName="라운지 스테이션"
							image="/snackbar-lounge-station.png"
							href={routes.snackbar.root}
							summary={["월 50만원대부터,", "30명 이상 팀의 라운지 운영에 적합합니다."]}
						/>
						<div className="ml-5" />
					</div>
				</SnackBar.Layout>

				<GiftBox.Layout>
					<GiftBox.Header />
					<GiftBox.Hero />
					<GiftBox.Slider />
				</GiftBox.Layout>
			</section>
		</div>
	);
}
