import { Component } from '@angular/core';
import { Note } from '../../core/models/note.model';
import { NotesService } from '../../services/notes.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.sass']
})
export class NotesComponent {
  notes: Observable<Note[]> = new Observable();
  params: Observable<Params> = new Observable();

  constructor(private _notes: NotesService,
              private _activatedRoute: ActivatedRoute,
              private _router: Router) {
    this.params = this._activatedRoute.params;
    this.params.subscribe(params => {
      if (params.state === 'active')
        this.notes = this._notes.findAll();
      if (params.state === 'deleted')
        this.notes = this._notes.findDeleted();
    });
  }

  newNote(): void {
    this._router.navigate(['/notes/create']);
  }
}
