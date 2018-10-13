import { OperatorDoc } from '../operator.model';

export const ofOperator: OperatorDoc = {
  name: 'of',
  operatorType: 'creation',
  signature: 'public of(values: ...T, scheduler: IScheduler ): Observable',
  parameters: [
    {
      name: 'args',
      type: 'T',
      description: 'Arguments that represent next values to be emitted.',
      attribute: ''
    },
    {
      name: 'scheduler',
      type: 'IScheduler',
      description:
        'A IScheduler to use for scheduling the emissions of the next notifications.',
      attribute: 'optional'
    }
  ],
  relatedOperators: ['create', 'empty', 'never', 'throw'],
  marbleUrl: 'http://reactivex.io/rxjs/img/of.png',
  shortDescription: {
    description: `Creates an Observable that emits some values you specify as arguments,
    immediately one after the other, and then emits a complete notification.`
  },
  walkthrough: {
    description: `
      <p>
      This static operator is useful for creating a simple Observable that only emits the arguments given,
      and the complete notification thereafter. It can be used for composing with other Observables,
      such as with concat. By default, it uses a null IScheduler, which means the next notifications
      are sent synchronously, although with a different IScheduler it is possible to determine
      when those notifications will be delivered.</p>
    `
  },
  examples: [
    {
      name: `Emit 10, 20, 30, then 'a', 'b', 'c', then start ticking every second.`,
      code: `
    import { of } from 'rxjs/observable/of';
    import { interval } from 'rxjs/observable/interval';
    import { concat } from 'rxjs/operators';

    const numbers = of(10, 20, 30);
    const letters = of('a', 'b', 'c');
    const interval$ = interval(1000);
    const result = numbers.pipe(
      concat(letters, interval$),
    result.subscribe(x => console.log(x));`,
      // 10
      // 20
      // 30
      // 'a'
      // 'b'
      // 'c'
      // 0
      // 1
      // 2
      // ...
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/hiquyaluqa/1/embed?js,console'
      }
    }
  ]
};
