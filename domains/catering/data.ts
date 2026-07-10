export type CateringPackageId = "basic" | "standard" | "special";

export type CateringMenuCategoryId = "drinks" | "snacks" | "bakery" | "gift";

export type CateringMenuCategory = {
	id: CateringMenuCategoryId;
	name: string;
	nameEn: string;
	description: string;
	service: string;
	image: string;
	imageAlt: string;
	accent: string;
	menus: string[];
};

export const cateringMenuCategories: CateringMenuCategory[] = [
	{
		id: "drinks",
		name: "커피·티",
		nameEn: "Coffee & Tea",
		description: "행사 성격과 이용 인원에 맞춰 커피, 논커피, 티 메뉴를 균형 있게 구성합니다.",
		service: "현장 제조 또는 완제품 제공",
		image: "/catering-drinks.png",
		imageAlt: "커피와 티로 구성된 케이터링 음료",
		accent: "#1C5DBE",
		menus: ["아메리카노", "카페라떼", "논커피", "티", "시즌 음료"],
	},
	{
		id: "snacks",
		name: "스낵",
		nameEn: "Snack",
		description: "회의와 세미나 중 간편하게 즐길 수 있는 개별 포장 간식과 핑거푸드를 제안합니다.",
		service: "개별 포장 및 테이블 세팅",
		image: "/catering-snacks.png",
		imageAlt: "행사용 스낵과 핑거푸드 구성",
		accent: "#E96106",
		menus: ["쿠키", "스낵", "견과", "초콜릿", "핑거푸드"],
	},
	{
		id: "bakery",
		name: "베이커리",
		nameEn: "Bakery",
		description: "가벼운 식사부터 디저트까지 행사 시간과 목적에 어울리는 베이커리를 구성합니다.",
		service: "개별 포장 또는 플래터 제공",
		image: "/catering-bakery.png",
		imageAlt: "크루아상과 샌드위치 등 베이커리 구성",
		accent: "#B36A24",
		menus: ["크루아상", "샌드위치", "파운드", "미니 베이커리", "디저트 브레드"],
	},
	{
		id: "gift",
		name: "기프트",
		nameEn: "Gift",
		description: "참석자와 고객에게 전달할 수 있도록 행사 목적과 예산에 맞춘 커피 선물을 제안합니다.",
		service: "수량·포장 방식 상담",
		image: "/catering-gift.png",
		imageAlt: "행사 참석자를 위한 이디야 커피 기프트",
		accent: "#009249",
		menus: ["드립백", "커피 세트", "머그·텀블러", "시즌 MD", "맞춤 패키지"],
	},
];

export type CateringPackageOptionId = "basic-coffee" | "beverage-mix" | "premium-refresh";

export type CateringPackageOption = {
	id: CateringPackageOptionId;
	name: string;
	koreanName: string;
	pricePerPerson: number;
	description: string;
	recommendedFor: string[];
	features: string[];
};

export const minimumCateringHeadcount = 20;
export const defaultCateringHeadcount = 50;

export const cateringPackageOptions: CateringPackageOption[] = [
	{
		id: "basic-coffee",
		name: "Basic",
		koreanName: "베이직 커피 패키지",
		pricePerPerson: 4500,
		description: "회의, 인터뷰, 소규모 행사에 적합한 기본 커피 구성입니다.",
		recommendedFor: ["회의", "인터뷰", "사내 행사"],
		features: ["아메리카노 중심 구성", "인원수 기준 음료 제공", "단체 주문 가능", "기본 제공품 포함"],
	},
	{
		id: "beverage-mix",
		name: "Beverage",
		koreanName: "음료 믹스 패키지",
		pricePerPerson: 5500,
		description: "커피와 티, 병음료를 함께 제공하는 균형형 구성입니다.",
		recommendedFor: ["기업 행사", "동호회 행사", "기관 행사"],
		features: ["커피 메뉴 구성", "티 또는 병음료 포함 가능", "참석자 취향 고려", "아이스/핫 구성 협의 가능"],
	},
	{
		id: "premium-refresh",
		name: "Premium",
		koreanName: "프리미엄 리프레시 패키지",
		pricePerPerson: 7500,
		description: "음료와 디저트 또는 스낵을 함께 구성할 수 있는 행사형 패키지입니다.",
		recommendedFor: ["워크숍", "고객 초청 행사", "장시간 행사"],
		features: ["커피 및 음료 구성", "디저트 또는 스낵 추가 가능", "예산별 구성 조정 가능", "행사 만족도 향상에 적합"],
	},
];

