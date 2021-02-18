import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Language } from '../../../languages/language.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./layout.component.sass']
})
export class LayoutComponent implements OnInit {

  language: any;
  Language = Language;

  constructor(public _language: Language) {
    this.language = this._language.selectedLanguage;
  }

  ngOnInit(): void {
  }

  changeLanguage(): void {
    this._language.changeLanguage(this.language);
  }

  theme(): void {
    const currTheme = document.documentElement.getAttribute('theme');    
    document.documentElement.setAttribute('theme', currTheme === 'dark' ? 'light' : 'dark');
  }
}
