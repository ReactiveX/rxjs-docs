import { OperatorDoc } from '../operator.model';

export const fromEvent: OperatorDoc = {
  name: 'fromEvent',
  operatorType: 'creation',
  signature: `public static fromEvent(target: EventTargetLike,
     eventName: string, options: EventListenerOptions, selector: SelectorMethodSignature): Observable`,
  useInteractiveMarbles: true,
  parameters: [
    {
      name: 'target',
      type: 'EventTargetLike',
      attribute: '',
      description: `The target to which an event handler is attached.
        This target can be a DOM EventTarget, Node.js EventEmitter, JQuery-like event target, NodeList or HTMLCollection.`
    },
    {
      name: 'eventName',
      type: 'string',
      attribute: '',
      description: 'The event name of interest, emitted by the target.'
    },
    {
      name: 'options',
      type: 'EventListenerOptions',
      attribute: 'optional',
      /* tslint:disable:max-line-length */
      description: `Options to pass through to the <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener">addEventListener</a> function.
       This is either an options object {capture?: boolean, passive?: boolean, once?: boolean } or a boolean to represent capturing.`
      /* tslint:enable:max-line-length */
    },
    {
      name: 'selector',
      type: 'SelectorMethodSignature',
      attribute: 'optional',
      description: `An optional function to map the arguments from the event handler to a single value.`
    }
  ],
  marbleUrl: 'http://reactivex.io/rxjs/img/fromEvent.png',
  shortDescription: {
    description: `
    Creates an Observable that emits events of a specific type coming from the given event target.
    `
  },
  walkthrough: {
    description: `
    <p>
    Creates a new Observable based on a given target or a collection of targets, and a specific event type.
    <span class="markdown-code">fromEvent</span> allows an options object or a selector method to be passed for extra customization.
    </p>
    <p>
    The event <span class="markdown-code">target</span> is an object with methods for registering event handler functions.
    Valid objects are either a DOM EventTarget, a Node.js EventEmitter,
     a JQuery-style event target, a DOM NodeList, or a DOM HTMLCollection.
    These types are described in detail below.
    </p>
    <p>
    Note that the event target is checked through duck typing. In other words
    no matter what kind of object you have and no matter what environment you work in,
    you can safely use fromEvent on that object if it exposes any of the described methods (provided
    of course they behave as described).
    For example if a Node.js library exposes an event target with the same method names as a DOM EventTarget, fromEvent is still
    a good choice.
    </p>
    <p>
    If your event target does not match any of the objects listed,
     you should use <a href="/#/operators/fromEventPattern" class="markdown-code">fromEventPattern</a>, which can be used on arbitrary APIs.
    </p>
    <p>
    Every time a subscription is made to the resulting Observable,
    the <span class="markdown-code">next</span> function of the Subscriber object is registered as the event handler
    to the event target on the given event type. When that event fires, the value
    passed as the first argument to the registered function will be emitted by that same Observable.
    When the Observable gets unsubscribed, the event handler will be unregistered from the event target.
    </p>

  <p>
  Note that if the event target would normally (without RxJS) call the registered event handler with more than one argument,
  the second and its following arguments will not appear in the resulting Observable stream. In order to get access to them,
  an optional <span class="markdown-code">selector</span> function can be passed to <span class="markdown-code">fromEvent</span>.
  The selector will be called with all arguments passed to the registered event handler.
  The resulting Observable will then emit the value as returned by the selector function,
  instead of the usual value.
  </p>
  <p>
  Example jQuery event handler with more than one argument:
  <pre class="markdown-code">
  $("#foo").on("custom", function(event, param1, param2) {
    console.log(param1 + " " + param2);
  });
  $("#foo").trigger("custom", ["Custom", "Event"]);</pre>
  </p>
  <p>
  If the API you use is more callback than event handler oriented (where the subscribed
  callback function fires only once and thus there is no need to manually
  unregister it), you should use <a href="/#/operators/bindCallback" class="markdown-code">bindCallback</a>
  or <a href="/#/operators/bindNodeCallback" class="markdown-code">bindNodeCallback</a> instead.
  </p>

  <h3>Supported Event Target Types</h3>

  <h4>DOM EventTarget</h4>

  <p>This is an object with addEventListener and removeEventListener methods.</p>

  <p>
  In the browser, addEventListener accepts - apart from the event type string and the event
  handler function arguments - an optional third parameter, which is either an object or boolean,
  both used for additional configuration on how and when the passed function will be called. With
  fromEvent you can also provide this optional third parameter.
  </p>

  <h4>Node.js EventEmitter</h4>

  <p>This is an object with addListener and removeListener methods.</p>

  <h4>JQuery-style event target</h4>

  <p>This is an object with on and off methods.</p>

  <h4>DOM NodeList</h4>

  <p>This is a list of DOM Nodes, returned for example by document.querySelectorAll or Node.childNodes.</p>

  <p>
  Although this collection is not an event target in itself, fromEvent will iterate over all Nodes
  it contains and register an event handler function for every one of them. When the returned Observable
  gets unsubscribed, the event handler function will be removed from all Nodes.
  </p>

  <h4>DOM HtmlCollection</h4>
  <p>
  This is a collection of HTML elements or DOM nodes, very similar to the DOM NodeList.
  Likewise, the event handler function gets registered and removed for each one of the elements.</p>
    `
  },
  examples: [
    {
      name: 'Emit every click made on the HTML page',
      code: `
        import { fromEvent } from 'rxjs/observable/fromEvent';

        const clicks = fromEvent(document, 'click');
        clicks.subscribe(x => console.log(x.clientX));

        /*
        Example console output

        131
        157
        162
        162
        206
        315
        203
        231
        355

        */

      `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/xegucig/2/embed?js,console,output'
      }
    },
    {
      name:
        'Emit every click made on the HTML page, but select only the clientX and clientY properties.',
      code: `
        import { fromEvent } from 'rxjs/observable/fromEvent';

        const clicks = fromEvent(document, 'click', e => ({x: e.clientX, y: e.clientY}));
        clicks.subscribe(x => console.log(x));

        /*
        Example console output

        [object Object] {
          x: 294,
          y: 89
        }
        [object Object] {
          x: 183,
          y: 207
        }
        [object Object] {
          x: 301,
          y: 235
        }
        [object Object] {
          x: 371,
          y: 132
        }

        */

      `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/kaxalu/1/embed?js,console,output'
      }
    },
    {
      name:
        'Emit a click made on a div element and look at it through bubbling (bottom -> up) and capturing (top -> down).',
      code:
        `
        import { fromEvent } from 'rxjs/observable/fromEvent';
` +
        /* tslint:disable:max-line-length */
        `       document.body.innerHTML += '<div title="outer" style="padding: 10px; border: 1px solid black;"><div title="middle" style="padding: 10px; border: 1px solid black;"><div title="inner" style="padding: 10px; border: 1px solid black;"></div></div></div>';` +
        /* tslint:enable:max-line-length */
        `
        let divs = document.querySelectorAll('div');

        const clicks = fromEvent(divs, 'click',
                            (e) => ({ bubbling: e.currentTarget.title }) );
        clicks.subscribe(x => console.log(x));


        const clicksCapture = fromEvent(divs, 'click', true,
                            (e) => ({ capture: e.currentTarget.title }) );
        clicksCapture.subscribe(x => console.log(x));

        /*
        Example console output

        [object Object] {
          capture: "outer"
        }
        [object Object] {
          capture: "middle"
        }
        [object Object] {
          bubbling: "inner"
        }
        [object Object] {
          capture: "inner"
        }
        [object Object] {
          bubbling: "middle"
        }
        [object Object] {
          bubbling: "outer"
        }
        */

      `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/kuzajec/4/embed?js,console,output'
      }
    }
  ],
  relatedOperators: ['bindCallback', 'bindNodeCallback', 'fromEventPattern'],
  additionalResources: []
};
