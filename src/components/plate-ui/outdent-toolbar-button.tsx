import React from "react";
import { withRef } from "@udecode/cn";
import { useOutdentButton } from "@udecode/plate-indent";

import { Icons } from "@/components/Icons";

import { ToolbarButton } from "./toolbar";
import { useTranslation } from "react-i18next";

export const OutdentToolbarButton = withRef<typeof ToolbarButton>((rest, ref) => {
    const { props } = useOutdentButton();
    const { t } = useTranslation();

    return (
        <ToolbarButton ref={ref} tooltip={t("editorToolbar:outdent")} {...props} {...rest}>
            <Icons.outdent />
        </ToolbarButton>
    );
});
