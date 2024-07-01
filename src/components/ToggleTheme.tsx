import React, { useEffect, useState } from "react";
import {
    getCurrentMode,
    setThemeToDark,
    setThemeToLight,
    setThemeToSystem,
} from "@/helpers/theme_helpers";
import { RiCheckLine } from "@remixicon/react";
import { MenubarItem, MenubarSubContent } from "./ui/menubar";
import { ThemeMode } from "@/lib/types/theme-mode";
import { Skeleton } from "./ui/skeleton";

export default function ToggleTheme() {
    const [isLoading, setIsLoading] = useState(true);
    const [mode, setMode] = useState<ThemeMode | undefined>();

    useEffect(() => {
        async function fetchMode() {
            const result = await getCurrentMode();
            console.log(result);
            setIsLoading(false);
            return result;
        }

        fetchMode().then(setMode);
    });

    async function handleThemeChange(newTheme: ThemeMode) {
        switch (newTheme) {
            case "light":
                setThemeToLight();
                setMode("light");
                break;
            case "dark":
                setThemeToDark();
                setMode("dark");
                break;
            case "system":
                setThemeToSystem();
                setMode("system");
                break;
        }
    }

    return (
        <MenubarSubContent>
            {!isLoading ? (
                <>
                    <MenubarItem
                        className="flex flex-row gap-1"
                        onSelect={() => handleThemeChange("light")}
                    >
                        {mode === "light" && <RiCheckLine size={20} />}
                        Claro
                    </MenubarItem>
                    <MenubarItem
                        className="flex flex-row gap-1"
                        onSelect={() => handleThemeChange("dark")}
                    >
                        {mode === "dark" && <RiCheckLine size={20} />}
                        Escuro
                    </MenubarItem>
                    <MenubarItem
                        className="flex flex-row gap-1"
                        onSelect={() => handleThemeChange("system")}
                    >
                        {mode === "system" && <RiCheckLine size={20} />}
                        Sistema
                    </MenubarItem>
                </>
            ) : (
                <ToggleThemeLoading />
            )}
        </MenubarSubContent>
    );
}

function ToggleThemeLoading() {
    const skeleton = <Skeleton className="h-6 w-full" />;

    return (
        <div className="space-y-3">
            {skeleton}
            {skeleton}
            {skeleton}
        </div>
    );
}
