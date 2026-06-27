import type { Metadata } from "next";
import { CateringMenuDetail } from "@/domains/features/catering/menu-detail";

export const metadata: Metadata = {
	title: "세부 메뉴보기 | 이디야 안산지점 케이터링",
	description: "커피, 티, 스낵, 베이커리, 기프트 등 케이터링과 단체 주문에 활용할 수 있는 메뉴 예시를 확인하세요.",
};

export default function CateringMenuPage() {
	return <CateringMenuDetail />;
}
