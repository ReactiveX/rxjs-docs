import { OperatorDoc } from '../../../operator-docs';

export const startWith: OperatorDoc = {
  name: 'startWith',
  operatorType: 'combination',
  marbleUrl: 'http://reactivex.io/rxjs/img/startWith.png',
  signature: 'public startWith(values: ...T, scheduler: Scheduler): Observable',
  shortDescription: {
    description: '返回的 Observable 会先发出作为参数指定的项，然后再发出由源 Observable 所发出的项。'
  },
  parameters: [
    {
      name: 'values',
      type: '...T',
      attribute: '',
      description: '想要 Observable 发出的第一个值。'
    },
    {
      name: 'scheduler',
      type: 'Scheduler',
      attribute: '可选的',
      description: '用于调度 next 通知发送的调度器。'
    }
  ]
};
