import { withProps } from "@udecode/cn";
import {
    createPlugins,
    RenderAfterEditable,
    PlateElement,
    PlateLeaf,
    isBlockAboveEmpty,
    isSelectionAtBlockStart,
} from "@udecode/plate-common";
import { createParagraphPlugin, ELEMENT_PARAGRAPH } from "@udecode/plate-paragraph";
import {
    createHeadingPlugin,
    ELEMENT_H1,
    ELEMENT_H2,
    ELEMENT_H3,
    KEYS_HEADING,
} from "@udecode/plate-heading";
import { createBlockquotePlugin, ELEMENT_BLOCKQUOTE } from "@udecode/plate-block-quote";
import {
    createCodeBlockPlugin,
    ELEMENT_CODE_BLOCK,
    ELEMENT_CODE_LINE,
    ELEMENT_CODE_SYNTAX,
    isCodeBlockEmpty,
    isSelectionAtCodeBlockStart,
} from "@udecode/plate-code-block";
import { createHorizontalRulePlugin, ELEMENT_HR } from "@udecode/plate-horizontal-rule";
import { createLinkPlugin, ELEMENT_LINK } from "@udecode/plate-link";
import {
    createListPlugin,
    ELEMENT_UL,
    ELEMENT_OL,
    ELEMENT_LI,
    createTodoListPlugin,
    ELEMENT_TODO_LI,
} from "@udecode/plate-list";
import {
    createBoldPlugin,
    MARK_BOLD,
    createItalicPlugin,
    MARK_ITALIC,
    createUnderlinePlugin,
    MARK_UNDERLINE,
    createStrikethroughPlugin,
    MARK_STRIKETHROUGH,
    createCodePlugin,
    MARK_CODE,
    createSubscriptPlugin,
    MARK_SUBSCRIPT,
    createSuperscriptPlugin,
    MARK_SUPERSCRIPT,
} from "@udecode/plate-basic-marks";
import { createFontColorPlugin, createFontBackgroundColorPlugin } from "@udecode/plate-font";
import { createAutoformatPlugin } from "@udecode/plate-autoformat";
import { createExitBreakPlugin } from "@udecode/plate-break";
import { createEmojiPlugin } from "@udecode/plate-emoji";
import { createTabbablePlugin } from "@udecode/plate-tabbable";
import { createResetNodePlugin } from "@udecode/plate-reset-node";

import { BlockquoteElement } from "@/components/plate-ui/blockquote-element";
import { CodeBlockElement } from "@/components/plate-ui/code-block-element";
import { CodeLineElement } from "@/components/plate-ui/code-line-element";
import { CodeSyntaxLeaf } from "@/components/plate-ui/code-syntax-leaf";
import { HrElement } from "@/components/plate-ui/hr-element";
import { LinkElement } from "@/components/plate-ui/link-element";
import { LinkFloatingToolbar } from "@/components/plate-ui/link-floating-toolbar";
import { HeadingElement } from "@/components/plate-ui/heading-element";
import { ListElement } from "@/components/plate-ui/list-element";
import { ParagraphElement } from "@/components/plate-ui/paragraph-element";
import { TodoListElement } from "@/components/plate-ui/todo-list-element";
import { CodeLeaf } from "@/components/plate-ui/code-leaf";
import { withPlaceholders } from "@/components/plate-ui/placeholder";
import { autoformatBlocks, autoformatLists } from "@/lib/editor/autoformat-rules";
import { createIndentPlugin } from "@udecode/plate-indent";
import { createIndentListPlugin } from "@udecode/plate-indent-list";
import { resetBlockTypesCommonRule, resetBlockTypesCodeBlockRule } from "@/lib/editor/reset-rules";

