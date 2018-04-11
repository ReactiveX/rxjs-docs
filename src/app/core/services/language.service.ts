import { Injectable } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { Lang } from '../models/language.model';
import { languagesList } from '../data/language.data';

@Injectable()
export class LanguageService {
  fullLangList: Lang[] = [];

  constructor(private translate: TranslateService) {
    this.fullLangList = languagesList;
    this.init(['en', 'ru', 'zh']);
  }

  init(languages: string[]): void {
    const supportedLangs = languages;
    const browserLang = this.translate.getBrowserLang();
    const savedLang = window.localStorage.getItem('current_lang');

    this.translate.addLangs(supportedLangs);
    this.translate.setDefaultLang('en');

    if (!savedLang) {
      this.translate.use(
        browserLang.match(/en|fr|jp|ch/)
          ? browserLang
          : this.translate.getDefaultLang()
      );
    } else {
      this.translate.use(savedLang);
    }
  }

  getLanguagesList(): Lang[] {
    const supportedLangs = this.translate.getLangs();

    return this.fullLangList.filter((lang: Lang) =>
      supportedLangs.includes(lang.code)
    );
  }

  getCurrentLang(): Lang {
    return this.getLanguagesList().find(
      lang => lang.code === this.translate.currentLang
    );
  }

  saveLang(lang: Lang): void {
    this.translate.use(lang.code);
    window.localStorage.setItem('current_lang', lang.code);
  }
}
