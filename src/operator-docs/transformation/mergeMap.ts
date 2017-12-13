import { OperatorDoc } from '../operator.model';

export const mergeMap: OperatorDoc = {
  name: 'mergeMap',
  operatorType: 'transformation',
  signature: `public mergeMap(project: function(value: T, ?index: number): ObservableInput,
    resultSelector: function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any, concurrent: number): Observable`,
  parameters: [
    {
      name: 'project',
      type: 'function(value: T, ?index: number): ObservableInput',
      attribute: '',
      description:
        'A function that, when applied to an item emitted by the source Observable, returns an Observable.'
    },
    {
      name: 'resultSelector',
      type:
        'function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any',
      attribute: 'optional',
      description: `
        A function to produce the value on the output Observable based on the values and the indices of the source
        (outer) emission and the inner Observable emission. The arguments passed to this function are:
        <ul>
        <li>outerValue: the value that came from the source</li>
        <li>innerValue: the value that came from the projected Observable</li>
        <li>outerIndex: the "index" of the value that came from the source</li>
        <li>innerIndex: the "index" of the value from the projected Observable</li>
        </ul>
      `
    },
    {
      name: 'concurrent',
      type: 'number',
      attribute: 'optional default: Number.POSITIVE_INFINITY',
      description:
        'Maximum number of input Observables being subscribed to concurrently.'
    }
  ],
  marbleUrl: 'http://reactivex.io/rxjs/img/mergeMap.png',
  shortDescription: {
    description:
      'Projects each source value to an Observable which is merged in the output Observable.',
    extras: [
      {
        type: 'Tip',
        text: `Maps each value to an Observable, then flattens all of these inner Observables using
           <a href="/#/operators/mergeAll" class="markdown-code">mergeAll</a>.`
      }
    ]
  },
  walkthrough: {
    description: `<p>Returns an Observable that emits items based on applying a function that you
    supply to each item emitted by the source Observable, where that function
    returns an Observable, and then merging those resulting Observables and
    emitting the results of this merger.</p>`
  },
  examples: [
    {
      name:
        'Map and flatten each letter to an Observable ticking every 1 second',
      code: `
      const letters = Rx.Observable.of('a', 'b', 'c');
      const result = letters.mergeMap(x =>
        Rx.Observable.interval(1000).map(i => x+i)
      );
      result.subscribe(x => console.log(x));
      // Results in the following:
      // a0
      // b0
      // c0
      // a1
      // b1
      // c1
      // continues to list a,b,c with respective ascending integers
    `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/hehivasepi/1/embed?js,console'
      }
    }
  ],
  relatedOperators: [
    'concatMap',
    'exhaustMap',
    'merge',
    'mergeAll',
    'mergeMapTo',
    'mergeScan',
    'switchMap'
  ]
};
