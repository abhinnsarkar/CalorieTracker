"use client";

import { toast } from "@/hooks/use-toast";

type ToastVariant = "default" | "success" | "destructive";

export function RenderNotification({
    title,
    description,
    variant = "default",
}: {
    title: string;
    description?: string;
    variant?: ToastVariant;
}) {
    toast({
        title,
        description,
        variant,
    });
}
