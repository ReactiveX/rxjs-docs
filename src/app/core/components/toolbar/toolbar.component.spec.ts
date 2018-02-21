import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { ToolbarComponent } from './toolbar.component';
import { MaterialModule } from '../../../material/material.module';
import { LanguageService } from '../../services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { languagesList } from '../../data/language.data';

describe('ToolbarComponent', () => {
  const languages = languagesList;
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;
  let languageService: LanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        TranslateModule.forRoot()
      ],
      declarations: [ToolbarComponent],
      providers: [LanguageService]
    });

    languageService = TestBed.get(LanguageService);
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
  });

  it('should set languagesList and currentLang on initialization', () => {
    spyOn(languageService, 'getLanguagesList').and.returnValue(languages);
    spyOn(languageService, 'getCurrentLang').and.returnValue(languages[1]);

    fixture.detectChanges();

    expect(component.languagesList).toEqual(languages);
    expect(component.currentLang).toEqual(languages[1]);
  });

  it('should change current language on onLangSwitch', () => {
    spyOn(languageService, 'saveLang').and.stub();

    component.onLangSwitch(languages[1]);

    expect(component.currentLang).toEqual(languages[1]);
    expect(languageService.saveLang).toHaveBeenCalledWith(languages[1]);
  });
});
