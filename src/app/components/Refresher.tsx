"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "@/store/store";

export function Refresher() {
    const shouldReload = useStore((state) => state.isReloadTodaysLoggedFoods);
    const setShouldReload = useStore(
        (state) => state.setIsReloadTodaysLoggedFoods
    );
    const router = useRouter();

    useEffect(() => {
        if (shouldReload) {
            router.refresh();
            setShouldReload(false);
        }
    }, [router, setShouldReload, shouldReload]);

    return null;
}
