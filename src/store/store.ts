import { create } from "zustand";
type Store = {
    isReloadTodaysLoggedFoods: boolean;
    setIsReloadTodaysLoggedFoods: (value: boolean) => void;

    isReloadTodaysProgress: boolean;
    setIsReloadTodaysProgress: (value: boolean) => void;

    isReloadCalorieGraph: boolean;
    setIsReloadCalorieGraph: (value: boolean) => void;
};

export const useStore = create<Store>((set) => ({
    isReloadTodaysLoggedFoods: false,
    setIsReloadTodaysLoggedFoods: (value) =>
        set({ isReloadTodaysLoggedFoods: value }),
    isReloadTodaysProgress: false,

    setIsReloadTodaysProgress: (value) =>
        set({ isReloadTodaysProgress: value }),

    isReloadCalorieGraph: false,
    setIsReloadCalorieGraph: (value) => set({ isReloadCalorieGraph: value }),
}));
