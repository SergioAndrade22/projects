import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.sass']
})
export class NoteComponent implements OnInit {
  @Input() isEdit: boolean = false;


  constructor() {}

  ngOnInit(): void {
    document.getElementById('input__title')?.setAttribute('contenteditable', this.isEdit.toString());
    document.getElementById('input__body')?.setAttribute('contenteditable', this.isEdit.toString());
  }
}
