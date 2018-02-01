# Documentation Guidelines

This document is a work in progress and contains the _current_ guidelines that should be followed when working on documentation.

This document is _not_ a holy scripture and we're always open for discussion. 
However when an agreement is found, you should follow this document to keep the documentation consistent. 

If you're not sure, contact us on our Slack Channel (see [#4](https://github.com/ReactiveX/rxjs-docs/issues/4) or [#24](https://github.com/ReactiveX/rxjs-docs/issues/24) for more information on that).

## TL;DR
>_Sorry, but you will need take your time reading the document if you want to know more about the guidelines._ 

This document talks about the [structure of the operator documentation](#documentation-format), [the method signature](#method-signature) and the guidelines in our [code examples](#code-examples).

## Documentation Format
The documentation is created in a ts file under src/operator-docs. 
Normally the file for the operator should already have been created.
If that's not the case, recheck all subfolders/categories to be sure (it's easy to overlook with all of those operators).
If you still cannot find the operator, create the file in the category that most fits the use case.

The ts file contains an object that implements the __OperatorDoc__ interface. All properties are optional:

- __name__: the name of your operator
- __operatorType__: any one of these strings 'combination'
  | 'conditional'
  | 'creation'
  | 'error handling'
  | 'filtering'
  | 'multicasting'
  | 'transformation'
  | 'utility'
- __signature__: the signature of the operator method (without using generics)
- __useInteractiveMarbles__: currently not used, but should be true for an interactive marble diagram
- __marbleUrl__: the url for a marble diagram (use the existing image url found on http://reactivex.io/rxjs for a static diagram)
- __parameters__: OperatorParameters[]. Every OperatorParameters implementation takes 
  - the _name_ of the parameter
  - the _type_ (string, number, Observable,...)
  - the _attribute_ (optional,...)
  - the _description_ explaining what the parameter is used for
- __shortDescription__: {
    description: string;
    extras?: OperatorExtra[]
  }
  - [HTML] the short _description_ of what the operator does (a TL;DR text)
  - _extras_ containing a type of 'Tip'|'Warning' and some text for it. It will show up with a little icon to make the type of extra clear.
- __walkthrough__: {
    description: string;
    extras?: OperatorExtra[]
  }
  - [HTML] the long and well explained _description_ of what the operator does (the technically correct description and explanation)
  - _extras_ containing a type of 'Tip'|'Warning' and some text for it. It will show up with a little icon to make the type of extra clear.
- __examples__: one or more examples demonstrating the use of the operator
  - _name_: Text explaining what the example code does
  - _code_: The code used in your example. This code will get copied if the user clicks on the copy icon above the code example.
  - _externalLink_: an object containing a type of 'JSBin'|'JSFiddle' and the url towards a working example. (Talks are underway to also support Stackblitz in the near future)
- __additionalResources__: OperatorReference[]
  - _url_ towards an additional resource explaining the operator (like a blog post, youtube video,...)
  - _description_ used as text for the link
  - _author_: the author of the resource (currently not used/shown)
- __relatedOperators__: names of other operators related to the current one

## Method signature
The signature of the method should contain the correct name, parameters and return type of the method. 
We don't want to show any generics (like &lt;T&gt;) in the signature, because in most cases it does not add any value.
See [#196](https://github.com/ReactiveX/rxjs-docs/pull/196#discussion_r155799478) for the discussion on this topic.

## Code examples
In the example code we want to make use of ES6/TS imports as well as the pipeable operators. 
See [#196](https://github.com/ReactiveX/rxjs-docs/pull/196#discussion_r157232289) for a discussion on this topic.
However, neither jsbin nor jsfiddle support this format. When the project gets support from Stackblitz, the newer syntax should be available on that platform and is of course preferred.

Currently to have the best of both worlds, try to follow this guideline:
- The code created directly in the ts file (which will get copied when you click on the icon) should follow the ES6/TS imports and pipeable operators.
- The code in the running example on jsbin/jsfiddle should work, so in other words, use the older syntax.

The example code should also contain a comment which shows the expected output on the console.
This comment should be put after/below the subscribe call on the observable.

In our examples we are currently not making use of the finnish notation ($ suffix). To be consistent with the other examples, neither should you.

Here's an example for both the inline code as well as one on jsbin:

__INLINE__
```javascript
import { fromEvent } from 'rxjs/observable/fromEvent';
import { bufferCount } from 'rxjs/operators';

const clicks = fromEvent(document, 'click', e => ({x: e.clientX, y: e.clientY}));
const buffered = clicks.pipe(
  bufferCount(2)
);
buffered.subscribe(x => console.log(x));

/*
  Example console output:

  [[object Object] {
    x: 235,
    y: 140
  }, [object Object] {
    x: 63,
    y: 45
  }]

  [[object Object] {
    x: 199,
    y: 74
  }, [object Object] {
    x: 133,
    y: 181
  }]

  [[object Object] {
    x: 343,
    y: 174
  }, [object Object] {
    x: 274,
    y: 82
  }]
*/

```

__JSBIN__
```javascript
const clicks = Rx.Observable.fromEvent(document, 'click', e => ({x: e.clientX, y: e.clientY}));
const buffered = clicks.bufferCount(2);
buffered.subscribe(x => console.log(x));
/*
  Example console output:

  [[object Object] {
    x: 235,
    y: 140
  }, [object Object] {
    x: 63,
    y: 45
  }]

  [[object Object] {
    x: 199,
    y: 74
  }, [object Object] {
    x: 133,
    y: 181
  }]

  [[object Object] {
    x: 343,
    y: 174
  }, [object Object] {
    x: 274,
    y: 82
  }]
*/

```



