import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OperatorComponent } from '../operator/operator.component';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators/takeUntil';
import { VendorExample } from '../../../../operator-docs';

@Component({
  selector: 'app-operator-vendor-examples',
  templateUrl: './operator-vendor-examples.component.html',
  styleUrls: ['./operator-vendor-examples.component.scss']
})
export class OperatorVendorExamplesComponent implements OnInit, OnDestroy {
  public examples: VendorExample[] = [];
  private _onDestroy = new Subject();

  constructor(
    private _operatorComponent: OperatorComponent,
    private _activedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this._activedRoute.params.pipe(takeUntil(this._onDestroy)).subscribe(p => {
      this.examples = this._operatorComponent.operator.vendorExamples.filter(
        e => {
          return e.vendorName === p['vendor'];
        }
      );
    });
  }

  ngOnDestroy() {
    this._onDestroy.next();
  }
}
