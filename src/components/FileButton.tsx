import React from "react"
import { RiFile2Fill } from "@remixicon/react"
import { Button } from "./ui/button"

interface FileButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function FileButton({ ...props }: FileButtonProps) {
    return (
        <Button variant="ghost" size="icon" { ...props }>
            <RiFile2Fill size={18} />
        </Button>
    )
}