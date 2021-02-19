import { Component, ViewEncapsulation } from '@angular/core';
import { Language } from '../../../languages/language.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./layout.component.sass']
})
export class LayoutComponent {

  language: any;
  Language = Language;

  constructor(public _language: Language,
              private _cookies: CookieService) {
    this.language = this._language.selectedLanguage;
  }

  changeLanguage(): void {
    this._language.changeLanguage(this.language);
    this._cookies.delete('language');
    this._cookies.set('language', JSON.stringify(this.language));
  }

  theme(): void {
    const currTheme = document.documentElement.getAttribute('theme');    
    document.documentElement.setAttribute('theme', currTheme === 'dark' ? 'light' : 'dark');
    let theme = document.documentElement.getAttribute('theme') as string;
    this._cookies.delete('theme');
    this._cookies.set('theme', theme);
  }
}
