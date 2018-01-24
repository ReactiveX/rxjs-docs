import { OperatorDoc } from '../operator.model';

export const bufferToggle: OperatorDoc = {
  name: 'bufferToggle',
  operatorType: 'transformation',
  signature: `bufferToggle(
    openings: SubscribableOrPromise<O>,
    closingSelector: (value: O) => SubscribableOrPromise): Observable<T[]>`,
  parameters: [
    {
      name: 'openings',
      type: 'SubscribableOrPromise<O>',
      attribute: '',
      description: `A Subscribable or Promise of notifications to start new buffers.`
    },
    {
      name: 'closingSelector',
      type: '(value: O) => SubscribableOrPromise',
      attribute: '',
      description: `A function that takes the value emitted by the openings observable
      and returns a Subscribable or Promise, which, when it emits, signals that the associated buffer should be emitted and cleared.`
    }
  ],
  marbleUrl: 'http://reactivex.io/rxjs/img/bufferToggle.png',
  shortDescription: {
    description: `
    Buffers the source Observable values starting from an emission from <span class="markdown-code">openings</span>
    and ending when the output of <span class="markdown-code">closingSelector</span> emits.
    <span class="informal">
    Collects values from the past as an array. Starts collecting only when <span class="markdown-code">openings</span> emits,
    and calls the <span class="markdown-code">closingSelector</span> function
    to get an Observable that tells when to close the buffer.</span>`
  },
  walkthrough: {
    description: `
    Buffers values from the source by opening the buffer via signals from an Observable
    provided to <span class="markdown-code">openings</span>,
    and closing and sending the buffers when a Subscribable or Promise
    returned by the <span class="markdown-code">closingSelector</span> function emits.
    `
  },
  examples: [
    {
      name: 'Every other second, emit the click events from the next 500ms',
      code: `
      import { fromEvent } from 'rxjs/observable/fromEvent';
      import { interval } from 'rxjs/observable/interval';
      import { empty } from 'rxjs/observable/empty';
      import { map, bufferToggle } from 'rxjs/operators';

      const clicks$ = fromEvent(document, 'click');
      const openings$ = interval(1000);
      const buffered$ = clicks$.pipe(
        map(e => {return {X: e.clientX, Y: e.clientY};}),
        bufferToggle(openings$, i => i % 2 ? interval(500) : empty())
      );
      buffered$.subscribe(x => console.log(x));
      `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/nuriyod/1/embed?js,console,output'
      }
    },
    {
      name:
        'Start buffering all the click events when you press the "S" key and close the buffer when you press the "E" key',
      code: `
      import { fromEvent } from 'rxjs/observable/fromEvent';
      import { filter, map, bufferToggle } from 'rxjs/operators';

      const clicks$ = fromEvent(document, 'click');
      const keyUp$ = fromEvent(document,'keyup');
      const openings$ = keyUp$.pipe(filter(e => e.key === 's'));
      const closing$ = keyUp$.pipe(filter(e => e.key === 'e'));
      const buffered$ = clicks$.pipe(
        map(e => {return {X: e.clientX, Y: e.clientY};}),
        bufferToggle(openings$, _ => closing$)
      );
      buffered$.subscribe(x => console.log(x));
`,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/vurobel/8/embed?js,console,output'
      }
    }
  ],
  relatedOperators: [
    'buffer',
    'bufferCount',
    'bufferTime',
    'bufferWhen',
    'windowToggle'
  ]
};
