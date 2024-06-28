import { parseJsonToGeneric } from "@/lib/utils/json";
import React, { createContext, useState } from "react";

export interface IContentContext {
    content: any;
    setCurrentContent: (content: any) => void;
    resetContent: () => void;
    getJsonContent: () => string;
    getValueContent: <T>() => T | undefined;
}

export const ContentContext = createContext<IContentContext>({
    content: null,
    setCurrentContent: (_) => {},
    resetContent: () => {},
    getJsonContent: () => "{}",
    getValueContent: () => undefined,
});

export function ContentProvider({ children }: { children: React.ReactNode }) {
    const [currentContent, setCurrentContent] = useState<any>(null);

    function resetContent() {
        setCurrentContent(null);
    }

    function getJsonContent() {
        return JSON.stringify(currentContent);
    }

    function getValueContent<T>(): T | undefined {
        return parseJsonToGeneric<T>(getJsonContent());
    }

    return (
        <ContentContext.Provider
            value={{
                content: currentContent,
                setCurrentContent,
                resetContent,
                getJsonContent,
                getValueContent,
            }}
        >
            {children}
        </ContentContext.Provider>
    );
}
