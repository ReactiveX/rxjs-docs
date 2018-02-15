import {
  Component,
  OnInit,
  OnDestroy,
  AfterContentInit,
  ViewChild
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material';

import { Subject } from 'rxjs/Subject';
import { filter, takeUntil } from 'rxjs/operators';

import { OperatorDoc } from '../../operator-docs';
import { OperatorMenuService } from '../core/services/operator-menu.service';
import { OperatorsService } from '../core/services/operators.service';

const OPERATOR_MENU_GAP_LARGE = 64;
const OPERATOR_MENU_GAP_SMALL = 54;

interface OperatorDocMap {
  [key: string]: OperatorDoc[];
}

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss'],
  animations: [
    trigger('growInOut', [
      state('in', style({ opacity: 1 })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'scale3d(.3, .3, .3)'
        }),
        animate(`150ms ease-in`)
      ]),
      transition('* => void', [
        animate(
          `150ms ease-out`,
          style({
            opacity: 0,
            transform: 'scale3d(.3, .3, .3)'
          })
        )
      ])
    ])
  ]
})
export class OperatorsComponent implements OnInit, AfterContentInit, OnDestroy {
  @ViewChild(MatSidenav) _sidenav: MatSidenav;
  public groupedOperators: OperatorDocMap;
  public categories: string[];
  public operators: OperatorDoc[];
  private _onDestroy = new Subject();

  constructor(
    private _breakpointObserver: BreakpointObserver,
    private _operatorMenuService: OperatorMenuService,
    private _operatorsService: OperatorsService
  ) {}

  ngOnInit() {
    this._operatorsService.getOperators().subscribe(data => {
      this.operators = data;
      this.groupedOperators = groupOperatorsByType(this.operators);
      this.categories = Object.keys(this.groupedOperators);
    });
  }

  ngAfterContentInit() {
    this._operatorMenuService
      .menuStatus()
      .pipe(filter(s => !!s), takeUntil(this._onDestroy))
      .subscribe(_ => this._sidenav.open());
  }

  get extraSmallScreen() {
    return this._breakpointObserver.isMatched('(max-width: 601px)');
  }

  get smallScreen() {
    return this._breakpointObserver.isMatched('(max-width: 901px)');
  }

  get operatorMenuGap() {
    return this.extraSmallScreen
      ? OPERATOR_MENU_GAP_SMALL
      : OPERATOR_MENU_GAP_LARGE;
  }

  get sidenavMode() {
    return this.smallScreen ? 'over' : 'side';
  }

  ngOnDestroy() {
    this._onDestroy.next();
  }
}

export function groupOperatorsByType(operators: OperatorDoc[]): OperatorDocMap {
  return operators.reduce((acc: OperatorDocMap, curr: OperatorDoc) => {
    if (acc[curr.operatorType]) {
      return { ...acc, [curr.operatorType]: [...acc[curr.operatorType], curr] };
    }
    return { ...acc, [curr.operatorType]: [curr] };
  }, {});
}
