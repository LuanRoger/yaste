import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    fallbackLng: "en",
    resources: {
        en: {
            topMenuBar: {
                file: "File",
                open: "Open",
                save: "Save",
                settings: "Settings",
                theme: "Theme",
                lightTheme: "Light",
                darkTheme: "Dark",
                systemTheme: "System",
                language: "Language",
            },
            filesSidebar: {
                openFile: "Open file",
            },
            editorToolbar: {
                insert: "Insert",
                basicBlocks: "Basic blocks",
                paragraph: "Paragraph",
                heading1: "Heading 1",
                heading2: "Heading 2",
                heading3: "Heading 3",
                quote: "Quote",
                turnInto: "Turn into",
                bold: "Bold",
                italic: "Italic",
                underline: "Underline",
                strikethrough: "Strikethrough",
                code: "Code",
                bulletList: "Bullet list",
                numberedList: "Numbered list",
                outdent: "Outdent",
                indent: "Indent",
                todo: "Todo",
                editorPlaceholder: "Write something...",
                pasteLink: "Paste link",
                textToDisplay: "Text to display",
                editLink: "Edit link",
            },
        },
        "pt-BR": {
            topMenuBar: {
                file: "Arquivo",
                open: "Abrir",
                save: "Salvar",
                settings: "Configurações",
                theme: "Tema",
                lightTheme: "Claro",
                darkTheme: "Escuro",
                systemTheme: "Sistema",
                language: "Idioma",
            },
            filesSidebar: {
                openFile: "Abrir arquivo",
            },
            editorToolbar: {
                insert: "Inserir",
                basicBlocks: "Blocos básicos",
                paragraph: "Parágrafo",
                heading1: "Título 1",
                heading2: "Título 2",
                heading3: "Título 3",
                quote: "Citação",
                turnInto: "Transformar em",
                bold: "Negrito",
                italic: "Itálico",
                underline: "Sublinhado",
                strikethrough: "Riscado",
                code: "Código",
                bulletList: "Lista de marcadores",
                numberedList: "Lista numerada",
                outdent: "Diminuir recuo",
                indent: "Aumentar recuo",
                todo: "Caixa de seleção",
                editorPlaceholder: "Escreva algo...",
                pasteLink: "Colar link",
                textToDisplay: "Texto a ser exibido",
                editLink: "Editar link",
            },
        },
    },
});
