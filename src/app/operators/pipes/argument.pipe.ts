import { OperatorParameters } from './../../../operator-docs/operator.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'argument' })
export class ArgumentPipe implements PipeTransform {
  transform(argument: OperatorParameters) {
    if (argument.attribute) {
      return `[${argument.attribute}]
      ${argument.description}
      `;
    }

    return argument.description;
  }
}
