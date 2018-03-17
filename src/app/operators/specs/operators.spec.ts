import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LayoutModule, BreakpointObserver } from '@angular/cdk/layout';

import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { OperatorsComponent } from '../operators.component';
import { ALL_OPERATORS_EN } from '../../../operator-docs';
import { OperatorMenuService } from '../../core/services/operator-menu.service';
import { OperatorsService } from '../../core/services/operators.service';
import { LanguageService } from '../../core/services/language.service';

const mockActivatedRoute = {
  snapshot: {},
  fragment: Observable.create(observer => {
    observer.next('merge');
    observer.complete();
  })
};

describe('Operators', () => {
  describe('OperatorsComponent', () => {
    let fixture: ComponentFixture<OperatorsComponent>;
    let component: OperatorsComponent;
    let el;
    let breakpointService: BreakpointObserver;
    let operatorsService: OperatorsService;
    const allOperators = ALL_OPERATORS_EN;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, LayoutModule, TranslateModule.forRoot()],
        declarations: [OperatorsComponent],
        providers: [
          OperatorsService,
          LanguageService,
          OperatorMenuService,
          { provide: ActivatedRoute, useValue: mockActivatedRoute }
        ],
        schemas: [NO_ERRORS_SCHEMA]
      });

      fixture = TestBed.createComponent(OperatorsComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;
      breakpointService = TestBed.get(BreakpointObserver);
      operatorsService = TestBed.get(OperatorsService);
    });

    it(
      'should group operators by operator type',
      fakeAsync(() => {
        spyOn(operatorsService, 'getOperatorsForMenu').and.returnValue(
          Promise.resolve([
            { name: 'combineLatest', operatorType: 'combination' }
          ])
        );
        component.ngOnInit();

        tick();

        expect(component.groupedOperators['combination'].length).toBeTruthy();
      })
    );

    it('should have a sidenav mode of over when on a small screen', () => {
      spyOn(breakpointService, 'isMatched').and.returnValue(true);

      expect(component.sidenavMode).toBe('over');
    });

    it('should have a sidenav mode of side when on a large screen', () => {
      spyOn(breakpointService, 'isMatched').and.returnValue(false);

      expect(component.sidenavMode).toBe('side');
    });

    it('should have a top menu gap of 54px when on a small screen', () => {
      // small screen
      spyOn(breakpointService, 'isMatched').and.returnValue(true);

      expect(component.operatorMenuGap).toBe(54);
    });

    it('should have a top menu gap of 64px when on a large screen', () => {
      spyOn(breakpointService, 'isMatched').and.returnValue(false);

      expect(component.operatorMenuGap).toBe(64);
    });
  });
});
