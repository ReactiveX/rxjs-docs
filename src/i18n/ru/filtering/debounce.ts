import { OperatorDoc } from '../../../operator-docs';

export const debounce: OperatorDoc = {
  name: 'debounce',
  operatorType: 'filtering',
  signature:
    'public debounce(durationSelector: function(value: T): SubscribableOrPromise): Observable',
  marbleUrl: 'http://reactivex.io/rxjs/img/debounce.png',
  parameters: [
    {
      name: 'durationSelector',
      type: 'function(value: T): SubscribableOrPromise',
      attribute: '',
      description: `Функция, которая получает значение из исходного Observable, для вычисления
      длительности таймаута для каждого исходного значения, возвращается в качестве Observable или Promise.`
    }
  ],
  shortDescription: {
    description: `Emits a value from the source Observable only after a particular time span determined
       by another Observable has passed without another source emission.`,
    extras: [
      {
        type: 'Tip',
        text: `
        It's like debounceTime, but the time span of emission silence is determined by a second Observable.
        `
      }
    ]
  },
  walkthrough: {
    description: `
      <p>
        debounce задерживает значения, отдаваемые исходным Observable, но отбрасывает предыдущие задержанные значения,
        если новое значение прибывает на исходный Observable. Этот оператор отслеживает самое последнее значение из исходного
        Observable и порождает "отложенный" (delayed) Observable, вызывая функцию durationSelector.
        Значение отдается только тогда, когда "отложенный" (delayed) Observable отдает значение или завершается, и,
        если никакое другое значение не было отдано на исходный Observable, поскольку продолжительный Observable был порожден.
        Если появляется новое значение до того, как "отложенный" (delayed) Observable отдаст значение, предыдущее значение будет
        опущено и не будет отдано на выходном Observable.
      </p>
      <p>
        Подобно debounceTime, это оператор ограничения скорости, а также оператор, зависящий от задержки,
        поскольку выходные эмиссии не обязательно происходят одновременно с тем, как они происходят на исходном Observable.
      </p>
    `
  },
  examples: [
    {
      name: 'Отдать событие последнего клика из множества кликов подряд',
      code: `
        import { debounce } from 'rxjs/operators';
        import { fromEvent } from 'rxjs/observable/fromEvent';
        import { interval } from 'rxjs/observable/interval';

        const clicks = fromEvent(document, 'click');
        const result = clicks.pipe(debounce(() => interval(1000)));
        result.subscribe(x => console.log(x));
      `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/zuyafikiqa/embed?js,console,output'
      }
    }
  ],
  relatedOperators: ['debounceTime', 'audit', 'delayWhen', 'throttle'],
  additionalResources: []
};
