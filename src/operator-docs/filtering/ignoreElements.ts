import { OperatorDoc } from '../operator.model';

export const ignoreElements: OperatorDoc = {
  name: 'ignoreElements',
  operatorType: 'filtering',
  signature: 'public ignoreElements(): OperatorFunction<any, never>',
  marbleUrl: 'http://reactivex.io/rxjs/img/ignoreElements.png',
  shortDescription: {
    description: `Ignores all items emitted by the source Observable and only passes calls of
      <span class="markdown-code">complete</span> or <span class="markdown-code">error</span>`
  },
  walkthrough: {
    description: `<p>
      <span class="markdown-code">ignoreElements</span>
      Returns an empty Observable that only calls 'complete' or 'error', based on which one is called by source Observable
    </p>`
  },
  examples: [
    {
      name: 'Ignores all elements from source',
      code: `
      import { interval } from 'rxjs/observable/interval';
      import { take, ignoreElements } from 'rxjs/operators';
      //emit value every 100ms
      const source = interval(100);
      //ignore everything but complete
      const example = source.pipe(take(5), ignoreElements());
      //output: "COMPLETE!"
      const subscribe = example.subscribe(
        val => console.log('NEXT:',val),
        val => console.log('ERROR:',val),
        () => console.log('COMPLETE!')
      );
     `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/yiyefelubi/1/edit?js,console'
      }
    },
    {
      name: 'Displaying Error',
      code: `
      //emit value every 100ms
      const source = Rx.Observable.interval(100);
      //ignore everything but error
      const error = source
        .flatMap(val => {
          if(val === 4){
            return Rx.Observable.throw('ERROR AT'val);
          }
          return Rx.Observable.of(val);
        })
        .ignoreElements();
      //output: "ERROR: ERROR AT 4"
      const subscribe = error.subscribe(
        val => console.log('NEXT:',val),
        val => console.log('ERROR:',val),
        () => console.log('SECOND COMPLETE!')
      );
     `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/gogonawuze/1/edit?js,console'
      }
    }
  ]
};
