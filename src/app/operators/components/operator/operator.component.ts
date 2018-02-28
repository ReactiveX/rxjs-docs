import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
  InjectionToken
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { pluck } from 'rxjs/operators';

import { CopierService } from '../../../core/services/copier.service';
import { SeoService } from '../../../core/services/seo.service';
import {
  OperatorDoc,
  OperatorReference,
  OperatorExample,
  OperatorExtra
} from '../../../../operator-docs/operator.model';
import { OperatorParameters } from '../../../../operator-docs';

export const OPERATOR_TOKEN = new InjectionToken<string>('operators');

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.scss']
})
export class OperatorComponent implements OnInit {
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
    @Inject(OPERATOR_TOKEN) public operators: OperatorDoc[]
  ) {}

  ngOnInit() {
    this.operators.forEach((op: OperatorDoc) => {
      this.operatorsMap.set(op.name, op);
    });
    this._activatedRoute.params
      .pipe(pluck('operator'))
      .subscribe((name: string) => {
        if (this.operatorsMap.has(name)) {
          this.operator = this.operatorsMap.get(name);
          this.scrollToTop();
        } else {
          this.notfound();
          return;
        }
        this._seo.setHeaders({
          title: [this.operator.name, this.operator.operatorType],
          description: this.operator.shortDescription
            ? this.operator.shortDescription.description
            : ''
        });
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

  get operatorName(): string {
    return this.operator.name;
  }

  get signature(): string {
    return this.operator.signature || 'Signature Placeholder';
  }

  get marbleUrl(): string {
    return this.operator.marbleUrl;
  }

  get useInteractiveMarbles(): boolean {
    return this.operator.useInteractiveMarbles;
  }

  get shortDescription(): string {
    return (
      this.operator.shortDescription &&
      this.operator.shortDescription.description
    );
  }

  get shortDescriptionExtras(): OperatorExtra[] {
    return (
      this.operator.shortDescription && this.operator.shortDescription.extras
    );
  }

  get walkthrough(): string {
    return this.operator.walkthrough && this.operator.walkthrough.description;
  }

  get walkthroughExtras(): OperatorExtra[] {
    return this.operator.walkthrough && this.operator.walkthrough.extras;
  }

  get parameters(): OperatorParameters[] {
    return this.operator.parameters || [];
  }

  get examples(): OperatorExample[] {
    return this.operator.examples || [];
  }

  get relatedOperators(): string[] {
    return this.operator.relatedOperators || [];
  }

  get sourceUrl(): string {
    return `${this.baseSourceUrl}/${this.operatorName}.ts`;
  }

  get specsUrl(): string {
    return `${this.baseSpecUrl}/${this.operatorName}-spec.js.html`;
  }

  get additionalResources(): OperatorReference[] {
    return this.operator.additionalResources || [];
  }

  private notfound() {
    this._router.navigate(['/operators']);
  }
}
