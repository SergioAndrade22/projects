import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Language } from '../../languages/language.service';

@Injectable({
    providedIn: 'root'
})
export class CookiesService {
    constructor(private _cookies: CookieService,
                private _language: Language){}

    setLanguage(language: any): void {
        this._language.changeLanguage(language);
        this._cookies.set('language', JSON.stringify(language));
    }

    setTheme(theme: string): void {
        this._cookies.set('theme', theme);
    }

    loadLanguage(): void {
        const lang = this._cookies.get('language');
        if (lang)
            this._language.changeLanguage(JSON.parse(lang));
    }

    loadTheme(): void {
        const theme = this._cookies.get('theme');
        if (theme)
            document.documentElement.setAttribute('theme', theme);
    }
}