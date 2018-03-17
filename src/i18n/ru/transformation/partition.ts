import { OperatorDoc } from '../../../operator-docs';

export const partition: OperatorDoc = {
  name: 'partition',
  operatorType: 'transformation',
  signature:
    'public partition(predicate: function(value: T, index: number): boolean, thisArg: any): [Observable<T>, Observable<T>]',
  marbleUrl: 'http://reactivex.io/rxjs/img/partition.png',
  parameters: [
    {
      name: 'predicate',
      type: 'function(value: T, index: number): boolean',
      attribute: '',
      description: `Функция, которая оценивает каждое значение, возвращаемое исходным Observable. Если он возвращает «true»,
      значение возвращается в первом Observable в возвращаемом массиве, если «false», то значение отдается во втором Observable
      в массиве.Параметр «index» - это число «i» для i-й эмиссии источника, которая произошла после подписки, начиная с номера «0».`
    },
    {
      name: 'thisArg',
      type: 'any',
      attribute: 'optional',
      description: `Необязательный аргумент для определения значения «this» в функции предиката.`
    }
  ],
  shortDescription: {
    description: `Разделяет исходный Observable на два, один со значениями, которые удовлетворяют предикат, а другой
    со значениями которые его не удовлетворяют.`,
    extras: [
      {
        type: 'Tip',
        text: `
        Он похож на <a href="#/operators/filter" class="markdown-code">filter</a>, но возвращает два Observable: один, как вывод
        <a href="#/operators/filter" class="markdown-code">filter</a>, а другой со значениями, которые не прошли условие.
        `
      }
    ]
  },
  walkthrough: {
    description: `
      <p>
        <span class="markdown-code">partition</span> отдает массив с двумя Observable, которые разделяют значения из sourceObservable через
        заданную функцию <span class="markdown-code">предиката</span>. Первый Observable в этом массиве отдает исходные значения,
        для которых предикатный аргумент возвращает true. Второй Observable испускает исходные значения, для которых предикат
        возвращает false. Первый ведет себя как <a href="#/operators/filter" class="markdown-code">filter</a> а второй ведет себя как
        <a href="#/operators/filter" class="markdown-code">filter</a> с предикатом.
      </p>
    `
  },
  examples: [
    {
      name:
        'Разделение событий кликов по DIV-элементам и кликов по другим местам',
      code: `
        import { partition } from 'rxjs/operators';
        import { fromEvent } from 'rxjs/observable/fromEvent';

        const clicks = fromEvent(document, 'click');
        const parts = clicks.pipe(partition(ev => ev.target.tagName === 'DIV'));
        const clicksOnDivs = parts[0];
        const clicksElsewhere = parts[1];
        clicksOnDivs.subscribe(x => console.log('DIV clicked: ', x));
        clicksElsewhere.subscribe(x => console.log('Other clicked: ', x));
      `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/vekisov/embed?js,console,output'
      }
    }
  ],
  relatedOperators: ['filter'],
  additionalResources: []
};
