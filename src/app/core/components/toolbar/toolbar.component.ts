import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Lang } from '../../models/language.model';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() navToggle = new EventEmitter<boolean>();
  currentLang: Lang;
  languagesList: Lang[];

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.languagesList = this.languageService.getLanguagesList();
    this.currentLang = this.languageService.getCurrentLang();
  }

  navOpen() {
    this.navToggle.emit(true);
  }

  onLangSwitch(lang: Lang): void {
    this.currentLang = lang;
    this.languageService.saveLang(lang);
  }
}
