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

export type CateringChoice = {
	id: string;
	name: string;
	description: string;
	additionalPrice: number;
};

export type CateringPackage = {
	id: CateringPackageId;
	name: string;
	nameEn: string;
	description: string;
	basePrice: number;
	choices: CateringChoice[];
};

export const cateringPackages: CateringPackage[] = [
	{
		id: "basic",
		name: "베이직 패키지",
		nameEn: "Basic",
		description: "꼭 필요한 메뉴만 담은 실속 있는 케이터링",
		basePrice: 450_000,
		choices: [
			{ id: "basic-coffee", name: "커피 베이직", description: "아메리카노 중심의 기본 음료 구성", additionalPrice: 0 },
			{ id: "basic-tea", name: "커피 & 티", description: "커피와 논커피 티 메뉴를 균형 있게 구성", additionalPrice: 70_000 },
			{ id: "basic-dessert", name: "커피 & 디저트", description: "기본 음료에 가벼운 디저트를 추가", additionalPrice: 140_000 },
		],
	},
	{
		id: "standard",
		name: "스탠다드 패키지",
		nameEn: "Standard",
		description: "다양한 취향을 만족시키는 균형 잡힌 케이터링",
		basePrice: 650_000,
		choices: [
			{ id: "standard-balance", name: "밸런스", description: "커피, 티, 디저트를 고르게 구성", additionalPrice: 0 },
			{ id: "standard-bakery", name: "베이커리 플러스", description: "행사에 어울리는 베이커리 메뉴를 강화", additionalPrice: 120_000 },
			{ id: "standard-refresh", name: "리프레시 플러스", description: "에이드와 시즌 음료까지 폭넓게 구성", additionalPrice: 210_000 },
		],
	},
	{
		id: "special",
		name: "스페셜 패키지",
		nameEn: "Special",
		description: "브랜드 경험과 현장 연출을 더한 프리미엄 케이터링",
		basePrice: 900_000,
		choices: [
			{ id: "special-signature", name: "시그니처 바", description: "전문 바리스타의 시그니처 음료 서비스", additionalPrice: 80_000 },
			{ id: "special-lounge", name: "프리미엄 라운지", description: "고급 디저트와 라운지형 서비스 구성", additionalPrice: 300_000 },
			{ id: "special-full", name: "풀 서비스", description: "메뉴, 공간, 운영을 모두 포함한 맞춤 구성", additionalPrice: 550_000 },
		],
	},
];

export function getCateringPackage(packageId: CateringPackageId) {
	return cateringPackages.find((item) => item.id === packageId) ?? cateringPackages[0];
}
