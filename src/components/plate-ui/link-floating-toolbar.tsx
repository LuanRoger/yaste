'use client';

import React from 'react';

import { cn } from '@udecode/cn';
import { useFormInputProps } from '@udecode/plate-common';
import {
  type UseVirtualFloatingOptions,
  flip,
  offset,
} from '@udecode/plate-floating';
import {
  FloatingLinkUrlInput,
  type LinkFloatingToolbarState,
  LinkOpenButton,
  useFloatingLinkEdit,
  useFloatingLinkEditState,
  useFloatingLinkInsert,
  useFloatingLinkInsertState,
} from '@udecode/plate-link';

import { Icons } from '@/components/Icons';

import { buttonVariants } from '@/components/ui/button';
import { inputVariants } from '@/components/ui/input';
import { popoverVariants } from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { useTranslation } from 'react-i18next';

const floatingOptions: UseVirtualFloatingOptions = {
  middleware: [
    offset(12),
    flip({
      fallbackPlacements: ['bottom-end', 'top-start', 'top-end'],
      padding: 12,
    }),
  ],
  placement: 'bottom-start',
};

export interface LinkFloatingToolbarProps {
  state?: LinkFloatingToolbarState;
}

export function LinkFloatingToolbar({ state }: LinkFloatingToolbarProps) {
  const insertState = useFloatingLinkInsertState({
    ...state,
    floatingOptions: {
      ...floatingOptions,
      ...state?.floatingOptions,
    },
  });
  const {
    hidden,
    props: insertProps,
    ref: insertRef,
    textInputProps,
  } = useFloatingLinkInsert(insertState);

  const editState = useFloatingLinkEditState({
    ...state,
    floatingOptions: {
      ...floatingOptions,
      ...state?.floatingOptions,
    },
  });
  const {
    editButtonProps,
    props: editProps,
    ref: editRef,
    unlinkButtonProps,
  } = useFloatingLinkEdit(editState);
  const inputProps = useFormInputProps({
    preventDefaultOnEnterKeydown: true,
  });
  const { t } = useTranslation();

  if (hidden) return null;

  const input = (
    <div className="flex w-[330px] flex-col" {...inputProps}>
      <div className="flex items-center">
        <div className="flex items-center pl-3 text-muted-foreground">
          <Icons.link className="size-4" />
        </div>

        <FloatingLinkUrlInput
          className={inputVariants({ h: 'sm', variant: 'ghost' })}
          placeholder={t("editorToolbar:pasteLink")}
        />
      </div>
      <Separator />
      <div className="flex items-center">
        <div className="flex items-center pl-3 text-muted-foreground">
          <Icons.text className="size-4" />
        </div>
        <input
          className={inputVariants({ h: 'sm', variant: 'ghost' })}
          placeholder={t("editorToolbar:textToDisplay")}
          {...textInputProps}
        />
      </div>
    </div>
  );

  const editContent = editState.isEditing ? (
    input
  ) : (
    <div className="box-content flex h-9 items-center gap-1">
      <button
        className={buttonVariants({ size: 'sm', variant: 'ghost' })}
        type="button"
        {...editButtonProps}
      >
        {t("editorToolbar:editLink")}
      </button>

      <Separator orientation="vertical" />

      <LinkOpenButton
        className={buttonVariants({
          size: 'sm',
          variant: 'ghost',
        })}
      >
        <Icons.externalLink size={18} />
      </LinkOpenButton>

      <Separator orientation="vertical" />

      <button
        className={buttonVariants({
          size: 'sm',
          variant: 'ghost',
        })}
        type="button"
        {...unlinkButtonProps}
      >
        <Icons.unlink size={18} />
      </button>
    </div>
  );

  return (
    <>
      <div
        className={cn(popoverVariants(), 'w-auto p-1')}
        ref={insertRef}
        {...insertProps}
      >
        {input}
      </div>

      <div
        className={cn(popoverVariants(), 'w-auto p-1')}
        ref={editRef}
        {...editProps}
      >
        {editContent}
      </div>
    </>
  );
}
