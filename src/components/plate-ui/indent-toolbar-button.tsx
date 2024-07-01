import React from 'react';
import { withRef } from '@udecode/cn';
import { useIndentButton } from '@udecode/plate-indent';

import { Icons } from '@/components/Icons';

import { ToolbarButton } from './toolbar';
import { useTranslation } from 'react-i18next';

export const IndentToolbarButton = withRef<typeof ToolbarButton>(
  (rest, ref) => {
    const { props } = useIndentButton();
    const { t } = useTranslation();

    return (
      <ToolbarButton ref={ref} tooltip={t("editorToolbar:indent")} {...props} {...rest}>
        <Icons.indent />
      </ToolbarButton>
    );
  }
);