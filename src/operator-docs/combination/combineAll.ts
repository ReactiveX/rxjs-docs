import { OperatorDoc } from '../operator.model';

export const combineAll: OperatorDoc = {
  name: 'combineAll',
  operatorType: 'combination',
  signature: 'public combineAll(project: function): Observable',
  parameters: [
    {
      name: 'project',
      type: 'function',
      attribute: 'optional',
      description: {
        en: `An optional function to map the most recent values from each inner Observable into a new result.
        Takes each of the most recent values from each collected inner Observable as arguments, in order.`,
        ru: `Необязательная функция для отображения последних значений из каждого внутреннего наблюдаемого в новый результат.
        Принимает каждое из последних значений из каждого собранного внутреннего Observable в качестве аргументов в порядке.`
      }
    }
  ],
  marbleUrl: 'http://reactivex.io/rxjs/img/combineAll.png',
  shortDescription: {
    description: `
      Flattens an Observable-of-Observables by applying <a href='/operators#combineLatest' class="markdown-code">combineLatest</a>
      when the Observable-of-Observables completes.`,
    extras: []
  },
  walkthrough: {
    description: {
      en: `
        <p>
          Takes an Observable of Observables, and collects all Observables from it.
          Once the outer Observable completes, it subscribes to all collected
          Observables and combines their values using the <a href='/operators#combineLatest' class="markdown-code">combineLatest</a>
          strategy, such that:
        </p>
        <ul>
          <li>Every time an inner Observable emits, the output Observable emits.</li>
          <li>When the returned observable emits, it emits all of the latest values by:
            <ul>
              <li>
                If a <span class="markdown-code">project</span> function is provided, it is called with each recent value
                from each inner Observable in whatever order they arrived, and the result
                of the <span class="markdown-code">project</span> function is what is emitted by the output Observable.
              </li>
              <li>
                If there is no <span class="markdown-code">project</span> function, an array of all of the most recent
                values is emitted by the output Observable.
              </li>
            </ul>
          </li>
        </ul>
      `,
      ru: `
        <p>
        Оператор combineAll Takes берет Observable-of-Observables, и собирает все Observabl’ы из него.
        Как только внешний Observable отрабатывает, он подписывается на все собранные Observabl’ы и
        объединяет их значения используя стратегию <a href='/operators#combineLatest' class="markdown-code">combineLatest</a>:
        </p>
        <ul>
          <li>Каждый раз когда внутренний Observable отдает элементы, то же самое делает выходной Observable.</li>
          <li>Когда возвращаемый Observable отдает значения, он отдает самые последние значения одним из следующих способов:
            <ul>
              <li>
              Если предусмотрена функция <span class="markdown-code">project</span>,
              она вызывается с каждым последним значением из каждого внутреннего Observabl'а в порядке,
              в котором они были получены, а результатом функции <span class="markdown-code">project</span> является то,
              что отдает выходной Observable.
              </li>
              <li>
              Если нет функции <span class="markdown-code">project</span>, массив всех самых последних значений отдается
              из выходного Observabl'a.
              </li>
            </ul>
          </li>
        </ul>
      `
    }
  },
  examples: [
    {
      name: {
        en:
          'Map two click events to a finite interval Observable, then apply <span class="markdown-code">combineAll</span>',
        ru: 'Маппит 2 события клика в единый Observable'
      },
      code: `
        const clicks = Rx.Observable.fromEvent(document, 'click');
        const higherOrder = clicks.map(ev =>
          Rx.Observable.interval(Math.random()*2000).take(3)
        )
        .take(2);
        const result = higherOrder.combineAll();
        result.subscribe(x => console.log(x));
      `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/peparawuvo/1/embed?js,console,output'
      }
    }
  ],
  relatedOperators: ['combineLatest', 'mergeAll'],
  additionalResources: []
};
