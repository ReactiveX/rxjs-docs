import { OperatorDoc } from '../operator.model';

export const withLatestFrom: OperatorDoc = {
  name: 'withLatestFrom',
  operatorType: 'combination',
  returnValue: 'Observable',
  signature:
    'public withLatestFrom(other: ObservableInput, project: Function): Observable',
  marbleUrl: 'http://reactivex.io/rxjs/img/withLatestFrom.png',
  shortDescription: {
    description: `Combines the source Observable with other Observables to create an Observable whose values are
      calculated from the latest values of each, only when the source emits.`,
    extras: [
      {
        type: 'Tip',
        text: `Whenever the source Observable emits a value, it computes a formula using that
      value plus the latest values from other input Observables, then emits the output of that formula.`
      }
    ]
  },
  walkthrough: {
    description: `
        <p><span class="markdown-code">withLatestFrom</span> combines each value from the source Observable (the instance) with the latest
        values from the other input Observables only when the source emits a value, optionally using
        a project function to determine the value to be emitted on the output Observable. All input
        Observables must emit at least one value before the output Observable will emit a value.
        </p>
      `
  },
  examples: [
    {
      name:
        'For each click event, tick every second from 0 to 3, with no concurrency',
      code: `
        import { take, concatAll, map } from 'rxjs/operators';
        import { fromEvent } from 'rxjs/observable/fromEvent';
        import { interval } from 'rxjs/observable/interval';

        const clicks = fromEvent(document, 'click');
        const higherOrder = clicks.pipe(
          map(ev => interval(1000).pipe(take(4)))
        );
        const firstOrder = higherOrder.pipe(concatAll());
        firstOrder.subscribe(x => console.log(x));
      `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/wojoqenitu/1/embed?js,console,output'
      }
    }
  ],
  relatedOperators: ['combineLatest']
};
