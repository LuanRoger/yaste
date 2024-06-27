import React from "react";
import { RiFileForbidFill } from "@remixicon/react";

export default function NoFileOpen() {
    return (
        <div className="flex h-full w-full flex-col items-center justify-center 
        gap-2 p-4 rounded-md border border-border">
            <RiFileForbidFill />
            <h1>Não há arquivos abertos no momento.</h1>
        </div>
    );
}
