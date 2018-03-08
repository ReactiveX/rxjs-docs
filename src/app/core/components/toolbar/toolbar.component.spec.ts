import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ToolbarComponent } from './toolbar.component';
import { MaterialModule } from '../../../material/material.module';
import { LanguageService } from '../../services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { languagesList } from '../../data/language.data';
import { OperatorsService } from '../../services/operators.service';

describe('ToolbarComponent', () => {
  const languages = languagesList;
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;
  let languageService: LanguageService;
  let operatorsService: OperatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        TranslateModule.forRoot()
      ],
      declarations: [ToolbarComponent],
      providers: [LanguageService, OperatorsService]
    });

    languageService = TestBed.get(LanguageService);
    operatorsService = TestBed.get(OperatorsService);
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
  });

  it('should have a link to /', () => {
    fixture.detectChanges();
    const navDe: DebugElement = fixture.debugElement;
    const href = navDe.query(By.directive(RouterLinkWithHref)).properties[
      'href'
    ];
    expect(href).toEqual('/');
  });

  it('should set languagesList and currentLang on initialization', () => {
    spyOn(languageService, 'getLanguagesList').and.returnValue(languages);
    spyOn(languageService, 'getCurrentLang').and.returnValue(languages[1]);

    fixture.detectChanges();

    expect(component.languagesList).toEqual(languages);
  });

  it('should change current language on onLangSwitch', () => {
    spyOn(languageService, 'saveLang').and.stub();
    spyOn(operatorsService, 'changeOperatorsLang').and.stub();

    component.onLangSwitch(languages[1]);

    expect(operatorsService.changeOperatorsLang).toHaveBeenCalledWith(
      languages[1]
    );
    expect(languageService.saveLang).toHaveBeenCalledWith(languages[1]);
  });
});
