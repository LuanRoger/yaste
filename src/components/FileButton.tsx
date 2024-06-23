import React from "react";
import { RiFile2Fill } from "@remixicon/react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

interface FileButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    fileName: string;
    filePath?: string | undefined;
}

export default function FileButton({ fileName, filePath, ...props }: FileButtonProps) {
    const tooltipContent = filePath ? `${fileName} (${filePath})` : fileName;

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" {...props}>
                        <RiFile2Fill size={18} />
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="right">{tooltipContent}</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
