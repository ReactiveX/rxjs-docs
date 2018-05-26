import { OperatorDoc } from '../operator.model';

export const every: OperatorDoc = {
  name: 'every',
  operatorType: 'conditional',
  signature: 'public every(predicate: function, thisArg: any): Observable',
  parameters: [
    {
      name: 'predicate',
      type: 'function',
      attribute: '',
      description:
        'A function for determining if an item meets a specified condition.'
    },
    {
      name: 'thisArg',
      type: 'any',
      attribute: 'optional',
      description: `Optional object to use for 'this' in the callback.`
    }
  ],
  shortDescription: {
    description:
      'Returns an Observable that emits whether or not every item of the source satisfies the condition specified.'
  },
  walkthrough: {
    description: `
      <p>Each value from source, pass predicate returns true otherwise false.</p>
    `
  },
  examples: [
    {
      name:
        'A simple example emitting true if all elements are less than 5, false otherwise',
      code: `
        import { every } from 'rxjs/operators';
        import { of } from 'rxjs/observable/of';

        const source = of(1, 2, 3, 4, 5, 6);
        const result = source.pipe(
          //is each valule lesser than 5?
          every(x => x < 5)
        );
        const subscription = result.subscribe(x => console.log(x));

        /*
        Example console output
        false
        */
      `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/watafir/embed?js,console'
      }
    }
  ],
  relatedOperators: [],
  additionalResources: []
};
