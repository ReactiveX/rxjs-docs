import { OperatorDoc } from '../operator.model';

export const delayWhen: OperatorDoc = {
  name: 'delayWhen',
  operatorType: 'utility',
  signature:
    'public delayWhen(delayDurationSelector: Function, subscriptionDelay?: Observable): Observable',
  parameters: [
    {
      name: 'delayDurationSelector',
      type: 'Function',
      attribute: '',
      description:
        'A function that returns an Observable for each value emitted by the source Observable'
    },
    {
      name: 'subscriptionDelay',
      type: 'Observable',
      attribute: '',
      description:
        'An Observable that triggers the subscription to the source Observable once it emits any value.'
    }
  ],
  marbleUrl: 'http://reactivex.io/rxjs/img/delayWhen.png',
  shortDescription: {
    description:
      'Delays the emission of items from the source Observable by a given time span ' +
      'determined by the emissions of another Observable. <span class="informal">It\'s like  <a href="/#/operators/delay">delay</a>, but ' +
      'the time span of the delay duration is determined by a second Observable.</span>',
    extras: []
  },
  walkthrough: {
    description: `
      <p>
        delayWhen allows you to 'delay' the emitions on items based on complex criteria you can have,
        and give you use each item (of the source observable) as an argument to your delayFunction.
        If the second argument is applied, subscriptionDelay (an Observable) it delays the subscription
        once it emmits any value.
      </p>
    `
  },
  examples: [
    {
      name: 'It delays the emission of items by 1 seconds',
      code: `
          import { timer } from 'rxjs/observable/timer';
          import { fromEvent } from 'rxjs/observable/fromEvent';
          import { delayWhen } from 'rxjs/operators';
          const app = document.getElementById('app');
          const $moving = fromEvent<MouseEvent>(document, 'mousemove');
          const delay = () => timer(1000);
          $moving
              .pipe(delayWhen(delay))
              .subscribe(value => {
                  app.style.right = String(value.clientX+'px');
                  app.style.bottom = String(value.clientY+'px');
              });
      `,
      externalLink: {
        platform: 'JSBin',
        url: 'https://stackblitz.com/edit/delaywhen?file=index.ts'
      }
    },
    {
      name:
        'It delays the emission of items by a given span time that depends on the mouse position on the x-axis',
      code: `
          import { BounceBall } from './Ball'; // check the live example
          import { Observable } from 'rxjs/Observable';
          import { fromEvent } from 'rxjs/observable/fromEvent';
          import { interval } from 'rxjs/observable/interval';
          import { delayWhen } from 'rxjs/operators';
          const $moving = fromEvent<MouseEvent>(document, 'mousemove');
          const delay = (...args) => {
              const mouseEvent: MouseEvent = args[0];
              return (mouseEvent.clientX <= 639) ? interval(500) : interval(2000);
          }
          $moving.pipe(delayWhen(delay)).subscribe(value => {
              BounceBall({
                  color: 'deepskyblue',
                  gravity: 1,
                  position: {
                      x: value.clientX+'px',
                      y: value.clientY+'px'
                  }
              });
          });
      };
      `,
      externalLink: {
        platform: 'JSBin',
        url: 'https://stackblitz.com/edit/delaywhen-ball?file=index.ts'
      }
    }
  ],
  relatedOperators: ['delay', 'debounceTime'],
  additionalResources: []
};
