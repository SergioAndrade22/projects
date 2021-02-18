import { Injectable } from '@angular/core';
import { English } from './English';
import { Spanish } from './Spanish';

@Injectable()
export class Language {
    static english = English;
    static spanish = Spanish;

    selectedLanguage = Language.english;

    changeLanguage(lang: any) {
        this.selectedLanguage = lang;
    }
}