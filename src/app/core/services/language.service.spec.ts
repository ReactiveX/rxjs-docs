import { TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { languagesList } from '../data/language.data';
import { LanguageService } from './language.service';

describe('LanguageService', () => {
  const languages = languagesList;
  let languageService: LanguageService;
  let translateService: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [LanguageService]
    });

    languageService = TestBed.get(LanguageService);
    translateService = TestBed.get(TranslateService);

    window.localStorage.removeItem('current_lang');
  });

  it('should set fullLangList on initialization', () => {
    expect(languageService.fullLangList).toEqual(languages);
  });

  it('should set the using language and default language on init', () => {
    spyOn(translateService, 'getBrowserLang').and.returnValue('en');
    spyOn(translateService, 'use').and.stub();

    languageService.init(['en', 'ru']);

    expect(translateService.use).toHaveBeenCalledWith('en');
  });

  it('should get language list on getLanguagesList', () => {
    spyOn(translateService, 'getLangs').and.returnValue(['en', 'ru']);

    languageService.getLanguagesList();

    expect(languageService.fullLangList).toEqual(languages);
  });

  it('should get current language on getCurrentLang', () => {
    spyOn(languageService, 'getLanguagesList').and.returnValue(languages);
    translateService.currentLang = 'ru';

    const result = languageService.getCurrentLang();

    expect(result).toEqual({
      code: 'ru',
      name: 'Russian',
      nativeName: 'Русский'
    });
  });

  it('should save language on saveLang', () => {
    spyOn(translateService, 'use').and.stub();

    languageService.saveLang(languages[1]);

    expect(translateService.use).toHaveBeenCalledWith(languages[1].code);
  });
});
