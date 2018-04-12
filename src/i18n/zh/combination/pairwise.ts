import { OperatorDoc } from '../../../operator-docs';

export const pairwise: OperatorDoc = {
  name: 'pairwise',
  operatorType: 'combination',
  marbleUrl: 'http://reactivex.io/rxjs/img/pairwise.png',
  signature: 'public pairwise(): Observable<Array<T>>',
  shortDescription: {
    description: '将一系列连续的发送成对的组合在一起，并将这些分组作为两个值的数组发出。',
    extras: [
      {
        type: 'Tip',
        text: '将当前值和前一个值作为数组放在一起，然后将其发出。'
      }
    ]
  },
  walkthrough: {
    description: `
      <p>
        源 Observable 的第 N 个发送会使输出 Observable 发出一个数组 [(N-1)th, Nth]，即前一个
        值和当前值的数组，它们作为一对。出于这个原因，pairwise 发出源 Observable 的 第二个和随
        后的发送，而不发送第一个，因为它没有前一个值。
      </p>
    `
  },
  examples: [
    {
      name: '每次点击 (从第二次开始)，都会发出与前一次点击的相对距离',
      code: `
      import { pairwise, map } from 'rxjs/operators';
      import { fromEvent } from 'rxjs/observable/fromEvent';

      const clicks = fromEvent(document, 'click');
      const pairs = clicks.pipe(pairwise());
      const distance = pairs.pipe(
        map(pair => {
          const x0 = pair[0].clientX;
          const y0 = pair[0].clientY;
          const x1 = pair[1].clientX;
          const y1 = pair[1].clientY;
          return Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2));
        })
      );
      distance.subscribe(x => console.log(x));
    `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/wenazagegu/embed?js,console,output'
      }
    }
  ],
  relatedOperators: ['buffer', 'bufferCount']
};
