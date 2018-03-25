import {
  async,
  ComponentFixture,
  TestBed,
  inject
} from '@angular/core/testing';
import {
  TranslateModule,
  TranslateLoader,
  TranslateService
} from '@ngx-translate/core';
import { InstallationComponent } from './installation.component';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

const translations: any = {
  INSTALLATION: {
    TITLE: 'Installation instructions'
  }
};

class FakeLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return of(translations);
  }
}

describe('InstallationComponent', () => {
  let component: InstallationComponent;
  let fixture: ComponentFixture<InstallationComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [InstallationComponent],
        providers: [TranslateService],
        imports: [
          TranslateModule.forRoot({
            loader: { provide: TranslateLoader, useClass: FakeLoader }
          })
        ]
      }).compileComponents();
    })
  );

  beforeEach(
    inject([TranslateService], (translateService: TranslateService) => {
      fixture = TestBed.createComponent(InstallationComponent);
      translateService.setDefaultLang('en');
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should show the installation instructions', () => {
    const header = fixture.nativeElement.querySelector('h2');
    expect(header.textContent).toMatch('Installation instructions');
  });
});
