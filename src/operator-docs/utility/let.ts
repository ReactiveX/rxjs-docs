import { OperatorDoc } from '../operator.model';

export const letOperator: OperatorDoc = {
  name: 'let',
  operatorType: 'utility',
  returnValue: 'Observable',
  signature: 'public let(fun: function): Observable,',
  parameters: [
    {
      name: 'fun',
      type: 'function',
      attribute: '',
      description: `Selector function which can use the source sequence
    as many times as needed, without sharing subscriptions to the source sequence.`
    }
  ],
  shortDescription: {
    description: `Returns an observable sequence that is the result of invoking the selector on the source sequence,
    without sharing subscriptions. This operator allows for a fluent style of writing queries that use the same
    sequence multiple times. There is an alias of letBind for browsers older than IE 9.`
  },
  additionalResources: [
    {
      url: 'https://www.learnrxjs.io/operators/utility/let.html',
      description: 'several examples of using the let operator',
      author: 'btroncone'
    }
  ],
  examples: [
    {
      name: 'calls concat as part of a pipeline',
      code: `
      import { range } from 'rxjs/observable/range';

    const obs = range(1, 3);

    const source = obs.let((o) => o.concat(o));

    const subscription = source.subscribe(
    (x) => {
        console.log('Next: ' + x);
    },
    (err) => {
        console.log('Error: ' + err);
    },
    () => {
        console.log('Completed');
    });

    // => Next: 1
    // => Next: 2
    // => Next: 3
    // => Next: 1
    // => Next: 2
    // => Next: 3
    // => Completed
    `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/giwanupiqu/embed?html,js,console'
      }
    }
  ]
};
