import { create } from "zustand";
type Store = {
    shouldReload: boolean;
    setShouldReload: (value: boolean) => void;
};

export const useStore = create<Store>((set) => ({
    shouldReload: false,
    setShouldReload: (value) => set({ shouldReload: value }),
}));
