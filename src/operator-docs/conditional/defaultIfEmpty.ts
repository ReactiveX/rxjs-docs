import { OperatorDoc } from '../operator.model';

export const defaultIfEmpty: OperatorDoc = {
  name: 'defaultIfEmpty',
  operatorType: 'conditional',
  signature: 'public defaultIfEmpty(defaultValue: any): Observable',
  marbleUrl: 'http://reactivex.io/rxjs/img/defaultIfEmpty.png',
  parameters: [
    {
      name: 'defaultValue',
      type: 'any',
      attribute: 'optional default: null',
      description: 'The default value used if the source Observable is empty.'
    }
  ],
  shortDescription: {
    description: `Emits a given value if the source Observable completes without emitting any
        <span class="markdown-code">next</span> value, otherwise mirrors the source Observable.
    `,
    extras: [
      {
        type: 'Tip',
        text: `
            If the source Observable turns out to be empty, then this operator will emit a default value.
        `
      }
    ]
  },
  walkthrough: {
    description: `
      <p>
        <span class="markdown-code">defaultIfEmpty</span> emits the values emitted by the source
        Observable or a specified default value if the source Observable is empty (completes
        without having emitted any <span class="markdown-code">next</span> value).
      </p>
    `
  },
  examples: [
    {
      name: `If no clicks happen in 3 seconds, then emit 'no clicks'`,
      code: `
        import { fromEvent } from 'rxjs/observable/fromEvent';
        import { interval } from 'rxjs/observable/interval';
        import { defaultIfEmpty, takeUntil } from 'rxjs/operators';

        const clicks = fromEvent(document, 'click');
        const result = clicks.pipe(
          takeUntil(interval(3000)),
          defaultIfEmpty('no clicks')
        );

        result.subscribe(x => console.log(x));

        /*
        Example console output
        no clicks
        */
      `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/verovam/embed?js,console,output'
      }
    }
  ],
  relatedOperators: ['empty', 'last'],
  additionalResources: []
};
