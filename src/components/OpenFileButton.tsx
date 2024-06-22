import React from "react";
import { RiAddFill } from "@remixicon/react";
import { Button } from "./ui/button";

interface OpenFileButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function OpenFileButton({ ...props }: OpenFileButtonProps) {
    return (
        <Button variant="ghost" size="icon" {...props}>
            <RiAddFill size={18} />
        </Button>
    );
}
