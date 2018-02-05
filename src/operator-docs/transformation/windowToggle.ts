import { OperatorDoc } from '../operator.model';

export const windowToggle: OperatorDoc = {
  name: 'windowToggle',
  operatorType: 'transformation',
  signature:
    'public windowToggle(openings: Observable<O>, closingSelector: function(value: O): Observable): Observable<Observable<T>>',
  marbleUrl: 'http://reactivex.io/rxjs/img/windowToggle.png',
  parameters: [
    {
      name: 'openings',
      type: 'Observable<O>',
      attribute: '',
      description: 'An observable of notifications to start new windows.'
    },
    {
      name: 'closingSelector',
      type: 'function(value: O): Observable',
      attribute: 'optional',
      description: `
      A function that takes the value emitted by the 'openings' observable
      and returns an Observable, which, when it emits (either 'next' or
      'complete'), signals that the associated window should complete.
    `
    }
  ],
  shortDescription: {
    description: `
    Branch out the source Observable values as a nested Observable starting
    from an emission from <span class="markdown-code">openings</span> and
    ending when the output of <span class="markdown-code">closingSelector</span> emits.
  `,
    extras: [
      {
        type: 'Tip',
        text: `
        It's like <a href="#/operators/bufferToggle" class="markdown-code">bufferToggle</a>,
        but emits a nested Observable instead of an array.
      `
      }
    ]
  },
  walkthrough: {
    description: `
    <p>
      Returns an Observable that emits windows of items it collects from the source Observable.
      The output Observable emits windows that contain those items emitted by the source Observable
      between the time when the <span class="markdown-code">openings</span> Observable emits an
      item and when the Observable returned by <span class="markdown-code">closingSelector</span>
      emits an item.
    </p>
  `
  },
  examples: [
    {
      name: 'Every other second, emit the click events from the next 500ms',
      code: `
      import { fromEvent } from 'rxjs/observable/fromEvent';
      import { empty } from 'rxjs/observable/empty';
      import { interval } from 'rxjs/observable/interval';
      import { mergeAll, windowToggle } from 'rxjs/operators';

      const clicks = fromEvent(document, 'click');
      const openings = interval(1000);
      const result = clicks.windowToggle(openings, i =>
        i % 2 ? interval(500) : empty()
      ).mergeAll();
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
        ....            //Entire object properties
      }
      */
    `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/pemosar/embed?js,console,output'
      }
    }
  ],
  relatedOperators: [
    'window',
    'windowTime',
    'windowCount',
    'windowWhen',
    'bufferToggle'
  ],
  additionalResources: []
};
