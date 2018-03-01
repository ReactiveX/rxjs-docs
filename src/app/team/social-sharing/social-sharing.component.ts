import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-social-sharing',
  templateUrl: './social-sharing.component.html',
  styleUrls: ['./social-sharing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialSharingComponent {
  @Input() githubUrl: string;
  @Input() twitterUrl: string;
  @Input() webpageUrl: string;
}
