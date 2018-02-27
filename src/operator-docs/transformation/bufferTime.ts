import { OperatorDoc } from '../operator.model';

export const bufferTime: OperatorDoc = {
  name: 'bufferTime',
  operatorType: 'transformation',
  returnValue: 'Observable',
  signature: `bufferTime(
    bufferTimeSpan: number,
    bufferCreationInterval: number,
    maxBufferSize: number,
    scheduler: Scheduler): Observable`,
  parameters: [
    {
      name: 'bufferTimeSpan',
      type: 'number',
      attribute: '',
      description: `The amount of time (in milliseconds) to fill each buffer array.`
    },
    {
      name: 'bufferCreationInterval',
      type: 'number',
      attribute: 'optional',
      description: `The interval (in milliseconds) at which to start new buffers.`
    },
    {
      name: 'maxBufferSize',
      type: 'number',
      attribute: 'optional',
      description: `The maximum amount of items per buffer.`
    },
    {
      name: 'scheduler',
      type: 'Scheduler',
      attribute: `optional
                  default: async`,
      description: `The scheduler on which to schedule the intervals that determine buffer boundaries.`
    }
  ],
  marbleUrl: 'http://reactivex.io/rxjs/img/bufferTime.png',
  shortDescription: {
    description: `Buffers the source Observable values for a specific time period.

    <span class="informal">Collects values from the past as an array, and emits those arrays periodically in time.</span>`
  },
  walkthrough: {
    description: `
    Buffers values from the source for a specific time duration <span class="markdown-code">bufferTimeSpan</span>.
    It emits and resets the buffer every <span class="markdown-code">bufferTimeSpan</span> milliseconds,
    unless the optional argument <span class="markdown-code">bufferCreationInterval</span> is given.
    If <span class="markdown-code">bufferCreationInterval</span> is given,
     this operator emits the buffered values and re-opens the buffer every <span class="markdown-code">bufferCreationInterval</span>
      milliseconds and closes (no further values are buffered) the buffer every
      <span class="markdown-code">bufferTimeSpan</span> milliseconds.
    When the optional argument <span class="markdown-code">maxBufferSize</span> is specified,
     the buffer will be closed either after <span class="markdown-code">bufferTimeSpan</span> milliseconds
      or when it contains <span class="markdown-code">maxBufferSize</span> elements.`
  },
  examples: [
    {
      name:
        'After every two and a half seconds, emit an array of the click events during that timeframe',
      code: `
      import { fromEvent } from 'rxjs/observable/fromEvent';
      import { bufferTime } from 'rxjs/operators';

      const clicks = fromEvent(document, 'click', e => ({x: e.clientX, y: e.clientY}));
      const buffered = clicks.pipe(
        bufferTime(2500)
      );
      buffered.subscribe(x => console.log(x));

      /*
      Example console output

      []

      [[object Object] {
        x: 150,
        y: 139
      }, [object Object] {
        x: 150,
        y: 139
      }, [object Object] {
        x: 150,
        y: 139
      }, [object Object] {
        x: 150,
        y: 139
      }]

      [[object Object] {
        x: 150,
        y: 139
      }]

      [[object Object] {
        x: 150,
        y: 137
      }, [object Object] {
        x: 150,
        y: 137
      }]

      []
      */
      `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/fuqewiy/7/embed?js,console,output'
      }
    },
    {
      name:
        'Every five seconds, emit the click events from a window of the last two seconds',
      code: `
      import { fromEvent } from 'rxjs/observable/fromEvent';
      import { bufferTime } from 'rxjs/operators';

      const clicks = fromEvent(document, 'click', e => ({x: e.clientX, y: e.clientY}));
      const buffered = clicks.pipe(
        bufferTime(2000, 5000)
      );
      buffered.subscribe(x => console.log(x));

      /*
      Example console output:

      []

      []

      [[object Object] {
        x: 159,
        y: 140
      }, [object Object] {
        x: 159,
        y: 140
      }]

      [[object Object] {
        x: 161,
        y: 140
      }, [object Object] {
        x: 161,
        y: 140
      }, [object Object] {
        x: 161,
        y: 140
      }, [object Object] {
        x: 161,
        y: 140
      }, [object Object] {
        x: 161,
        y: 140
      }, [object Object] {
        x: 161,
        y: 140
      }]

      []
      */
`,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/xohupot/6/embed?js,console,output'
      }
    }
  ],
  relatedOperators: [
    'buffer',
    'bufferCount',
    'bufferToggle',
    'bufferWhen',
    'windowTime'
  ]
};
