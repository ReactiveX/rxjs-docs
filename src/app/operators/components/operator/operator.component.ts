import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { pluck } from 'rxjs/operators';

import { CopierService } from '../../../core/services/copier.service';
import { SeoService } from '../../../core/services/seo.service';
import { OperatorDoc } from '../../../../operator-docs';
import { OperatorsService } from '../../../core/services/operators.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.scss']
})
export class OperatorComponent implements OnInit, OnDestroy {
  operatorsSubscription: Subscription;
  noTranslation = false;
  public operators: OperatorDoc[];
  public operator: OperatorDoc;
  public operatorsMap = new Map<string, OperatorDoc>();

  private readonly baseSourceUrl = 'https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/';
  private readonly baseSpecUrl = 'http://reactivex.io/rxjs/test-file/spec-js/operators';

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _seo: SeoService,
    private _copierService: CopierService,
    private _snackBar: MatSnackBar,
    private _operatorsService: OperatorsService
  ) {}

  ngOnInit() {
    this.operatorsSubscription = this._operatorsService
      .getOperators()
      .subscribe(data => {
        this.operatorsMap.clear();
        this.operators = data;
        this.operators.forEach((op: OperatorDoc) => {
          this.operatorsMap.set(op.name, op);
        });

        this.setOperator();
      });
  }

  setOperator(): void {
    this._activatedRoute.params
      .pipe(pluck('operator'))
      .subscribe((name: string) => {
        this.noTranslation = false;

        if (this.operatorsMap.has(name)) {
          this.operator = this.operatorsMap.get(name);
          this.scrollToTop();
          this.setHeaders();
        } else {
          this.setNotFoundOperator(name);
        }
      });
  }

  setNotFoundOperator(name: string): void {
    this._operatorsService.getDefaultOperator(name).then(operator => {
      if (operator) {
        this.noTranslation = true;
        this.operator = operator;
        this.scrollToTop();
        this.setHeaders();
        return;
      }
      this.notFound();
    });
  }

  setHeaders(): void {
    this._seo.setHeaders({
      title: [this.operator.name, this.operator.operatorType],
      description: this.operator.shortDescription
        ? this.operator.shortDescription.description
        : ''
    });
  }

  scrollToTop() {
    const content = document.querySelector('.mat-drawer-content');

    if (content) {
      content.scrollTop = 0;
    }
  }

  copyToClipboard(code: string) {
    this._copierService.copyText(code);
    this._snackBar.open(
      'The example has been copied to your clipboard!',
      null,
      { duration: 3000 }
    );
  }

  ngOnDestroy() {
    this.operatorsSubscription.unsubscribe();
  }

  get operatorName() {
    return this.operator.name;
  }

  get signature() {
    return this.operator.signature || 'Signature Placeholder';
  }

  get marbleUrl() {
    return this.operator.marbleUrl;
  }

  get useInteractiveMarbles() {
    return this.operator.useInteractiveMarbles;
  }

  get shortDescription() {
    return (
      this.operator.shortDescription &&
      this.operator.shortDescription.description
    );
  }

  get shortDescriptionExtras() {
    return (
      this.operator.shortDescription && this.operator.shortDescription.extras
    );
  }

  get walkthrough() {
    return this.operator.walkthrough && this.operator.walkthrough.description;
  }

  get walkthroughExtras() {
    return this.operator.walkthrough && this.operator.walkthrough.extras;
  }

  get parameters() {
    return this.operator.parameters || [];
  }

  get examples() {
    return this.operator.examples || [];
  }

  get relatedOperators() {
    return this.operator.relatedOperators || [];
  }

  get sourceUrl() {
    return `${this.baseSourceUrl}/${this.operatorName}.ts`;
  }

  get specsUrl() {
    return `${this.baseSpecUrl}/${this.operatorName}-spec.js.html`;
  }

  get additionalResources() {
    return this.operator.additionalResources || [];
  }

  private notFound(): void {
    this._router.navigate(['/operators']);
  }
}
