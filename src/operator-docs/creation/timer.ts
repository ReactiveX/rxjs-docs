import { OperatorDoc } from '../operator.model';

export const timer: OperatorDoc = {
  name: 'timer',
  operatorType: 'creation',
  signature:
    'public timer(initialDelay: number | Date, period : number = 0, scheduler: IScheduler = async): Observable',
  parameters: [
    {
      name: 'initialDelay',
      type: 'Number | Date',
      attribute: '',
      description: `The initial delay time specified as a Date object or as an integer denoting
      milliseconds between emissions to wait before emitting the first value of 0`
    },
    {
      name: 'period',
      type: 'Number',
      attribute: 'optional',
      description: `The period of time specified as an integer denoting milliseconds between emissions of the subsequent numbers`
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
    The initial delay may be a Date or number of milliseconds to delay.
    By default, this operator uses the async IScheduler to provide a notion of time,
    but you may pass any IScheduler to it.
    If period is not specified, the output Observable emits only one value, 0.
    Otherwise, it emits an infinite sequence`
  },
  examples: [
    {
      name:
        'Emits ascending numbers, one every second (1000ms), starting after 3 seconds running for 10 seconds',
      code: `
          import { timer } from 'rxjs/observable/timer';
          import { take } from 'rxjs/operators';

          const timer$ = timer(3000, 1000).pipe(take(10));
          const subscription = timer$.subscribe({
            // delayed 3s (initialDelay) then will output number every 1s (period) for 10s
            next: (n) => console.log(n),
            complete: () => console.log('complete')
          });
      `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/ziwarayiwu/1/embed?html,js,console,output'
      }
    }
  ],
  relatedOperators: ['interval', 'delay']
};
