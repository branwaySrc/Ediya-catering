import { CakeSlice, Coffee, Refrigerator, type LucideIcon } from "lucide-react";

export type Station = {
	id: string;
	name: string;
	nameEn: string;
	description: string;
	image: string;
	imageAlt: string;
	icon: LucideIcon;
	accent: string;
	features: Array<{
		label: string;
		values: string[];
	}>;
};

export type ProductCategoryId = "drink" | "snack" | "capsule";
export type ProductBadgeId = "cold" | "room" | "drink-station" | "dessert-station" | "lounge-station";

export type Product = {
	id: string;
	category: ProductCategoryId;
	name: string;
	description: string;
	storage: string;
	price: number;
	badges: ProductBadgeId[];
	image: string;
	imageAlt: string;
};

export const productCategories: Array<{ id: ProductCategoryId; label: string }> = [
	{ id: "drink", label: "음료" },
	{ id: "snack", label: "스낵" },
	{ id: "capsule", label: "캡슐" },
];

export const products: Product[] = [
	{
		id: "rtd-coffee",
		category: "drink",
		name: "RTD 커피",
		description: "바로 꺼내 마실 수 있는 커피 음료 구성",
		storage: "냉장",
		price: 2500,
		badges: ["cold", "drink-station"],
		image: "/coffee-americano.png",
		imageAlt: "이디야 아메리카노 음료",
	},
	{
		id: "sparkling-drink",
		category: "drink",
		name: "탄산·에이드",
		description: "업무 중 가볍게 즐기는 청량 음료 구성",
		storage: "냉장",
		price: 1800,
		badges: ["cold", "drink-station"],
		image: "/catering-drinks.png",
		imageAlt: "탄산과 에이드 음료 구성",
	},
	{
		id: "water-healthy-drink",
		category: "drink",
		name: "생수·건강음료",
		description: "매일 부담 없이 이용하는 기본 음료 구성",
		storage: "냉장·상온",
		price: 1500,
		badges: ["cold", "room", "drink-station"],
		image: "/snackbar-drink-station.png",
		imageAlt: "생수와 건강음료가 담긴 음료 스테이션",
	},
	{
		id: "tea-bottle",
		category: "drink",
		name: "티·차 음료",
		description: "커피 외 선택지를 넓혀주는 병음료 구성",
		storage: "냉장",
		price: 2200,
		badges: ["cold", "drink-station"],
		image: "/catering-drinks.png",
		imageAlt: "차 음료와 병음료 구성",
	},
	{
		id: "energy-drink",
		category: "drink",
		name: "에너지 음료",
		description: "야근과 집중 시간이 많은 팀을 위한 음료 구성",
		storage: "냉장",
		price: 2800,
		badges: ["cold", "drink-station"],
		image: "/snackbar-drink-station.png",
		imageAlt: "냉장고에 진열된 에너지 음료 구성",
	},
	{
		id: "snack-cookie",
		category: "snack",
		name: "스낵·쿠키",
		description: "개별 포장으로 간편하게 즐기는 간식 구성",
		storage: "상온",
		price: 1800,
		badges: ["room", "dessert-station"],
		image: "/catering-snacks.png",
		imageAlt: "다양한 스낵과 쿠키",
	},
	{
		id: "bakery",
		category: "snack",
		name: "베이커리",
		description: "가벼운 식사와 휴식 시간에 어울리는 베이커리 구성",
		storage: "상온",
		price: 3200,
		badges: ["room", "dessert-station"],
		image: "/catering-bakery.png",
		imageAlt: "다양한 베이커리 제품",
	},
	{
		id: "chilled-dessert",
		category: "snack",
		name: "냉장 디저트",
		description: "쇼케이스에 진열해 즐기는 냉장 디저트 구성",
		storage: "냉장",
		price: 3800,
		badges: ["cold", "dessert-station"],
		image: "/snackbar-snack-station.png",
		imageAlt: "냉장 쇼케이스 디저트 구성",
	},
	{
		id: "protein-bar",
		category: "snack",
		name: "프로틴·견과바",
		description: "간단한 보충식으로 좋은 건강 간식 구성",
		storage: "상온",
		price: 2600,
		badges: ["room", "dessert-station"],
		image: "/catering-snacks.png",
		imageAlt: "프로틴바와 견과 간식 구성",
	},
	{
		id: "fresh-sandwich",
		category: "snack",
		name: "샌드위치",
		description: "회의와 점심 전후에 활용하기 좋은 간편식 구성",
		storage: "냉장",
		price: 5200,
		badges: ["cold", "dessert-station"],
		image: "/catering-bakery.png",
		imageAlt: "샌드위치와 간편식 구성",
	},
	{
		id: "balanced-capsule",
		category: "capsule",
		name: "밸런스 캡슐",
		description: "누구나 편하게 즐길 수 있는 균형 잡힌 커피",
		storage: "상온",
		price: 800,
		badges: ["room", "lounge-station"],
		image: "/snackbar-lounge-station.png",
		imageAlt: "캡슐커피 머신이 놓인 라운지 스테이션",
	},
	{
		id: "mild-capsule",
		category: "capsule",
		name: "마일드 캡슐",
		description: "부드러운 향과 맛을 선호하는 구성",
		storage: "상온",
		price: 800,
		badges: ["room", "lounge-station"],
		image: "/coffee-americano.png",
		imageAlt: "부드러운 커피를 표현한 아메리카노",
	},
	{
		id: "decaf-season-capsule",
		category: "capsule",
		name: "디카페인·시즌 캡슐",
		description: "취향과 시즌에 따라 상담하는 선택형 구성",
		storage: "상온",
		price: 900,
		badges: ["room", "lounge-station"],
		image: "/catering-gift.png",
		imageAlt: "선택형 캡슐커피 구성",
	},
	{
		id: "dark-roast-capsule",
		category: "capsule",
		name: "다크 로스트 캡슐",
		description: "진한 바디감과 고소한 향을 선호하는 구성",
		storage: "상온",
		price: 850,
		badges: ["room", "lounge-station"],
		image: "/snackbar-lounge-station.png",
		imageAlt: "캡슐커피 머신과 커피 라운지 구성",
	},
	{
		id: "aroma-capsule",
		category: "capsule",
		name: "아로마 캡슐",
		description: "향미가 선명한 라운지용 캡슐 구성",
		storage: "상온",
		price: 850,
		badges: ["room", "lounge-station"],
		image: "/coffee-americano.png",
		imageAlt: "향미가 선명한 커피 이미지",
	},
];

