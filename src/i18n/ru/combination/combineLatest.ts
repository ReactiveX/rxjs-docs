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
      description: `Оператор combineLatest объединяет несколько Observable в один, значения которого
         рассчитываются из последних значений каждого Observable входящих в его состав.`
    },
    {
      name: 'other',
      type: 'function',
      attribute: 'optional',
      description:
        'Необязательная функция для отображения значений из комбинированных последних значений в новое значение исходного Observable.'
    }
  ],
  marbleUrl: 'http://reactivex.io/rxjs/img/combineLatest.png',
  shortDescription: {
    description: `
      Оператор combineLatest объединяет несколько Observable в один, значения
      которого рассчитываются из последних значений каждого Observable входящих в его состав.
    `,
    extras: [
      {
        type: 'Tip',
        text: `
          Note: combineLatest will only start to emit when all sources have emitted at least once. By adding a default
           start value to the sources with <a href="#/operators/startWith" class="markdown-code">startWith</a>, it will activate right away.
         `
      }
    ]
  },
  walkthrough: {
    description: `
      <p>
        Оператор <span class="markdown-code">combineLatest</span> объединяет значения Observable с значениями Observable которые
        переданы в него в качестве аргументов. Это делается путем упорядоченной подписки на каждый Observable и путем сбора
        массива из каждого из последних значений которые отдает любой из входных Observable в любое время. Далее,
        либо берется этот массив и передается в качестве аргумента в необязательную функцию <span class="markdown-code">project</span>
        и отдается возвращаемое значение, или просто выпускает массив последних значений напрямую, если нет
        функции <span class="markdown-code">project</span>.
      </p>
    `
  },
  examples: [
    {
      name:
        'Динамически рассчитать Индекс массы тела из Observable, состоящего из веса и роста',
      code: `
        import { combineLatest } from 'rxjs/operators;
        import { of } from 'rxjs/observable/of';

        const weight = of(70, 72, 76, 79, 75);
        const height = of(1.76, 1.77, 1.78);
        const bmi = weight.pipe(
          combineLatest(height, (w, h) => w / (h * h))
        );
        /*
           Output:
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
