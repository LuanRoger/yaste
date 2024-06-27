import { FilesContext } from "@/contexts/files-context";
import { useContext, useMemo } from "react";

export default function useCurrentOpenFile() {
    const filesContext = useContext(FilesContext);
    const currentFile = useMemo(() => filesContext.getCurrentOpenFile(), [filesContext]);

    return { currentFile, filesContext };
}