export const pricePlans = [
	{
		id: "starter",
		name: "스타터",
		people: "10명 이하",
		monthlyBudget: "월 10만원",
		delivery: "별도 배송",
		description: "작은 규모도 부담 없이 시작하는 기본 구성",
		features: ["음료 또는 스낵 중심", "제품군 선택", "배송 일정 개별 안내"],
	},
	{
		id: "standard",
		name: "스탠다드",
		people: "11~30명",
		monthlyBudget: "월 30만원",
		delivery: "직접 배달",
		description: "이용량을 확인하며 정기적으로 채우는 구성",
		features: ["음료·스낵 조합", "주 1~2회 방문 관리", "월 예산 내 부족분 보충"],
	},
	{
		id: "plus",
		name: "플러스",
		people: "31명 이상",
		monthlyBudget: "월 50만원부터",
		delivery: "직접 배달",
		description: "소진 속도에 맞춰 품목과 방문을 조정하는 구성",
		features: ["복수 제품군 구성", "주 1~2회 이상 일정 조정", "재고·소진 속도 기반 보충"],
	},
];

export type CareBudgetTier = {
	id: "starter" | "consult" | "standard" | "plus";
	budget: string;
	title: string;
	summary: string;
	detail: string;
	badge: string;
};

export const careBudgetTiers: CareBudgetTier[] = [
	{
		id: "starter",
		budget: "월 10만원 이하",
		title: "별도 배송",
		summary: "소규모 구성은 제품과 배송 일정을 개별 안내합니다.",
		detail: "무료 직접 배송 전 단계로, 필요한 품목과 수량을 먼저 정리한 뒤 가장 알맞은 배송 방식을 안내합니다.",
		badge: "개별 안내",
	},
	{
		id: "consult",
		budget: "월 10만원 초과~30만원 미만",
		title: "배송 방식 상담",
		summary: "지역, 구성, 설비 조건을 확인한 뒤 배송 방식을 정합니다.",
		detail: "이 구간은 사무실 위치와 제품 구성에 따라 운영 방식이 달라질 수 있어 상담 후 조건을 확정합니다.",
		badge: "조건 확인",
	},
	{
		id: "standard",
		budget: "월 30만원 이상",
		title: "무료 직접 배송·정기 관리",
		summary: "직접 방문해 제품을 전달하고 진열 상태와 재고를 함께 정리합니다.",
		detail: "정기 방문 시 남은 수량을 확인하고, 월 예산 안에서 부족한 품목을 채워 운영 부담을 줄입니다.",
		badge: "무료 직접 배송",
	},
	{
		id: "plus",
		budget: "월 50만원 이상",
		title: "재고 소진 기반 지속 케어",
		summary: "소진 속도를 기준으로 품목과 방문 주기를 계속 조정합니다.",
		detail: "이용량이 많은 공간은 빠르게 줄어드는 품목을 중심으로 다음 구성을 조정하고 필요 시 방문 일정을 보강합니다.",
		badge: "지속 케어",
	},
];

