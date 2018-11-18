import { OperatorDoc } from '../../../operator-docs';

export const merge: OperatorDoc = {
  name: 'merge',
  operatorType: 'combination',
  signature:
    'public merge(other: ObservableInput, concurrent: number, scheduler: Scheduler): Observable',
  parameters: [
    {
      name: 'other',
      type: 'ObservableInput',
      attribute: '',
      description: `可以与源 Observable 合并的输入 Observable 。 可以给定多个输入 Observables 作为参数。`
    },
    {
      name: 'concurrent',
      type: 'number',
      attribute: '可选的, 默认值: Number.POSITIVE_INFINITY',
      description: `可以同时订阅的输入 Observables 的最大数量。`
    },
    {
      name: 'scheduler',
      type: 'Scheduler',
      attribute: '可选的，默认值: null',
      description: `用来管理输入 Observables 的并发性的调度器。`
    }
  ],
  marbleUrl: 'http://reactivex.io/rxjs/img/merge.png',
  shortDescription: {
    description: `创建一个输出 Observable ，它可以同时发出每个给定的输入 Observable 中值。`,
    extras: [
      {
        type: 'Tip',
        text: '通过把多个 Observables 的值混合到一个 Observable 中来将其打平。'
      }
    ]
  },
  walkthrough: {
    description: `
      <p>
        <span class="markdown-code">merge</span> 订阅每个给定的输入 Observable (作为参数)，
        然后只是将所有输入 Observables 的所有值发 送(不进行任何转换)到输出 Observable 。所有
        的输入 Observable 都完成了，输出 Observable 才 能完成。任何由输入 Observable 发出的
        错误都会立即在输出 Observalbe 上发出。
      </p>
    `
  },
  examples: [
    {
      name: '合并两个 Observables: 时间间隔为 1 秒的 timer 和 clicks',
      code: `
        import { merge } from 'rxjs/operators';
        import { fromEvent } from 'rxjs/observable/fromEvent';
        import { interval } from 'rxjs/observable/interval';

        const clicks = fromEvent(document, 'click');
        const timer = interval(1000);
        const clicksOrTimer = clicks.pipe(merge(timer));
        clicksOrTimer.subscribe(x => console.log(x));
      `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/wihafapiva/1/embed?js,output'
      }
    },
    {
      name: '合并三个 Observables ，但只能同时运行两个',
      code: `
        import { take } from 'rxjs/operators';
        import { merge } from 'rxjs/observable/merge';
        import { interval } from 'rxjs/observable/interval';

        const timer1 = interval(1000).pipe(take(10));
        const timer2 = interval(2000).pipe(take(6));
        const timer3 = interval(500).pipe(take(10));
        const concurrent = 2; // 参数
        const merged = timer1.pipe(merge(timer2, timer3, concurrent));
        merged.subscribe(x => console.log(x));
      `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/midosuqaga/1/embed?js,output'
      }
    }
  ],
  relatedOperators: ['mergeAll', 'mergeMap', 'mergeMapTo', 'mergeScan']
};
