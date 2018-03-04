import { OperatorDoc } from '../operator.model';

export const interval: OperatorDoc = {
  name: 'interval',
  operatorType: 'creation',
  signature:
    'public interval(period = 0, scheduler: IScheduler = async): Observable<number>',
  parameters: [
    {
      name: 'period',
      type: 'Number',
      attribute: 'optional',
      description: `The interval size in milliseconds (by default)
      or the time unit determined by the scheduler's clock`
    },
    {
      name: 'scheduler',
      type: 'IScheduler',
      attribute: 'optional',
      description: `The IScheduler to use for scheduling
      the emission of values, and providing a notion of "time"`
    }
  ],
  marbleUrl: 'http://reactivex.io/rxjs/img/interval.png',
  shortDescription: {
    description: `Emits incremental numbers periodically in time`
  },
  walkthrough: {
    description: `Creates an Observable that emits sequential numbers every specified
     interval of time, on a specified IScheduler`
  },
  examples: [
    {
      name: 'Observable emits ascending numbers, one every second (1000ms)',
      code: `
          import { interval } from 'rxjs/internal/observable/interval';
          import { pipe } from 'rxjs';
          import { take } from 'rxjs/internal/operators/take';
          const observable = interval(1000).pipe(take(5));
          const subscription = observable.subscribe({
            next: (n) => console.log(n), // triggered every 1000ms from interval
            complete: () => console.log('complete'), // logs 'complete'
          });
      `,
      externalLink: {
        platform: 'JSBin',
        url:
          'https://stackblitz.com/edit/typescript-6mg2tn?embed=1&file=index.ts'
      }
    }
  ],
  relatedOperators: ['timer', 'delay']
};
