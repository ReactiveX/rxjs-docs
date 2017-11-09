import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { Lang } from './../services/language.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  languagesList: Array<Lang>;
  currentLang: Lang;
  @Output() navToggle = new EventEmitter<boolean>();
  navOpen() {
    this.navToggle.emit(true);
  }

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.languagesList = this.languageService.getLanguagesList();
    this.currentLang = this.languageService.getCurrentLang();
  }

  onLangSwitch(lang: Lang): void {
    this.currentLang = lang;
    this.languageService.saveLang(lang);
  }
}
