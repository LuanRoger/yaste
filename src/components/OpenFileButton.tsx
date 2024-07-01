import React from "react";
import { RiAddFill } from "@remixicon/react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { useTranslation } from "react-i18next";

interface OpenFileButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function OpenFileButton({ ...props }: OpenFileButtonProps) {
    const { t } = useTranslation();

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" {...props}>
                        <RiAddFill size={18} />
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="right">{t("filesSidebar:openFile")}</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
