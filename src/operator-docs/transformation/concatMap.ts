import { OperatorDoc } from '../operator.model';

export const concatMap: OperatorDoc = {
  name: 'concatMap',
  operatorType: 'transformation',
  signature: `concatMap(project: (value: T, index: number) =>  ObservableInput<I>,
  ?resultSelector: (outerValue: T, innerValue: I, outerIndex: number, innerIndex: number) => R): Observable`,
  parameters: [
    {
      name: 'project',
      type: 'function(value: T, index: number): ObservableInput',
      attribute: '',
      description: `A function that, when applied to an item emitted by the source
       Observable, returns an Observable.`
    },
    {
      name: 'resultSelector',
      type:
        'function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any',
      attribute: 'optional',
      description: `A function to produce the value on the output Observable based on the values
      and the indices of the source (outer) emission and the inner Observable
      emission. The arguments passed to this function are:
      - 'outerValue': the value that came from the source.
      - 'innerValue': the value that came from the projected Observable.
      - 'outerIndex': the "index" of the value that came from the source.
      - 'innerIndex': the "index" of the value from the projected Observable.`
    }
  ],
  marbleUrl: 'http://reactivex.io/rxjs/img/concatMap.png',
  shortDescription: {
    description: `Project each source value to an Observable which is merge in the output observable,
    in a serialized fashion waiting for each one to complete before merging the next one
    <span class="informal">Maps each value to an Observable, then flattens all of
    these inner Observables using <a href="#/operators/concatAll">concatAll</a>.</span>`
  },
  walkthrough: {
    description: `You have to be care of managing the subscriptions of inner Observables
    because they do not complete until you unsubscribe explicitely from them`
  },
  examples: [
    {
      name:
        'Map the first click to inner observable (it ended the Observable of clicks)',
      code: `
      import { Observable } from 'rxjs/Observable';
      import 'rxjs/add/observable/interval';
      import 'rxjs/add/operator/mapTo';
      import 'rxjs/add/operator/mergeMap';
      const $click = Observable.fromEvent(document, 'click');
      const $interval = Observable.interval(3000)
          .mapTo((iClick, IInterval) => Click(iClick), Interval(IInterval);
      // the MergeMap's project function is executed just on time!
      $click.mergeMap(() => $interval,
          (fromSource, fromInterval, iSource, IInterval) => fromInterval(iSource, IInterval))
          .subscribe(console.log);
      `,
      externalLink: {
        platform: 'JSBin',
        url: 'https://stackblitz.com/edit/concatmap?file=index.ts'
      }
    }
  ],
  relatedOperators: [
    'concat',
    'concatAll',
    'concatMapTo',
    'exhaustMap',
    'mergeMap',
    'switchMap'
  ]
};
