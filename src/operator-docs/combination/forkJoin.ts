import { OperatorDoc } from '../operator.model';

export const forkJoin: OperatorDoc = {
  name: 'forkJoin',
  operatorType: 'combination',
  signature: 'public static forkJoin(sources: *): any',
  parameters: [
    {
      name: 'sources',
      type: '*',
      attribute: '',
      description: ''
    }
  ],
  marbleUrl: 'http://reactivex.io/rxjs/img/forkJoin.png',
  shortDescription: {
    description: 'Joins last values emitted by passed Observables.',
    extras: [
      {
        type: 'Tip',
        text:
          'Wait for Observables to complete and then combine last values they emitted.'
      }
    ]
  },
  walkthrough: {
    description: `
      <p>
        <span class="markdown-code">forkJoin</span> is an operator that takes any number of
        Observables which can be passed either as an array or directly as arguments. If no input
        Observables are provided, resulting stream will complete immediately.
      </p>
      <p>
        <span class="markdown-code">forkJoin</span> will wait for all passed Observables to complete
        and then it will emit an array with last values from corresponding Observables. So if you
        pass "n" Observables to the operator, resulting array will have "n" values, where first
        value is the last thing emitted by the first Observable, second value is the last thing
        emitted by the second Observable and so on. That means <span class="markdown-code">forkJoin</span> will
        not emit more than once and it will complete after that. If you need to emit combined values not only
        at the end of lifecycle of passed Observables, but also throughout it, try out
        <a href='/#/operators/combineLatest' class='markdown-code'>combineLatest</a>
        or <a href='/#/operators/zip' class='markdown-code'>zip</a> instead.
      </p>
      <p>
        In order for resulting array to have the same length as the number of input Observables, whenever any of that
        Observables completes without emitting any value,
        <span class="markdown-code">forkJoin</span> will complete at that moment as well and it will not
        emit anything either, even if it already has some last values from other Observables.
      </p>

      <p>
        Conversely, if there is an Observable that never completes,
        <span class="markdown-code">forkJoin</span> will never complete as well, unless at
        any point some other Observable completes without emitting value, which brings us back to the previous case.
        Overall, in order for <span class="markdown-code">forkJoin</span> to emit a value, all Observables passed as arguments
        have to emit something at least once and complete.
      </p>
      <p>
        If any input Observable errors at some point, <span class="markdown-code">forkJoin</span>
        will error as well and all other Observables
        will be immediately unsubscribed.
      </p>
      <p>
        Optionally <span class="markdown-code">forkJoin</span> accepts project function, that will be
        called with values which normally would land in emitted array. Whatever is returned by project function,
        will appear in output Observable instead. This means that default project can be thought of as a
        function that takes all its arguments and puts them into an array. Note that project function will be called only
        when output Observable is supposed to emit a result.
      </p>
    `
  },
  examples: [
    {
      name: 'Use forkJoin with operator emitting immediately',
      code: `
      import { forkJoin } from 'rxjs/observable/forkJoin';
      import { of } from 'rxjs/observable/of';

      const observable = forkJoin(
        of(1, 2, 3, 4),
        of(5, 6, 7, 8)
      );
      observable.subscribe(
        value => {
          const output = \`<h3>$\{value.toString()\}<h3>\`;
          document.getElementById('output').innerHTML = output;
        },
        err => {},
        () => console.log('This is how it ends!')
      );
      // Logs:
      // [4, 8]
      // "This is how it ends!"
    `
    },
    {
      name: 'Use forkJoin with operator emitting after some time',
      code: `
      import { take } from 'rxjs/operators';
      import { forkJoin } from 'rxjs/observable/forkJoin';
      import { interval } from 'rxjs/observable/interval';

      const observable = forkJoin(
        interval(1000).pipe(take(3)), // emit 0, 1, 2 every second and complete
        interval(500).pipe(take(4)) // emit 0, 1, 2, 3 every half a second and complete
      );
      observable.subscribe(
        value => {
          const output = \`<h3>$\{value.toString()\}<h3>\`;
          document.getElementById('output').innerHTML = output;
        },
        err => {},
        () => console.log('This is how it ends!')
      );
      // Logs:
      // [2, 3] after 3 seconds
      // "This is how it ends!" immediately after
    `
    },
    {
      name: 'Use forkJoin with project function',
      code: `
      import { take } from 'rxjs/operators';
      import { forkJoin } from 'rxjs/observable/forkJoin';
      import { interval } from 'rxjs/observable/interval';

      const observable = forkJoin(
        interval(1000).pipe(take(3)), // emit 0, 1, 2 every second and complete
        interval(500).pipe(take(4)), // emit 0, 1, 2, 3 every half a second and complete
        (n, m) => n + m
      );
      observable.subscribe(
        value => {
          const output = \`<h3>$\{value.toString()\}<h3>\`;
          document.getElementById('output').innerHTML = output;
        },
        err => {},
        () => console.log('This is how it ends!')
      );
      // Logs:
      // 5 after 3 seconds
      // "This is how it ends!" immediately after
    `
    }
  ],
  relatedOperators: ['combineLatest', 'zip']
};
