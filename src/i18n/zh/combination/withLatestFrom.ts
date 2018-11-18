import { OperatorDoc } from '../../../operator-docs';

export const withLatestFrom: OperatorDoc = {
  name: 'withLatestFrom',
  operatorType: 'combination',
  signature:
    'public withLatestFrom(other: ObservableInput, project: Function): Observable',
  marbleUrl: 'http://reactivex.io/rxjs/img/withLatestFrom.png',
  shortDescription: {
    description: `
      组合源 Observable 和另外的 Observables 以创建输出 Observable，只有当源 Observable 发出值的时，输出 Observable 的值
      才会根据每个 Observable 最新的值计算得出，。
    `,
    extras: [
      {
        type: 'Tip',
        text: `每当源 Observable 发出值时，它会进行公式计算，此公式使用该值加上其他输入 Observable 的最新值，然后发出公式的输出结果。`
      }
    ]
  },
  walkthrough: {
    description: `
        <p>
          <span class="markdown-code">withLatestFrom</span> 组合源 Observablecombines（实例）和其他输入 Observables 的最新值，
          当且仅当源 Observable 发出数据时, 可选的使用 project 函数以决定输出 Observable 将要发出的值。 在输出 Observable 发出值
          之前，所有的输入 Observables 都必须发出至少一个值。
        </p>
      `
  },
  examples: [
    {
      name: '对于每次点击，启动时间间隔为 1 秒的定时器，只发出 0 到 3 的值，而且没有并发',
      code: `
        import { take, concatAll, map } from 'rxjs/operators';
        import { fromEvent } from 'rxjs/observable/fromEvent';
        import { interval } from 'rxjs/observable/interval';

        const clicks = fromEvent(document, 'click');
        const higherOrder = clicks.pipe(
          map(ev => interval(1000).pipe(take(4)))
        );
        const firstOrder = higherOrder.pipe(concatAll());
        firstOrder.subscribe(x => console.log(x));
      `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/wojoqenitu/1/embed?js,console,output'
      }
    }
  ],
  relatedOperators: ['combineLatest']
};
