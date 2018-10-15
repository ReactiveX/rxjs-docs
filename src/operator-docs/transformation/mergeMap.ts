import { OperatorDoc } from '../operator.model';

export const mergeMap: OperatorDoc = {
  name: 'mergeMap',
  operatorType: 'transformation',
  returnValue: 'Observable',
  signature:
    'public mergeMap(project: Function, resultSelector?: Function, concurrent?: number): Observable',
  useInteractiveMarbles: true,
  parameters: [
    {
      name: 'project',
      type: '(value: T, index: number) => ObservableInput',
      attribute: '',
      description: `A function that, when applied to an item emitted by the source Observable, returns
      an Observable.`
    },
    {
      name: 'resultSelector',
      type:
        '(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number) => any',
      attribute: 'optional',
      description: `A function to produce the value on the output Observable based on the values and the indices
        of the source (outer) emission and the inner Observable emission. The arguments passed to this function are:
        'outerValue': the value that came from the source,
        'innerValue': the value that came from the projected Observable,
        'outerIndex': the "index" of the value that came from the source,
        'innerIndex': the "index" of the value from the projected Observable.`
    },
    {
      name: 'concurrent',
      type: 'number',
      attribute: 'optional',
      description: `Maximum number of input Observables being subscribed to concurrently.`
    }
  ],
  marbleUrl: 'http://reactivex.io/rxjs/img/mergeMap.png',
  shortDescription: {
    description: `
      Projects each source value to an Observable which is merged in the output Observable.
    `,
    extras: []
  },
  walkthrough: {
    description: `
      <p>
        Returns an Observable that emits items based on applying a function that you supply
        to each item emitted by the source Observable, where that function returns an Observable,
        and then merging those resulting Observables and emitting the results of this merger.
      </p>
    `
  },
  examples: [
    {
      name:
        'Map and flatten each letter to an Observable ticking every 1 second',
      code: `
        import { of } from 'rxjs/observable/of';
        import { interval } from 'rxjs/observable/interval';
        import { mergeMap, map } from 'rxjs/operators';

        const letters = of('a', 'b', 'c');
        const result = letters.pipe(
                            mergeMap(x => {
                              return interval(1000).pipe(map(i => x+i));
                            })
                       );
        result.subscribe(x => console.log(x));

        // Output
        "a0"
        "b0"
        "c0"
        "a1"
        "b1"
        "c1"
        "a2"
        "b2"
        "c2"
      `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/pekelowibe/embed?js,console'
      }
    }
  ],
  relatedOperators: [
    'concatMap',
    'exhaustmap',
    'merge',
    'mergeAll',
    'mergeMapTo',
    'mergeScan',
    'switchMap'
  ],
  additionalResources: []
};
