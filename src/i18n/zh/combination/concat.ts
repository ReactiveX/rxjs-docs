import { OperatorDoc } from '../../../operator-docs';

export const concat: OperatorDoc = {
  name: 'concat',
  operatorType: 'combination',
  signature:
    'public static concat(input1: ObservableInput, input2: ObservableInput, scheduler: Scheduler): Observable',
  parameters: [
    {
      name: 'input1',
      type: 'ObservableInput',
      attribute: '',
      description: '可以与其他 Observable 连接的输入 Observable 。'
    },
    {
      name: 'input2',
      type: 'ObservableInput',
      attribute: '',
      description: '可以与其他 Observable 连接的输入 Observable 。可以接收多个输入 Observable。'
    },
    {
      name: 'scheduler',
      type: 'Scheduler',
      attribute: '可选的，默认值: null',
      description: '可选的调度器，控制每个输入 Observable 的订阅。'
    }
  ],
  marbleUrl: 'http://reactivex.io/rxjs/img/concat.png',
  shortDescription: {
    description: '创建一个输出 Observable，它按顺序发出每个给定的输入 Observable 中的所有值。',
    extras: [
      {
        type: 'Tip',
        text: '通过顺序地发出多个 Observables 的值来将它们一个接一个的连接起来。'
      }
    ]
  },
  walkthrough: {
    description: `
      <p><span class='markdown-code'>concat</span> 通过一次订阅一个将多个 Observables 连接起来，并将值合并到输出 Observable 中。
      你可以传递一个输入 Observable 数组，或者直接把它们当做参数传递。 传递一个空数组会 导致输出 Observable 立马触发完成状态。</p>

      <p><span class='markdown-code'>concat</span> 会订阅第一个输入 Observable 并且发出它的所有值, 不去做任何干预。当这个
      输入 Observable 完成时， 订阅第二个输入 Observable，同样的发出它的所有值。这个过程会不断重复直到输入 Observable 都用过了。
      当最后一个输入 Observable 完成时，<span class='markdown-code'>concat</span> 也会完成。 任何时刻都只会有一个输入 Observable 发出值。
      如果你想让所有的输入 Observable 并行发出数据，请查看 <a href='/#/operators/merge' class='markdown-code'>merge</a>,
      尤其是使用可选的 <span class='markdown-code'>concurrent</span> 参数。 事实上, <span class='markdown-code'>concat</span> 和
      <span class='markdown-code'>concurrent</span 设置为 1 的 <a href='/#/operators/merge' class='markdown-code'>merge</a> 效果是一样的。</p>

      <p>注意，如果输入 Observable 一直都不完成, <span class='markdown-code'>concat</span> 也会一直不能完成并且下一个输入 Observable 将
      永远不能被订阅. 另一方面, 如果某个输入 Observable 在它被订阅后立马处于完成状态, 那么它对 <span class='markdown-code'>concat</span> 是
      不可见的, 仅仅会转向下一个输入 Observable 。</p>

      <p>如果输入 Observable 链中的任一成员发生错误, <span class='markdown-code'>concat</span> 会立马触发错误状态，而不去控制下一个
      输入 Observable. 发生错误的输入 Observable 之后的输入 Observable 不会被订阅.</p>

      <p>如果你将同一输入 Observable 传递给 <span class='markdown-code'>concat</span> 多次，结果流会在每次订阅的时候“重复播放”,
      这意味着 你可以重复 Observable 多次. 如果你乏味的给 <span class='markdown-code'>concat</span> 传递同一输入 Observable 1000次,
      你可以试着用用 <span class='markdown-code'>repeat</span> 。</p>
    `
  },
  examples: [
    {
      name: '将从 0 数到 3 的定时器和从 1到 10 的同步序列进行连接',
      code: `
      import { take } from 'rxjs/operators';
      import { interval } from 'rxjs/observable/interval';
      import { range } from 'rxjs/observable/range';
      import { concat } from 'rxjs/observable/concat';

      const timer = interval(1000).pipe(take(4));
      const sequence = range(1, 10);
      const result = concat(timer, sequence);
      result.subscribe(x => console.log(x));

      // 结果为:
      // 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3 -immediate-> 1 ... 10
    `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/doqoyimaxu/embed?js,console'
      }
    },
    {
      name: '连接有 3 个 Observables',
      code: `
      import { take, concat } from 'rxjs/operators';
      import { interval } from 'rxjs/observable/interval';

      const timer1 = interval(1000).pipe(take(10));
      const timer2 = interval(2000).pipe(take(6));
      const timer3 = interval(500).pipe(take(10));
      const result = timer1.pipe(concat(timer2, timer3));
      result.subscribe(x => console.log(x));

      // 结果如下:
      // (按顺序打印到控制台)
      // -1000ms-> 0 -1000ms-> 1 -1000ms-> ... 9
      // -2000ms-> 0 -2000ms-> 1 -2000ms-> ... 5
      // -500ms-> 0 -500ms-> 1 -500ms-> ... 9
    `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/decaromone/1/embed?js,console'
      }
    }
  ],
  relatedOperators: ['concatAll', 'concatMap', 'concatMapTo']
};
