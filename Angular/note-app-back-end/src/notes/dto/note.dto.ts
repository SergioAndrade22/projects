import { Category } from '../../categories/entities/category.entity';

export class NoteDto {
  id: number;
  title: string;
  body: string;
  created: Date;
  updated: Date;
  categories: Category[];
  bgcolor: string;
  txtcolor: string;
}
