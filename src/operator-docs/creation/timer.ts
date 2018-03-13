import { OperatorDoc } from '../operator.model';

export const timer: OperatorDoc = {
  name: 'timer',
  operatorType: 'creation',
  signature:
    'public timer(initialDelay: number | Date, period : number = 0, scheduler: IScheduler = async): Observable<number>',
  parameters: [
    {
      name: 'initialDelay',
      type: 'Number | Date',
      attribute: '',
      description: `The initial delay time to wait before emitting the first value of 0`
    },
    {
      name: 'period',
      type: 'Number',
      attribute: 'optional',
      description: `The period of time between emissions of the subsequent numbers`
    },
    {
      name: 'scheduler',
      type: 'IScheduler',
      attribute: 'optional',
      description: `The IScheduler to use for scheduling
      the emission of values, and providing a notion of "time"`
    }
  ],
  marbleUrl: 'http://reactivex.io/rxjs/img/timer.png',
  shortDescription: {
    description: `Creates an Observable that starts emitting after an initialDelay
    and emits ever increasing numbers after each period of time thereafter`
  },
  walkthrough: {
    description: `timer returns an Observable that emits an infinite sequence of ascending integers,
    with a constant interval of time, period of your choosing between those emissions.
    The first emission happens after the specified initialDelay.
    The initial delay may be a Date. By default,
    this operator uses the async IScheduler to provide a notion of time,
    but you may pass any IScheduler to it.
    If period is not specified, the output Observable emits only one value, 0.
    Otherwise, it emits an infinite sequence`
  },
  examples: [
    {
      name:
        'Emits ascending numbers, one every second (1000ms), starting after 3 seconds running for 10 seconds',
      code: `
          import { timer } from 'rxjs/observable/timer'
          import { pipe } from 'rxjs';
          import { take } from 'rxjs/operators';
          const observable = timer(3000, 1000).pipe(take(10));
          const subscription = observable.subscribe({
            next: (n) => console.log(n), // triggered every 1000ms as specified from period param
            complete: () => console.log('complete')
          });
      `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/dojatikoqo/embed?html,js,console,output'
      }
    }
  ],
  relatedOperators: ['interval', 'delay']
};
