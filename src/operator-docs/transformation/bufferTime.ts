import { OperatorDoc } from '../operator.model';

export const bufferTime: OperatorDoc = {
  name: 'bufferTime',
  operatorType: 'transformation',
  signature: `bufferTime(
    bufferTimeSpan: number,
    bufferCreationInterval: number,
    maxBufferSize: number,
    scheduler: Scheduler): Observable<T[]>`,
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
    Buffers values from the source for a specific time duration <code>bufferTimeSpan</code>.
    It emits and resets the buffer every <code>bufferTimeSpan</code> milliseconds,
    unless the optional argument <code>bufferCreationInterval</code> is given.
    If <code>bufferCreationInterval</code> is given,
     this operator emits the buffered values and re-opens the buffer every <code>bufferCreationInterval</code> milliseconds
      and closes (no further values are buffered) the buffer every <code>bufferTimeSpan</code> milliseconds.
    When the optional argument <code>maxBufferSize</code> is specified,
     the buffer will be closed either after <code>bufferTimeSpan</code> milliseconds
      or when it contains <code>maxBufferSize</code> elements.`
  },
  examples: [
    {
      name:
        'After every two and a half seconds, emit an array of the click events during that timeframe',
      code: `
import { fromEvent } from 'rxjs/observable/fromEvent';
import { map, bufferTime } from 'rxjs/operators';

const clicks = fromEvent(document, 'click');
const buffered = clicks.pipe(
  bufferTime(2500)
);
buffered.subscribe(x => console.log(x));
      `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/fuqewiy/1/embed?js,console,output'
      }
    },
    {
      name:
        'Every five seconds, emit the click events from the next two seconds',
      code: `
      import { fromEvent } from 'rxjs/observable/fromEvent';
      import { map, bufferTime } from 'rxjs/operators';

      const clicks = fromEvent(document, 'click');
      const buffered = clicks.pipe(
        bufferTime(2000, 5000)
      );
      buffered.subscribe(x => console.log(x));
`,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/xohupot/embed?js,console,output'
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
