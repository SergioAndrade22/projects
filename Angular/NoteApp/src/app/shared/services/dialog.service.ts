import { Injectable } from '@angular/core';
import { YesNoDialogComponent } from '../components/yes-no-dialog/yes-no-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Language } from '../../../languages/language.service';
import { InputDialogComponent } from '../components/input-dialog/input-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog,
              private _language: Language) { }

  getConfirmationDialog(text: {title:string, body: string}): MatDialogRef<YesNoDialogComponent> {
    return this.dialog.open(YesNoDialogComponent, {
      width: '30rem',
      height: '22rem',
      data: {
        text,
        btnNo: this._language.selectedLanguage.dialog.btnNo,
        btnYes: this._language.selectedLanguage.dialog.btnYes
      }
    });
  }

  getInputDialog(text: {title:string, body:string}): MatDialogRef<InputDialogComponent> {
    return this.dialog.open(InputDialogComponent, {
      width: '30rem',
      height: '20rem',
      data: {
        text,
        btnNo: this._language.selectedLanguage.dialog.btnNo,
        btnYes: this._language.selectedLanguage.dialog.btnYes
      }
    });
  }
}
