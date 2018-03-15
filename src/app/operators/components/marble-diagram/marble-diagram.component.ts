import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { OperatorParameters } from '../../../../operator-docs';

@Component({
  selector: 'app-marble-diagram',
  templateUrl: './marble-diagram.component.html',
  styleUrls: ['./marble-diagram.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarbleDiagramComponent {
  @Input() operatorName: string;
  @Input() useInteractiveMarbles: boolean;
  @Input() url: string;
}
