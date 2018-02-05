import { OperatorDoc } from '../operator.model';

export const takeWhile: OperatorDoc = {
  name: 'takeWhile',
  operatorType: 'filtering',
  signature:
    'public takeWhile(predicate: function(value: T, index: number): boolean): Observable',
  parameters: [
    {
      name: 'predicate',
      type: 'function(value: T, index: number): boolean',
      attribute: '',
      description: `
        A function that evaluates a value emitted by the source Observable and returns a boolean.
        Also takes the (zero-based) index as the second argument.
      `
    }
  ],
  marbleUrl: 'http://reactivex.io/rxjs/img/takeWhile.png',
  shortDescription: {
    description: `
    Emits values emitted by the source Observable so long as each value satisfies the given predicate,
     and then completes as soon as this predicate is not satisfied.
    `
  },
  walkthrough: {
    description: `
    <p>
      <span class="markdown-code">takeWhile</span> subscribes and begins mirroring the source Observable.
    </p>
    <p>
      Each value emitted on the source is given to the predicate function which returns a boolean,
      representing a condition to be satisfied by the source values.
    </p>
    <p>
      The output Observable emits the source values until such time as the predicate returns false,
      at which point <span class="takeWhile"> stops mirroring the source Observable and completes the output Observable.
    </p>
    `
  },
  examples: [
    {
      name: `
      Emit click events only while the clientX property is greater than 100
      `,
      code: `
      import { fromEvent } from 'rxjs/observable/fromEvent';
      import { takeWhile } from 'rxjs/operators';

      const clicks = fromEvent(document, 'click');
      const result = clicks.pipe(
                        takeWhile(ev => ev.clientX > 100)
                     );
      result.subscribe(x => console.log(x));

      // clientX value is logged while its > 100
      529
      436
      214
      161
      `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/lasosinudi/embed?js,console,output'
      }
    }
  ],
  relatedOperators: ['take', 'takeLast', 'takeUntil', 'skip']
};
