import { OperatorDoc } from '../operator.model';

export const skipWhile: OperatorDoc = {
  name: 'skipWhile',
  operatorType: 'filtering',
  returnValue: 'Observable',
  signature: `
    public skipWhile(predicate: Function): Observable
  `,
  parameters: [
    {
      name: 'predicate',
      type: 'Function',
      attribute: '',
      description: `A function to test each item emitted from the source Observable.`
    }
  ],
  marbleUrl: 'http://reactivex.io/rxjs/img/skipWhile.png',
  shortDescription: {
    description: `
    Returns an Observable that skips all items emitted by the source Observable
    as long as a specified condition holds true, but emits all further source items as soon as the condition becomes false.
  `
  },
  examples: [
    {
      name: '',
      code: `
      import { range } from 'rxjs/observable/range';
      import { skipWhile } from 'rxjs/operators';

      const source = range(1, 20);
      // skips all values until the first divisible by 7, then emit all values from then on
      const example = source.pipe(
                              skipWhile(val => val % 7 !== 0)
                            );
      const subscribe = example.subscribe(val => console.log(val));

     // Ouput
      7
      8
      9
      10
      11
      12
      13
      14
      15
      16
      17
      18
      19
      20
      `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/qupucehelo/embed?js,console,output'
      }
    }
  ]
};
