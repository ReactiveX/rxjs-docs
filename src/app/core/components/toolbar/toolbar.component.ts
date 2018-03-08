import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Lang } from '../../models/language.model';
import { LanguageService } from '../../services/language.service';
import { OperatorsService } from '../../services/operators.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() navToggle = new EventEmitter<boolean>();
  languagesList: Lang[];

  constructor(
    private languageService: LanguageService,
    private operatorsService: OperatorsService
  ) {}

  ngOnInit() {
    this.languagesList = this.languageService.getLanguagesList();
  }

  navOpen() {
    this.navToggle.emit(true);
  }

  onLangSwitch(lang: Lang): void {
    this.languageService.saveLang(lang);
    this.operatorsService.changeOperatorsLang(lang);
  }
}
