import { create } from "zustand";
type Store = {
    previousRoute: string;
    setPreviousRoute: (route: string) => void;

    backBtnLabel: string;
    setBackBtnLabel: (label: string) => void;

    isLoadProfileAfterSetup: boolean;
    setIsLoadProfileAfterSetup: (value: boolean) => void;

    isReloadTodaysLoggedFoods: boolean;
    setIsReloadTodaysLoggedFoods: (value: boolean) => void;

    isReloadTodaysProgress: boolean;
    setIsReloadTodaysProgress: (value: boolean) => void;

    isReloadCalorieGraph: boolean;
    setIsReloadCalorieGraph: (value: boolean) => void;

    isReloadBodyInformation: boolean;
    setIsReloadBodyInformation: (value: boolean) => void;
};

export const useStore = create<Store>((set) => ({
    previousRoute: "",
    setPreviousRoute: (route) => set({ previousRoute: route }),

    backBtnLabel: "",
    setBackBtnLabel: (label) => set({ backBtnLabel: label }),

    isLoadProfileAfterSetup: false,
    setIsLoadProfileAfterSetup: (value) =>
        set({ isLoadProfileAfterSetup: value }),

    isReloadTodaysLoggedFoods: false,
    setIsReloadTodaysLoggedFoods: (value) =>
        set({ isReloadTodaysLoggedFoods: value }),
    isReloadTodaysProgress: false,

    setIsReloadTodaysProgress: (value) =>
        set({ isReloadTodaysProgress: value }),

    isReloadCalorieGraph: false,
    setIsReloadCalorieGraph: (value) => set({ isReloadCalorieGraph: value }),

    isReloadBodyInformation: false,
    setIsReloadBodyInformation: (value) =>
        set({ isReloadBodyInformation: value }),
}));
