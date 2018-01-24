import { OperatorDoc } from '../operator.model';

export const bufferCount: OperatorDoc = {
  name: 'bufferCount',
  operatorType: 'transformation',
  signature: ` bufferCount(bufferSize: number, startBufferEvery: number): Observable<T[]>`,
  parameters: [
    {
      name: 'bufferSize',
      type: 'number',
      attribute: '',
      description: `The maximum size of the buffer emitted.`
    },
    {
      name: 'startBufferEvery',
      type: 'number',
      attribute: 'optional',
      description: `Interval at which to start a new buffer. For example if startBufferEvery is 2,
      then a new buffer will be started on every other value from the source.
      A new buffer is started at the beginning of the source by default.`
    }
  ],
  marbleUrl: 'http://reactivex.io/rxjs/img/bufferCount.png',
  shortDescription: {
    description: `
    Buffers the source Observable values until the size hits the maximum <span class="markdown-code">bufferSize</span> given.
    <span class="informal">
    Collects values from the past as an array,
    and emits that array only when its size reaches <span class="markdown-code">bufferSize</span>.
    </span>`
  },
  walkthrough: {
    description: `
    Buffers a number of values from the source Observable
    by <span class="markdown-code">bufferSize</span> then emits the buffer and clears it,
     and starts a new buffer each <span class="markdown-code">startBufferEvery</span> values.
    If <span class="markdown-code">startBufferEvery</span> is not provided or is null,
    then new buffers are started immediately at the start of the source and when each buffer closes and is emitted.
    `
  },
  examples: [
    {
      name: 'Every two clicks, emit those two click events as an array',
      code: `
      import { fromEvent } from 'rxjs/observable/fromEvent';
      import { map, bufferCount } from 'rxjs/operators';

      const clicks$ = fromEvent(document, 'click');
      const buffered$ = clicks$.pipe(
        map(e => {return {X: e.clientX, Y: e.clientY};}),
        bufferCount(2)
      );
      buffered$.subscribe(x => console.log(x));
      `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/ceripaf/1/embed?js,console,output'
      }
    },
    {
      name: 'On every click, emit the last two click events as an array',
      code: `
      import { fromEvent } from 'rxjs/observable/fromEvent';
      import { map, bufferCount } from 'rxjs/operators';

      const clicks$ = fromEvent(document, 'click');
      const buffered$ = clicks$.pipe(
        map(e => {return {X: e.clientX, Y: e.clientY};}),
        bufferCount(2, 1)
      );
      buffered$.subscribe(x => console.log(x));
`,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/cenuwip/1/embed?js,console,output'
      }
    }
  ],
  relatedOperators: [
    'buffer',
    'bufferTime',
    'bufferToggle',
    'bufferWhen',
    'pairwise',
    'windowCount'
  ]
};
