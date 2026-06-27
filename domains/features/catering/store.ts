"use client";

import { create } from "zustand";
import {
	cateringPackages,
	defaultCateringHeadcount,
	estimatePackages,
	getCateringPackage,
	type CateringPackageId,
	type EstimatePackageId,
} from "./data";

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

type CateringEstimateStore = {
	selectedEstimatePackageId: EstimatePackageId;
	headcount: number;
	selectEstimatePackage: (packageId: EstimatePackageId) => void;
	setHeadcount: (headcount: number) => void;
};

export const useCateringEstimateStore = create<CateringEstimateStore>((set) => ({
	selectedEstimatePackageId: estimatePackages[0].id,
	headcount: defaultCateringHeadcount,
	selectEstimatePackage: (selectedEstimatePackageId) => set({ selectedEstimatePackageId }),
	setHeadcount: (headcount) => set({ headcount: Math.max(1, Math.trunc(headcount) || 1) }),
}));
