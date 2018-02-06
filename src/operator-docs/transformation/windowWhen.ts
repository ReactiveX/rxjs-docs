import { OperatorDoc } from '../operator.model';

export const windowWhen: OperatorDoc = {
  name: 'windowWhen',
  operatorType: 'transformation',
  signature: `public windowWhen(closingSelector: function(): Observable): Observable`,
  parameters: [
    {
      name: 'closingSelector',
      type: 'function(): Observable',
      attribute: '',
      description: `
        A function that takes no arguments and returns an Observable that signals
        (on either 'next' or 'complete') when to close the previous window and start a new one.`
    }
  ],
  marbleUrl: 'http://reactivex.io/rxjs/img/windowWhen.png',
  shortDescription: {
    description: `
      Branch out the source Observable values as a nested Observable using a factory function of
      closing Observables to determine when to start a new window.`,
    extras: [
      {
        type: 'Tip',
        text: `
          It's like <a href="#/operators/bufferWhen" class="markdown-code">bufferWhen</a>,
          but emits a nested Observable instead of an array.
        `
      }
    ]
  },
  walkthrough: {
    description: `
      Returns an Observable that emits windows of items it collects from the source Observable. The output Observable
      emits connected, non-overlapping windows. It emits the current window and opens a new one whenever the Observable
      produced by the specified <span class="markdown-code">closingSelector</span> function emits an item. The first
      window is opened immediately when subscribing to the output Observable.`
  },
  examples: [
    {
      name:
        'Emit only the first two clicks events in every window of [1-5] random seconds',
      code: `

      `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/zegowub/embed?js,console,output'
      }
    }
  ],
  relatedOperators: [
    'window',
    'windowCount',
    'windowTime',
    'windowToggle',
    'bufferWhen'
  ]
};
