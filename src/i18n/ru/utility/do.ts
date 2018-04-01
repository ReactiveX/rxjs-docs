import { OperatorDoc } from '../../../operator-docs';

export const doOperator: OperatorDoc = {
  name: 'do',
  operatorType: 'utility',
  signature:
    'public do(nextOrObserver: Observer | function, error: function, complete: function): Observable',
  parameters: [
    {
      name: 'nextOrObserver',
      type: 'Observer|function',
      attribute: 'optional',
      description:
        'Обычный Observer объект или функция обратного вызова для `next`.'
    },
    {
      name: 'error',
      type: 'function',
      attribute: 'optional',
      description:
        'Функция обратного вызова на наличие ошибок в исходном Observable.'
    },
    {
      name: 'complete',
      type: 'function',
      attribute: 'optional',
      description:
        'Функция обратного вызова для завершения исходного Observable.'
    }
  ],
  marbleUrl: 'http://reactivex.io/rxjs/img/do.png',
  shortDescription: {
    description: `Выполняет побочный эффект для каждой отдачи на исходном Observable,
      но возвращает Observable, который идентичен исходному.
      <span class="informal">Перехватывает каждое событие на исходном Observable и запускает
      функцию, но возвращает результат, который идентичен источнику пока не возникнут ошибки.</span>`
  },
  walkthrough: {
    description: `
      <p>Возвращает зеркальный поток (Observable) исходного потока (Observable), но
      модифицированный так, что данный Observer вызывается для выполнения побочного
      эффекта для каждого значения, ошибки и завершения, испускаемого исходным потоком.
      </p>
      <p>Любые ошибки, возникающие в вышеупомянутом потоке или обработчиках,
      безопасно отправляются по пути ошибки выходного потока. Этот оператор полезен
      для отладки ваших Observable на предмет правильных значений или выполнения других
      побочных эффектов.
      </p>
      <p>
      Примечание: это отличается от <span class="markdown-code">подписки (subscribe)</span> на Observable. Если Observable,
      возвращаемый <span class="markdown-code">do</span>, не подписан, побочные эффекты, определенные Observer, никогда не
      произойдут. <span class="markdown-code">do</span> просто шпионит за исполнением, он не
      вызывает выполнение, как это делает <span class="markdown-code">подписка (subscribe)</span>.
      </p>
    `
  },
  examples: [
    {
      name:
        'Привязать каждый клик к позиции clientX этого клика, а также регистрирует событие click',
      code: `
        import { tap, map } from 'rxjs/operators';
        import { fromEvent } from 'rxjs/observable/fromEvent';

        const clicks = fromEvent(document, 'click');
        const positions = clicks.pipe(
          tap(ev => console.log(ev.type))
          map(ev => ev.clientX)
        )
        positions.subscribe(x => console.log(x));
      `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/pijosapixu/embed?js,console,output'
      }
    }
  ],
  relatedOperators: ['map', 'subscribe']
};
