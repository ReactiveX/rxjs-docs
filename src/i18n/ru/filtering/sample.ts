import { OperatorDoc } from '../../../operator-docs';

export const sample: OperatorDoc = {
  name: 'sample',
  operatorType: 'filtering',
  signature: `public sample(notifier: Observable<any>): Observable<T>`,
  parameters: [
    {
      name: 'notifier',
      type: 'Observable<any>',
      attribute: '',
      description:
        'Observable который используют для выборки исходного Observable.'
    }
  ],
  marbleUrl: 'http://reactivex.io/rxjs/img/sample.png',
  shortDescription: {
    description:
      'Отдает последнее возвращенное значение из исходного Observable когда другой Observable-уведомитель производит эмиссию.',
    extras: [
      {
        type: 'Tip',
        text: `Это похоже на sampleTime, но производит выборку, когда Observable-уведомитель возвращает что-то.`
      }
    ]
  },
  walkthrough: {
    description: `
      <p>
       Всякий раз, когда Observable-уведомитель отдает значение или завершается, sample смотрит на исходный
       Observable и отдает значение, которое тот недавно отдал (со времени предыдущей выборки), если только
       источник не отдал ничего с момента предыдущей выборки.
      </p>
      <p>
       Уведомитель подписывается в тот момент, когда подписывается выходной Observable .
      </p>
    `
  },
  examples: [
    {
      name:
        'При каждом клике каждые 2 секунды производится выборка значения из источника',
      code: `
        import { sample } from 'rxjs/operators';
        import { interval } from 'rxjs/observable/interval';

        //emit value every 1s
        const source = interval(1000);
        //sample last emitted value from source every 2s
        const example = source.pipe(sample(interval(2000)));
        //output: 2..4..6..8..
        const subscribe = example.subscribe(val => console.log(val));
      `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/gemebopifu/1/embed?js,console'
      }
    }
  ],
  relatedOperators: ['audit', 'debounce', 'sampleTime', 'throttle']
};
