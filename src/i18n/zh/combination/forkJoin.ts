import { OperatorDoc } from '../../../operator-docs';

export const forkJoin: OperatorDoc = {
  name: 'forkJoin',
  operatorType: 'combination',
  signature: 'public static forkJoin(sources: *): any',
  parameters: [
    {
      name: 'sources',
      type: '*',
      attribute: '',
      description: ''
    }
  ],
  marbleUrl: 'http://reactivex.io/rxjs/img/forkJoin.png',
  shortDescription: {
    description: '将传入的 Observables 的最新值组合起来。',
    extras: [
      {
        type: 'Tip',
        text: '等待所有 Observables 都完成后将它们的发出的最新值组合起来。'
      }
    ]
  },
  walkthrough: {
    description: `
      <p>
        <span class="markdown-code">forkJoin</span> 操作符接收任意数量的 Observables，
        这些 Observables 可以作为数组传入，也可以作为单个参数传入。如果没有提供输入 Observable，
        那么结果流将立即完成。
      </p>
      <p>
        <span class="markdown-code">forkJoin</span> 会等待所有传入的 Observables 都完成后，
        它才会发出一个数组，数组的值与传入的 Observable 的最新值是一一对应的。比如，你传入了 “n” 个
         Observables，那么结果数组也将有 “n” 个值，值的顺序与 Observables 的顺序是一一对应的。
        这意味着 <span class="markdown-code">forkJoin</span> 最多只会发出一次值，然后便完成。
        如果你需要的不止是在传入的 Observables 生命周期结束后将组合值发出，而是贯穿整个生命周期，
        可以试试 <a href='/#/operators/combineLatest' class='markdown-code'>combineLatest</a>
         或 <a href='/#/operators/zip' class='markdown-code'>zip</a> 。
      </p>
      <p>
        为了使结果数组的长度与输入 Observable 的个数保持一直，每当任意 Observable 完成却没有发出任何值时，
        <span class="markdown-code">forkJoin</span> 会立即完成，并且不会发出任何值，即使其他 Observables
         已经发出值了。
      </p>

      <p>
        相反地，如果某个 Observable 永远都不会完成，那么 <span class="markdown-code">forkJoin</span> 也
        永远都无法完成，除非某个时间点其他 Observable 在未发出任何值的情况下完成了，这将回到上一个场景。
        总之，要想使 <span class="markdown-code">forkJoin</span> 发出值，那么所有传入的 Observables 都
        必须至少发出一次值之后再完成。
      </p>
      <p>
        如果某个时间点任意输入 Observable 报错的话，<span class="markdown-code">forkJoin</span> 同样
        也会报错，所有其他的 Observables 都会被立即取消订阅。
      </p>
      <p>
        <span class="markdown-code">forkJoin</span> 还可以选择接收投射函数，通常都是使用发出的数组作为参数来调用
        此函数。无论投射函数返回值是什么，都将出现在输出 Observable 中。这意味着可以将默认的投射函数想象成这样的函数，
        它接收所有参数并将它们放入一个数组中。注意，仅当输出 Observable 应该发出结果时才会调用投射函数。
      </p>
    `
  },
  examples: [
    {
      name: 'forkJoin 和同步发出值的操作符一起使用',
      code: `
      import { forkJoin } from 'rxjs/observable/forkJoin';
      import { of } from 'rxjs/observable/of';

      const observable = forkJoin(
        of(1, 2, 3, 4),
        of(5, 6, 7, 8)
      );
      observable.subscribe(
        value => console.log(value),
        err => {},
        () => console.log('This is how it ends!')
      );
      // 输出:
      // [4, 8]
      // "This is how it ends!"
    `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/kinilaruki/1/embed?js,console'
      }
    },
    {
      name: 'forkJoin 和异步发出值的操作符一起使用',
      code: `
      import { take } from 'rxjs/operators';
      import { forkJoin } from 'rxjs/observable/forkJoin';
      import { interval } from 'rxjs/observable/interval';

      const observable = forkJoin(
        interval(1000).pipe(take(3)), // 每隔 1 秒发出 0, 1, 2 然后完成
        interval(500).pipe(take(4)) // 每隔半秒发出 0, 1, 2, 3 然后完成
      );
      observable.subscribe(
        value => console.log(value),
        err => {},
        () => console.log('This is how it ends!')
      );
      // 输出:
      // [2, 3]
      // 3 秒后
      // 紧接着
      // "This is how it ends!"
    `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/rewivubuqi/1/embed?js,console'
      }
    },
    {
      name: '使用带投射函数的 forkJoin',
      code: `
      const observable = Rx.Observable.forkJoin(
        Rx.Observable.interval(1000).take(3), // 每隔 1 秒发出 0, 1, 2 然后完成
        Rx.Observable.interval(500).take(4), // 每隔半秒发出 0, 1, 2, 3 然后完成
        (n, m) => n + m
      );
      observable.subscribe(
        value => console.log(value),
        err => {},
        () => console.log('This is how it ends!')
      );
      // 输出:
      // 3秒后
      // 5
      // 紧接着
      // "This is how it ends!"
    `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/wayomumike/1/embed?js,console'
      }
    }
  ],
  relatedOperators: ['combineLatest', 'zip']
};
