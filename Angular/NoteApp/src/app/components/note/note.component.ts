import { Component, Input, OnChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NotesService } from '../../services/notes.service';
import { Note, NoteDto } from '../../core/models/note.model';
import { Language } from '../../../languages/language.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { YesNoDialogComponent } from '../../shared/components/yes-no-dialog/yes-no-dialog.component';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import { YesNoDialogService } from '../../shared/services/yes-no-dialog.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.sass']
})
export class NoteComponent implements OnChanges {
  @Input() isCreate: boolean = false;
  @Input() isView: boolean = false;
  @Input() note: Note | undefined;
  @Input() isEditale: boolean = true;

  noteColorPalette = {
    'background-color': 'var(--color-primary)',
    'color': 'var(--font-color-darker)'
  }

  noteForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl('')
  })

  constructor(private _notes: NotesService,
              private _router: Router,
              private _dialog: YesNoDialogService,
              public _language: Language,
              public dialog: MatDialog,) {}

  ngOnChanges(): void {
    const input = document.getElementsByTagName('input')![0] as HTMLInputElement;
    input.setAttribute('contenteditable', this.isView.toString());
    
    const textArea = document.getElementsByClassName('note__body')![0] as HTMLTextAreaElement;
    textArea.setAttribute('contenteditable', this.isView.toString());

    if (this.note){
      this.noteForm.controls['title'].setValue(this.note.title);  
      this.noteForm.controls['body'].setValue(this.note.body);
      if (this.note.bgcolor){
        this.noteColorPalette["background-color"] = this.note.bgcolor;
        (document.getElementsByTagName('input')![2] as HTMLInputElement).value = this.note.bgcolor;
      }
      if (this.note.txtcolor !== undefined){
        this.noteColorPalette["color"] = this.note.txtcolor;
        (document.getElementsByTagName('input')![3] as HTMLInputElement).value = this.note.txtcolor;
      }
    }
  }

  
  saveNote(): void {    
    const dialogRef = this._dialog.getDialog(this._language.selectedLanguage.dialog.save);
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        const noteDto = new NoteDto();
        noteDto.title = this.noteForm.value.title;
        noteDto.body = this.noteForm.value.body;
        noteDto.bgcolor = this.noteColorPalette["background-color"] !== 'var(--color-primary)' ? this.noteColorPalette["background-color"] : undefined;
        noteDto.txtcolor = this.noteColorPalette["color"] !== 'var(--font-color-darker)' ? this.noteColorPalette["color"] : undefined;
        if (this.note === undefined){
          this._notes.create(noteDto).subscribe();
          location.reload();
        }
        else{
          this._notes.update(this.note.id, noteDto).subscribe();
          this._router.navigate(['notes/view/active']);
        }
      }
    });
  }
  
  deleteNote(): void {
    const dialogRef = this._dialog.getDialog(this._language.selectedLanguage.dialog.delete);
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this._notes.delete(this.note!.id).subscribe();
        location.reload();
      }
    });
  }
  
  permanentDelete(): void {
    const dialogRef = this._dialog.getDialog(this._language.selectedLanguage.dialog.permaDelete);
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this._notes.permaDelete(this.note!.id).subscribe();
        location.reload();
      }
    });
  }
  
  editNote = () => this._router.navigate(['/notes/edit', this.note?.id]);
  
  changeBackgroundColor = (color: string) => this.noteColorPalette['background-color'] = color;
  
  changeTextColor = (color: string) => this.noteColorPalette['color'] = color;
}
