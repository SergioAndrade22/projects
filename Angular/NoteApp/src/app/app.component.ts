import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'NoteKeep++';

  constructor(private _cookies: CookieService) {}

  ngOnInit() {
    const theme = this._cookies.get('theme');
    if (theme)
      document.documentElement.setAttribute('theme', theme);
  }
}
