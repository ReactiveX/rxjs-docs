import { OperatorDoc } from '../operator.model';

export const sampleTime: OperatorDoc = {
  name: 'sampleTime',
  operatorType: 'filtering',
  signature:
    'public sampleTime(period: number, scheduler: Scheduler): Observable<T>',
  marbleUrl: 'http://reactivex.io/rxjs/img/sampleTime.png',
  parameters: [
    {
      name: 'period',
      type: 'number',
      attribute: '',
      description: `The sampling period expressed in milliseconds or the time unit determined internally by the optional scheduler.`
    },
    {
      name: 'scheduler',
      type: 'Scheduler',
      attribute: 'optional default: async',
      description: `The IScheduler to use for managing the timers that handle the sampling.`
    }
  ],
  shortDescription: {
    description: `Emits the most recently emitted value from the source Observable within periodic time intervals.`,
    extras: [
      {
        type: 'Tip',
        text: `Samples the source Observable at periodic time intervals, emitting what it samples.`
      }
    ]
  },
  walkthrough: {
    description: `
    <p>
    <span class="markdown-code">sampleTime</span> periodically looks at the source
    Observable and emits whichever value it has most recently emitted since the previous
    sampling, unless the source has not emitted anything since the previous sampling.
    The sampling happens periodically in time every <span class="markdown-code">period</span>
    milliseconds (or the time unit defined by the optional <span class="markdown-code">scheduler</span> argument).
    The sampling starts as soon as the output Observable is subscribed.
    </p>
    `
  },
  examples: [
    {
      name: 'Every second, emit the most recent click at most once',
      code: `
            const clicks = Rx.Observable.fromEvent(document, 'click');
            const result = clicks.sampleTime(1000);
            result.subscribe(x => console.log(x));
      `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/hohulon/embed?js,console,output'
      }
    }
  ],
  relatedOperators: [
    'auditTime',
    'debounceTime',
    'delay',
    'sample',
    'throttleTime'
  ],
  additionalResources: []
};
