import { OperatorDoc } from '../operator.model';

export const expand: OperatorDoc = {
  name: 'expand',
  operatorType: 'transformation',
  signature:
    'public expand(project: function(value: T, index: number), concurrent: number, scheduler: Scheduler): Observable',
  parameters: [
    {
      name: 'project',
      type: 'function(value: T, index: number)',
      attribute: '',
      description: `A function that, when applied to an item emitted by the source or the output Observable, returns an Observable.`
    },
    {
      name: 'concurrent',
      type: 'number',
      attribute: 'optional default: Number.POSITIVE_INFINITY',
      description: `Maximum number of input Observables being subscribed to concurrently.`
    },
    {
      name: 'scheduler',
      type: 'Scheduler',
      attribute: 'optional default: null',
      description: `The IScheduler to use for subscribing to each projected inner Observable.`
    }
  ],
  useInteractiveMarbles: true,
  marbleUrl: 'http://reactivex.io/rxjs/img/expand.png',
  shortDescription: {
    description: `Recursively projects each source value to an Observable which is merged in the output Observable.`
  },
  walkthrough: {
    description: `<p>Returns an Observable that emits items based on applying a function
     that you supply to each item emitted by the source Observable,
     where that function returns an Observable,
     and then merging those resulting Observables and
     emitting the results of this merger. <i>Expand</i> will re-emit on the output
     Observable every source value.
     Then, each output value is given to the <code>project</code> function
     which returns an inner Observable to be merged on the output Observable.
     Those output values resulting from the projection are also given to the
     <code>project</code> function to produce new output values.
     This is how <i>expand</i> behaves recursively.</p>`
  },
  examples: [
    {
      name:
        'Start emitting the powers of two on every click, at most 10 of them',
      code: `
      import { fromEvent, of } from 'rxjs/observable/fromEvent';
      import { expand, mapTo, delay, take } from 'rxjs/operators';

      const clicks = fromEvent(document, 'click');
      const powersOfTwo = clicks.pipe(mapTo(1)).pipe(expand(x=>of(2*x).pipe(delay(1000)))).pipe(take(10));
      powersOfTwo.subscribe(x =>console.log(x));
      /*
        Example console output:
        1
        2
        4
        8
        16
        32
        64
        128
        256
        512
      */
      `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/bejokih/1/embed?js,console,output'
      }
    }
  ],
  relatedOperators: ['mergeMap', 'mergeScan'],
  additionalResources: []
};
