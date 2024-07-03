import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import packageJson from "@/../package.json";
import { IconTextLabel } from "./IconTextLabel";
import { RiGithubFill, RiLinkedinFill } from "@remixicon/react";
import { TextAnimatedGradient } from "./TextAnimatedGradient";
import { useTranslation } from "react-i18next";

interface AboutDialogProps {
    open?: boolean;
    setOpen?: (open: boolean) => void;
}

export default function AboutDialog({ open, setOpen }: AboutDialogProps) {
    const { t } = useTranslation();

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{t("aboutDialog:title")}</DialogTitle>
                    <p className="text-sm text-gray-400">{`${t("aboutDialog:version")}: ${packageJson.version}`}</p>
                </DialogHeader>
                <div className="flex flex-col text-sm">
                    <span>
                        <span>{t("aboutDialog:madeBy")} </span>
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
                            {t("aboutDialog:license")}
                        </a>
                    </span>
                    <TextAnimatedGradient>
                        {t("aboutDialog:madeIn")}
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
