export class OpenFile {
    id: string;
    name: string;
    path: string;
    content: string;
    saved: boolean;

    constructor(id: string, name: string, path: string, content: string, saved: boolean) {
        this.id = id;
        this.name = name;
        this.path = path;
        this.content = content;
        this.saved = saved;
    }
}
