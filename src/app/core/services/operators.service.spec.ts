import { TestBed, tick, fakeAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { LanguageService } from './language.service';
import { OperatorsService } from './operators.service';

describe('OperatorsService', () => {
  let operatorsService: OperatorsService;
  let languageService: LanguageService;
  const lang = {
    code: 'en',
    name: 'English',
    nativeName: 'English'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [OperatorsService, LanguageService]
    });

    operatorsService = TestBed.get(OperatorsService);
    languageService = TestBed.get(LanguageService);
  });

  it('should set currentLang on initialization', () => {
    spyOn(languageService, 'getCurrentLang').and.returnValue(lang);

    expect(Object.keys(operatorsService.currentLang)).toEqual(
      Object.keys(lang)
    );
  });

  it(
    'should return Observable on getOperators',
    fakeAsync(() => {
      operatorsService.initOperators('en');
      tick();

      const result = operatorsService.getOperators();

      result.subscribe(data => {
        expect(data).toBeTruthy();
      });
    })
  );
});
