import { OperatorDoc } from '../../../operator-docs';

// ported from:
// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-distinctUntilChanged

export const distinctUntilChanged: OperatorDoc = {
  name: 'distinctUntilChanged',
  operatorType: 'filtering',
  signature: 'public distinctUntilChanged(compare: function): Observable',
  useInteractiveMarbles: true,
  parameters: [
    {
      name: 'compare',
      type: 'function',
      attribute: 'optional',
      description:
        'Необязательная функция сравнения, вызываемая для проверки того, отличается ли элемент от предыдущего элемента в источнике.'
    }
  ],
  marbleUrl: 'http://reactivex.io/rxjs/img/distinctUntilChanged.png',
  shortDescription: {
    description: `
    Возвращает Observable, которое возвращает все элементы, отдаваемые исходным Observable, которые отличаются по сравнению
    с предыдущим элементом.
    `,
    extras: [
      {
        type: 'Tip',
        text: `
        <span class="markdown-code">distinctUntilChanged</span> использует
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness"
          target="_blank"
          class="markdown-code">
          ===
        </a> сравнение по умолчанию.
       `
      }
    ]
  },
  walkthrough: {
    description: `
      <p>
        Этот оператор будет сравнивать каждый отдаваемый элемент от источника с ранее
        возвращенным элементом, отдавая только отдельные значения для сравнения, такие как:
      </p>
      <ul>
        <li>
          Если предусмотрена функция компаратора, она будет вызвана для каждого элемента, чтобы проверить, должен ли он возвращаться.
        </li>
        <li>
          Если функция компаратора не указана, по умолчанию используется проверка равенства.
        </li>
      </ul>
    `
  },
  examples: [
    {
      name: 'Простой пример с числами',
      code: `
      import { distinctUntilChanged } from 'rxjs/operators';
      import { of } from 'rxjs/observable/of';

      of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4)
       .pipe(distinctUntilChanged())
       .subscribe(x => console.log(x));
      `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/poxayavuge/embed?js,console'
      }
    },
    {
      name: 'Пример использования функции сравнения',
      code: `
      import { distinctUntilChanged } from 'rxjs/operators';
      import { of } from 'rxjs/observable/of';

       of(
         { age: 4, name: 'Foo'},
         { age: 7, name: 'Bar'},
         { age: 5, name: 'Foo'},
         { age: 6, name: 'Foo'}
        )
        .pipe(distinctUntilChanged((p, q) => p.name === q.name))
        .subscribe(x => console.log(x));
      `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/duhexuhoxo/embed?js,console'
      }
    }
  ],
  relatedOperators: [],
  additionalResources: []
};
