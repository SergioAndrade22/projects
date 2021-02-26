import { Component, OnInit } from '@angular/core';
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
export class NotesComponent implements OnInit{
  notes: Note[] = [];
  params: Observable<Params> = new Observable();

  constructor(private _notes: NotesService,
              private _activatedRoute: ActivatedRoute,
              private _router: Router,
              public _language: Language) {
    
  }

  ngOnInit() {
    this.params = this._activatedRoute.params;
    this.params.subscribe(params => {
      if (params.value === 'active')
        this._notes.findAll().subscribe(notes => this.notes = notes);
      else if (params.value === 'deleted')
        this._notes.findDeleted().subscribe(notes => this.notes = notes);
      else
        this._notes.findByCategory(params.id).subscribe(notes => this.notes = notes);
    });
  }

  newNote = () => this._router.navigate(['/notes/create']);
}
