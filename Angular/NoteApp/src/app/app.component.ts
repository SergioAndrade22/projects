import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Language } from '../languages/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'NoteKeep++';

  constructor(private _cookies: CookieService,
              private _language: Language) {}

  ngOnInit() {
    const theme = this._cookies.get('theme');
    if (theme)
      document.documentElement.setAttribute('theme', theme);
    const lang = this._cookies.get('language');
    if (lang)
      this._language.changeLanguage(JSON.parse(lang));
  }
}
