import type { Metadata } from "next";
import { CateringGeneralOrder } from "@/domains/catering/general-order";

export const metadata: Metadata = {
	title: "일반주문 | 이디야 안산지점 케이터링",
	description: "회의, 미팅, 소규모 행사를 위한 커피, 음료, 스낵, 베이커리 단체 주문 상담 페이지입니다.",
};

export default function CateringOrderPage() {
	return <CateringGeneralOrder />;
}
