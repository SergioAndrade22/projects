import { Component, OnInit } from '@angular/core';
import { Spanish } from '../../../languages/Spanish';
import { English } from '../../../languages/English';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  Language: any;

  constructor() {
    this.Language = Spanish;
  }

  ngOnInit(): void {
  }

  english(){
    this.Language = English;
  }
}
