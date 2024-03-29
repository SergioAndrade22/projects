import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NoteDto } from './dto/note.dto';
import { Note } from './entities/note.entity';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  create(@Body() createNoteDto: NoteDto): Promise<Note> {
    return this.notesService.create(createNoteDto);
  }

  @Get()
  findAll(): Promise<Note[]> {
    return this.notesService.findAll();
  }

  @Get('/deleted')
  findDeleted(): Promise<Note[]> {
    return this.notesService.findDeleted();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Note> {
    return this.notesService.findOne(+id);
  }

  @Get('/category/:id')
  findByCategory(@Param('id') id: string): Promise<Note[]> {
    return this.notesService.findByCategory(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateNoteDto: NoteDto): Promise<Note> {
    return this.notesService.update(+id, updateNoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Note> {
    return this.notesService.remove(+id);
  }

  @Delete('deleted/:id')
  permaRemove(@Param('id') id: string): Promise<Note> {
    return this.notesService.permaRemove(+id);
  }
}
