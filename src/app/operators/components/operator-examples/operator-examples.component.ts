import {
  Component,
  EventEmitter,
  Output,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { OperatorExample } from '../../../../operator-docs';

@Component({
  selector: 'app-operator-examples',
  templateUrl: './operator-examples.component.html',
  styleUrls: ['./operator-examples.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OperatorExamplesComponent {
  @Input() operatorExamples: OperatorExample[];
  @Output() copyToClipboard = new EventEmitter<string>();
}
