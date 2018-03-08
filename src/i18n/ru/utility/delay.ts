import { OperatorDoc } from '../../../operator-docs';

export const delay: OperatorDoc = {
  name: 'delay',
  operatorType: 'utility',
  signature:
    'public delay(delay: number | Date, scheduler: Scheduler): Observable',
  parameters: [
    {
      name: 'delay',
      type: 'number | Date',
      attribute: '',
      description: `Длительность задержки в миллисекундах (число) или Дата, до которой происходит задержка отдачи исходных элементов.`
    },
    {
      name: 'scheduer',
      type: 'Scheduler',
      attribute: '',
      description:
        'IScheduler для управления таймерами, которые обрабатывают сдвиг по времени для каждого элемента.'
    }
  ],
  useInteractiveMarbles: true,
  marbleUrl: 'http://reactivex.io/rxjs/img/delay.png',
  shortDescription: {
    description: `
      Задерживает возврат элементов из исходного Observabl'a на определенный промежуток времени или до определенной даты.
    `,
    extras: []
  },
  walkthrough: {
    description: `
      <p>
        Если аргументом delay является Number (число), то время этого оператора сдвигает исходный Observable на тот промежуток времени,
        который выражен в миллисекундах. Относительный промежуточный интервал между значениями сохраняется.
      </p>
      <p>
        Если аргумент задержки является датой, время этого оператора сдвигает начало выполнения Observable до тех пор,
        пока не наступит данная дата.
      </p>
    `
  },
  examples: [
    {
      name: 'Отложить каждый клик на одну секунду',
      code: `
        import { delay, mapTo } from 'rxjs/operators';
        import { fromEvent } from 'rxjs/observable/fromEvent';

        const clicks = fromEvent(document, 'click').pipe(mapTo('click'));
        const delayedClicks = clicks.pipe(delay(1000));
        delayedClicks.subscribe(x => console.log(x));
      `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/howeziyoma/embed?js,console,output'
      }
    },
    {
      name: 'Отложить все клики до наступления опереденной даты',
      code: `
        import { delay } from 'rxjs/operators';
        import { fromEvent } from 'rxjs/observable/fromEvent';

        const clicks = fromEvent(document, 'click');
        const date = new Date('March 15, 2050 12:00:00');
        const delayedClicks = clicks.pipe(delay(date));
        delayedClicks.subscribe(x => console.log(x));
      `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/cozogifayu/embed?js,console,output'
      }
    }
  ],
  relatedOperators: ['debounceTime', 'delayWhen'],
  additionalResources: []
};
