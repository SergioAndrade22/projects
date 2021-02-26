import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-input-dialog',
  templateUrl: './input-dialog.component.html',
  styleUrls: ['./input-dialog.component.sass']
})
export class InputDialogComponent {

  response: string = "";

  constructor(public dialogRef: MatDialogRef<InputDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {text:{title:string, body:string}, btnNo: string, btnYes: string}) {}

  onYesClick(): void {
    this.dialogRef.close(this.response);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
