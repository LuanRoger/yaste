import {useEffect, useCallback} from 'react'

type OptionalConfig = Pick<
 KeyboardEvent,
 'altKey' | 'ctrlKey' | 'shiftKey'
>

interface ShortcutConfig extends Partial<OptionalConfig> {
 code: KeyboardEvent['code'];
}

type ShortcutAction = (e: KeyboardEvent) => void;

export default function useKeyboardShortcut(
 shortcutAction: ShortcutAction,
 config: ShortcutConfig,
 deps: React.DependencyList
) {
 const eventHandler = useCallback((e: KeyboardEvent) => {
  const {code, ctrlKey, altKey, shiftKey} = e;
  if(config.code !== code) return;
  if(config.ctrlKey && !ctrlKey) return;
  if(config.shiftKey && !shiftKey) return;
  if(config.altKey && !altKey) return;

  shortcutAction(e);
 },[shortcutAction, config, ...deps])

 useEffect(()=>{
  window.addEventListener('keydown', eventHandler)
  return () => window.removeEventListener(
    'keydown', 
    eventHandler
   )
 }, [eventHandler])
}