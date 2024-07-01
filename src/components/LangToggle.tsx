import React from "react";
import langs from "@/localization/langs";
import { useTranslation } from "react-i18next";
import { setAppLanguage } from "@/helpers/language_helpers";
import { MenubarItem, MenubarSubContent } from "./ui/menubar";
import { RiCheckLine } from "@remixicon/react";

export default function LangToggle() {
    const { i18n } = useTranslation();
    const currentLang = i18n.language;

    function onValueChange(value: string) {
        setAppLanguage(value, i18n);
    }

    return (
        <MenubarSubContent>
            {langs.map((lang) => (
                <MenubarItem
                    key={lang.key}
                    onSelect={() => onValueChange(lang.key)}
                    className="flex flex-row gap-1"
                >
                    {currentLang === lang.key && <RiCheckLine size={20} />}
                    {`${lang.prefix} ${lang.nativeName}`}
                </MenubarItem>
            ))}
        </MenubarSubContent>
    );
}
