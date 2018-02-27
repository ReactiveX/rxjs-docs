import { OperatorDoc } from '../operator.model';

export const skipUntil: OperatorDoc = {
  name: 'skipUntil',
  operatorType: 'filtering',
  returnValue: 'Observable<T>',
  signature: 'public skipUntil(notifier: Observable): Observable<T>',
  parameters: [
    {
      name: 'notifier',
      type: 'Observable',
      attribute: '',
      description: `The second Observable that has to emit an item before
       the source Observable's elements begin to be mirrored by the resulting Observable.`
    }
  ],
  marbleUrl: 'http://reactivex.io/rxjs/img/skipUntil.png',
  shortDescription: {
    description:
      'Returns an Observable that skips items emitted by the source Observable until a second Observable emits an item.'
  },
  examples: [
    {
      name: 'Emits every 1s after 5 seconds',
      code: `
        import { skipUntil } from 'rxjs/operators';
        import { interval } from 'rxjs/observable/interval';
        import { timer } from 'rxjs/observable/timer';

        //emit every 1s
        const source = interval(1000);
        //skip emitted values from source until inner observable emits (6s)
        const example = source.pipe(skipUntil(timer(6000)));
        //output: 5...6...7...8........
        const subscribe = example.subscribe(val => console.log(val));
      `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/tapizososu/embed?js,console,output'
      }
    }
  ]
};
