import { OperatorDoc } from '../operator.model';

export const map: OperatorDoc = {
  name: 'map',
  operatorType: 'transformation',
  signature: 'public map(project: Function, thisArg: any): Observable',
  parameters: [
    {
      name: 'project',
      type: '(value: T, index: number) => R',
      attribute: '',
      description: `The function to apply to each 'value' emitted by the source Observable. The 'index' parameter is the number 'i'
        for the i-th emission that has happened since the subscription, starting from the number '0'.`
    },
    {
      name: 'thisArg',
      type: 'any',
      attribute: 'optional',
      description:
        "An optional argument to define what this is in the 'project' function."
    }
  ],
  marbleUrl: 'http://reactivex.io/rxjs/img/map.png',
  shortDescription: {
    description: `
      Applies a given <span class="markdown-code">project</span> function to each value emitted by the source
      Observable, and emits the resulting values as an Observable.
    `,
    extras: []
  },
  walkthrough: {
    description: `
      <p>
        Similar to the well known
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"
          target="_blank"
          class="markdown-code">
          Array.prototype.map
        </a> function,
        this operator applies a projection to each value and emits that projection in the output
        Observable.
      </p>
    `
  },
  examples: [
    {
      name: 'Map every click to the clientX position of that click',
      code: `
        import { map } from 'rxjs/operators';
        import { of } from 'rxjs/observable/fromEvent';

        const clicks = fromEvent(document, 'click');
        const positions = clicks.pipe(map(ev => ev.clientX));
        positions.subscribe(x => console.log(x));
      `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/detidogile/embed?js,console,output'
      }
    }
  ],
  relatedOperators: ['mapTo', 'pluck'],
  additionalResources: []
};
