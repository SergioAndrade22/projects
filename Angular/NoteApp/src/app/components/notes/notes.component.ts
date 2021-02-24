import { Component } from '@angular/core';
import { Note } from '../../core/models/note.model';
import { NotesService } from '../../services/notes.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router, Params, NavigationStart } from '@angular/router';
import { Language } from '../../../languages/language.service';
import { filter } from 'rxjs/operators';

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
              private _router: Router,
              public _language: Language) {
    this.params = this._activatedRoute.params;
    this.params.subscribe(params => {
      if (params.state === 'active')
        this.notes = this._notes.findAll();
      else if (params.state === 'deleted')
        this.notes = this._notes.findDeleted();
      else {
        this._router.events.pipe(filter(e => e instanceof NavigationStart)).subscribe(() => {
          const state = this._router.getCurrentNavigation()!.extras!.state;
          if(state)
            this.notes = this._notes.findByCategory(state.id);
        });
      }
    });
  }

  newNote = () => this._router.navigate(['/notes/create']);
}
