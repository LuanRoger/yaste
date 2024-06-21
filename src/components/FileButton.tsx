import React from "react"
import { RiFile2Fill } from "@remixicon/react"
import { Button } from "./ui/button"

export default function FileButton() {
    return (
        <Button variant="ghost" size="icon">
            <RiFile2Fill size={18} />
        </Button>
    )
}