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
import { OperatorDoc, VendorExample } from '../../../../operator-docs';

export const OPERATOR_TOKEN = new InjectionToken<string>('operators');

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.scss']
})
export class OperatorComponent implements OnInit {
  public operator: OperatorDoc;
  public operatorsMap = new Map<string, OperatorDoc>();
  public vendorExamples: string[];
  public isVendor: boolean;

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
          this.vendorExamples = this.compileVendorTabs(this.operator);
          this.isVendor = this.isVendorRoute(this._router.url);
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

  compileVendorTabs(operator: OperatorDoc) {
    return operator.vendorExamples
      ? operator.vendorExamples.reduce((acc: string[], curr: VendorExample) => {
          if (!acc.includes(curr.vendorName)) {
            return [...acc, curr.vendorName];
          }
          return acc;
        }, [])
      : [];
  }

  isVendorRoute(url: string) {
    // make this dynamic in future
    return (
      this._router.url.includes('Angular') || this._router.url.includes('React')
    );
  }

  get signature() {
    return this.operator.signature || 'Signature Placeholder';
  }

  private notfound() {
    this._router.navigate(['/operators']);
    return {};
  }
}
