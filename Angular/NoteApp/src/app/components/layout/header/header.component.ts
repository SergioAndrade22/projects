import { Component, OnInit } from '@angular/core';
import { Language } from '../../../../languages/language.service';
import { CookiesService } from '../../../services/cookies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  language: any;
  Language = Language

  constructor(public _language: Language,
              private _cookies: CookiesService) { }

  ngOnInit() {
    this.language = this._language.selectedLanguage;
  }

  compareObjects(o1: any, o2: any): boolean {
    return o1.name == o2.name;
  }

  changeLanguage(): void {
    this._cookies.setLanguage(this.language)
  }
}
