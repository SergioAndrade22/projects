import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.sass']
})
export class NoteComponent implements OnInit {
  @Input() isEdit: boolean = false;
  @Input() noteTitle: string = '';
  @Input() noteBody: string = '';

  noteForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl('')
  })

  constructor(private _notes: NotesService) {}

  ngOnInit(): void {
    document.getElementById('input__title')!.setAttribute('contenteditable', this.isEdit.toString());
    document.getElementById('input__body')!.setAttribute('contenteditable', this.isEdit.toString());
    if (this.noteTitle !== '') {
      document.getElementById('input__title')!.innerText = this.noteTitle 
    }
    if (this.noteBody !== '') {
      document.getElementById('input__body')!.innerText = this.noteBody
    }
  }

  saveNote(): void {
    this._notes.create(this.noteForm.value).subscribe((ret) => console.log(ret));
  }
}
