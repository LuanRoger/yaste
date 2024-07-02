import React from "react";

import {
    MARK_BOLD,
    MARK_CODE,
    MARK_ITALIC,
    MARK_STRIKETHROUGH,
    MARK_SUBSCRIPT,
    MARK_SUPERSCRIPT,
    MARK_UNDERLINE,
} from "@udecode/plate-basic-marks";
import { useEditorReadOnly } from "@udecode/plate-common";

import { Icons } from "@/components/Icons";

import { InsertDropdownMenu } from "./insert-dropdown-menu";
import { MarkToolbarButton } from "./mark-toolbar-button";
import { ToolbarGroup } from "./toolbar";
import { TurnIntoDropdownMenu } from "./turn-into-dropdown-menu";
import { IndentListToolbarButton } from "./indent-list-toolbar-button";
import { ListStyleType } from "@udecode/plate-indent-list";
import { OutdentToolbarButton } from "./outdent-toolbar-button";
import { IndentToolbarButton } from "./indent-toolbar-button";
import { useTranslation } from "react-i18next";
import { LinkToolbarButton } from "./link-toolbar-button";

export function FixedToolbarButtons() {
    const readOnly = useEditorReadOnly();
    const { t } = useTranslation();

    return (
        <div className="w-full overflow-hidden">
            <div
                className="flex flex-wrap"
                style={{
                    transform: "translateX(calc(-1px))",
                }}
            >
                {!readOnly && (
                    <>
                        <ToolbarGroup noSeparator>
                            <InsertDropdownMenu />
                            <TurnIntoDropdownMenu />
                        </ToolbarGroup>

                        <ToolbarGroup>
                            <MarkToolbarButton
                                nodeType={MARK_BOLD}
                                tooltip={t("editorToolbar:bold")}
                            >
                                <Icons.bold />
                            </MarkToolbarButton>
                            <MarkToolbarButton
                                nodeType={MARK_ITALIC}
                                tooltip={t("editorToolbar:italic")}
                            >
                                <Icons.italic />
                            </MarkToolbarButton>
                            <MarkToolbarButton
                                nodeType={MARK_UNDERLINE}
                                tooltip={t("editorToolbar:underline")}
                            >
                                <Icons.underline />
                            </MarkToolbarButton>

                            <MarkToolbarButton
                                nodeType={MARK_STRIKETHROUGH}
                                tooltip={t("editorToolbar:strikethrough")}
                            >
                                <Icons.strikethrough />
                            </MarkToolbarButton>
                            <MarkToolbarButton
                                nodeType={MARK_CODE}
                                tooltip={t("editorToolbar:code")}
                            >
                                <Icons.code />
                            </MarkToolbarButton>

                            <MarkToolbarButton
                                nodeType={MARK_SUPERSCRIPT}
                                tooltip={"Super"}
                            >
                                <Icons.superscript />
                            </MarkToolbarButton>
                            <MarkToolbarButton
                                nodeType={MARK_SUBSCRIPT}
                                tooltip={"Sbu"}
                            >
                                <Icons.subscript />
                            </MarkToolbarButton>
                        </ToolbarGroup>

                        <ToolbarGroup>
                            <IndentListToolbarButton nodeType={ListStyleType.Disc} />
                            <IndentListToolbarButton nodeType={ListStyleType.Decimal} />

                            <OutdentToolbarButton />
                            <IndentToolbarButton />
                        </ToolbarGroup>

                        <ToolbarGroup>
                            <LinkToolbarButton />
                        </ToolbarGroup>
                    </>
                )}
            </div>
        </div>
    );
}
