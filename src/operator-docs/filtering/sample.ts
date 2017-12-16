import { OperatorDoc } from '../operator.model';

export const sample: OperatorDoc = {
  name: 'sample',
  operatorType: 'filtering',
  signature: 'public sample(notifier: Observable<any>): Observable<T>',
  marbleUrl: 'http://reactivex.io/rxjs/img/sample.png',
  parameters: [
    {
      name: 'notifier',
      type: 'Observable<any>',
      attribute: '',
      description: `The Observable to use for sampling the source Observable.`
    }
  ],
  shortDescription: {
    description: `
      Emits the most recently emitted value from the source Observable
      whenever another Observable, the <span class="markdown-code">notifier</span>, emits.
    `,
    extras: [
      {
        type: 'Tip',
        text: `It's like sampleTime, but samples whenever the notifier Observable emits something.`
      }
    ]
  },
  walkthrough: {
    description: `
    <p>
      Whenever the <span class="markdown-code">notifier</span> Observable emits a value or completes,
      <span class="markdown-code">sample</span> looks at the source Observable and emits whichever value
      it has most recently emitted since the previous sampling,
      unless the source has not emitted anything since the previous sampling.
      The <span class="markdown-code">notifier</span> is subscribed to as soon as the output Observable is subscribed.
    </p>
    `
  },
  examples: [
    {
      name: 'On every click, sample the most recent "seconds" timer',
      code: `
        const seconds = Rx.Observable.interval(1000);
        const clicks = Rx.Observable.fromEvent(document, 'click');
        const result = seconds.sample(clicks);
        result.subscribe(x => console.log(x))
      `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/xapiviz/embed?js,console,output'
      }
    }
  ],
  relatedOperators: ['audit', 'debounce', 'sampleTime', 'throttle'],
  additionalResources: []
};
