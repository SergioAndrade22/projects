import { Component, OnInit } from '@angular/core';
import { Note } from '../../core/models/note.model';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.sass']
})
export class NotesComponent implements OnInit {
  notes: Note[] = []

  constructor(private _notes: NotesService) { }

  ngOnInit(): void {
    this._notes.findAll().subscribe((ret) => {this.notes = ret; console.log(ret);
    });
  }

}
