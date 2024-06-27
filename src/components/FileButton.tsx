import React, { useState } from "react";
import { RiFile2Fill, RiFile2Line } from "@remixicon/react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import FileCloseDialog from "./FileCloseDialog";

interface FileButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    fileName: string;
    filePath?: string | undefined;
    hasChanges?: boolean;
    onFileClose?: () => void | undefined;
}

export default function FileButton({
    fileName,
    filePath,
    hasChanges,
    onFileClose,
    ...props
}: FileButtonProps) {
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const tooltipContent = filePath ? `${fileName} (${filePath})` : fileName;

    function closeFile(confirm: boolean = false) {
        if(hasChanges && !confirm) {
            setShowDeleteDialog(true);
            return;
        }

        onFileClose?.();
    }

    return (
        <div>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" 
                        onMouseDown={(e) => {
                            if (e.button !== 1) return;

                            closeFile();
                        }}
                        {...props}>
                            {hasChanges ? <RiFile2Fill size={18} /> : <RiFile2Line size={18} />}
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent side="right">{tooltipContent}</TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <FileCloseDialog
                open={showDeleteDialog}
                onOpenChange={setShowDeleteDialog}
                onConfirmClose={() => closeFile(true)}
            />
        </div>
    );
}
