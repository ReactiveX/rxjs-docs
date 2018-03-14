import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule, MatListModule } from '@angular/material';

import { TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { OperatorMenuService } from './core/services/operator-menu.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let operatorMenuService: OperatorMenuService;

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
      providers: [OperatorMenuService]
    });

    operatorMenuService = TestBed.get(OperatorMenuService);
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call openOperatorMenu on shouldOpenChildMenu if condition is true', () => {
    spyOn(operatorMenuService, 'openOperatorMenu').and.stub();

    component.shouldOpenChildMenu('MENU.OPERATORS');

    expect(operatorMenuService.openOperatorMenu).toHaveBeenCalled();
  });

  it('should not call openOperatorMenu on shouldOpenChildMenu if condition is false', () => {
    spyOn(operatorMenuService, 'openOperatorMenu').and.stub();

    component.shouldOpenChildMenu('MENU.HOME');

    expect(operatorMenuService.openOperatorMenu).not.toHaveBeenCalled();
  });
});
