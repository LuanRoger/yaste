import React from "react";
import { isInDarkMode, setThemeToDark, setThemeToLight } from "@/helpers/theme_helpers";
import { RiCheckLine } from "@remixicon/react";
import { MenubarItem, MenubarSubContent } from "./ui/menubar";

export default function ToggleTheme() {
    const isDarkMode = isInDarkMode();

    async function handleThemeChange(setToDarkMode: boolean) {
        if (setToDarkMode) {
            setThemeToDark();
            return;
        }

        setThemeToLight();
    }

    return (
        <MenubarSubContent>
            <MenubarItem className="flex flex-row gap-1" onSelect={() => handleThemeChange(false)}>
                {!isDarkMode && <RiCheckLine size={20} />}
                Claro
            </MenubarItem>
            <MenubarItem className="flex flex-row gap-1" onSelect={() => handleThemeChange(true)}>
                {isDarkMode && <RiCheckLine size={20} />}
                Escuro
            </MenubarItem>
        </MenubarSubContent>
    );
}
