import { OperatorDoc } from '../operator.model';

export const windowCount: OperatorDoc = {
  name: 'windowCount',
  operatorType: 'transformation',
  signature:
    'public windowCount(windowSize: number, startWindowEvery: number): Observable<Observable<T>>',
  marbleUrl: 'http://reactivex.io/rxjs/img/windowCount.png',
  parameters: [
    {
      name: 'windowSize',
      type: 'number',
      attribute: '',
      description: 'The maximum number of values emitted by each window.'
    },
    {
      name: 'startWindowEvery',
      type: 'number',
      attribute: 'optional',
      description: `
        Interval at which to start a new window. For example if 'startWindowEvery' is '2',
        then a new window will be started on every other value from the source. A new window
        is started at the beginning of the source by default.
      `
    }
  ],
  shortDescription: {
    description: `Branch out the source Observable values as a nested Observable with each
    nested Observable emitting at most <span class="markdown-code">windowSize</span> values.
    `,
    extras: [
      {
        type: 'Tip',
        text: `
          It's like <a href="#/operators/bufferCount" class="markdown-code">bufferCount</a>,
          but emits a nested Observable instead of an array.
        `
      }
    ]
  },
  walkthrough: {
    description: `
      <p>
        Returns an Observable that emits windows of items it collects from the source Observable.
        The output Observable emits windows every <span class="markdown-code">startWindowEvery</span>
        items, each containing no more than <span class="markdown-code">windowSize</span> items.
        When the source Observable completes or encounters an error, the output Observable emits the current
        window and propagates the notification from the source Observable. If <span class="markdown-code">
        startWindowEvery</span> is not provided, then new windows are started immediately at the start of the
        source and when each window completes with size <span class="markdown-code">windowSize</span>.
      </p>
    `
  },
  examples: [
    {
      name: 'Ignore every 3rd click event, starting from the first one',
      code: `
        const clicks = Rx.Observable.fromEvent(document, 'click');
        const result = clicks.windowCount(3)
          .map(win => win.skip(1)) // skip first of every 3 clicks
          .mergeAll(); // flatten the Observable-of-Observables
        result.subscribe(x => console.log(x));
      `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/haruca/embed?js,console,output'
      }
    },
    {
      name: 'Ignore every 3rd click event, starting from the third one',
      code: `
        const clicks = Rx.Observable.fromEvent(document, 'click');
        const result = clicks.windowCount(2, 3)
          .mergeAll(); // flatten the Observable-of-Observables
        result.subscribe(x => console.log(x));
      `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/kogifo/embed?js,console,output'
      }
    }
  ],
  relatedOperators: [
    'window',
    'windowTime',
    'windowToggle',
    'windowWhen',
    'bufferCount'
  ],
  additionalResources: []
};
