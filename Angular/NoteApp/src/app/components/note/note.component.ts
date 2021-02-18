import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NotesService } from '../../services/notes.service';
import { Note } from '../../core/models/note.model';
import { Language } from '../../../languages/language.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.sass']
})
export class NoteComponent implements OnChanges {
  @Input() isCreate: boolean = false;
  @Input() isEdit: boolean = false;
  @Input() note: Note | undefined;

  noteForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl('')
  })

  constructor(private _notes: NotesService,
              public _language: Language) {}

  ngOnChanges(): void {
    const input = document.getElementsByTagName('input')![0] as HTMLInputElement;
    input.setAttribute('contenteditable', this.isEdit.toString());
    if (this.note)
      this.noteForm.controls['title'].setValue(this.note.title);

    const textArea = document.getElementsByTagName('textarea')![0] as HTMLTextAreaElement;
    textArea.setAttribute('contenteditable', this.isEdit.toString());
    if (this.note)
      this.noteForm.controls['body'].setValue(this.note.body);
  }

  saveNote(): void {
    this._notes.create(this.noteForm.value).subscribe((ret) => console.log(ret));
  }

  deleteNote(): void {
    this._notes.remove(this.note!.id).subscribe();
    location.reload()
  }

  permanentDelete(): void {
    this._notes.permaRemove(this.note!.id).subscribe();
    location.reload();
  }
}