export type CateringPackage = {
	id: CateringPackageId;
	name: string;
	koreanName: string;
	description: string;
	landingDescription: string;
	image: string;
	imageAlt: string;
	options: CateringPackageOption[];
};

export const cateringPackages: CateringPackage[] = [
	{
		id: "basic",
		name: "Basic",
		koreanName: "베이직 패키지",
		description: "처음 케이터링을 준비하는 행사에 맞춘 기본 패키지입니다.",
		landingDescription: "커피 80% / 티 20%",
		image: "/live/basic-package.png",
		imageAlt: "베이직 케이터링 패키지",
		options: cateringPackageOptions,
	},
	{
		id: "standard",
		name: "Standard",
		koreanName: "스탠다드 패키지",
		description: "커피, 티, 다과 균형을 맞춘 가장 활용도 높은 패키지입니다.",
		landingDescription: "커피 40% / 티 30% / 다과 30%",
		image: "/live/standard-package.png",
		imageAlt: "스탠다드 케이터링 패키지",
		options: cateringPackageOptions,
	},
	{
		id: "special",
		name: "Special",
		koreanName: "스페셜 패키지",
		description: "브랜드 경험과 현장 분위기를 함께 고려하는 패키지입니다.",
		landingDescription: "이디야 야외 전용 커피트럭",
		image: "/live/premium-package.png",
		imageAlt: "스페셜 케이터링 패키지",
		options: cateringPackageOptions,
	},
];

export function getCateringPackage(packageId: CateringPackageId) {
	return cateringPackages.find(item => item.id === packageId) ?? cateringPackages[0];
}

export function getCateringPackageOption(packageId: CateringPackageId, optionId: CateringPackageOptionId) {
	const selectedPackage = getCateringPackage(packageId);

	return selectedPackage.options.find(item => item.id === optionId) ?? selectedPackage.options[0];
}

export const cateringOverviewPoints = ["1인 기준 가격", "인원수 기반 예상 견적", "최종 견적은 상담 후 확정", "정해진 패키지 외 커스텀 가능"];

export const customCateringCases = [
	"대규모 단체 주문",
	"음료 + 스낵 결합 구성",
	"특정 예산 내 맞춤 구성",
	"동호회/기관/기업 행사",
	"행사 성격에 맞춘 메뉴 제안",
];

export const cateringProcessSteps = ["행사 일정 확인", "예상 인원 및 예산 확인", "음료/스낵 구성 제안", "주문 수량 확정", "픽업 또는 제공 방식 협의"];

export const cateringNoticeItems = [
	"표기된 금액은 기본 구성 기준의 예상 가격입니다.",
	"최종 금액은 메뉴, 수량, 일정, 제공 방식에 따라 달라질 수 있습니다.",
	"대량 주문은 사전 예약이 필요합니다.",
	"상품 구성은 매장 상황과 재고에 따라 조정될 수 있습니다.",
	"일정, 수량, 장소에 따라 제공 방식이 달라질 수 있습니다.",
	"정확한 견적은 상담 후 안내드립니다.",
];

