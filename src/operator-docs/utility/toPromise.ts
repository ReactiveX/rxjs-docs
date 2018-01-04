import { OperatorDoc } from '../operator.model';

export const toPromise: OperatorDoc = {
  name: 'toPromise',
  operatorType: 'utility',
  signature: 'public toPromise(PromiseCtor: *): Promise<T>',
  parameters: [
    {
      name: 'PromiseCtor',
      type: '*',
      attribute: 'optional',
      description: `promise The constructor of the promise. If not provided,
        it will look for a constructor first in Rx.config.Promise then fall back to the native Promise constructor if available.`
    }
  ],
  shortDescription: {
    description: `An ES2015 compliant promise which contains the last value from the Observable sequence.
      If the Observable sequence is in error, then the Promise will be in the rejected stage.
      If the sequence is empty, the Promise will not resolve.`,
    extras: [
      {
        type: 'Tip',
        text:
          'This operator makes reactive programming easy to use for developers who are not used to it.'
      }
    ]
  },
  examples: [
    {
      name: 'Just return the emitted value of the observable as a promise',
      code: `
          const source = Rx.Observable
            .of(42)
            .toPromise();

        source.then((value) => console.log('Value: %s', value));
        // => Value: 42
      `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/fanivejahe/embed?js,console,output'
      }
    }
  ],
  relatedOperators: ['fromPromise']
};
