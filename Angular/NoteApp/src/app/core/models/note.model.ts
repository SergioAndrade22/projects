import { Category } from './category.model';
export class Note {
    id!: number;
    title!: string;
    body!: string;
    created!: Date;
    updated!: Date;
    categories!: Category[];
}

export class NoteDto {
    title?: string;
    body?: string;
    created?: Date;
    updated?: Date;
    categories?: Category[];
}