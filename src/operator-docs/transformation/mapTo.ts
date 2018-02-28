import { OperatorDoc } from '../operator.model';

export const mapTo: OperatorDoc = {
  name: 'mapTo',
  operatorType: 'transformation',
  signature: 'public mapTo(value: any): Observable',
  parameters: [
    {
      name: 'value',
      type: 'any',
      attribute: '',
      description: `The value to map each source value to.`
    }
  ],
  useInteractiveMarbles: true,
  marbleUrl: 'http://reactivex.io/rxjs/img/mapTo.png',
  shortDescription: {
    description: `Emits the given constant value on the output Observable every time the source Observable emits a value.`
  },
  walkthrough: {
    description: `<p>
        Takes a constant
        <code>value</code> as argument,
        and emits that whenever the source Observable emits a value.
        In other words, ignores the actual source value,
        and simply uses the emission moment to know when to emit the given
       <code>value</code>.
       <p>`
  },
  examples: [
    {
      name: "Map every click to the string 'Hi'",
      code: `
      import { fromEvent } from 'rxjs/observable/fromEvent';
      import { mapTo } from 'rxjs/operators';

      const clicks = Rx.Observable.fromEvent(document, 'click');
      const greetings = clicks.mapTo('Hi');
      greetings.subscribe(x => console.log(x));
      `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/seyibe/embed?js,console,output'
      }
    }
  ],
  relatedOperators: ['map'],
  additionalResources: []
};
