import { OperatorDoc } from '../operator.model';

export const bufferToggle: OperatorDoc = {
  name: 'bufferToggle',
  operatorType: 'transformation',
  returnValue: 'Observable',
  signature: `bufferToggle(
    openings: SubscribableOrPromise,
    closingSelector: (value) => SubscribableOrPromise): Observable`,
  parameters: [
    {
      name: 'openings',
      type: 'SubscribableOrPromise',
      attribute: '',
      description: `A Subscribable or Promise of notifications to start new buffers.`
    },
    {
      name: 'closingSelector',
      type: '(value) => SubscribableOrPromise',
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
      import { bufferToggle } from 'rxjs/operators';

      const clicks = fromEvent(document, 'click', e => ({x: e.clientX, y: e.clientY}));
      const openings = interval(1000);
      const buffered = clicks.pipe(
        bufferToggle(openings, i => i % 2 ? interval(500) : empty())
      );
      buffered.subscribe(x => console.log(x));
      /*
      Expected console output:

      []

      [[object Object] {
        x: 156,
        y: 165
      }, [object Object] {
        x: 156,
        y: 165
      }, [object Object] {
        x: 156,
        y: 165
      }]

      []

      []
      */
      `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/nuriyod/6/embed?js,console,output'
      }
    },
    {
      name:
        'Start buffering all the click events when you press the "S" key and close the buffer when you press the "E" key',
      code: `
      import { fromEvent } from 'rxjs/observable/fromEvent';
      import { filter, bufferToggle } from 'rxjs/operators';

      const clicks = fromEvent(document, 'click', e => ({x: e.clientX, y: e.clientY}));
      const keyUp = fromEvent(document,'keyup');
      const openings = keyUp.pipe(filter(e => e.key === 's'));
      const closing = keyUp.pipe(filter(e => e.key === 'e'));
      const buffered = clicks.pipe(
        bufferToggle(openings, _ => closing)
      );
      buffered.subscribe(x => console.log(x));

      /*
      Expected console output:

      [[object Object] {
        x: 147,
        y: 135
      }, [object Object] {
        x: 147,
        y: 135
      }, [object Object] {
        x: 144,
        y: 135
      }, [object Object] {
        x: 144,
        y: 135
      }, [object Object] {
        x: 144,
        y: 135
      }]

      [[object Object] {
        x: 144,
        y: 135
      }, [object Object] {
        x: 144,
        y: 135
      }]

      [[object Object] {
        x: 143,
        y: 136
      }]
      */
`,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/vurobel/12/embed?js,console,output'
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
