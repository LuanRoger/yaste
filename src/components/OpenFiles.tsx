import React from "react";
import FileButton from "./FileButton";

export default function OpenFiles() {
    return (
        <aside className="fixed inset-y-0 left-1 mt-[74px] mb-[45px] shadow">
            <div className="rounded-md border h-full p-2">
                <div className="flex flex-col items-center justify-around grow">
                    <FileButton />
                </div>
            </div>
        </aside>
    );
}
