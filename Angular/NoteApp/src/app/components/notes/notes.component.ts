import { Component } from '@angular/core';
import { Note } from '../../core/models/note.model';
import { NotesService } from '../../services/notes.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.sass']
})
export class NotesComponent {
  notes: Observable<Note[]> = new Observable();

  constructor(private _notes: NotesService,
              private _activatedRoute: ActivatedRoute) {
    _activatedRoute.params.subscribe(params => {
      if (params.state === 'active')
        this.notes = this._notes.findAll();
      if (params.state === 'deleted')
        this.notes = this._notes.findDeleted();
    });
  }

}
