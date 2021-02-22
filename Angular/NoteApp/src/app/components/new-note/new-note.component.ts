import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../../core/models/note.model';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.sass']
})
export class NewNoteComponent implements OnInit {

  note: Note | undefined;

  constructor(private _notes: NotesService,
              private _route: ActivatedRoute) { 
    this._route.params.subscribe(params => {
      const id = params.id;
      if (id)
        this._notes.find(params.id).subscribe(note => this.note = note);
    });
  }

  ngOnInit(): void {
  }

}
