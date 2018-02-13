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
        If the second argument is applied, subscriptionDelay (an Observable) it delays the subscription
        once it emmits any value.
      </p>
    `
  },
  examples: [
    {
      name: 'It delays the emission of items ',
      code: '',
      externalLink: {
        platform: 'JSBin',
        url: 'https://stackblitz.com/edit/delaywhen?file=index.ts'
      }
    }
  ],
  relatedOperators: ['delay', 'debounceTime'],
  additionalResources: []
};
