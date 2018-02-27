import { OperatorDoc } from '../operator.model';

export const empty: OperatorDoc = {
  name: 'empty',
  operatorType: 'creation',
  returnValue: 'Observable',
  signature: 'public empty(scheduler?: IScheduler): Observable',
  parameters: [
    {
      name: 'scheduler',
      type: 'IScheduler',
      attribute: 'optional',
      description:
        'Allows scheduling the emission of the complete notification.'
    }
  ],
  marbleUrl: 'http://reactivex.io/rxjs/img/empty.png',
  shortDescription: {
    description:
      'Creates an Observable that emits no items to the Observer' +
      ' and immediately emits a complete notification.'
  },
  walkthrough: {
    description: `This static operator is useful for creating a simple
       Observable that only emits the complete notification. It can be used for
       composing with other Observables`
  },
  examples: [
    {
      name: 'Observable completes immediately',
      code: `
          import { empty } from 'rxjs/observable/empty';

          const observable = empty();
          const subscription = observable.subscribe({
            next: () => console.log('next'), // does not log anything
            complete: () => console.log('complete'), // logs 'complete'
          });
      `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/hojacunecu/1/embed?js,console,output'
      }
    },
    {
      name: 'Observable emits initial value then completes',
      code: `
        import { startWith } from 'rxjs/operators';
        import { empty } from 'rxjs/observable/empty';

        const observable = empty().pipe(startWith('initial value'));
        const subscription = observable.subscribe({
          next: (val) => console.log(\`next: \${val}\`), // logs 'next: initial value'
          complete: () => console.log('complete'), // logs 'complete'
        });
      `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/tubonoradi/1/embed?js,console,output'
      }
    },
    {
      name: `Map and flatten only odd numbers to the sequence 'ax', 'bx', 'cx'`,
      code: `
        import { mergeMap } from 'rxjs/operators';
        import { of } from 'rxjs/observable/of';
        import { empty } from 'rxjs/observable/empty';

        const source = of(1, 2, 3, 4, 5, 6, 7, 8, 9);
        const result = source.pipe(
          mergeMap(
            x => x % 2 === 1 ? of(\`a\${x}\`, \`b\${x}\`, \`c\${x}\`) :
                              empty()
          )
        );
        const subscription = result.subscribe({
          next: (x) => console.log(x), // logs result values
          complete: () => console.log('complete'), // logs 'complete'
        });
      `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/qazabojiri/embed?js,console,output'
      }
    }
  ],
  relatedOperators: ['create', 'of', 'throw']
};
