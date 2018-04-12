import { OperatorDoc } from '../../../operator-docs';

export const mergeAll: OperatorDoc = {
  name: 'mergeAll',
  operatorType: 'combination',
  signature: 'public mergeAll(concurrent: number): Observable',
  parameters: [
    {
      name: 'concurrent',
      type: 'number',
      attribute: '可选的，默认值: Number.POSITIVE_INFINITY',
      description: `可以同时订阅的输入 Observables 的最大数量。`
    }
  ],
  marbleUrl: 'http://reactivex.io/rxjs/img/mergeAll.png',
  shortDescription: {
    description: `将高阶 Observable 转换成一阶 Observable ，一阶 Observable 会同时发出在内部 Observables 上发出的所有值。`,
    extras: [
      {
        type: 'Tip',
        text: '打平高阶 Observable 。'
      }
    ]
  },
  walkthrough: {
    description: `
      <p>
        <span class="markdown-code">mergeAll</span> 订阅发出 Observables 的 Observalbe ，也称为
        高阶 Observable 。每当观察到发出的内部 Observable 时，它会订阅并发出输出 Observable 上的这个
        内部 Observable 的所有值。所有的内部 Observable 都完成了，输出 Observable 才能完成。任何由\
        内部 Observable 发出的错误都会立即在输出 Observalbe 上发出。
      </p>
    `
  },
  examples: [
    {
      name: '为每个点击事件创建一个新的 interval Observable ，并将其输出混合为一个 Observable',
      code: `
        import { mergeAll, map } from 'rxjs/operators';
        import { fromEvent } from 'rxjs/observable/fromEvent';
        import { interval } from 'rxjs/observable/interval';

        const clicks = fromEvent(document, 'click');
        const higherOrder = clicks.pipe(map((ev) => interval(1000)));
        const firstOrder = higherOrder.pipe(mergeAll());
        firstOrder.subscribe(x => console.log(x));
      `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/lebidefocu/1/embed?js,output'
      }
    },
    {
      name: '每次点击都会从 0 到 9 计数(每秒计数一次)，但只允许最多同时只能有两个计时器',
      code: `
        import { mergeAll, map } from 'rxjs/operators';
        import { fromEvent } from 'rxjs/observable/fromEvent';
        import { interval } from 'rxjs/observable/interval';

        const clicks = fromEvent(document, 'click');
        const higherOrder = clicks.pipe(
          map((ev) => interval(1000).pipe(take(10)))
        );
        const firstOrder = higherOrder.pipe(mergeAll(2));
        firstOrder.subscribe(x => console.log(x));
      `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/kokezoribu/embed?js,output'
      }
    }
  ],
  relatedOperators: [
    'combineAll',
    'concatAll',
    'exhaust',
    'merge',
    'mergeMap',
    'mergeMapTo',
    'mergeScan',
    'switch',
    'zipAll'
  ]
};
