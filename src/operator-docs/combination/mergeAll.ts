import { OperatorDoc } from '../operator.model';

export const mergeAll: OperatorDoc = {
  name: 'mergeAll',
  operatorType: 'combination',
  signature: 'public mergeAll(concurrent: number): Observable',
  parameters: [
    {
      name: 'concurrent',
      type: 'number',
      attribute: 'optional, default: Number.POSITIVE_INFINITY',
      description: `Maximum number of input Observables being subscribed to concurrently.`
    }
  ],
  marbleUrl: 'http://reactivex.io/rxjs/img/mergeAll.png',
  shortDescription: {
    description: `Converts a higher-order Observable into a first-order Observable which concurrently
     delivers all values that are emitted on the inner Observables`,
    extras: [
      {
        type: 'Tip',
        text: 'Flattens an Observable-of-Observables.'
      }
    ]
  },
  walkthrough: {
    description: `
      <p><span class="markdown-code">MergeAll</span> subscribes to an Observable that emits Observables,
        also known as a higher-order Observable. Each time it observes one of these emitted
        inner Observables, it subscribes to that and delivers all the values from the inner
        Observable on the output Observable. The output Observable only completes once all inner
        Observables have completed. Any error delivered by a inner Observable will be immediately
        emitted on the output Observable.</p>
    `
  },
  examples: [
    {
      name:
        'Spawn a new interval Observable for each click event, and blend their outputs as one Observable',
      code: `
        import { mergeAll, map } from 'rxjs/operators';
        import { fromEvent } from 'rxjs/observable/fromEvent';
        import { interval } from 'rxjs/observable/interval';

        const clicks = fromEvent(document, 'click');
        const higherOrder = clicks.pipe(map((ev) => interval(1000)));
        const firstOrder = higherOrder.pipe(mergeAll());
        firstOrder.subscribe(x => console.log(x));
      `
    },
    {
      name:
        'Count from 0 to 9 every second for each click, but only allow 2 concurrent timers',
      code: `
        import { mergeAll, map } from 'rxjs/operators';
        import { fromEvent } from 'rxjs/observable/fromEvent';
        import { interval } from 'rxjs/observable/interval';

        const clicks = fromEvent(document, 'click');
        const higherOrder = clicks.pipe(
          map((ev) => interval(1000).pipe(take(10)))
        );
        const firstOrder = higherOrder.pipe(mergeAll(2));
        firstOrder.subscribe(x => console.log(x));
      `
    }
  ],
  relatedOperators: [
    'combineAll',
    'concatAll',
    'exhaust',
    'merge',
    'mergeMap',
    'mergeMapTo',
    'mergeScan',
    'switch',
    'zipAll'
  ]
};
