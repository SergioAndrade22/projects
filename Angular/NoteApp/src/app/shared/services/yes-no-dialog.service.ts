import { Injectable } from '@angular/core';
import { YesNoDialogComponent } from '../components/yes-no-dialog/yes-no-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Language } from '../../../languages/language.service';

@Injectable({
  providedIn: 'root'
})
export class YesNoDialogService {

  constructor(private dialog: MatDialog,
              private _language: Language) { }

  getDialog(text: {title:string, body: string}): MatDialogRef<YesNoDialogComponent> {
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
}
