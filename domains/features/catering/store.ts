"use client";

import { create } from "zustand";
import { cateringPackages, getCateringPackage, type CateringPackageId } from "./data";

type CateringStore = {
	selectedPackageId: CateringPackageId;
	selectedChoiceId: string;
	selectPackage: (packageId: CateringPackageId) => void;
	selectChoice: (choiceId: string) => void;
};

const initialPackage = cateringPackages[0];

export const useCateringStore = create<CateringStore>((set) => ({
	selectedPackageId: initialPackage.id,
	selectedChoiceId: initialPackage.choices[0].id,
	selectPackage: (packageId) => {
		const selectedPackage = getCateringPackage(packageId);
		set({ selectedPackageId: packageId, selectedChoiceId: selectedPackage.choices[0].id });
	},
	selectChoice: (selectedChoiceId) => set({ selectedChoiceId }),
}));
