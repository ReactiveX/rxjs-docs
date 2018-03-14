import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs/observable/of';
import {
  LayoutModule,
  BreakpointObserver,
  BreakpointState
} from '@angular/cdk/layout';

import { OperatorsComponent } from './operators.component';
import { ALL_OPERATORS_EN } from '../../operator-docs';
import { OperatorMenuService } from '../core/services/operator-menu.service';
import { OperatorsService } from '../core/services/operators.service';
import { LanguageService } from '../core/services/language.service';

const mockActivatedRoute = jasmine.createSpyObj('ActivatedRoute', {
  snapshot: {},
  fragment: of('merge')
});

describe('Operators', () => {
  describe('OperatorsComponent', () => {
    let fixture: ComponentFixture<OperatorsComponent>;
    let component: OperatorsComponent;
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

        expect(component.groupedOperators['combination'].length).toBe(1);
      })
    );

    it(
      'should have a sidenav mode of over when on a small screen',
      fakeAsync(() => {
        const substituteState = fakeBreakpointState(true);
        spyOn(breakpointService, 'observe').and.returnValue(
          of(substituteState)
        );
        const sidenavModeSpy = jasmine.createSpy('sidenavMode');

        component.ngOnInit();
        component.sidenavMode$.subscribe(sidenavModeSpy);

        expect(sidenavModeSpy).toHaveBeenCalledWith('over');
      })
    );

    it(
      'should have a sidenav mode of side when on a large screen',
      fakeAsync(() => {
        const substituteState = fakeBreakpointState(false);
        spyOn(breakpointService, 'observe').and.returnValue(
          of(substituteState)
        );
        const sidenavModeSpy = jasmine.createSpy('sidenavMode');

        component.ngOnInit();
        component.sidenavMode$.subscribe(sidenavModeSpy);

        expect(sidenavModeSpy).toHaveBeenCalledWith('side');
      })
    );

    it(
      'should have a top menu gap of 54px when on a small screen',
      fakeAsync(() => {
        const substituteState = fakeBreakpointState(true);
        spyOn(breakpointService, 'observe').and.returnValue(
          of(substituteState)
        );
        const operatorMenuGapSpy = jasmine.createSpy('operatorMenuGap');

        component.ngOnInit();
        component.operatorMenuGap$.subscribe(operatorMenuGapSpy);

        expect(operatorMenuGapSpy).toHaveBeenCalledWith(54);
      })
    );

    it(
      'should have a top menu gap of 64px when on a large screen',
      fakeAsync(() => {
        const substituteState = fakeBreakpointState(false);
        spyOn(breakpointService, 'observe').and.returnValue(
          of(substituteState)
        );
        const operatorMenuGapSpy = jasmine.createSpy('operatorMenuGap');

        component.ngOnInit();
        component.operatorMenuGap$.subscribe(operatorMenuGapSpy);

        expect(operatorMenuGapSpy).toHaveBeenCalledWith(64);
      })
    );
  });
});

function fakeBreakpointState(matches: boolean): BreakpointState {
  return { matches };
}
