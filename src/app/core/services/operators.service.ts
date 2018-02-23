import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { OperatorDoc } from '../../../operator-docs';
import { LanguageService } from './language.service';
import { Lang } from '../models/language.model';
import { MenuOperator } from '../../../operator-docs/operator.model';

@Injectable()
export class OperatorsService {
  readonly currentLang: Lang;
  private _operators = new BehaviorSubject([]);
  operators = this._operators.asObservable();

  constructor(private languageService: LanguageService) {
    this.currentLang = this.languageService.getCurrentLang();

    this.initOperators(this.currentLang.code);
  }

  initOperators(code: string): void {
    switch (code) {
      case 'ru':
        import('../../../i18n/ru').then(module => {
          this._operators.next(module.ALL_OPERATORS_RU);
        });
        break;
      default:
        import('../../../operator-docs').then(module => {
          this._operators.next(module.ALL_OPERATORS_EN);
        });
        break;
    }
  }

  changeOperatorsLang(lang: Lang): void {
    this.initOperators(lang.code);
  }

  getOperators(): Observable<OperatorDoc[]> {
    return this.operators;
  }

  getOperatorsForMenu(): Promise<MenuOperator[]> {
    return import('../../../operator-docs').then(module => {
      return module.ALL_OPERATORS_EN.map(operator => {
        const { name, operatorType } = operator;

        return { name, operatorType };
      });
    });
  }

  getDefaultOperator(name: string): Promise<OperatorDoc | undefined> {
    return import('../../../operator-docs').then(module => {
      return module.ALL_OPERATORS_EN.find(operator => operator.name === name);
    });
  }
}
