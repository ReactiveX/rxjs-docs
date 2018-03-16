import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { OperatorExample } from '../../../../operator-docs';

@Component({
  selector: 'app-operator-walkthrough',
  templateUrl: './walkthrough.component.html',
  styleUrls: ['./walkthrough.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WalkthroughComponent {
  @Input() operatorWalkthrough: string;
}
