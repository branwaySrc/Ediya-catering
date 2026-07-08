import type { Metadata } from "next";
import { CateringGeneralOrder } from "@/domains/catering/general-order";

export const metadata: Metadata = {
	title: "커스텀 주문 | 이디야 안산지점 케이터링",
	description: "음료, 베이커리, 스낵을 직접 담아 예상 주문 금액을 확인하고 상담을 요청하세요.",
};

export default function CateringOrderPage() {
	return <CateringGeneralOrder />;
}
