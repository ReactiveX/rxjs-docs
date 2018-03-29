import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { OperatorParameters } from '../../../../operator-docs';

@Component({
  selector: 'app-operator-header',
  templateUrl: './operator-header.component.html',
  styleUrls: ['./operator-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OperatorHeaderComponent {
  @Input() operatorName: string;
  @Input() operatorSignature: string;
  @Input() operatorParameters: OperatorParameters[];
  @Input() returnValue: string;
}
