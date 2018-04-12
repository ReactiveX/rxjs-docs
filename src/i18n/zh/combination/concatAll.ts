import { OperatorDoc } from '../../../operator-docs';

export const concatAll: OperatorDoc = {
  name: 'concatAll',
  operatorType: 'combination',
  signature: 'public concatAll(): Observable',
  parameters: [],
  marbleUrl: 'http://reactivex.io/rxjs/img/concatAll.png',
  shortDescription: {
    description: '通过顺序地连接内部 Observable，将高阶 Observable 转化为一阶 Observable 。',
    extras: [
      {
        type: 'Tip',
        text: '通过一个接一个的连接内部 Observable ，将高阶 Observable 打平。'
      }
    ]
  },
  walkthrough: {
    description: `
      串行连接源 (高阶 Observable) 所发出的每个 Observable，只有当一个内部 Observable 完成的时候才订阅下一个
      内部 Observable，并将它们的所有值合并到返回的 Observable 中。
    `,
    extras: [
      {
        type: 'Warning',
        text: `
        如果源 Observable 很快并且不停地发送 Observables, 内部 Observables 完成速度比源 Observable 的发出速度慢，
        你会遇到内存问题，因为传入的 Observables 在无限制的缓冲区中进行收集的。
      `
      },
      {
        type: 'Tip',
        text: `concatAll 等价于 concurrency 参数(最大并发数)为 1 的 mergeAll 。`
      }
    ]
  },
  examples: [
    {
      name: '每次点击都会触发从 0 到 3 的定时器 (时间间隔为 1 秒)，定时器之间是串行的',
      code: `
        import { map, take, concatAll } from 'rxjs/operators';
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
        url: 'http://jsbin.com/guhefeyahi/embed?js,console,output'
      }
    }
  ],
  relatedOperators: [
    'combineAll',
    'concat',
    'concatMap',
    'concatMapTo',
    'exhaust',
    'mergeAll',
    'switch',
    'zipAll'
  ],
  additionalResources: []
};
