import React from "react";
import RichEditor from "@/components/RichEditor";
import OpenFiles from "@/components/OpenFiles";

export default function HomePage() {
    return (
        <div className="flex flex-row gap-2 h-full">
            <OpenFiles />
            <div className="flex-1">
                <RichEditor />
            </div>
        </div>
    );
}
