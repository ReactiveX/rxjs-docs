import { OperatorDoc } from '../../../operator-docs';

export const combineAll: OperatorDoc = {
  name: 'combineAll',
  operatorType: 'combination',
  signature: 'public combineAll(project: function): Observable',
  parameters: [
    {
      name: 'project',
      type: 'function',
      attribute: '可选的',
      description: `将每个内部 Observable 的最新值映射成一个新结果的可选函数。
      按顺序将每个收集到的内部 Observable 中接收最新值作为参数。`
    }
  ],
  marbleUrl: 'http://reactivex.io/rxjs/img/combineAll.png',
  shortDescription: {
    description: `当高阶 Observable 完成时，通过使用 <a href="/#/operators/combineLatest" class="markdown-code">combineLatest</a> 将其打平。`,
    extras: []
  },
  walkthrough: {
    description: `
      <p>
        接受一个返回 Observables 的 Observable, 并从中收集所有的 Observables 。
        一旦最外部的 Observable 完成, 会订阅所有收集带的 Observables，
        然后通过 <a href="/#/operators/combineLatest" class="markdown-code">combineLatest</a> 的策略来合并值，
        规则如下:
      </p>
      <ul>
        <li>每次内部 Observable 发出值时, 外部 Observable 也发出值。</li>
        <li>当返回的 observable 发出值时, 它会通过如下方式发出所有最新的值:
          <ul>
            <li>
              如果提供了 <span class="markdown-code">project</span> 函数, 该函数会按内部 Observable 到达的顺序
              依次使用每个内部 Observable 的最新值进行调用， <span class="markdown-code">project</span> 函数的
              结果将由输出 Observable 发出。
            </li>
            <li>
              如果没有提供 <span class="markdown-code">project</span> 函数, 输出 Observable 会发出包含所有最新数据的数组。
            </li>
          </ul>
        </li>
      </ul>
    `
  },
  examples: [
    {
      name:
        '将两个点击事件映射为有限的 interval Observable，然后应用 <span class="markdown-code">combineAll</span>',
      code: `
        import { map, combineAll, take } from 'rxjs/operators';
        import { fromEvent } from 'rxjs/observable/fromEvent';

        const clicks = fromEvent(document, 'click');
        const higherOrder = clicks.pipe(
          map(ev =>
            interval(Math.random()*2000).pipe(take(3))
          ),
          take(2)
        );
        const result = higherOrder.pipe(
          combineAll()
        );
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
