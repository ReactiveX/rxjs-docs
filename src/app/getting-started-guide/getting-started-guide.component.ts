import { DOCUMENT } from '@angular/platform-browser';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-getting-started-guide',
  templateUrl: './getting-started-guide.component.html',
  styleUrls: ['./getting-started-guide.component.scss']
})
export class GettingStartedGuideComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: any) { }

  ngOnInit() {
  }

  goToUrl() {
    this.document.location.href = 'https://gist.github.com/staltz/868e7e9bc2a7b8c1f754';
  }

}
