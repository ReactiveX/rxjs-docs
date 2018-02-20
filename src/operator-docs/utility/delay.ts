import { OperatorDoc } from '../operator.model';

export const delay: OperatorDoc = {
  name: 'delay',
  operatorType: 'utility',
  signature:
    'public delay(delay: number | Date, scheduler: Scheduler): Observable',
  parameters: [
    {
      name: 'delay',
      type: 'number | Date',
      attribute: '',
      description: `The delay duration in milliseconds (a number) or a Date until which the
      emission of the source items is delayed.`
    },
    {
      name: 'scheduer',
      type: 'Scheduler',
      attribute: '',
      description:
        'The IScheduler to use for managing the timers that handle the time-shift for each item.'
    }
  ],
  useInteractiveMarbles: true,
  marbleUrl: 'http://reactivex.io/rxjs/img/delay.png',
  shortDescription: {
    description: `
      Delays the emission of items from the source Observable by a given timeout or until a given Date.
    `,
    extras: []
  },
  walkthrough: {
    description: `
      <p>
        If the delay argument is a Number, this operator time shifts the source Observable by that amount
        of time expressed in milliseconds. The relative time intervale between the values are preserved.
      </p>
      <p>
        If the delay argument is a Date, this operator time shifts the start of the Observable execution
        until the given date occurs.
      </p>
    `
  },
  examples: [
    {
      name: 'Delay each click by one second',
      code: `
        import { delay, mapTo } from 'rxjs/operators';
        import { fromEvent } from 'rxjs/observable/fromEvent';

        const clicks = fromEvent(document, 'click').pipe(mapTo('click'));
        const delayedClicks = clicks.pipe(delay(1000));
        delayedClicks.subscribe(x => console.log(x));
      `
    },
    {
      name: 'Delay all clicks until a future date happens',
      code: `
        import { delay } from 'rxjs/operators';
        import { fromEvent } from 'rxjs/observable/fromEvent';

        const clicks = fromEvent(document, 'click');
        const date = new Date('March 15, 2050 12:00:00');
        const delayedClicks = clicks.pipe(delay(date));
        delayedClicks.subscribe(x => console.log(x));
      `
    }
  ],
  relatedOperators: ['debounceTime', 'delayWhen'],
  additionalResources: []
};
