import { Component, Input, OnChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NotesService } from '../../services/notes.service';
import { Note } from '../../core/models/note.model';
import { Language } from '../../../languages/language.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.sass']
})
export class NoteComponent implements OnChanges {
  @Input() isCreate: boolean = false;
  @Input() isEdit: boolean = false;
  @Input() note: Note | undefined;
  @Input() isEditale: boolean = true;

  noteColorPalette = {
    'background-color': 'var(--color-primary)',
    'color': 'var(--font-color-light)'
  }

  changeBackgroundColor = (color: string) => this.noteColorPalette['background-color'] = color;
  
  changeTextColor = (color: string) => this.noteColorPalette['color'] = color;

  noteForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl('')
  })

  constructor(private _notes: NotesService,
              private _router: Router,
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
    if (this.note === undefined)
      this._notes.create(this.noteForm.value).subscribe();
    else{
      this._notes.update(this.note.id, this.noteForm.value).subscribe();
      this._router.navigate(['notes/view/active']);
    }
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
