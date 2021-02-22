import { Component, OnInit } from '@angular/core';
import { CookiesService } from './services/cookies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'NoteKeep++';

  constructor(private _cookies: CookiesService) {}

  ngOnInit() {
    this._cookies.loadLanguage();
    this._cookies.loadTheme();
  }
}
