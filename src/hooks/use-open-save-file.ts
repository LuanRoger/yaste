import { openFile, saveFile } from "@/lib/actions/file-actions";
import useKeyboardShortcut from "./use-keyboard-shortcut";
import useCurrentOpenFile from "./use-current-open-file";

export default function useOpenSaveFile(
    saveFileCallback: () => void,
    openFileCallback: () => void,
    deps: React.DependencyList
) {
    useKeyboardShortcut(
        saveFileCallback,
        { ctrlKey: true, code: "KeyS" },
        deps
    );
    useKeyboardShortcut(
        openFileCallback,
        { ctrlKey: true, code: "KeyO" },
        deps
    );
}