//TODO: Add emoji plugin
//TODO: Remove dependencies from FloatingBar
//TODO: Add link button
export const plugins = createPlugins(
    [
        createParagraphPlugin(),
        createHeadingPlugin(),
        createBlockquotePlugin(),
        createCodeBlockPlugin({
            options: {
                syntax: true,
                syntaxPopularFirst: true,
            },
        }),
        createHorizontalRulePlugin(),
        createLinkPlugin({
            renderAfterEditable: LinkFloatingToolbar as RenderAfterEditable,
        }),
        createCodePlugin(),
        createResetNodePlugin({
            options: {
                rules: [
                    {
                        ...resetBlockTypesCommonRule,
                        hotkey: "Enter",
                        predicate: isBlockAboveEmpty,
                    },
                    {
                        ...resetBlockTypesCommonRule,
                        hotkey: "Backspace",
                        predicate: isSelectionAtBlockStart,
                    },
                    {
                        ...resetBlockTypesCodeBlockRule,
                        hotkey: "Enter",
                        predicate: isCodeBlockEmpty,
                    },
                    {
                        ...resetBlockTypesCodeBlockRule,
                        hotkey: "Backspace",
                        predicate: isSelectionAtCodeBlockStart,
                    },
                ],
            },
        }),
        createExitBreakPlugin({
            options: {
                rules: [
                    {
                        hotkey: "mod+enter",
                    },
                    {
                        hotkey: "mod+shift+enter",
                        before: true,
                    },
                    {
                        hotkey: "enter",
                        query: {
                            start: true,
                            end: true,
                            allow: KEYS_HEADING,
                        },
                        relative: true,
                        level: 1,
                    },
                ],
            },
        }),
        createListPlugin(),
        createTodoListPlugin(),
        createBoldPlugin(),
        createItalicPlugin(),
        createUnderlinePlugin(),
        createStrikethroughPlugin(),
        createCodePlugin(),
        createSubscriptPlugin(),
        createSuperscriptPlugin(),
        createFontColorPlugin(),
        createFontBackgroundColorPlugin(),
        createIndentPlugin({
            inject: {
                props: {
                    validTypes: [ELEMENT_PARAGRAPH, ELEMENT_H1],
                },
            },
        }),
        createIndentListPlugin({
            inject: {
                props: {
                    validTypes: [ELEMENT_PARAGRAPH, ELEMENT_H1],
                },
            },
        }),
        createAutoformatPlugin({
            enabled: true,
            options: {
                rules: [...autoformatBlocks, ...autoformatLists],
                enableUndoOnDelete: true,
            },
        }),
        createEmojiPlugin(),
        createTabbablePlugin(),
    ],
    {
        components: withPlaceholders({
            [ELEMENT_BLOCKQUOTE]: BlockquoteElement,
            [ELEMENT_CODE_BLOCK]: CodeBlockElement,
            [ELEMENT_CODE_LINE]: CodeLineElement,
            [ELEMENT_CODE_SYNTAX]: CodeSyntaxLeaf,
            [ELEMENT_HR]: HrElement,
            [ELEMENT_LINK]: LinkElement,
            [ELEMENT_H1]: withProps(HeadingElement, { variant: "h1" }),
            [ELEMENT_H2]: withProps(HeadingElement, { variant: "h2" }),
            [ELEMENT_H3]: withProps(HeadingElement, { variant: "h3" }),
            [ELEMENT_UL]: withProps(ListElement, { variant: "ul" }),
            [ELEMENT_OL]: withProps(ListElement, { variant: "ol" }),
            [ELEMENT_LI]: withProps(PlateElement, { as: "li" }),
            [ELEMENT_PARAGRAPH]: ParagraphElement,
            [ELEMENT_TODO_LI]: TodoListElement,
            [MARK_BOLD]: withProps(PlateLeaf, { as: "strong" }),
            [MARK_CODE]: CodeLeaf,
            [MARK_ITALIC]: withProps(PlateLeaf, { as: "em" }),
            [MARK_STRIKETHROUGH]: withProps(PlateLeaf, { as: "s" }),
            [MARK_SUBSCRIPT]: withProps(PlateLeaf, { as: "sub" }),
            [MARK_SUPERSCRIPT]: withProps(PlateLeaf, { as: "sup" }),
            [MARK_UNDERLINE]: withProps(PlateLeaf, { as: "u" }),
        }),
    }
);
