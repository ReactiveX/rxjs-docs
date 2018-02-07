import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  ViewEncapsulation
} from '@angular/core';
import { OperatorDoc, ALL_OPERATORS } from '../../../../operator-docs';
import { CopierService } from '../../../core/services/copier.service';
import { MatSnackBar } from '@angular/material';
import { OperatorComponent } from '../operator/operator.component';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators/takeUntil';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-operator-general',
  templateUrl: './operator-general.component.html',
  styleUrls: ['./operator-general.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OperatorGeneralComponent implements OnInit, OnDestroy {
  public operator: OperatorDoc;
  private _onDestroy = new Subject();
  private readonly baseSourceUrl = 'https://github.com/ReactiveX/rxjs/blob/master/src/operators/';
  private readonly baseSpecUrl = 'http://reactivex.io/rxjs/test-file/spec-js/operators';

  constructor(
    private _operatorComponent: OperatorComponent,
    private _activateRoute: ActivatedRoute,
    private _copierService: CopierService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this._activateRoute.params.pipe(takeUntil(this._onDestroy)).subscribe(_ => {
      this.operator = this._operatorComponent.operator;
    });
  }

  copyToClipboard(code: string) {
    this._copierService.copyText(code);
    this._snackBar.open(
      'The example has been copied to your clipboard!',
      null,
      { duration: 3000 }
    );
  }

  get sourceUrl() {
    return `${this.baseSourceUrl}/${this.operator.name}.ts`;
  }

  get specsUrl() {
    return `${this.baseSpecUrl}/${this.operator.name}-spec.js.html`;
  }

  ngOnDestroy() {
    this._onDestroy.next();
  }
}
