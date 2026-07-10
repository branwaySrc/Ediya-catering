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

export type Product = {
	id: string;
	category: ProductCategoryId;
	name: string;
	description: string;
	storage: string;
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
		image: "/coffee-americano.png",
		imageAlt: "이디야 아메리카노 음료",
	},
	{
		id: "sparkling-drink",
		category: "drink",
		name: "탄산·에이드",
		description: "업무 중 가볍게 즐기는 청량 음료 구성",
		storage: "냉장",
		image: "/catering-drinks.png",
		imageAlt: "탄산과 에이드 음료 구성",
	},
	{
		id: "water-healthy-drink",
		category: "drink",
		name: "생수·건강음료",
		description: "매일 부담 없이 이용하는 기본 음료 구성",
		storage: "냉장·상온",
		image: "/snackbar-drink-station.png",
		imageAlt: "생수와 건강음료가 담긴 음료 스테이션",
	},
	{
		id: "snack-cookie",
		category: "snack",
		name: "스낵·쿠키",
		description: "개별 포장으로 간편하게 즐기는 간식 구성",
		storage: "상온",
		image: "/catering-snacks.png",
		imageAlt: "다양한 스낵과 쿠키",
	},
	{
		id: "bakery",
		category: "snack",
		name: "베이커리",
		description: "가벼운 식사와 휴식 시간에 어울리는 베이커리 구성",
		storage: "상온",
		image: "/catering-bakery.png",
		imageAlt: "다양한 베이커리 제품",
	},
	{
		id: "chilled-dessert",
		category: "snack",
		name: "냉장 디저트",
		description: "쇼케이스에 진열해 즐기는 냉장 디저트 구성",
		storage: "냉장",
		image: "/snackbar-snack-station.png",
		imageAlt: "냉장 쇼케이스의 디저트 구성",
	},
	{
		id: "balanced-capsule",
		category: "capsule",
		name: "밸런스 캡슐",
		description: "누구나 편하게 즐길 수 있는 균형 잡힌 커피",
		storage: "상온",
		image: "/snackbar-lounge-station.png",
		imageAlt: "캡슐커피 머신이 놓인 라운지 스테이션",
	},
	{
		id: "mild-capsule",
		category: "capsule",
		name: "마일드 캡슐",
		description: "부드러운 향과 맛을 선호하는 구성",
		storage: "상온",
		image: "/coffee-americano.png",
		imageAlt: "부드러운 커피를 표현한 아메리카노",
	},
	{
		id: "decaf-season-capsule",
		category: "capsule",
		name: "디카페인·시즌 캡슐",
		description: "취향과 시즌에 따라 상담하는 선택형 구성",
		storage: "상온",
		image: "/catering-gift.png",
		imageAlt: "선택형 캡슐커피 구성",
	},
];

export const pricePlans = [
	{
		id: "starter",
		name: "스타터",
		people: "10인 이하",
		monthlyBudget: "월 10만원",
		delivery: "별도 배송",
		description: "작은 팀이 부담 없이 시작하는 기본 구성",
		features: ["음료 또는 스낵 중심", "제품군 선택", "배송 일정 개별 안내"],
	},
	{
		id: "standard",
		name: "스탠다드",
		people: "11~30인",
		monthlyBudget: "월 30만원",
		delivery: "직접 배달",
		description: "이용량을 확인하며 정기적으로 채우는 구성",
		features: ["음료·스낵 혼합", "주 1~2회 방문 관리", "월 예산 내 부족분 보충"],
	},
	{
		id: "plus",
		name: "플러스",
		people: "31인 이상",
		monthlyBudget: "월 50만원부터",
		delivery: "직접 배달",
		description: "소진 속도에 맞춰 품목과 방문을 조정하는 구성",
		features: ["복수 제품군 구성", "주 1~2회 이상 일정 조정", "재고·소진 속도 기반 보충"],
	},
];

export const stations: Station[] = [
	{
		id: "drink",
		name: "음료 스테이션",
		nameEn: "Drink Station",
		description: "사무실 인원과 설치 공간에 맞춰 냉장 설비의 크기를 선택하고 원하는 음료 구성을 상담합니다.",
		image: "/snackbar-drink-station.png",
		imageAlt: "냉장고와 다양한 음료로 구성된 음료 스테이션",
		icon: Refrigerator,
		accent: "#1C5DBE",
		features: [
			{ label: "설비", values: ["냉장고"] },
			{ label: "크기", values: ["소형", "중형", "대형"] },
			{ label: "구성", values: ["이용 인원과 예산에 맞춘 음료"] },
		],
	},
	{
		id: "dessert",
		name: "디저트 스테이션",
		nameEn: "Dessert Station",
		description: "냉장 또는 상온 보관 방식과 쇼케이스 크기를 조합해 공간에 어울리는 디저트 존을 만듭니다.",
		image: "/snackbar-snack-station.png",
		imageAlt: "쇼케이스와 디저트로 구성된 디저트 스테이션",
		icon: CakeSlice,
		accent: "#E96106",
		features: [
			{ label: "보관 방식", values: ["냉장", "상온"] },
			{ label: "쇼케이스", values: ["소형", "중형", "대형"] },
			{ label: "구성", values: ["보관 방식에 맞춘 디저트"] },
		],
	},
	{
		id: "lounge",
		name: "라운지 스테이션",
		nameEn: "Lounge Station",
		description: "필요한 수량의 캡슐커피 머신과 정기 캡슐 공급 계약을 결합한 오피스 커피 구독 솔루션입니다.",
		image: "/snackbar-lounge-station.png",
		imageAlt: "캡슐커피 머신과 휴게 공간으로 구성된 라운지 스테이션",
		icon: Coffee,
		accent: "#009249",
		features: [
			{ label: "커피 머신", values: ["필요 수량 맞춤 제공"] },
			{ label: "운영 방식", values: ["캡슐 정기 납품 계약"] },
			{ label: "계약 조건", values: ["소비량과 기간 상담 후 확정"] },
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
		answer: "월 10만원 이하는 별도 배송으로 진행하며, 월 30만원 이상부터 직접 배달과 정기 관리가 제공됩니다. 10만원 초과 30만원 미만 구간은 구성과 지역을 확인한 뒤 배송 방식을 안내합니다.",
	},
	{
		question: "직접 배달은 어떻게 관리되나요?",
		answer: "기본적으로 주 1~2회 방문해 남은 수량과 제품별 소진 속도를 확인합니다. 정해진 월 예산 안에서 부족한 품목을 보충하며, 필요에 따라 방문 일정을 추가로 조정합니다.",
	},
	{
		question: "설비 설치 조건과 비용은 어떻게 확인하나요?",
		answer: "설치 공간과 전원, 보관 환경을 확인한 후 설비 제공 및 설치 조건을 견적서에 구체적으로 안내합니다.",
	},
	{
		question: "라운지 스테이션의 머신 수량을 선택할 수 있나요?",
		answer: "네. 필요한 머신 수량을 상담해 제공하며, 머신 제공은 정해진 캡슐 소비량을 납품하는 계약과 함께 진행됩니다.",
	},
	{
		question: "캡슐 최소 납품량과 계약 기간은 어떻게 정해지나요?",
		answer: "머신 수량과 예상 이용량을 기준으로 상담 후 확정합니다. 최종 최소 납품량과 계약 기간은 계약 전에 명확하게 안내합니다.",
	},
];
