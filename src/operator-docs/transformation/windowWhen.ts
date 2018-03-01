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
          import { interval } from "rxjs/observable/interval";
          import { mergeAll, windowWhen } from "rxjs/operators";

          const clicks = Rx.Observable.fromEvent(document, 'click');
          const result = clicks
            .windowWhen(() => interval(1000 + Math.random() * 4000))
            .map(win => win.take(2)) // each window has at most 2 emissions
            .mergeAll(); // flatten the Observable-of-Observables
          result.subscribe(x => console.log(x));

          /*
            Example console output
            [object MouseEvent] {
              altKey: false,
              AT_TARGET: 2,
              bubbles: true,
              BUBBLING_PHASE: 3,
              button: 0,
              buttons: 0,
              cancelable: true,
              cancelBubble: false,
              CAPTURING_PHASE: 1,
              clientX: 80,
              clientY: 70,
              .... //Entire object properties
              }
          */
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
