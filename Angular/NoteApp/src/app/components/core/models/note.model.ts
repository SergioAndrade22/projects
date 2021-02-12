export class Note {
    id!: number;
    title!: string;
    body!: string;
    created!: Date;
    updated!: Date;
}

export class NoteDto {
    title?: string;
    body?: string;
    created?: Date;
    updated?: Date;
}