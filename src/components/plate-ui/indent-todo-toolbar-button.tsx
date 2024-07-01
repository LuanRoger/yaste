import React from "react";
import {
    useIndentTodoToolBarButton,
    useIndentTodoToolBarButtonState,
} from "@udecode/plate-indent-list";
import { withRef } from "@udecode/react-utils";

import { Icons } from "@/components/Icons";

import { ToolbarButton } from "./toolbar";
import { useTranslation } from "react-i18next";

export const IndentTodoToolbarButton = withRef<typeof ToolbarButton>((rest, ref) => {
    const state = useIndentTodoToolBarButtonState({ nodeType: "todo" });
    const { props } = useIndentTodoToolBarButton(state);
    const { t } = useTranslation();

    return (
        <ToolbarButton ref={ref} tooltip={t("editorToolbar:todo")} {...props} {...rest}>
            <Icons.todo />
        </ToolbarButton>
    );
});
