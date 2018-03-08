import { OperatorDoc } from '../../../operator-docs';

export const skip: OperatorDoc = {
  name: 'skip',
  operatorType: 'filtering',
  signature: 'public skip(count: Number): Observable',
  parameters: [
    {
      name: 'count',
      type: 'Number',
      attribute: '',
      description:
        'Возвращает Observable, который пропускает первые элементы счета, возвращаемые исходным Observable.'
    }
  ],
  marbleUrl: 'http://reactivex.io/rxjs/img/skip.png',
  shortDescription: {
    description:
      'Возвращает Observable, который пропускает первые элементы счета, возвращаемые исходным Observable.'
  },
  examples: [
    {
      name: 'Пропуск значений до эмиссии',
      code: `
        import { skip } from 'rxjs/operators';
        import { interval } from 'rxjs/observable/interval';

        //emit every 1s
        const source = interval(1000);
        //skip the first 5 emitted values
        const example = source.pipe(skip(5));
        //output: 5...6...7...8........
        const subscribe = example.subscribe(val => console.log(val));
      `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/hacepudabi/1/embed?js,console'
      }
    }
  ]
};
