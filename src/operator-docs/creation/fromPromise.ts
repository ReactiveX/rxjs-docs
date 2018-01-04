import { OperatorDoc } from '../operator.model';

export const fromPromise: OperatorDoc = {
  name: 'fromPromise',
  operatorType: 'creation',
  signature:
    'public static fromPromise(promise: Promise<T>, scheduler: Scheduler): Observable<T>',
  parameters: [
    {
      name: 'promise',
      type: 'Promise<T>',
      attribute: '',
      description: 'The promise to be converted.'
    },
    {
      name: 'scheduler',
      type: 'Scheduler',
      attribute: 'optional',
      description:
        'An optional IScheduler to use for scheduling the delivery of the resolved value (or the rejection).s'
    }
  ],
  shortDescription: {
    description: 'Converts a Promise to an Observable.'
  },
  walkthrough: {
    description: `Converts an ES2015 Promise or a Promises/A+ spec compliant Promise to an Observable.
    If the Promise resolves with a value, the output Observable emits that resolved value as a next,
    and then completes. If the Promise is rejected, then the output Observable emits the corresponding Error.`
  },
  examples: [
    {
      name: 'Convert the Promise returned by Fetch to an Observable',
      code: `
        const result = Rx.Observable.fromPromise(fetch('http://myserver.com/'));
        result.subscribe(x => console.log(x), e => console.error(e));`,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/warotosaco/embed?js,console,output'
      }
    }
  ],
  relatedOperators: ['bindCallback', 'from', 'toPromise']
};
