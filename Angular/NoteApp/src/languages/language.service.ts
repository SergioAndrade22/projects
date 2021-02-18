import { Injectable } from '@angular/core';
import { English } from './English';
import { Spanish } from './Spanish';

@Injectable()
export class Language {
    static languageList = [English, Spanish];

    selectedLanguage = English;

    changeLanguage(lang: any) {
        this.selectedLanguage = lang;
    }
}