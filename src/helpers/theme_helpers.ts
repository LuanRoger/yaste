import { ThemeMode } from "@/lib/types/theme-mode";

export async function setThemeToDefault() {
    const isDarkMode = await window.themeMode.system();
    updateDocumentTheme(isDarkMode);
}

export async function getCurrentMode(): Promise<ThemeMode> {
    const mode = await window.themeMode.current();

    return mode;
}

export function updateDocumentTheme(isDarkMode: boolean) {
    if (!isDarkMode) {
        document.documentElement.classList.remove("dark");
    } else {
        document.documentElement.classList.add("dark");
    }
}

export async function setThemeToDark() {
    await window.themeMode.dark();
    updateDocumentTheme(true);
}

export async function setThemeToLight() {
    await window.themeMode.light();
    updateDocumentTheme(false);
}

export async function setThemeToSystem() {
    const isDarkMode = await window.themeMode.system();
    updateDocumentTheme(isDarkMode);
}
