import React from "react";
import { Progress } from "@/components/ui/progress";

export default function MacroProgress({
    label,
    value,
    max,
}: {
    label: string;
    value: number;
    max: number;
}) {
    return (
        <div className="space-y-1">
            <div className="flex justify-between text-sm">
                <span>{label}</span>
                <span>
                    {value}/{max}g
                </span>
            </div>
            <Progress
                value={value > max ? 100 : (value / max) * 100}
                className="h-2 [&>div]:bg-gradient-to-r [&>div]:from-blue-300 [&>div]:to-blue-100"
            />
        </div>
    );
}
