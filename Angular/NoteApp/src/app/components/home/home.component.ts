import { Component } from '@angular/core';
import { Language } from '../../../languages/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  constructor(public _language: Language) {}
}
