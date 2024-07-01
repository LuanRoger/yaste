import React, { useMemo } from "react";

import type { DropdownMenuProps } from "@radix-ui/react-dropdown-menu";

import { ELEMENT_BLOCKQUOTE } from "@udecode/plate-block-quote";
import {
    collapseSelection,
    focusEditor,
    getNodeEntries,
    isBlock,
    toggleNodeType,
    useEditorRef,
    useEditorSelector,
} from "@udecode/plate-common";
import { ELEMENT_H1, ELEMENT_H2, ELEMENT_H3 } from "@udecode/plate-heading";
import { ELEMENT_PARAGRAPH } from "@udecode/plate-paragraph";

import { Icons } from "@/components/Icons";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
    useOpenState,
} from "./dropdown-menu";
import { ToolbarButton } from "./toolbar";
import { useTranslation } from "react-i18next";

export function TurnIntoDropdownMenu(props: DropdownMenuProps) {
    const value: string = useEditorSelector((editor) => {
        let initialNodeType: string = ELEMENT_PARAGRAPH;
        let allNodesMatchInitialNodeType = false;
        const codeBlockEntries = getNodeEntries(editor, {
            match: (n) => isBlock(editor, n),
            mode: "highest",
        });
        const nodes = Array.from(codeBlockEntries);

        if (nodes.length > 0) {
            initialNodeType = nodes[0][0].type as string;
            allNodesMatchInitialNodeType = nodes.every(([node]) => {
                const type: string = (node?.type as string) || ELEMENT_PARAGRAPH;

                return type === initialNodeType;
            });
        }

        return allNodesMatchInitialNodeType ? initialNodeType : ELEMENT_PARAGRAPH;
    }, []);

    const editor = useEditorRef();
    const openState = useOpenState();
    const { t } = useTranslation();
    const items = useMemo(
        () => [
            {
                description: t("editorToolbar:paragraph"),
                icon: Icons.paragraph,
                label: t("editorToolbar:paragraph"),
                value: ELEMENT_PARAGRAPH,
            },
            {
                description: t("editorToolbar:heading1"),
                icon: Icons.h1,
                label: t("editorToolbar:heading1"),
                value: ELEMENT_H1,
            },
            {
                description: t("editorToolbar:heading2"),
                icon: Icons.h2,
                label: t("editorToolbar:heading2"),
                value: ELEMENT_H2,
            },
            {
                description: t("editorToolbar:heading3"),
                icon: Icons.h3,
                label: t("editorToolbar:heading3"),
                value: ELEMENT_H3,
            },
            {
                description: t("editorToolbar:quote"),
                icon: Icons.blockquote,
                label: t("editorToolbar:quote"),
                value: ELEMENT_BLOCKQUOTE,
            },
            // {
            //   value: 'ul',
            //   label: 'Bulleted list',
            //   description: 'Bulleted list',
            //   icon: Icons.ul,
            // },
            // {
            //   value: 'ol',
            //   label: 'Numbered list',
            //   description: 'Numbered list',
            //   icon: Icons.ol,
            // },
        ],
        [t]
    );
    const defaultItem = useMemo(
        () => items.find((item) => item.value === ELEMENT_PARAGRAPH)!,
        [items]
    );

    const selectedItem = items.find((item) => item.value === value) ?? defaultItem;
    const { icon: SelectedItemIcon, label: selectedItemLabel } = selectedItem;

    return (
        <DropdownMenu modal={false} {...openState} {...props}>
            <DropdownMenuTrigger asChild>
                <ToolbarButton
                    className="lg:min-w-[130px]"
                    isDropdown
                    pressed={openState.open}
                    tooltip={t("editorToolbar:turnInto")}
                >
                    <SelectedItemIcon className="size-5 lg:hidden" />
                    <span className="max-lg:hidden">{selectedItemLabel}</span>
                </ToolbarButton>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start" className="min-w-0">
                <DropdownMenuLabel>{t("editorToolbar:turnInto")}</DropdownMenuLabel>

                <DropdownMenuRadioGroup
                    className="flex flex-col gap-0.5"
                    onValueChange={(type) => {
                        // if (type === 'ul' || type === 'ol') {
                        //   if (settingsStore.get.checkedId(KEY_LIST_STYLE_TYPE)) {
                        //     toggleIndentList(editor, {
                        //       listStyleType: type === 'ul' ? 'disc' : 'decimal',
                        //     });
                        //   } else if (settingsStore.get.checkedId('list')) {
                        //     toggleList(editor, { type });
                        //   }
                        // } else {
                        //   unwrapList(editor);
                        toggleNodeType(editor, { activeType: type });
                        // }

                        collapseSelection(editor);
                        focusEditor(editor);
                    }}
                    value={value}
                >
                    {items.map(({ icon: Icon, label, value: itemValue }) => (
                        <DropdownMenuRadioItem
                            className="min-w-[180px]"
                            key={itemValue}
                            value={itemValue}
                        >
                            <Icon className="mr-2 size-5" />
                            {label}
                        </DropdownMenuRadioItem>
                    ))}
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
