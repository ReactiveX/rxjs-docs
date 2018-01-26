import { OperatorDoc } from '../operator.model';

export const bufferWhen: OperatorDoc = {
  name: 'bufferWhen',
  operatorType: 'transformation',
  signature: `bufferWhen(closingSelector: () => Observable): Observable`,
  parameters: [
    {
      name: 'closingSelector',
      type: '() => Observable',
      attribute: '',
      description: `A function that takes no arguments and returns an Observable that signals buffer closure.`
    }
  ],
  marbleUrl: 'http://reactivex.io/rxjs/img/bufferWhen.png',
  shortDescription: {
    description: `Buffers the source Observable values, using a factory function of closing Observables
     to determine when to close, emit, and reset the buffer.
    <span class="informal">Collects values from the past as an array.
     When it starts collecting values, it calls a function that returns an Observable that tells
      when to close the buffer and restart collecting.</span>`
  },
  walkthrough: {
    description: `
    Opens a buffer immediately, then closes the buffer when the observable returned by calling
    <span class="markdown-code">closingSelector</span> function emits a value.
     When it closes the buffer, it immediately opens a new buffer and repeats the process.`
  },
  examples: [
    {
      name: 'Emit an array of the last clicks every [1-5] random seconds',
      code: `
      import { fromEvent } from 'rxjs/observable/fromEvent';
      import { interval  } from 'rxjs/observable/interval';
      import { bufferWhen } from 'rxjs/operators';

      const clicks = fromEvent(document, 'click', e => ({x: e.clientX, y: e.clientY}));
      const buffered = clicks.pipe(
        bufferWhen(() => interval(1000 + Math.random() * 4000))
      )
      buffered.subscribe(x => console.log(x));

      /*
      Example console output:

      []

      []

      [[object Object] {
        x: 87,
        y: 222
      }, [object Object] {
        x: 87,
        y: 222
      }, [object Object] {
        x: 100,
        y: 228
      }, [object Object] {
        x: 151,
        y: 296
      }]

      [[object Object] {
        x: 130,
        y: 368
      }, [object Object] {
        x: 132,
        y: 368
      }, [object Object] {
        x: 227,
        y: 212
      }, [object Object] {
        x: 189,
        y: 321
      }, [object Object] {
        x: 160,
        y: 411
      }, [object Object] {
        x: 160,
        y: 411
      }, [object Object] {
        x: 155,
        y: 366
      }]

      []
      */
      `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/jemeron/9/embed?js,console,output'
      }
    },
    {
      name: 'Buffer all the click events until you press the Enter key',
      code: `
      import { fromEvent } from 'rxjs/observable/fromEvent';
      import { filter, bufferWhen } from 'rxjs/operators';

      const enterKeys = fromEvent(document,'keyup')
                          .pipe(filter(e => e.key === "Enter"));
      const clicks = fromEvent(document, 'click', e => ({x: e.clientX, y: e.clientY}));
      const buffered = clicks.pipe(
        bufferWhen(() => enterKeys)
      );
      buffered.subscribe(x => console.log(x));

      /*
      Example console output:

      [[object Object] {
        x: 186,
        y: 136
      }, [object Object] {
        x: 188,
        y: 136
      }, [object Object] {
        x: 189,
        y: 136
      }, [object Object] {
        x: 189,
        y: 136
      }, [object Object] {
        x: 192,
        y: 136
      }]

      [[object Object] {
        x: 196,
        y: 135
      }, [object Object] {
        x: 196,
        y: 135
      }]

      [[object Object] {
        x: 198,
        y: 125
      }]

      [[object Object] {
        x: 196,
        y: 135
      }, [object Object] {
        x: 196,
        y: 135
      }]

      []
      */
`,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/tuvesok/5/embed?js,console,output'
      }
    }
  ],
  relatedOperators: [
    'buffer',
    'bufferCount',
    'bufferTime',
    'bufferToggle',
    'windowWhen'
  ]
};
