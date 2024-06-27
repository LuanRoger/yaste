import React from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "./ui/alert-dialog";
import { Button } from "./ui/button";

interface FileCloseDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onConfirmClose?: () => void;
}

export default function FileCloseDialog({ open, onOpenChange, onConfirmClose }: FileCloseDialogProps) {
    return (
        <AlertDialog open={open} onOpenChange={onOpenChange}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Fechar arquivo</AlertDialogTitle>
                    <AlertDialogDescription>
                        Este arquivo tem alterações não salvas. Deseja fechar mesmo assim?
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <Button variant={"destructive"} onClick={onConfirmClose}>
                        Fechar
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
