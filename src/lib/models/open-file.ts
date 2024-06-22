export class OpenFile {
    id: string;
    path: string;
    content: string;
    saved: boolean;

    constructor(id: string, path: string, content: string, saved: boolean) {
        this.id = id;
        this.path = path;
        this.content = content;
        this.saved = saved;
    }
}
