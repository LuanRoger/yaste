import { PlateEditor, Value, Plate } from "@udecode/plate-common";
import { ForwardedRef } from "react";
import { Editor, EditorProps } from "./plate-ui/editor";
import { FixedToolbar } from "./plate-ui/fixed-toolbar";
import { FixedToolbarButtons } from "./plate-ui/fixed-toolbar-buttons";
import { TooltipProvider } from "./plate-ui/tooltip";
import { plugins } from "@/lib/editor/plugins";
import React from "react";

export interface RichEditorProps extends EditorProps {
    editorRef?: ForwardedRef<PlateEditor<Value>> | undefined;
    initialValue?: Value | undefined;
    readOnly?: boolean;
    onPlateChange?: (value: Value) => void;
}

export default function RichEditor({
    editorRef,
    initialValue,
    readOnly = false,
    onPlateChange,
    ...props
}: RichEditorProps) {
    return (
        <TooltipProvider>
            <Plate
                plugins={plugins}
                editorRef={editorRef}
                initialValue={initialValue}
                readOnly={readOnly}
                onChange={onPlateChange}
            >
                <div className="flex flex-col gap-2 h-full">
                    <FixedToolbar>
                        <FixedToolbarButtons />
                    </FixedToolbar>
                    <Editor {...props} />
                </div>
            </Plate>
        </TooltipProvider>
    );
}
