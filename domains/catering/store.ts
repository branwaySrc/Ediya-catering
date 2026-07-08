"use client";

import { create } from "zustand";
import { cateringPackages, defaultCateringHeadcount, type CateringPackageId, type CateringPackageOptionId, type CustomOrderItemId } from "./data";

type CateringEstimateStore = {
	selectedPackageId: CateringPackageId;
	selectedOptionId: CateringPackageOptionId;
	headcount: number;
	selectPackage: (packageId: CateringPackageId) => void;
	selectPackageOption: (optionId: CateringPackageOptionId) => void;
	setHeadcount: (headcount: number) => void;
};

export const useCateringEstimateStore = create<CateringEstimateStore>((set) => ({
	selectedPackageId: cateringPackages[0].id,
	selectedOptionId: cateringPackages[0].options[0].id,
	headcount: defaultCateringHeadcount,
	selectPackage: (selectedPackageId) => {
		const selectedPackage = cateringPackages.find((item) => item.id === selectedPackageId) ?? cateringPackages[0];

		set({
			selectedPackageId: selectedPackage.id,
			selectedOptionId: selectedPackage.options[0].id,
		});
	},
	selectPackageOption: (selectedOptionId) => set({ selectedOptionId }),
	setHeadcount: (headcount) => set({ headcount: Math.max(1, Math.trunc(headcount) || 1) }),
}));

type CustomOrderCartLine = {
	itemId: CustomOrderItemId;
	quantity: number;
};

type CateringCustomOrderStore = {
	items: CustomOrderCartLine[];
	addItem: (itemId: CustomOrderItemId) => void;
	increaseItem: (itemId: CustomOrderItemId) => void;
	decreaseItem: (itemId: CustomOrderItemId) => void;
	setItemQuantity: (itemId: CustomOrderItemId, quantity: number) => void;
	removeItem: (itemId: CustomOrderItemId) => void;
	clearCart: () => void;
};

function normalizeQuantity(quantity: number) {
	return Math.max(1, Math.trunc(quantity) || 1);
}

export const useCateringCustomOrderStore = create<CateringCustomOrderStore>((set) => ({
	items: [],
	addItem: (itemId) =>
		set((state) => {
			const existingItem = state.items.find((item) => item.itemId === itemId);

			if (existingItem) {
				return {
					items: state.items.map((item) => (item.itemId === itemId ? { ...item, quantity: item.quantity + 1 } : item)),
				};
			}

			return { items: [...state.items, { itemId, quantity: 1 }] };
		}),
	increaseItem: (itemId) =>
		set((state) => ({
			items: state.items.map((item) => (item.itemId === itemId ? { ...item, quantity: item.quantity + 1 } : item)),
		})),
	decreaseItem: (itemId) =>
		set((state) => ({
			items: state.items
				.map((item) => (item.itemId === itemId ? { ...item, quantity: item.quantity - 1 } : item))
				.filter((item) => item.quantity > 0),
		})),
	setItemQuantity: (itemId, quantity) =>
		set((state) => ({
			items: state.items.map((item) => (item.itemId === itemId ? { ...item, quantity: normalizeQuantity(quantity) } : item)),
		})),
	removeItem: (itemId) => set((state) => ({ items: state.items.filter((item) => item.itemId !== itemId) })),
	clearCart: () => set({ items: [] }),
}));
