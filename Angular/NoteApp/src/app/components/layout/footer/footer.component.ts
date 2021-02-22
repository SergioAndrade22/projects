import { Component, OnInit } from '@angular/core';
import { CookiesService } from '../../../services/cookies.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  constructor(private _cookies: CookiesService) { }

  ngOnInit(): void {
  }

  theme(): void {
    const currTheme = document.documentElement.getAttribute('theme');    
    document.documentElement.setAttribute('theme', currTheme === 'dark' ? 'light' : 'dark');
    let theme = document.documentElement.getAttribute('theme') as string;
    this._cookies.setTheme(theme);
  }
}
