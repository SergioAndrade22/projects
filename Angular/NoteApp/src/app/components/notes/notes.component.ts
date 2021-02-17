import { Component } from '@angular/core';
import { Note } from '../../core/models/note.model';
import { NotesService } from '../../services/notes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.sass']
})
export class NotesComponent {
  notes: Observable<Note[]>;

  constructor(private _notes: NotesService) { 
    this.notes = this._notes.findAll();
  }

}
