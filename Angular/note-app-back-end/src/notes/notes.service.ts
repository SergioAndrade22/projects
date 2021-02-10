import { Injectable } from '@nestjs/common';
import { NoteDto } from './dto/note.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from './entities/note.entity';
import { Repository, Not } from 'typeorm';

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
    return this.notesRepository.find();
  }

  findOne(id: number): Promise<Note> {
    return this.notesRepository.findOne(id);
  }

  async update(id: number, noteDto: NoteDto): Promise<Note> {
    const noteToSave = await this.notesRepository.findOne(id);
    noteToSave.title = noteDto.title;
    noteToSave.body = noteDto.body;
    noteToSave.created = noteDto.created;
    noteToSave.updated = noteDto.updated;
    return this.notesRepository.save(noteToSave);
  }

  async remove(id: number): Promise<Note> {
    return this.notesRepository.delete(id)
            .then(() => {
              const toRet = this.findOne(id);
              return toRet;
              })
            .catch(() => {
              return null;
            });
  }
}
