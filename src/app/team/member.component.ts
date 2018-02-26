import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { IMember } from './team.models';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MemberComponent {
  @Input() member: IMember;
}
