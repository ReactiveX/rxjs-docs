import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-operator-header',
  templateUrl: './operator-header.component.html',
  styleUrls: ['./operator-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OperatorHeaderComponent {
  @Input() operatorName: string;
  @Input() operatorSignature: string;
}
