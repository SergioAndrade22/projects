import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Language } from '../../../languages/language.service';
import { CookiesService } from 'src/app/services/cookies.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./layout.component.sass']
})
export class LayoutComponent implements OnInit {

  language: any = this._language.selectedLanguage;
  Language = Language;

  constructor(public _language: Language,
              private _cookies: CookiesService) {}

  compareObjects(o1: any, o2: any): boolean {
    return o1.name === o2.name;
  }

  ngOnInit() {
    this.language = this._language.selectedLanguage;
  }

  changeLanguage(): void {
    this._cookies.setLanguage(this.language)
  }

  theme(): void {
    const currTheme = document.documentElement.getAttribute('theme');    
    document.documentElement.setAttribute('theme', currTheme === 'dark' ? 'light' : 'dark');
    let theme = document.documentElement.getAttribute('theme') as string;
    this._cookies.setTheme(theme);
  }
}
