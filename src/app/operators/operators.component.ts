import {
  Component,
  Inject,
  InjectionToken,
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
import {
  filter,
  takeUntil,
  flatMap,
  toArray,
  debounceTime
} from 'rxjs/operators';
import { OperatorDoc } from '../../operator-docs/operator.model';
import { OperatorMenuService } from '../core/services/operator-menu.service';
import { FormControl } from '@angular/forms';
import { from } from 'rxjs/observable/from';

const OPERATOR_MENU_GAP_LARGE = 64;
const OPERATOR_MENU_GAP_SMALL = 54;

export const OPERATORS_TOKEN = new InjectionToken<string>('operators');

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
  private _onDestroy = new Subject();

  public searchInput: FormControl;

  constructor(
    private _breakpointObserver: BreakpointObserver,
    private _operatorMenuService: OperatorMenuService,
    @Inject(OPERATORS_TOKEN) public operators: OperatorDoc[]
  ) {}

  ngOnInit() {
    this.initOperatorList(this.operators);
    this.searchInput = new FormControl();
    const search$ = this.searchInput.valueChanges;
    const entries$ = from(this.operators);
    const searchResult$ = search$.pipe(
      debounceTime(300),
      flatMap(options =>
        entries$.pipe(
          filter(
            (value: OperatorDoc) =>
              value.name.indexOf(options) !== -1 ||
              value.operatorType.indexOf(options) !== -1
          ),
          toArray()
        )
      )
    );
    searchResult$.subscribe((search: OperatorDoc[]) => {
      this.initOperatorList(search);
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

  private initOperatorList(operators: OperatorDoc[]) {
    this.groupedOperators = groupOperatorsByType(operators);
    this.categories = Object.keys(this.groupedOperators);
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
