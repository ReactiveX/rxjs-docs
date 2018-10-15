import { OperatorDoc } from '../operator.model';

export const concat: OperatorDoc = {
  name: 'concat',
  operatorType: 'combination',
  returnValue: 'Observable',
  signature:
    'public static concat(input1: ObservableInput, input2: ObservableInput, scheduler: Scheduler): Observable',
  parameters: [
    {
      name: 'input1',
      type: 'ObservableInput',
      attribute: '',
      description: 'An input Observable to concatenate with others.'
    },
    {
      name: 'input2',
      type: 'ObservableInput',
      attribute: '',
      description:
        'An input Observable to concatenate with others. More than one input Observables may be given as argument.'
    },
    {
      name: 'scheduler',
      type: 'Scheduler',
      attribute: 'optional default: null',
      description:
        'An optional IScheduler to schedule each Observable subscription on.'
    }
  ],
  marbleUrl: 'http://reactivex.io/rxjs/img/concat.png',
  shortDescription: {
    description:
      'Creates an output Observable which sequentially emits all values from given Observable and then moves on to the next.',
    extras: [
      {
        type: 'Tip',
        text:
          'Concatenates multiple Observables together by sequentially emitting their values, one Observable after the other.'
      }
    ]
  },
  walkthrough: {
    description: `
      <p><span class='markdown-code'>concat</span> joins multiple Observables together, by subscribing to them one at a time and
      merging their results into the output Observable. You can pass either an array of
      Observables, or put them directly as arguments. Passing an empty array will result
      in Observable that completes immediately.</p>

      <p><span class='markdown-code'>concat</span> will subscribe to first input Observable and emit all its values, without
      changing or affecting them in any way. When that Observable completes, it will
      subscribe to then next Observable passed and, again, emit its values. This will be
      repeated, until the operator runs out of Observables. When last input Observable completes,
      <span class='markdown-code'>concat</span> will complete as well. At any given moment only one Observable passed to operator
      emits values. If you would like to emit values from passed Observables concurrently, check out
      <a href='/#/operators/merge' class='markdown-code'>merge</a> instead, especially with optional
      <span class='markdown-code'>concurrent</span> parameter.
      As a matter of fact, <span class='markdown-code'>concat</span> is an equivalent of
      <a href='/#/operators/merge' class='markdown-code'>merge</a> operator with
      <span class='markdown-code'>concurrent</span> parameter set to <span class='markdown-code'>1</span>.</p>

      <p>Note that if some input Observable never completes, <span class='markdown-code'>concat</span> will also never complete
      and Observables following the one that did not complete will never be subscribed. On the other
      hand, if some Observable simply completes immediately after it is subscribed, it will be
      invisible for <span class='markdown-code'>concat</span>, which will just move on to the next Observable.</p>

      <p>If any Observable in chain errors, instead of passing control to the next Observable,
      <span class='markdown-code'>concat</span> will error immediately as well. Observables that would be subscribed after
      the one that emitted error, never will.</p>

      <p>If you pass to <span class='markdown-code'>concat</span> the same Observable many times, its stream of values
      will be 'replayed' on every subscription, which means you can repeat given Observable
      as many times as you like. If passing the same Observable to <span class='markdown-code'>concat</span> 1000 times becomes tedious,
      you can always use <span class='markdown-code'>repeat</span>.</p>
    `
  },
  examples: [
    {
      name:
        'Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10',
      code: `
      import { take } from 'rxjs/operators';
      import { interval } from 'rxjs/observable/interval';
      import { range } from 'rxjs/observable/range';
      import { concat } from 'rxjs/observable/concat';

      const timer = interval(1000).pipe(take(4));
      const sequence = range(1, 10);
      const result = concat(timer, sequence);
      result.subscribe(x => console.log(x));

      // results in:
      // 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3 -immediate-> 1 ... 10
    `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/doqoyimaxu/embed?js,console'
      }
    },
    {
      name: 'Concatenate an array of 3 Observables',
      code: `
      import { take, concat } from 'rxjs/operators';
      import { interval } from 'rxjs/observable/interval';

      const timer1 = interval(1000).pipe(take(10));
      const timer2 = interval(2000).pipe(take(6));
      const timer3 = interval(500).pipe(take(10));
      const result = timer1.pipe(concat(timer2, timer3));
      result.subscribe(x => console.log(x));

      // results in the following:
      // (Prints to console sequentially)
      // -1000ms-> 0 -1000ms-> 1 -1000ms-> ... 9
      // -2000ms-> 0 -2000ms-> 1 -2000ms-> ... 5
      // -500ms-> 0 -500ms-> 1 -500ms-> ... 9
    `,
      externalLink: {
        platform: 'JSBin',
        url: 'http://jsbin.com/decaromone/1/embed?js,console'
      }
    }
  ],
  relatedOperators: ['concatAll', 'concatMap', 'concatMapTo']
};