export const careManagementSteps = [
	{ id: "visit", title: "주 1~2회 방문", description: "기본 방문 주기를 정하고 소진 속도에 따라 일정을 조정합니다." },
	{ id: "stock", title: "재고 수량 확인", description: "남은 품목과 수량을 확인해 필요한 제품을 파악합니다." },
	{ id: "velocity", title: "소진 속도 반영", description: "빠르게 소진되는 품목을 중심으로 다음 구성을 조정합니다." },
	{ id: "refill", title: "예산 내 보충", description: "정해진 월 예산의 남은 범위에서 부족한 품목을 추가합니다." },
];

export const stations: Station[] = [
	{
		id: "drink",
		name: "음료 스테이션",
		nameEn: "Drink Station",
		description: "근무 인원과 설치 공간에 맞춰 냉장 설비 크기를 선택하고 원하는 음료 구성을 상담합니다.",
		image: "/snackbar-drink-station.png",
		imageAlt: "냉장고와 다양한 음료로 구성한 음료 스테이션",
		icon: Refrigerator,
		accent: "#1C5DBE",
		features: [
			{ label: "설비", values: ["냉장고"] },
			{ label: "크기", values: ["소형", "중형", "대형"] },
			{ label: "구성", values: ["이용 인원과 예산에 맞춘 음료", "소/중형 냉장고 대여"] },
		],
	},
	{
		id: "dessert",
		name: "디저트 스테이션",
		nameEn: "Dessert Station",
		description: "냉장 또는 상온 보관 방식과 쇼케이스 크기를 조합해 공간에 어울리는 디저트 존을 만듭니다.",
		image: "/snackbar-snack-station.png",
		imageAlt: "쇼케이스와 디저트로 구성한 디저트 스테이션",
		icon: CakeSlice,
		accent: "#E96106",
		features: [
			{ label: "보관 방식", values: ["냉장", "상온"] },
			{ label: "쇼케이스", values: ["소형", "중형", "대형"] },
			{ label: "구성", values: ["보관 방식에 맞춘 디저트", "수납 및 스낵바 세팅"] },
		],
	},
	{
		id: "lounge",
		name: "라운지 스테이션",
		nameEn: "Lounge Station",
		description: "필요한 수량의 캡슐커피 머신과 정기 캡슐 공급 계약을 결합한 오피스 커피 구독 모델입니다.",
		image: "/snackbar-lounge-station.png",
		imageAlt: "캡슐커피 머신과 함께 공간으로 구성한 라운지 스테이션",
		icon: Coffee,
		accent: "#009249",
		features: [
			{ label: "커피 머신", values: ["필요 수량 맞춤 제공"] },
			{ label: "운영 방식", values: ["캡슐 정기 납품 계약"] },
			{ label: "계약 조건", values: ["소비량과 기간 상담 후 확정", "캡슐머신 대여"] },
		],
	},
];

export const faqs = [
	{
		question: "냉장고와 쇼케이스 크기는 어떻게 선택하나요?",
		answer: "이용 인원, 설치할 공간의 크기, 원하는 상품 수량을 함께 확인한 뒤 소형·중형·대형 중 알맞은 설비를 제안합니다.",
	},
	{
		question: "상품 구성은 정해져 있나요?",
		answer: "고정된 한 가지 구성으로만 제공하지 않습니다. 예산과 이용 환경, 선호하는 음료 또는 디저트 종류를 상담해 구성을 정합니다.",
	},
	{
		question: "월 예산에 따라 배송 방식이 달라지나요?",
		answer:
			"월 10만원 이하는 별도 배송으로 진행하며, 월 30만원 이상부터 직접 배달과 정기 관리가 제공됩니다. 10만원 초과 30만원 미만 구간은 구성과 지역을 확인한 뒤 배송 방식을 안내합니다.",
	},
	{
		question: "직접 배달은 어떻게 관리되나요?",
		answer:
			"기본적으로 주 1~2회 방문해 남은 수량과 제품별 소진 속도를 확인합니다. 정해진 월 예산 안에서 부족한 품목을 보충하며, 필요에 따라 방문 일정을 추가로 조정합니다.",
	},
	{
		question: "설비 설치 조건과 비용은 어떻게 확인하나요?",
		answer: "설치 공간과 전원, 보관 환경을 확인한 뒤 설비 제공 및 설치 조건을 견적서에 구체적으로 안내합니다.",
	},
	{
		question: "라운지 스테이션은 머신 수량을 선택할 수 있나요?",
		answer: "필요한 머신 수량을 상담해 제공하며, 머신 제공은 정해진 캡슐 소비량을 납품하는 계약과 함께 진행합니다.",
	},
	{
		question: "캡슐 최소 납품량과 계약 기간은 어떻게 정해지나요?",
		answer: "머신 수량과 예상 이용량을 기준으로 상담 후 확정합니다. 최종 최소 납품량과 계약 기간은 계약 전에 명확하게 안내합니다.",
	},
];
