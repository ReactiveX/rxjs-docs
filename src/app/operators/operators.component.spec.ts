import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  LayoutModule,
  BreakpointObserver,
  BreakpointState
} from '@angular/cdk/layout';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import {
  OperatorsComponent,
  OPERATORS_TOKEN,
  groupOperatorsByType
} from './operators.component';
import { OperatorDoc } from '../../operator-docs';
import { OperatorMenuService } from '../core/services/operator-menu.service';

const mockActivatedRoute = {
  snapshot: {},
  fragment: Observable.create(observer => {
    observer.next('merge');
    observer.complete();
  })
};

const mockOperators: OperatorDoc[] = [
  { operatorType: 'transformation' },
  { operatorType: 'utility' },
  { operatorType: 'utility' }
];

const mockBreakPointObserver = {
  isMatched: () => {}
};

describe('Operators', () => {
  describe('OperatorsComponent', () => {
    let fixture: ComponentFixture<OperatorsComponent>;
    let component: OperatorsComponent;
    let el;
    let breakpointService: BreakpointObserver;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, LayoutModule],
        declarations: [OperatorsComponent],
        providers: [
          OperatorMenuService,
          { provide: OPERATORS_TOKEN, useValue: mockOperators },
          { provide: ActivatedRoute, useValue: mockActivatedRoute }
        ],
        schemas: [NO_ERRORS_SCHEMA]
      });
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(OperatorsComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;
      breakpointService = el.injector.get(BreakpointObserver);
    });

    it('should group operators by operator type', () => {
      component.ngOnInit();

      expect(component.groupedOperators['transformation'].length).toBe(1);
      expect(component.groupedOperators['utility'].length).toBe(2);
    });

    it('should have a sidenav mode of over when on a small screen', done => {
      const substituteState = fakeBreakpointState(true);
      spyOn(breakpointService, 'observe').and.returnValue(of(substituteState));

      component.ngOnInit();

      component.sidenavMode$.subscribe(sidenavMode => {
        expect(sidenavMode).toBe('over');
        done();
      });
    });

    it('should have a sidenav mode of side when on a large screen', done => {
      const substituteState = fakeBreakpointState(false);
      spyOn(breakpointService, 'observe').and.returnValue(of(substituteState));

      component.ngOnInit();

      component.sidenavMode$.subscribe(sidenavMode => {
        expect(sidenavMode).toBe('side');
        done();
      });
    });

    it('should have a top menu gap of 54px when on a small screen', done => {
      const substituteState = fakeBreakpointState(true);
      spyOn(breakpointService, 'observe').and.returnValue(of(substituteState));

      component.ngOnInit();

      component.operatorMenuGap$.subscribe(operatorMenuGap => {
        expect(operatorMenuGap).toBe(54);
        done();
      });
    });

    it('should have a top menu gap of 64px when on a large screen', done => {
      const substituteState = fakeBreakpointState(false);
      spyOn(breakpointService, 'observe').and.returnValue(of(substituteState));

      component.ngOnInit();

      component.operatorMenuGap$.subscribe(operatorMenuGap => {
        expect(operatorMenuGap).toBe(64);
        done();
      });
    });
  });
});

function fakeBreakpointState(matches: boolean): BreakpointState {
  return { matches };
}
