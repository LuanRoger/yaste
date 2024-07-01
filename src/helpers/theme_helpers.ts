export async function setThemeToDefault() {
    const isDarkMode = await window.themeMode.system();
    updateDocumentTheme(isDarkMode);
}

export function isInDarkMode(): boolean {
    return document.documentElement.classList.contains("dark");
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
