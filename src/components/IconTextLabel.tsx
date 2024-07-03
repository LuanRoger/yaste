import React from "react";

interface IconTextLabelProps {
    children: React.ReactNode;
    icon: React.ReactNode;
}

export function IconTextLabel({ children, icon }: IconTextLabelProps) {
    return (
        <div className="flex flex-row items-center gap-2">
            {icon}
            <span>{children}</span>
        </div>
    )
}