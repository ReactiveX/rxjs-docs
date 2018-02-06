import {
  Component,
  EventEmitter,
  Output,
  Input,
  OnChanges
} from '@angular/core';
import sdk from '@stackblitz/sdk';

import { OperatorExample } from '../../../../operator-docs';

@Component({
  selector: 'app-operator-examples',
  templateUrl: './operator-examples.component.html',
  styleUrls: ['./operator-examples.component.scss']
})
export class OperatorExamplesComponent implements OnChanges {
  @Input() operatorExamples: OperatorExample[];
  @Output() copyToClipboard = new EventEmitter<string>();

  ngOnChanges() {
    if (Boolean(this.operatorExamples)) {
      this.operatorExamples.forEach(this.initExamples);
    }
  }

  initExamples(example: OperatorExample, index: number) {
    const code = example.code;
    const html = `<h1>${example.name}</h1><br/><br/><div id="output"></div>`;

    const project = {
      files: {
        'index.ts': code,
        'index.html': html
      },
      title: 'Dynamically Generated Project',
      description: 'Created with <3 by the StackBlitz SDK!',
      template: 'typescript',
      tags: ['stackblitz', 'sdk'],
      dependencies: {
        rxjs: '5.5.6'
      }
    };
    const divName = `exampleDiv-${index}`;

    setTimeout(sdk.embedProject, 0, divName, project, { height: 600 });
  }
}
