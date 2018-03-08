import { OperatorDoc } from '../../../operator-docs';

export const empty: OperatorDoc = {
  name: 'empty',
  operatorType: 'creation',
  signature: 'public empty(scheduler?: IScheduler): Observable',
  parameters: [
    {
      name: 'scheduler',
      type: 'IScheduler',
      attribute: 'optional',
      description: 'Позволяет планировать отдачу завершенного уведомления.'
    }
  ],
  marbleUrl: 'http://reactivex.io/rxjs/img/empty.png',
  shortDescription: {
    description:
      'Создает Observable, который не передаёт никакие объекты Observer и сразу же возвращает завершенное уведомление.'
  },
  walkthrough: {
    description: `
       Этот статический оператор полезен для создания простого Observable, который испускает только завершенное
       уведомление. Его можно использовать для составления с другими Observables`
  },
  examples: [
    {
      name: 'Observable завершается немедленно',
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
      name: 'Observable возвращает исходное значение и завершается',
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
      name: `Привязать и выровнять только нечетные числа в последовательности 'ax', 'bx', 'cx'`,
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
