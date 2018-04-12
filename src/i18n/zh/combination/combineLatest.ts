import { OperatorDoc } from '../../../operator-docs';

export const combineLatest: OperatorDoc = {
  name: 'combineLatest',
  operatorType: 'combination',
  signature:
    'public combineLatest(observables: ...Observable, project: function): Observable',
  useInteractiveMarbles: true,
  parameters: [
    {
      name: 'other',
      type: 'Observable',
      attribute: '',
      description: '将要和源 Observable 结合的输入 Observable。可以传入多个。'
    },
    {
      name: 'project',
      type: 'function',
      attribute: '可选的',
      description: '可选的投射函数，将输出 Observable 返回的值投射为要发出的新的值。'
    }
  ],
  marbleUrl: 'http://reactivex.io/rxjs/img/combineLatest.png',
  shortDescription: {
    description: `
      组合多个 Observables 来创建一个 Observable ，该 Observable 的值
      根据每个输入 Observable 的最新值计算得出的。
    `,
    extras: [
      {
        type: 'Tip',
        text: `
          注意: 只有当所有源 Observables 都至少发出一次值后，combineLatest 才会开始发出值。
          通过使用 <a href="#/operators/startWith" class="markdown-code">startWith</a>
           来为源 Observable 添加一个默认值，combineLatest 则会立即生效。
         `
      }
    ]
  },
  walkthrough: {
    description: `
      <p>
        <span class="markdown-code">combineLatest</span> 组合传入的多个 Observables 。
        通过顺序的订阅每个输入 Observable, 在每次任意输入 Observables 发出值时，收集每个
        输入 Observables 的最新值并组成一个数组, 然后要么将这个数组传给可选的投射函数并发
        出投射函数返回的结果, 或者在没有提供投射函数时仅仅发出该数组。
      </p>
    `
  },
  examples: [
    {
      name: '根据身高的 Observable 和体重的 Observable 来动态地计算 BMI 指数',
      code: `
        import { combineLatest } from 'rxjs/operators;
        import { of } from 'rxjs/observable/of';

        const weight = of(70, 72, 76, 79, 75);
        const height = of(1.76, 1.77, 1.78);
        const bmi = weight.pipe(
          combineLatest(height, (w, h) => w / (h * h))
        );
        /*
           输出:
           BMI is 24.212293388429753
           BMI is 23.93948099205209
           BMI is 23.671253629592222
        */
        bmi.subscribe(x => console.log('BMI is ' + x));
      `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/pivowunedu/1/embed?js,console'
      }
    }
  ],
  relatedOperators: ['combineAll', 'merge', 'withLatestFrom'],
  additionalResources: []
};
