import { Component, OnInit } from '@angular/core';
import { LanguageService } from './services/language.service';

interface Menu {
  title: string;
  link: string;
  options: { exact: boolean };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  menus: Menu[] = [
    {
      title: 'MENU.HOME',
      link: '/',
      options: { exact: true }
    },
    {
      title: 'MENU.OPERATORS',
      link: '/operators',
      options: { exact: false }
    },
    {
      title: 'MENU.COMPANIES',
      link: '/companies',
      options: { exact: false }
    },
    {
      title: 'MENU.TEAM',
      link: '/team',
      options: { exact: false }
    }
  ];

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.init(['en', 'ru']);
  }
}
