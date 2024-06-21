import React from "react";
import { Separator } from "./ui/separator";

export default function Footer() {
    return (
        <footer className="fixed inset-x-0 bottom-0 z-40 backdrop-blur-sm">
            <Separator orientation="horizontal" />
            <div className="p-2">
                <h1>Footer</h1>
            </div>
        </footer>
    );
}
