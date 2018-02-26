import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule, MatListModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LanguageService } from './core/services/language.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let languageService: LanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        CoreModule.forRoot(),
        MatSidenavModule,
        MatListModule,
        TranslateModule.forRoot()
      ],
      declarations: [AppComponent],
      providers: [LanguageService]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    languageService = TestBed.get(LanguageService);
  });

  it('should init supported languages on initialization', () => {
    spyOn(languageService, 'init').and.stub();

    fixture.detectChanges();

    expect(languageService.init).toHaveBeenCalledWith(['en', 'ru']);
  });
});
