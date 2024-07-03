import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import packageJson from "@/../package.json";
import { IconTextLabel } from "./IconTextLabel";
import { RiGithubFill, RiLinkedinFill } from "@remixicon/react";
import { TextAnimatedGradient } from "./TextAnimatedGradient";

interface AboutDialogProps {
    asChild?: boolean;
    open?: boolean;
    setOpen?: (open: boolean) => void;
}

export default function AboutDialog({ asChild, open, setOpen }: AboutDialogProps) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Sobre</DialogTitle>
                    <p className="text-sm text-gray-400">Versão: {packageJson.version}</p>
                </DialogHeader>
                <div className="flex flex-col text-sm">
                    <span>
                        <span>Feito por </span>
                        <a href="https://github.com/LuanRoger" className="underline">
                            Luan Roger.
                        </a>
                    </span>
                    <span>
                        <span>© 2024 Luan Roger </span>
                        <a
                            href="https://github.com/LuanRoger/yaste/blob/main/LICENSE"
                            className="underline"
                        >
                            MIT License.
                        </a>
                    </span>
                    <TextAnimatedGradient fromColor="#009b3a" viaColor="#fedf00">
                        Made in Brasil 🇧🇷.
                    </TextAnimatedGradient>
                </div>
                <footer className="flex flex-row items-center justify-around gap-2 text-sm text-gray-400">
                    <IconTextLabel icon={<RiGithubFill />}>
                        <a href="https://github.com/LuanRoger/yaste" className="underline">
                            GitHub
                        </a>
                    </IconTextLabel>
                    <IconTextLabel icon={<RiLinkedinFill />}>
                        <a href="www.linkedin.com/in/luan-roger" className="underline">
                            LinkedIn
                        </a>
                    </IconTextLabel>
                </footer>
            </DialogContent>
        </Dialog>
    );
}
