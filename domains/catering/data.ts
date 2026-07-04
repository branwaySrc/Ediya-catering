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

export type EstimatePackageId = "basic-coffee" | "beverage-mix" | "premium-refresh";

export type EstimatePackage = {
	id: EstimatePackageId;
	name: string;
	koreanName: string;
	pricePerPerson: number;
	description: string;
	recommendedFor: string[];
	features: string[];
};

export const minimumCateringHeadcount = 20;
export const defaultCateringHeadcount = 50;

export const estimatePackages: EstimatePackage[] = [
	{
		id: "basic-coffee",
		name: "Basic Coffee",
		koreanName: "베이직 커피 패키지",
		pricePerPerson: 4500,
		description: "회의, 인터뷰, 소규모 행사에 적합한 기본 커피 구성입니다.",
		recommendedFor: ["회의", "인터뷰", "사내 행사"],
		features: ["아메리카노 중심 구성", "인원수 기준 음료 제공", "단체 주문 가능", "기본 제공품 포함"],
	},
	{
		id: "beverage-mix",
		name: "Beverage Mix",
		koreanName: "음료 믹스 패키지",
		pricePerPerson: 5500,
		description: "커피와 티, 병음료를 함께 제공하는 균형형 구성입니다.",
		recommendedFor: ["기업 행사", "동호회 행사", "기관 행사"],
		features: ["커피 메뉴 구성", "티 또는 병음료 포함 가능", "참석자 취향 고려", "아이스/핫 구성 협의 가능"],
	},
	{
		id: "premium-refresh",
		name: "Premium Refresh",
		koreanName: "프리미엄 리프레시 패키지",
		pricePerPerson: 7500,
		description: "음료와 디저트 또는 스낵을 함께 구성할 수 있는 행사형 패키지입니다.",
		recommendedFor: ["워크숍", "고객 초청 행사", "장시간 행사"],
		features: ["커피 및 음료 구성", "디저트 또는 스낵 추가 가능", "예산별 구성 조정 가능", "행사 만족도 향상에 적합"],
	},
];

export function getEstimatePackage(packageId: EstimatePackageId) {
	return estimatePackages.find((item) => item.id === packageId) ?? estimatePackages[0];
}

export const cateringOverviewPoints = ["1인 기준 가격", "인원수 기반 예상 견적", "최종 견적은 상담 후 확정", "정해진 패키지 외 커스텀 가능"];

export const customCateringCases = [
	"대규모 단체 주문",
	"음료 + 스낵 결합 구성",
	"특정 예산 내 맞춤 구성",
	"동호회/기관/기업 행사",
	"행사 성격에 맞춘 메뉴 제안",
];

export const cateringProcessSteps = [
	"행사 일정 확인",
	"예상 인원 및 예산 확인",
	"음료/스낵 구성 제안",
	"주문 수량 확정",
	"픽업 또는 제공 방식 협의",
];

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

export const generalOrderTypes = [
	{
		id: "coffee-tea",
		title: "커피/티 단체 주문",
		description: "회의, 미팅, 방문객 응대용 커피와 티 메뉴를 필요한 수량만큼 준비합니다.",
		image: "/catering-drinks.png",
	},
	{
		id: "beverage",
		title: "음료 단체 주문",
		description: "병음료, 아이스 음료, 계절 음료 등 행사 성격에 맞는 음료 구성을 상담합니다.",
		image: "/snackbar-drink-station.png",
	},
	{
		id: "snack-bakery",
		title: "스낵/베이커리 주문",
		description: "간단한 간식, 베이커리, 디저트를 회의나 행사 시간에 맞춰 준비합니다.",
		image: "/catering-bakery.png",
	},
	{
		id: "gift-md",
		title: "기프트/MD 주문",
		description: "참석자 선물, 고객 감사, 사내 이벤트용 기프트와 MD 상품을 상담합니다.",
		image: "/catering-gift.png",
	},
];

export const generalOrderChecklist = ["희망 날짜와 시간", "예상 수량", "픽업/배송/현장 제공 여부", "예산 범위", "필요한 메뉴 또는 선호 구성"];

