import { OperatorDoc } from '../operator.model';

export const concatMap: OperatorDoc = {
  name: 'concatMap',
  operatorType: 'transformation',
  signature: `concatMap(project: Function, resultSelector?: Function): Observable`,
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
    description: `Project each source value to an Observable which is then merged with the output observable
    in a serialized fashion. The previous subscription must complete before the next begins.
    <span class="informal">Inner observables are flatened using <a href="#/operators/concatAll">concatAll</a>.</span>`
  },
  walkthrough: {
    description: `the source observable maps values to inner observable, subscribe and emit in order.
     After subscribing the source observable is ended therefore the concatMap's project function
     is only executed once. the second parameter 'resultFunction', allows you to access to the index of
     source observable and inner observable (besides the items)`
  },
  examples: [
    {
      name:
        'Map the first click to inner observable (it ended the Observable of clicks)',
      code: `
      import { Observable } from 'rxjs/Observable';
      import { interval } from 'rxjs/observable/interval';
      import { fromEvent } from 'rxjs/observable/fromEvent';

      import { mapTo, concatMap } from 'rxjs/operators';

      const $click = fromEvent(document, 'click');
      const $interval = interval(3000)
          .pipe(mapTo((iClick, iInterval) => 'Click('+iClick+')'+', '+'Interval('+iInterval+')'));
      // concatMap's project function is executed just one time!
      // Aditional cliks are not longer taking into account
      // output; Click(0), Interval(0) -> Click(0), Interval(1) -> Click(0), Interval(2) -> etc
      $click.pipe(concatMap(() => $interval,
          (fromSource, fromInterval, indexSource, indexInterval) => fromInterval(indexSource, indexInterval)))
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
