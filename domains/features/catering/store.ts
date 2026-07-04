"use client";

import { create } from "zustand";
import { defaultCateringHeadcount, estimatePackages, type EstimatePackageId } from "./data";

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
