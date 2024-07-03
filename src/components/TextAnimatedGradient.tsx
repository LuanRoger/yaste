import { cn } from "@/lib/utils";
import React from "react";

interface TextAnimatedGradientProps {
    children: React.ReactNode;
    fromColor: string;
    viaColor: string;
    className?: string;
}

export function TextAnimatedGradient({
    children,
    fromColor,
    viaColor,
    className,
}: TextAnimatedGradientProps) {
    return (
        <span
            className={cn(
                `animate-text-gradient inline-flex bg-gradient-to-r from-[${fromColor}] via-[${viaColor}] to-[${fromColor}] bg-[200%_auto] bg-clip-text text-transparent`,
                className
            )}
        >
            {children}
        </span>
    );
}