export const cateringFaqs = [
	{
		question: "몇 명부터 케이터링 패키지 상담이 가능한가요?",
		answer: "기본적으로 20명 이상을 기준으로 안내드립니다. 20명 미만 주문은 일반 단체 주문으로 상담 가능합니다.",
	},
	{
		question: "사이트에 표시된 가격이 최종 금액인가요?",
		answer: "아닙니다. 표시된 금액은 기본 구성 기준의 예상 가격이며, 최종 금액은 메뉴, 수량, 일정, 제공 방식에 따라 달라질 수 있습니다.",
	},
	{
		question: "원하는 메뉴로 변경할 수 있나요?",
		answer: "가능합니다. 행사 목적, 참석자 선호도, 예산에 따라 메뉴 구성을 조정할 수 있습니다.",
	},
	{
		question: "음료 외에 디저트나 스낵도 함께 구성할 수 있나요?",
		answer: "가능합니다. Premium Refresh 또는 Custom Catering을 통해 음료와 스낵, 디저트를 함께 구성할 수 있습니다.",
	},
	{
		question: "대규모 행사도 가능한가요?",
		answer: "가능합니다. 다만 일정, 수량, 매장 상황에 따라 가능 여부가 달라질 수 있어 사전 상담이 필요합니다.",
	},
];

export type CustomOrderCategoryId = "beverage" | "bakery" | "snack";
export type CustomOrderFilterId = "all" | CustomOrderCategoryId;
export type CustomOrderItemId =
	| "americano"
	| "cafe-latte"
	| "bottle-beverage"
	| "mini-croissant"
	| "sandwich"
	| "dessert-bread"
	| "cookie-set"
	| "snack-mix"
	| "nuts-chocolate";

export type CustomOrderCategory = {
	id: CustomOrderFilterId;
	label: string;
};

export type CustomOrderItem = {
	id: CustomOrderItemId;
	category: CustomOrderCategoryId;
	name: string;
	price: number;
	temperatureBadges?: Array<"HOT" | "COLD">;
	image: string;
	imageAlt: string;
};

export const customOrderCategories: CustomOrderCategory[] = [
	{ id: "all", label: "전체보기" },
	{ id: "beverage", label: "음료" },
	{ id: "bakery", label: "베이커리" },
	{ id: "snack", label: "스낵" },
];

export const customOrderItems: CustomOrderItem[] = [
	{
		id: "americano",
		category: "beverage",
		name: "아메리카노",
		price: 4500,
		temperatureBadges: ["HOT", "COLD"],
		image: "/coffee-americano.png",
		imageAlt: "아메리카노",
	},
	{
		id: "cafe-latte",
		category: "beverage",
		name: "카페라떼",
		price: 5000,
		temperatureBadges: ["HOT", "COLD"],
		image: "/catering-drinks.png",
		imageAlt: "카페라떼와 음료 구성",
	},
	{
		id: "bottle-beverage",
		category: "beverage",
		name: "병음료",
		price: 3500,
		temperatureBadges: ["COLD"],
		image: "/snackbar-drink-station.png",
		imageAlt: "병음료 구성",
	},
	{
		id: "mini-croissant",
		category: "bakery",
		name: "미니 크루아상",
		price: 3800,
		image: "/catering-bakery.png",
		imageAlt: "미니 크루아상",
	},
	{
		id: "sandwich",
		category: "bakery",
		name: "샌드위치",
		price: 6500,
		image: "/catering-bakery.png",
		imageAlt: "샌드위치",
	},
	{
		id: "dessert-bread",
		category: "bakery",
		name: "디저트 브레드",
		price: 4200,
		image: "/catering-bakery.png",
		imageAlt: "디저트 브레드",
	},
	{
		id: "cookie-set",
		category: "snack",
		name: "쿠키 세트",
		price: 3000,
		image: "/catering-snacks.png",
		imageAlt: "쿠키 세트",
	},
	{
		id: "snack-mix",
		category: "snack",
		name: "스낵 믹스",
		price: 3500,
		image: "/snackbar-snack-station.png",
		imageAlt: "스낵 믹스",
	},
	{
		id: "nuts-chocolate",
		category: "snack",
		name: "견과·초콜릿",
		price: 2800,
		image: "/catering-snacks.png",
		imageAlt: "견과와 초콜릿",
	},
];
