import { Injectable } from '@nestjs/common';
import { NoteDto } from './dto/note.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from './entities/note.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NotesService {

  constructor(
    @InjectRepository(Note)
    private notesRepository: Repository<Note>
  ) {}

  create(createNoteDto: NoteDto): Promise<Note> {
    const note = {...createNoteDto} as Note;
    return this.notesRepository.save(note);
  }

  findAll(): Promise<Note[]> {
    return this.notesRepository.find({where: 'deleted = 0', relations: ['categories']});
  }

  findOne(id: number): Promise<Note> {
    return this.notesRepository.findOne(id, {relations: ['categories']});
  }

  findDeleted(): Promise<Note[]> {
    return this.notesRepository.find({where: 'deleted = 1', relations: ['categories']});
  }

  findByCategory(id: number): Promise<Note[]> {
    return this.notesRepository.query(`select note.* from note, note_categories_category where note.id = note_categories_category.noteId and note_categories_category.categoryId=${id};`);
  }

  async update(id: number, noteDto: NoteDto): Promise<Note> {
    let noteToSave = await this.notesRepository.findOne(id);
    noteToSave = {...noteToSave, ...noteDto};
    return this.notesRepository.save(noteToSave);
  }

  async remove(id: number): Promise<Note> {
    const toRet = await this.notesRepository.findOne(id);
    toRet.deleted = 1;
    return this.notesRepository.save(toRet);
  }

  async permaRemove(id: number): Promise<Note> {
    const toRet = await this.notesRepository.findOne(id, {relations: ['categories']});
    return this.notesRepository.remove(toRet)
              .then(() => toRet)
              .catch(() => null);
  }
}
