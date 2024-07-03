import { cn } from "@/lib/utils";
import React from "react";

interface TextAnimatedGradientProps {
    children: React.ReactNode;
    className?: string;
}

export function TextAnimatedGradient({
    children,
    className,
}: TextAnimatedGradientProps) {
    return (
        <span
            className={cn(
                `animate-text-gradient inline-flex bg-gradient-to-r from-[#009b3a] via-[#fedf00] to-[#009b3a] bg-[200%_auto] bg-clip-text text-transparent`,
                className
            )}
        >
            {children}
        </span>
    );
}