export const generalOrderExamples = ["20명 미만 소규모 회의", "반복 사무실 주문", "간단한 행사 간식", "정해진 메뉴의 대량 주문", "픽업 중심의 단체 주문"];

export type DetailedMenuCategory = {
	id: string;
	name: string;
	description: string;
	image: string;
	items: Array<{
		name: string;
		description: string;
		tags: string[];
	}>;
};

export const detailedMenuCategories: DetailedMenuCategory[] = [
	{
		id: "coffee",
		name: "커피",
		description: "행사와 회의에서 가장 많이 찾는 기본 커피 메뉴입니다.",
		image: "/coffee-americano.png",
		items: [
			{ name: "아메리카노", description: "가장 기본적인 단체 커피 구성으로 회의와 인터뷰에 적합합니다.", tags: ["HOT/ICE", "단체 주문"] },
			{ name: "카페라떼", description: "부드러운 맛을 선호하는 참석자를 위한 커피 메뉴입니다.", tags: ["HOT/ICE", "선호도 높음"] },
			{ name: "디카페인 상담", description: "카페인 부담이 있는 참석자를 고려할 때 별도 상담할 수 있습니다.", tags: ["상담 필요", "맞춤 구성"] },
		],
	},
	{
		id: "tea",
		name: "티/논커피",
		description: "커피를 마시지 않는 참석자를 위한 균형형 선택지입니다.",
		image: "/catering-drinks.png",
		items: [
			{ name: "티 메뉴", description: "가벼운 미팅과 교육 행사에 함께 구성하기 좋은 논커피 메뉴입니다.", tags: ["논커피", "회의"] },
			{ name: "에이드/시즌 음료", description: "행사 분위기와 계절에 맞춰 선택할 수 있는 음료 구성입니다.", tags: ["시즌", "행사"] },
			{ name: "병음료", description: "보관과 배포가 쉬워 대량 주문이나 야외 행사에 적합합니다.", tags: ["대량", "간편 제공"] },
		],
	},
	{
		id: "snack",
		name: "스낵",
		description: "회의 중간, 휴식 시간, 사무실 간식으로 활용하기 좋은 구성입니다.",
		image: "/catering-snacks.png",
		items: [
			{ name: "쿠키/스낵", description: "개별 제공이 쉬운 기본 간식 구성입니다.", tags: ["개별 제공", "간식"] },
			{ name: "초콜릿/견과", description: "짧은 휴식 시간에 부담 없이 제공하기 좋습니다.", tags: ["휴식", "소형"] },
			{ name: "스낵 믹스", description: "참석자 취향을 넓게 고려한 혼합 구성입니다.", tags: ["혼합 구성", "맞춤"] },
		],
	},
	{
		id: "bakery",
		name: "베이커리",
		description: "가벼운 식사 대용이나 긴 행사에 어울리는 베이커리 메뉴입니다.",
		image: "/catering-bakery.png",
		items: [
			{ name: "베이글/브레드", description: "오전 회의나 세미나에 활용하기 좋은 메뉴입니다.", tags: ["오전 행사", "식사 대용"] },
			{ name: "샌드위치 상담", description: "참석자 수와 제공 시간에 따라 가능 여부를 상담합니다.", tags: ["상담 필요", "행사"] },
			{ name: "디저트 베이커리", description: "커피와 함께 구성하기 좋은 디저트형 베이커리입니다.", tags: ["커피 페어링", "디저트"] },
		],
	},
	{
		id: "gift",
		name: "기프트/MD",
		description: "행사 참석자와 고객에게 전달하기 좋은 선물형 구성입니다.",
		image: "/catering-gift.png",
		items: [
			{ name: "커피 기프트", description: "기업 감사, 이벤트 선물로 활용하기 좋은 커피 선물 구성입니다.", tags: ["선물", "기업"] },
			{ name: "시즌 MD", description: "시즌과 재고 상황에 따라 상담 가능한 MD 상품입니다.", tags: ["시즌", "재고 확인"] },
			{ name: "맞춤 패키지", description: "예산과 수량에 맞춰 포장 및 구성을 상담합니다.", tags: ["맞춤", "상담"] },
		],
	},
];
