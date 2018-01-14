import { Component, EventEmitter, Output, Input } from '@angular/core';
import { OperatorExample } from '../../../../operator-docs';

@Component({
  selector: 'app-operator-examples',
  templateUrl: './operator-examples.component.html',
  styleUrls: ['./operator-examples.component.scss']
})
export class OperatorExamplesComponent {
  @Input() operatorExamples: OperatorExample[];
  @Input() inBrowser: boolean;
  @Output() copyToClipboard = new EventEmitter<string>();
}
