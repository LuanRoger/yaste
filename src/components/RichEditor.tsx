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
}

export default function RichEditor({
    editorRef,
    initialValue,
    readOnly = false,
    ...props
}: RichEditorProps) {
    return (
        <TooltipProvider>
            <Plate
                plugins={plugins}
                editorRef={editorRef}
                initialValue={initialValue}
                readOnly={readOnly}
            >
                <div className="flex flex-col gap-2 h-full">
                    <div className="transition">
                        <FixedToolbar>
                            <FixedToolbarButtons />
                        </FixedToolbar>
                    </div>
                    <Editor {...props} />
                </div>
            </Plate>
        </TooltipProvider>
    );
}
