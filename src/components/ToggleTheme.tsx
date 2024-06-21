import React from "react";
import { Button } from "@/components/ui/button";
import { updateDocumentTheme } from "@/helpers/theme_helpers";
import { RiMoonFill } from "@remixicon/react";

export default function ToggleTheme() {
    async function toggleTheme() {
        const isDarkMode = await window.themeMode.toggle();
        updateDocumentTheme(isDarkMode);
    }

    return (
        <Button onClick={toggleTheme} size="icon">
            <RiMoonFill size={16} />
        </Button>
    );
}
