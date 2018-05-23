<a name="6.2.0"></a>
# [6.2.0](https://github.com/ReactiveX/RxJS/compare/6.1.0...6.2.0) (2018-05-22)


### Bug Fixes

* **ajax:** Handle timeouts as errors ([#3653](https://github.com/ReactiveX/RxJS/issues/3653)) ([e4128ea](https://github.com/ReactiveX/RxJS/commit/e4128ea))
* **ajax:** RxJS v6 TimeoutError is missing name property ([576d943](https://github.com/ReactiveX/RxJS/commit/576d943))
* **isObservable:** Fix throwing error when testing isObservable(null) ([#3688](https://github.com/ReactiveX/RxJS/issues/3688)) ([c9acc61](https://github.com/ReactiveX/RxJS/commit/c9acc61))
* **range:** Range should be same for every subscriber ([#3707](https://github.com/ReactiveX/RxJS/issues/3707)) ([9642133](https://github.com/ReactiveX/RxJS/commit/9642133))
* **skipUntil:** fix skipUntil when innerSubscription is null ([#3686](https://github.com/ReactiveX/RxJS/issues/3686)) ([4226432](https://github.com/ReactiveX/RxJS/commit/4226432))
* **TestScheduler:** restore run changes upon error ([27cb9b6](https://github.com/ReactiveX/RxJS/commit/27cb9b6))
* **TimeoutError:** Add name to TimeoutError ([44042d0](https://github.com/ReactiveX/RxJS/commit/44042d0))
* **WebSocketSubject:** Check to see if WebSocket exists in global scope ([#3694](https://github.com/ReactiveX/RxJS/issues/3694)) ([2db0788](https://github.com/ReactiveX/RxJS/commit/2db0788))


### Features

* **endWith:** add new operator endWith ([#3679](https://github.com/ReactiveX/RxJS/issues/3679)) ([537fe7d](https://github.com/ReactiveX/RxJS/commit/537fe7d))



<a name="6.1.0"></a>
# [6.1.0](https://github.com/ReactiveX/RxJS/compare/6.0.0...6.1.0) (2018-05-03)


### Bug Fixes

* **audit:** will not crash if duration is synchronous ([#3608](https://github.com/ReactiveX/RxJS/issues/3608)) ([76b7e27](https://github.com/ReactiveX/RxJS/commit/76b7e27)), closes [#2743](https://github.com/ReactiveX/RxJS/issues/2743)
* **delay:** fix memory leak ([#3605](https://github.com/ReactiveX/RxJS/issues/3605)) ([96f05b0](https://github.com/ReactiveX/RxJS/commit/96f05b0))


### Features

* **isObservable:** a new method for checking to see if an object is an RxJS Observable ([edb33e5](https://github.com/ReactiveX/RxJS/commit/edb33e5))



<a name="6.0.0"></a>
# [6.0.0](https://github.com/ReactiveX/RxJS/compare/6.0.0-uncanny-rc.7...v6.0.0) (2018-04-24)


### Bug Fixes

* **websocket:** no longer throws errors in operators applied to it ([#3577](https://github.com/ReactiveX/RxJS/issues/3577)) ([cb38ddf](https://github.com/ReactiveX/RxJS/commit/cb38ddf))


### Code Refactoring

* **webSocket:** rename back to webSocket ala 5.0 ([#3590](https://github.com/ReactiveX/RxJS/issues/3590)) ([d5658fe](https://github.com/ReactiveX/RxJS/commit/d5658fe))


### Features

* **testing:** Add testScheduler.run() helper ([2d5b3b2](https://github.com/ReactiveX/RxJS/commit/2d5b3b2))
* **testing:** testScheduler.run() supports time progression syntax ([9322b7d](https://github.com/ReactiveX/RxJS/commit/9322b7d))


### BREAKING CHANGES

* **webSocket:** UNBREAKING websocket to be named `webSocket` again, just like it was in 5.0. Now you should import from `rxjs/webSocket`



<a name="6.0.0-uncanny-rc.7"></a>
# [6.0.0-uncanny-rc.7](https://github.com/ReactiveX/RxJS/compare/6.0.0-ucandoit-rc.6...v6.0.0-uncanny-rc.7) (2018-04-13)


### Bug Fixes

* **interop:** functions with `[Symbol.observable]` on them will now be accepted in operators like `mergeMap`, `from`, etc ([#3562](https://github.com/ReactiveX/RxJS/issues/3562)) ([c9570df](https://github.com/ReactiveX/RxJS/commit/c9570df))
* **migrations:** change the version the migration applies to ([#3564](https://github.com/ReactiveX/RxJS/issues/3564)) ([9217a03](https://github.com/ReactiveX/RxJS/commit/9217a03))
* **rxjs:** no longer requires `dom` lib ([#3566](https://github.com/ReactiveX/RxJS/issues/3566)) ([8b33ee2](https://github.com/ReactiveX/RxJS/commit/8b33ee2))
* **throttleTime:** emit throttled values when complete if trailing=true ([#3559](https://github.com/ReactiveX/RxJS/issues/3559)) ([3e846f2](https://github.com/ReactiveX/RxJS/commit/3e846f2)), closes [#3351](https://github.com/ReactiveX/RxJS/issues/3351)
* **websocket:** export WebSocketSubject, WebSocketSubjectConfig from rxjs/websocket ([#3557](https://github.com/ReactiveX/RxJS/issues/3557)) ([c365405](https://github.com/ReactiveX/RxJS/commit/c365405))



<a name="6.0.0-ucandoit-rc.6"></a>
# [6.0.0-ucandoit-rc.6](https://github.com/ReactiveX/RxJS/compare/6.0.0-uber-rc.5...v6.0.0-ucandoit-rc.6) (2018-04-13)


### Bug Fixes

* **migrations:** make sure collection.json is present ([63e10a8](https://github.com/ReactiveX/RxJS/commit/63e10a8))



<a name="6.0.0-uber-rc.5"></a>
# [6.0.0-uber-rc.5](https://github.com/ReactiveX/RxJS/compare/6.0.0-turbo-rc.4...6.0.0-uber-rc.5) (2018-04-13)


### Bug Fixes

* **migrations:** deploy compiled JS rather than just the TS files. ([9aed72f](https://github.com/ReactiveX/RxJS/commit/9aed72f))



<a name="6.0.0-turbo-rc.4"></a>
# [6.0.0-turbo-rc.4](https://github.com/ReactiveX/RxJS/compare/6.0.0-terrific-rc.3...6.0.0-turbo-rc.4) (2018-04-12)


### Bug Fixes

* **groupBy:** reexporting the GroupedObservable type ([#3556](https://github.com/ReactiveX/RxJS/issues/3556)) ([12d4933](https://github.com/ReactiveX/RxJS/commit/12d4933)), closes [#3551](https://github.com/ReactiveX/RxJS/issues/3551)
* **migrations:** build now properly copies migration into package ([#3555](https://github.com/ReactiveX/RxJS/issues/3555)) ([329a145](https://github.com/ReactiveX/RxJS/commit/329a145))



<a name="6.0.0-terrific-rc.3"></a>
# [6.0.0-terrific-rc.3](https://github.com/ReactiveX/RxJS/compare/6.0.0-tenacious-rc.2...v6.0.0-terrific-rc.3) (2018-04-11)


### Features

* **schematics:** add migration schematics for schematics users ([20a2f07](https://github.com/ReactiveX/RxJS/commit/20a2f07))



<a name="6.0.0-tenacious-rc.2"></a>
# [6.0.0-tenacious-rc.2](https://github.com/ReactiveX/RxJS/compare/6.0.0-tactical-rc.1...v6.0.0-tenacious-rc.2) (2018-04-11)


### Bug Fixes

* **compat:** fix first & last operators so undefined arguments won't create empty values ([#3542](https://github.com/ReactiveX/RxJS/issues/3542)) ([a327db2](https://github.com/ReactiveX/RxJS/commit/a327db2))
* **node/TS:** eliminate incompatable types to protected properties ([#3544](https://github.com/ReactiveX/RxJS/issues/3544)) ([21dd3bd](https://github.com/ReactiveX/RxJS/commit/21dd3bd))


### BREAKING CHANGES

* **NodeJS** Dropping support for non-LTS versions of Node.

<a name="6.0.0-tactical-rc.1"></a>
# [6.0.0-tactical-rc.1](https://github.com/ReactiveX/RxJS/compare/6.0.0-rc.0...6.0.0-tactical-rc.1) (2018-04-07)

Why "tactical"? Because I *TOTALLY MEANT* to ruin the release names by publishing an amazingly funny April Fool's joke about smooshMap. So this was "tactical". Super tactical. So very tactical.

### Bug Fixes

* **closure-compiler:** adds nocollapse to static members ([#3519](https://github.com/ReactiveX/RxJS/issues/3519)) ([8758a5d](https://github.com/ReactiveX/RxJS/commit/8758a5d))
* **closure-compiler:** remove internal flag from _isScalar ([#3520](https://github.com/ReactiveX/RxJS/issues/3520)) ([b3a657d](https://github.com/ReactiveX/RxJS/commit/b3a657d))
* **closure-compiler:** remove top level throws ([#3518](https://github.com/ReactiveX/RxJS/issues/3518)) ([b069473](https://github.com/ReactiveX/RxJS/commit/b069473))
* **closure-compiler:** removes bad \[@params](https://github.com/params) comments that caused issues ([#3521](https://github.com/ReactiveX/RxJS/issues/3521)) ([09c874c](https://github.com/ReactiveX/RxJS/commit/09c874c))
* **compat:** deprecate Observable.if/throw ([#3527](https://github.com/ReactiveX/RxJS/issues/3527)) ([3116275](https://github.com/ReactiveX/RxJS/commit/3116275))
* **compat:** export TeardownLogic ([#3532](https://github.com/ReactiveX/RxJS/issues/3532)) ([0c76e64](https://github.com/ReactiveX/RxJS/commit/0c76e64)), closes [#3531](https://github.com/ReactiveX/RxJS/issues/3531)
* **compat:** remove observable/scalar deep import as it wasn't previously available ([4566001](https://github.com/ReactiveX/RxJS/commit/4566001))
* **Scheduler:** export but deprecate ([#3522](https://github.com/ReactiveX/RxJS/issues/3522)) ([a3e1fb8](https://github.com/ReactiveX/RxJS/commit/a3e1fb8))
* **skipUntil:** properly manages notifier subscription ([889f84a](https://github.com/ReactiveX/RxJS/commit/889f84a)), closes [#1886](https://github.com/ReactiveX/RxJS/issues/1886)
* fix type mismatch in NodeStyleEventEmitter ([#3530](https://github.com/ReactiveX/RxJS/issues/3530)) ([3f51ddd](https://github.com/ReactiveX/RxJS/commit/3f51ddd))
* **sourcemaps:** fix mappings for source maps so they will work ([#3523](https://github.com/ReactiveX/RxJS/issues/3523)) ([32e7f75](https://github.com/ReactiveX/RxJS/commit/32e7f75)), closes [#3479](https://github.com/ReactiveX/RxJS/issues/3479)


### Features

* **compat:** add Observable extension classes with static create() ([ecd7f68](https://github.com/ReactiveX/RxJS/commit/ecd7f68))
* **compat:** add rxjs/interfaces exports ([ba5c266](https://github.com/ReactiveX/RxJS/commit/ba5c266))



<a name="6.0.0-rc.0"></a>
# [6.0.0-rc.0](https://github.com/ReactiveX/RxJS/compare/6.0.0-beta.4...6.0.0-rc.0) (2018-03-31)


### Bug Fixes

* **ajax:** properly encode body with form data that includes URLs ([#3502](https://github.com/ReactiveX/RxJS/issues/3502)) ([4455d21](https://github.com/ReactiveX/RxJS/commit/4455d21)), closes [#2399](https://github.com/ReactiveX/RxJS/issues/2399)
* **bindNodeCallback:** better type inference ([932bb7a](https://github.com/ReactiveX/RxJS/commit/932bb7a))
* **elementAt:** now allows falsy defaultValues ([13706e7](https://github.com/ReactiveX/RxJS/commit/13706e7))
* **lint_perf:** fix lint issues with newer perf tests ([1013754](https://github.com/ReactiveX/RxJS/commit/1013754))
* **throttle:** now properly trailing throttles for individual values ([#3505](https://github.com/ReactiveX/RxJS/issues/3505)) ([3db18d1](https://github.com/ReactiveX/RxJS/commit/3db18d1)), closes [#2864](https://github.com/ReactiveX/RxJS/issues/2864)


### Features

* **takeUntil:** no longer subscribes to source if notifier synchronously emits ([#3504](https://github.com/ReactiveX/RxJS/issues/3504)) ([7b8a3e3](https://github.com/ReactiveX/RxJS/commit/7b8a3e3)), closes [#2189](https://github.com/ReactiveX/RxJS/issues/2189)


### Performance Improvements

* **pluck,bufferTime,asObservable:** add performance tests for pluck(), bufferTime() and asObservable() operators ([#2491](https://github.com/ReactiveX/RxJS/issues/2491)) ([24506b3](https://github.com/ReactiveX/RxJS/commit/24506b3))
* **ReplaySubject:** slightly improved performance ([#2677](https://github.com/ReactiveX/RxJS/issues/2677)) ([9fea36d](https://github.com/ReactiveX/RxJS/commit/9fea36d))


### BREAKING CHANGES

* **throttle:** This changes the behavior of throttle, in particular
throttling with both leading and trailing behaviors set to true, to more
closely match the throttling behavior of lodash and other libraries.
Throttling now starts immediately after any emission from the
observable, and values will not be double emitted for both leading and
trailing values



<a name="6.0.0-beta.4"></a>
# [6.0.0-beta.4](https://github.com/ReactiveX/RxJS/compare/6.0.0-beta.3...v6.0.0-beta.4) (2018-03-29)


### Bug Fixes

* **bindCallback:** add better type overloads ([#3480](https://github.com/ReactiveX/RxJS/issues/3480)) ([037cf34](https://github.com/ReactiveX/RxJS/commit/037cf34))
* **compat:** add IScheduler to compat/Scheduler ([0a67df6](https://github.com/ReactiveX/RxJS/commit/0a67df6))


### Features

* **compat:** add all utilities to internal-compatibility ([a9ecfe7](https://github.com/ReactiveX/RxJS/commit/a9ecfe7))
* **websocket:** Add serializer/deserializer config settings ([#3489](https://github.com/ReactiveX/RxJS/issues/3489)) ([8d44124](https://github.com/ReactiveX/RxJS/commit/8d44124))


### BREAKING CHANGES

* **websocket:** WebSocketSubject will now JSON serialize all messages sent over it by default, to return to the old behavior, pass a config setting of `serializer: x => x` like so: `websocket({ url, serializer: x => x })`



<a name="6.0.0-beta.3"></a>
# [6.0.0-beta.3](https://github.com/ReactiveX/RxJS/compare/6.0.0-beta.1...6.0.0-beta.3) (2018-03-27)


### Bug Fixes

* **build:** update build-optimizer and point to correct sources ([6717a01](https://github.com/ReactiveX/RxJS/commit/6717a01))
* **node:** Subscriber no longer trampled if from another copy of rxjs ([371b658](https://github.com/ReactiveX/RxJS/commit/371b658))
* **Observable:** empty ctor returns valid Observable ([#3464](https://github.com/ReactiveX/RxJS/issues/3464)) ([58b8ebc](https://github.com/ReactiveX/RxJS/commit/58b8ebc))
* **subscribeOn:** add subscribeOn back to the distribution ([d6556f2](https://github.com/ReactiveX/RxJS/commit/d6556f2))



<a name="6.0.0-beta.2"></a>
# [6.0.0-beta.2](https://github.com/ReactiveX/RxJS/compare/6.0.0-beta.1...6.0.0-beta.2) (2018-03-24)


### Bug Fixes

* **build:** update build-optimizer and point to correct sources ([6717a01](https://github.com/ReactiveX/RxJS/commit/6717a01))
* **Observable:** empty ctor returns valid Observable ([#3464](https://github.com/ReactiveX/RxJS/issues/3464)) ([58b8ebc](https://github.com/ReactiveX/RxJS/commit/58b8ebc))
* **subscribeOn:** add subscribeOn back to the distribution ([d6556f2](https://github.com/ReactiveX/RxJS/commit/d6556f2))



<a name="6.0.0-beta.1"></a>
# [6.0.0-beta.1](https://github.com/ReactiveX/RxJS/compare/6.0.0-beta.0...v6.0.0-beta.1) (2018-03-21)


### Bug Fixes

* remove duplicate Subscribable<T> interface declaration ([#3450](https://github.com/ReactiveX/RxJS/issues/3450)) ([ac78d89](https://github.com/ReactiveX/RxJS/commit/ac78d89))
* **compat:** add package.json for internal-compatibility package ([#3455](https://github.com/ReactiveX/RxJS/issues/3455)) ([3b306ed](https://github.com/ReactiveX/RxJS/commit/3b306ed))
* **config.useDeprecatedSynchronousErrorThrowing:** reentrant error throwing no longer trapped ([#3449](https://github.com/ReactiveX/RxJS/issues/3449)) ([0892a2d](https://github.com/ReactiveX/RxJS/commit/0892a2d)), closes [#3161](https://github.com/ReactiveX/RxJS/issues/3161)


### Features

* **compat:** add interfaces export ([d8f8122](https://github.com/ReactiveX/RxJS/commit/d8f8122))
* **compat:** add rxjs/observable/dom/* APIs to compatibility package ([d9a618f](https://github.com/ReactiveX/RxJS/commit/d9a618f))



<a name="6.0.0-beta.0"></a>
# [6.0.0-beta.0](https://github.com/ReactiveX/RxJS/compare/6.0.0-alpha.3...6.0.0-beta.0) (2018-03-16)


### Bug Fixes

* **AjaxObservable:** 1xx,2xx,3xx requests shouldn't error, only 4xx,5xx ([#3438](https://github.com/ReactiveX/RxJS/issues/3438)) ([2128932](https://github.com/ReactiveX/RxJS/commit/2128932))
* **compat:** adjustments to get rxjs-compat to build correctly ([dea6964](https://github.com/ReactiveX/RxJS/commit/dea6964))
* **config:** expose configuration via rxjs exports ([#3441](https://github.com/ReactiveX/RxJS/issues/3441)) ([4287424](https://github.com/ReactiveX/RxJS/commit/4287424))
* **config:** make sure that Promise config is undefined initially ([#3440](https://github.com/ReactiveX/RxJS/issues/3440)) ([469afe8](https://github.com/ReactiveX/RxJS/commit/469afe8))
* **ESM:** Add [operators|ajax|websocket|testing]/package.json for ESM support, fixes [#3227](https://github.com/ReactiveX/RxJS/issues/3227) ([#3356](https://github.com/ReactiveX/RxJS/issues/3356)) ([725dcb4](https://github.com/ReactiveX/RxJS/commit/725dcb4))
* **forkJoin:** fix forkJoin typings for forkJoin(Observable<any>[]) ([#3436](https://github.com/ReactiveX/RxJS/issues/3436)) ([17c7f8f](https://github.com/ReactiveX/RxJS/commit/17c7f8f))
* **fromEvent:** Defines toString to fix Closure compilations ([#3417](https://github.com/ReactiveX/RxJS/issues/3417)) ([1558b43](https://github.com/ReactiveX/RxJS/commit/1558b43))
* **fromEvent:** pass options in unsubscribe ([f1872b0](https://github.com/ReactiveX/RxJS/commit/f1872b0)), closes [#3349](https://github.com/ReactiveX/RxJS/issues/3349)
* **publishReplay:** type inference improved ([#3437](https://github.com/ReactiveX/RxJS/issues/3437)) ([dd7c9f1](https://github.com/ReactiveX/RxJS/commit/dd7c9f1)), closes [#3260](https://github.com/ReactiveX/RxJS/issues/3260)
* **rxjs:** add exports for symbols/interfaces that were missing ([#3380](https://github.com/ReactiveX/RxJS/issues/3380)) ([1622ee0](https://github.com/ReactiveX/RxJS/commit/1622ee0))
* **rxjs:** make sure esm imports from index.js by default, not Rx.js ([#3316](https://github.com/ReactiveX/RxJS/issues/3316)) ([c2b00f4](https://github.com/ReactiveX/RxJS/commit/c2b00f4)), closes [#3315](https://github.com/ReactiveX/RxJS/issues/3315)
* **rxjs:** once again exports custom error types ([#3371](https://github.com/ReactiveX/RxJS/issues/3371)) ([4465a9f](https://github.com/ReactiveX/RxJS/commit/4465a9f))
* **rxjs:** remove types.ts importing from itself. ([#3383](https://github.com/ReactiveX/RxJS/issues/3383)) ([8fd50ad](https://github.com/ReactiveX/RxJS/commit/8fd50ad))
* **spec:** get tests running using compatibility package ([916e968](https://github.com/ReactiveX/RxJS/commit/916e968))
* correct internal module paths to be systemjs compatible ([#3412](https://github.com/ReactiveX/RxJS/issues/3412)) ([35abc9d](https://github.com/ReactiveX/RxJS/commit/35abc9d))
* **Symbol.iterator:** correctly handle case where Symbol constructor itself is not defined ([#3394](https://github.com/ReactiveX/RxJS/issues/3394)) ([6725be1](https://github.com/ReactiveX/RxJS/commit/6725be1))
* **typings:** fixed some cases where multicast and publish would not return a ConnectableObservable ([#3320](https://github.com/ReactiveX/RxJS/issues/3320)) ([ddffecc](https://github.com/ReactiveX/RxJS/commit/ddffecc))
* reexport Symbol.observable typings patch ([4c4d7b0](https://github.com/ReactiveX/RxJS/commit/4c4d7b0))
* remove the root operators.ts because it overshadows operators/package.json ([184b6d4](https://github.com/ReactiveX/RxJS/commit/184b6d4))


### Code Refactoring

* **Observable.if:** remove ts hacks from Observable ([f46f261](https://github.com/ReactiveX/RxJS/commit/f46f261))
* **Rx.ts:** move Rx.ts to internal ([#3400](https://github.com/ReactiveX/RxJS/issues/3400)) ([7ad2119](https://github.com/ReactiveX/RxJS/commit/7ad2119))


### Features

* **ajax:** default to opting into CORS ([#3442](https://github.com/ReactiveX/RxJS/issues/3442)) ([aa3bf57](https://github.com/ReactiveX/RxJS/commit/aa3bf57)), closes [#3273](https://github.com/ReactiveX/RxJS/issues/3273)
* **bindCallback:** remove result selector ([2535641](https://github.com/ReactiveX/RxJS/commit/2535641))
* **bindNodeCallback:** remove resultSelector ([26e6e5c](https://github.com/ReactiveX/RxJS/commit/26e6e5c))
* **compat:** add compatability package definition ([40aca82](https://github.com/ReactiveX/RxJS/commit/40aca82))
* **compat:** add concat operator to compatibility layer ([6e84e78](https://github.com/ReactiveX/RxJS/commit/6e84e78))
* **compat:** add legacy reexport compat layer for 'rxjs/Observable' and other top-level symbols ([70e562b](https://github.com/ReactiveX/RxJS/commit/70e562b))
* **compat:** add Rx.ts to rxjs-compat ([df25de1](https://github.com/ReactiveX/RxJS/commit/df25de1))
* **compat:** combatability mode for combineLatest ([fd86df5](https://github.com/ReactiveX/RxJS/commit/fd86df5))
* **compat:** compatibility mode for merge operator ([ffce980](https://github.com/ReactiveX/RxJS/commit/ffce980))
* **compat:** compatibility mode for zip operator ([9f131d0](https://github.com/ReactiveX/RxJS/commit/9f131d0))
* **compat:** make Rx.ts for compatability layer work as the default for rxjs-compat ([d43a4c2](https://github.com/ReactiveX/RxJS/commit/d43a4c2))
* **compat:** set up correct imports & get build working for rxjs-comapt ([1a0dc97](https://github.com/ReactiveX/RxJS/commit/1a0dc97))
* **deprecated-error-handling-warning:** add console warning when code sets the flag to bad mode ([49be56a](https://github.com/ReactiveX/RxJS/commit/49be56a))
* **error-handling:** add deprecated sync error handling behind a flag ([583cd1d](https://github.com/ReactiveX/RxJS/commit/583cd1d))
* **exhaustMap:** simplify interface ([42589d0](https://github.com/ReactiveX/RxJS/commit/42589d0))
* **first:** simplify interface ([a011338](https://github.com/ReactiveX/RxJS/commit/a011338))
* **forkJoin:** simplify interface ([4d2338b](https://github.com/ReactiveX/RxJS/commit/4d2338b))
* **fromEvent:** remove resultSelector ([197f449](https://github.com/ReactiveX/RxJS/commit/197f449))
* **fromEvent:** will now emit an array when event emits multiple arguments ([51b37fd](https://github.com/ReactiveX/RxJS/commit/51b37fd))
* **fromEventPattern:** removed resultSelector ([6b34f9f](https://github.com/ReactiveX/RxJS/commit/6b34f9f))
* **last:** simplify interface ([3240419](https://github.com/ReactiveX/RxJS/commit/3240419))
* **mergeMap|concatMap|concatMapTo:** simplified the signatures ([d293245](https://github.com/ReactiveX/RxJS/commit/d293245))
* **mergeMapTo:** simplify interface ([582c7be](https://github.com/ReactiveX/RxJS/commit/582c7be))
* **never:** no longer export `never` function ([#3386](https://github.com/ReactiveX/RxJS/issues/3386)) ([53debc8](https://github.com/ReactiveX/RxJS/commit/53debc8))
* **switchMap|switchMapTo:** simplify interface ([959fb6a](https://github.com/ReactiveX/RxJS/commit/959fb6a))
* **Symbol.iterator:** no longer polyfilled ([#3389](https://github.com/ReactiveX/RxJS/issues/3389)) ([6319f3c](https://github.com/ReactiveX/RxJS/commit/6319f3c))
* **Symbol.observable:** is no longer polyfilled ([#3387](https://github.com/ReactiveX/RxJS/issues/3387)) ([4a5aaaf](https://github.com/ReactiveX/RxJS/commit/4a5aaaf))
* **throwIfEmpty:** adds throwIfEmpty operator ([#3368](https://github.com/ReactiveX/RxJS/issues/3368)) ([9b21458](https://github.com/ReactiveX/RxJS/commit/9b21458))
* **typings:** updated typings for combineAll, mergeAll, concatAll, switch, exhaust, zipAll ([#3321](https://github.com/ReactiveX/RxJS/issues/3321)) ([f7e4c02](https://github.com/ReactiveX/RxJS/commit/f7e4c02))
* **umd:** UMD now mirrors export schema for ESM and CJS ([#3426](https://github.com/ReactiveX/RxJS/issues/3426)) ([556c904](https://github.com/ReactiveX/RxJS/commit/556c904))


### BREAKING CHANGES

* **ajax:** will no longer execute a CORS request by default, you must opt-in with the `crossDomain` flag in the config.
* **mergeMap|concatMap|concatMapTo:** mergeMap, concatMap and concatMapTo no longer support a result selector, if you need to use a result selector, use the following pattern: `source.mergeMap(x => of(x + x).pipe(map(y => y + x))` (the pattern would be the same for `concatMap`).
* **never:** no longer exported. Use the `NEVER` constant instead.
* **bindCallback:** removes result selector, use `map` instead: `bindCallback(fn1, fn2)()` becomes `bindCallback(fn1)().pipe(map(fn2))`
* **Rx.ts:** importing from `rxjs/Rx` is no longer available. Upcoming backwards compat solution will allow that
* **Symbol.iterator:** We are no longer polyfilling `Symbol.iterator`. That would be done by a proper polyfilling library
* **Observable.if:** TypeScript users using `Observable.if` will have to cast `Observable` as any to get to `if`. It is a better idae to just use `iif` directly via `import { iif } from 'rxjs';`
* **bindNodeCallback:** resultSelector removed, use `map` instead: `bindNodeCallback(fn1, fn2)()` becomes `bindNodeCallback(fn1)().pipe(map(fn2))`
* **Symbol.observable:** RxJS will no longer be polyfilling Symbol.observable. That should be done by an actual polyfill library. This is to prevent duplication of code, and also to prevent having modules with side-effects in rxjs.
* **fromEvent:** result selector removed, use `map` instead: `fromEvent(target, 'click', fn)` becomes `fromEvent(target, 'click').pipe(map(fn))`
* **last:** no longer accepts `resultSelector` argument. To get this same functionality, use `map`.
* **first:** no longer supports `resultSelector` argument. The same functionality can be achieved by simply mapping either before or after `first` depending on your use case.
* **exhaustMap:** `resultSelector` no longer supported, to get this functionality use: `source.pipe(exhaustMap(x => of(x + x).pipe(map(y => x + y))))`
* **switchMap|switchMapTo:** `switchMap` and `switchMapTo` no longer take `resultSelector` arguments, to get the same functionality use `switchMap` and `map` in combination: `source.pipe(switchMap(x => of(x + x).pipe(y => x + y)))`.
* **mergeMapTo:** `mergeMapTo` no longer accepts a resultSelector, to get this functionality, you'll want to use `mergeMap` and `map` together: `source.pipe(mergeMap(() => inner).pipe(map(y => x + y)))`
* **fromEventPattern:** no longer supports a result selector, use `map` instead: `fromEventPattern(fn1, fn2, fn3)` becomes `fromEventPattern(fn1, fn2).pipe(map(fn3))`



<a name="6.0.0-alpha.4"></a>
# [6.0.0-alpha.4](https://github.com/ReactiveX/RxJS/compare/6.0.0-alpha.3...v6.0.0-alpha.4) (2018-03-13)


### Bug Fixes

* **ESM:** Add [operators|ajax|websocket|testing]/package.json for ESM support, fixes [#3227](https://github.com/ReactiveX/RxJS/issues/3227) ([#3356](https://github.com/ReactiveX/RxJS/issues/3356)) ([725dcb4](https://github.com/ReactiveX/RxJS/commit/725dcb4))
* **fromEvent:** Defines toString to fix Closure compilations ([#3417](https://github.com/ReactiveX/RxJS/issues/3417)) ([1558b43](https://github.com/ReactiveX/RxJS/commit/1558b43))
* **fromEvent:** pass options in unsubscribe ([f1872b0](https://github.com/ReactiveX/RxJS/commit/f1872b0)), closes [#3349](https://github.com/ReactiveX/RxJS/issues/3349)
* **rxjs:** add exports for symbols/interfaces that were missing ([#3380](https://github.com/ReactiveX/RxJS/issues/3380)) ([1622ee0](https://github.com/ReactiveX/RxJS/commit/1622ee0))
* **rxjs:** make sure esm imports from index.js by default, not Rx.js ([#3316](https://github.com/ReactiveX/RxJS/issues/3316)) ([c2b00f4](https://github.com/ReactiveX/RxJS/commit/c2b00f4)), closes [#3315](https://github.com/ReactiveX/RxJS/issues/3315)
* **rxjs:** once again exports custom error types ([#3371](https://github.com/ReactiveX/RxJS/issues/3371)) ([4465a9f](https://github.com/ReactiveX/RxJS/commit/4465a9f))
* **rxjs:** remove types.ts importing from itself. ([#3383](https://github.com/ReactiveX/RxJS/issues/3383)) ([8fd50ad](https://github.com/ReactiveX/RxJS/commit/8fd50ad))
* correct internal module paths to be systemjs compatible ([#3412](https://github.com/ReactiveX/RxJS/issues/3412)) ([35abc9d](https://github.com/ReactiveX/RxJS/commit/35abc9d))
* **Symbol.iterator:** correctly handle case where Symbol constructor itself is not defined ([#3394](https://github.com/ReactiveX/RxJS/issues/3394)) ([6725be1](https://github.com/ReactiveX/RxJS/commit/6725be1))
* **typings:** fixed some cases where multicast and publish would not return a ConnectableObservable ([#3320](https://github.com/ReactiveX/RxJS/issues/3320)) ([ddffecc](https://github.com/ReactiveX/RxJS/commit/ddffecc))
* reexport Symbol.observable typings patch ([4c4d7b0](https://github.com/ReactiveX/RxJS/commit/4c4d7b0))
* remove the root operators.ts because it overshadows operators/package.json ([184b6d4](https://github.com/ReactiveX/RxJS/commit/184b6d4))


### Code Refactoring

* **Observable.if:** remove ts hacks from Observable ([f46f261](https://github.com/ReactiveX/RxJS/commit/f46f261))
* **Rx.ts:** move Rx.ts to internal ([#3400](https://github.com/ReactiveX/RxJS/issues/3400)) ([7ad2119](https://github.com/ReactiveX/RxJS/commit/7ad2119))


### Features

* **bindCallback:** remove result selector ([2535641](https://github.com/ReactiveX/RxJS/commit/2535641))
* **bindNodeCallback:** remove resultSelector ([26e6e5c](https://github.com/ReactiveX/RxJS/commit/26e6e5c))
* **exhaustMap:** simplify interface ([42589d0](https://github.com/ReactiveX/RxJS/commit/42589d0))
* **first:** simplify interface ([a011338](https://github.com/ReactiveX/RxJS/commit/a011338))
* **forkJoin:** simplify interface ([4d2338b](https://github.com/ReactiveX/RxJS/commit/4d2338b))
* **fromEvent:** remove resultSelector ([197f449](https://github.com/ReactiveX/RxJS/commit/197f449))
* **fromEvent:** will now emit an array when event emits multiple arguments ([51b37fd](https://github.com/ReactiveX/RxJS/commit/51b37fd))
* **fromEventPattern:** removed resultSelector ([6b34f9f](https://github.com/ReactiveX/RxJS/commit/6b34f9f))
* **last:** simplify interface ([3240419](https://github.com/ReactiveX/RxJS/commit/3240419))
* **mergeMap|concatMap|concatMapTo:** simplified the signatures ([d293245](https://github.com/ReactiveX/RxJS/commit/d293245))
* **mergeMapTo:** simplify interface ([582c7be](https://github.com/ReactiveX/RxJS/commit/582c7be))
* **never:** no longer export `never` function ([#3386](https://github.com/ReactiveX/RxJS/issues/3386)) ([53debc8](https://github.com/ReactiveX/RxJS/commit/53debc8))
* **switchMap|switchMapTo:** simplify interface ([959fb6a](https://github.com/ReactiveX/RxJS/commit/959fb6a))
* **Symbol.iterator:** no longer polyfilled ([#3389](https://github.com/ReactiveX/RxJS/issues/3389)) ([6319f3c](https://github.com/ReactiveX/RxJS/commit/6319f3c))
* **Symbol.observable:** is no longer polyfilled ([#3387](https://github.com/ReactiveX/RxJS/issues/3387)) ([4a5aaaf](https://github.com/ReactiveX/RxJS/commit/4a5aaaf))
* **throwIfEmpty:** adds throwIfEmpty operator ([#3368](https://github.com/ReactiveX/RxJS/issues/3368)) ([9b21458](https://github.com/ReactiveX/RxJS/commit/9b21458))
* **typings:** updated typings for combineAll, mergeAll, concatAll, switch, exhaust, zipAll ([#3321](https://github.com/ReactiveX/RxJS/issues/3321)) ([f7e4c02](https://github.com/ReactiveX/RxJS/commit/f7e4c02))
* **umd:** UMD now mirrors export schema for ESM and CJS ([#3426](https://github.com/ReactiveX/RxJS/issues/3426)) ([556c904](https://github.com/ReactiveX/RxJS/commit/556c904))


### BREAKING CHANGES

* **Symbol.observable:** RxJS will no longer be polyfilling Symbol.observable. That should be done by an actual polyfill library. This is to prevent duplication of code, and also to prevent having modules with side-effects in rxjs.
* **mergeMap|concatMap|concatMapTo:** mergeMap, concatMap and concatMapTo no longer support a result selector, if you need to use a result selector, use the following pattern: `source.mergeMap(x => of(x + x).pipe(map(y => y + x))` (the pattern would be the same for `concatMap`).
* **bindCallback:** removes result selector, use `map` instead: `bindCallback(fn1, fn2)()` becomes `bindCallback(fn1)().pipe(map(fn2))`
* **Rx.ts:** importing from `rxjs/Rx` is no longer available. Upcoming backwards compat solution will allow that
* **Symbol.iterator:** We are no longer polyfilling `Symbol.iterator`. That would be done by a proper polyfilling library
* **Observable.if:** TypeScript users using `Observable.if` will have to cast `Observable` as any to get to `if`. It is a better idae to just use `iif` directly via `import { iif } from 'rxjs';`
* **bindNodeCallback:** resultSelector removed, use `map` instead: `bindNodeCallback(fn1, fn2)()` becomes `bindNodeCallback(fn1)().pipe(map(fn2))`
* **never:** no longer exported. Use the `NEVER` constant instead.
* **fromEvent:** result selector removed, use `map` instead: `fromEvent(target, 'click', fn)` becomes `fromEvent(target, 'click').pipe(map(fn))`
* **last:** no longer accepts `resultSelector` argument. To get this same functionality, use `map`.
* **first:** no longer supports `resultSelector` argument. The same functionality can be achieved by simply mapping either before or after `first` depending on your use case.
* **exhaustMap:** `resultSelector` no longer supported, to get this functionality use: `source.pipe(exhaustMap(x => of(x + x).pipe(map(y => x + y))))`
* **switchMap|switchMapTo:** `switchMap` and `switchMapTo` no longer take `resultSelector` arguments, to get the same functionality use `switchMap` and `map` in combination: `source.pipe(switchMap(x => of(x + x).pipe(y => x + y)))`.
* **mergeMapTo:** `mergeMapTo` no longer accepts a resultSelector, to get this functionality, you'll want to use `mergeMap` and `map` together: `source.pipe(mergeMap(() => inner).pipe(map(y => x + y)))`
* **fromEventPattern:** no longer supports a result selector, use `map` instead: `fromEventPattern(fn1, fn2, fn3)` becomes `fromEventPattern(fn1, fn2).pipe(map(fn3))`



<a name="6.0.0-alpha.3"></a>
# [6.0.0-alpha.3](https://github.com/ReactiveX/RxJS/compare/6.0.0-alpha.2...v6.0.0-alpha.3) (2018-02-06)


### Bug Fixes

* **animationFrame.spec:** spec description fix ([#3140](https://github.com/ReactiveX/RxJS/issues/3140)) ([ab6c325](https://github.com/ReactiveX/RxJS/commit/ab6c325))
* **debounce:** support scalar selectors ([#3236](https://github.com/ReactiveX/RxJS/issues/3236)) ([1548393](https://github.com/ReactiveX/RxJS/commit/1548393)), closes [#3232](https://github.com/ReactiveX/RxJS/issues/3232)
* **forkJoin:** catch and forward selector errors ([#3261](https://github.com/ReactiveX/RxJS/issues/3261)) ([e57bbb7](https://github.com/ReactiveX/RxJS/commit/e57bbb7)), closes [#3216](https://github.com/ReactiveX/RxJS/issues/3216)
* **Observable:** expose pipe rest parameter overload ([#3292](https://github.com/ReactiveX/RxJS/issues/3292)) ([7ff5bc3](https://github.com/ReactiveX/RxJS/commit/7ff5bc3))
* **onErrorResumeNext:** no longer holds onto subscriptions too long ([abbbdad](https://github.com/ReactiveX/RxJS/commit/abbbdad)), closes [#3178](https://github.com/ReactiveX/RxJS/issues/3178)
* **scheduler:** prevent unwanted clearInterval ([#3226](https://github.com/ReactiveX/RxJS/issues/3226)) ([d7cfb42](https://github.com/ReactiveX/RxJS/commit/d7cfb42)), closes [#3042](https://github.com/ReactiveX/RxJS/issues/3042)
* **timer:** multiple subscriptions to timer(Date) behaves correctly ([aafa7ff](https://github.com/ReactiveX/RxJS/commit/aafa7ff)), closes [#3252](https://github.com/ReactiveX/RxJS/issues/3252)
* **typings:** correct compilation warnings from missing types in tests ([3aad6bc](https://github.com/ReactiveX/RxJS/commit/3aad6bc))
* **typings:** relax debounce selector type ([c419ab4](https://github.com/ReactiveX/RxJS/commit/c419ab4)), closes [#3164](https://github.com/ReactiveX/RxJS/issues/3164)
* **typings:** relax throttle selector type ([#3205](https://github.com/ReactiveX/RxJS/issues/3205)) ([e83fda7](https://github.com/ReactiveX/RxJS/commit/e83fda7)), closes [#3204](https://github.com/ReactiveX/RxJS/issues/3204)
* **typings:** the return type of factory of defer should be ObservableInput<T> ([#3211](https://github.com/ReactiveX/RxJS/issues/3211)) ([dc41a5e](https://github.com/ReactiveX/RxJS/commit/dc41a5e))


### Features

* **empty:** empty() returns the same instance ([5c7c749](https://github.com/ReactiveX/RxJS/commit/5c7c749))
* **EMPTY:** observable constant EMPTY now exported ([08fb074](https://github.com/ReactiveX/RxJS/commit/08fb074))
* **never:** always return the same instance ([#3249](https://github.com/ReactiveX/RxJS/issues/3249)) ([d57fa52](https://github.com/ReactiveX/RxJS/commit/d57fa52))
* **rxjs:** move rxjs/create into rxjs ([#3299](https://github.com/ReactiveX/RxJS/issues/3299)) ([6711fe2](https://github.com/ReactiveX/RxJS/commit/6711fe2))
* **throwError:** functional version of throwError ([639236e](https://github.com/ReactiveX/RxJS/commit/639236e))


### BREAKING CHANGES

* **rxjs:** `rxjs/create` items are now exported from `rxjs`
* **throwError:** Observable.throw no longer available in TypeScript without a cast
* **empty:** `empty()` without a scheduler will return the same
instance every time.
* **empty:** In TypeScript, `empty()` no longer accepts a generic
argument, as it returns `Observable<never>`
* **never:** `never()` always returns the same instance
* **never:** TypeScript typing for `never()` is now `Observable<never>` and the function no longer requires a generic type.



<a name="6.0.0-alpha.2"></a>
# [6.0.0-alpha.2](https://github.com/ReactiveX/RxJS/compare/6.0.0-alpha.1...6.0.0-alpha.2) (2018-01-14)


### Bug Fixes

* **build:** properly outputs subdirectories like `rxjs/operators` ([34fe560](https://github.com/ReactiveX/RxJS/commit/34fe560))



<a name="6.0.0-alpha.1"></a>
# [6.0.0-alpha.1](https://github.com/ReactiveX/RxJS/compare/5.5.3...v6.0.0-alpha.1) (2018-01-12)


### Bug Fixes

* Revert "fix(scheduler): prevent unwanted clearInterval ([#3044](https://github.com/ReactiveX/RxJS/issues/3044))" ([ad5c7c6](https://github.com/ReactiveX/RxJS/commit/ad5c7c6))
* Revert "fix(scheduler): prevent unwanted clearInterval ([#3044](https://github.com/ReactiveX/RxJS/issues/3044))" ([64f9285](https://github.com/ReactiveX/RxJS/commit/64f9285))
* **debounceTime:** synchronous reentrancy of debounceTime no longer swallows the second value ([#3218](https://github.com/ReactiveX/RxJS/issues/3218)) ([598e9ce](https://github.com/ReactiveX/RxJS/commit/598e9ce)), closes [#2748](https://github.com/ReactiveX/RxJS/issues/2748)
* **dependency:** move symbol-observable into devdependency ([4400628](https://github.com/ReactiveX/RxJS/commit/4400628))
* **IteratorObservable:** get new iterator for each subscription ([#2497](https://github.com/ReactiveX/RxJS/issues/2497)) ([1bd0a58](https://github.com/ReactiveX/RxJS/commit/1bd0a58)), closes [#2496](https://github.com/ReactiveX/RxJS/issues/2496)
* **Observable.toArray:** Fix toArray with multiple subscriptions. ([#3134](https://github.com/ReactiveX/RxJS/issues/3134)) ([3390926](https://github.com/ReactiveX/RxJS/commit/3390926))
* **SystemJS:** avoid node module resolution of pipeable operators ([#3025](https://github.com/ReactiveX/RxJS/issues/3025)) ([0f3cf71](https://github.com/ReactiveX/RxJS/commit/0f3cf71)), closes [#2971](https://github.com/ReactiveX/RxJS/issues/2971) [#2996](https://github.com/ReactiveX/RxJS/issues/2996) [#3011](https://github.com/ReactiveX/RxJS/issues/3011)
* **tap:** make next optional ([#3073](https://github.com/ReactiveX/RxJS/issues/3073)) ([e659f0c](https://github.com/ReactiveX/RxJS/commit/e659f0c)), closes [#2534](https://github.com/ReactiveX/RxJS/issues/2534)
* **TSC:** Fixing TSC errors. Fixes [#3020](https://github.com/ReactiveX/RxJS/issues/3020) ([01d1575](https://github.com/ReactiveX/RxJS/commit/01d1575))
* **typings:** the return type of project of mergeScan should be ObservableInput<R> ([23fe17d](https://github.com/ReactiveX/RxJS/commit/23fe17d))


### Chores

* **TypeScript:** Bump up typescript to latest ([#3009](https://github.com/ReactiveX/RxJS/issues/3009)) ([2f395da](https://github.com/ReactiveX/RxJS/commit/2f395da))


### Code Refactoring

* **asap:** Remove setImmediate polyfill ([5eb6af7](https://github.com/ReactiveX/RxJS/commit/5eb6af7))
* **distinct:** Remove Set polyfill ([68ee499](https://github.com/ReactiveX/RxJS/commit/68ee499))
* **groupBy:** Remove Map polyfill ([74b5b1a](https://github.com/ReactiveX/RxJS/commit/74b5b1a))


### Features

* **Observable:** unhandled errors are now reported to HostReportErrors ([#3062](https://github.com/ReactiveX/RxJS/issues/3062)) ([cd9626a](https://github.com/ReactiveX/RxJS/commit/cd9626a))
* **reorganize:** move ./interfaces.ts to internal/types.ts ([cfbfaac](https://github.com/ReactiveX/RxJS/commit/cfbfaac))
* **reorganize:** internal utils hidden ([70058cd](https://github.com/ReactiveX/RxJS/commit/70058cd))
* **reorganize:** add `rxjs/create` exports ([c9963bd](https://github.com/ReactiveX/RxJS/commit/c9963bd))
* **reorganize:** ajax observable creator now exported from `rxjs/ajax` ([e971c93](https://github.com/ReactiveX/RxJS/commit/e971c93))
* **reorganize:** all patch operators moved to `internal` directory ([7342401](https://github.com/ReactiveX/RxJS/commit/7342401))
* **reorganize:** export `noop` and `identity` from `rxjs` ([810c4d0](https://github.com/ReactiveX/RxJS/commit/810c4d0))
* **reorganize:** export `Notification` from `rxjs` ([8809b48](https://github.com/ReactiveX/RxJS/commit/8809b48))
* **reorganize:** export schedulers from `rxjs` ([abd3b61](https://github.com/ReactiveX/RxJS/commit/abd3b61))
* **reorganize:** export Subject, ReplaySubject, BehaviorSubject from rxjs ([bd683ca](https://github.com/ReactiveX/RxJS/commit/bd683ca))
* **reorganize:** export the `pipe` utility function from `rxjs` ([4574310](https://github.com/ReactiveX/RxJS/commit/4574310))
* **reorganize:** hid testing implementation details ([b981666](https://github.com/ReactiveX/RxJS/commit/b981666))
* **reorganize:** move observable implementations under internal directory ([2d5c3f8](https://github.com/ReactiveX/RxJS/commit/2d5c3f8))
* **reorganize:** move operator impls under internal directory ([207976f](https://github.com/ReactiveX/RxJS/commit/207976f))
* **reorganize:** move top-level impls under internal directory ([c3bb705](https://github.com/ReactiveX/RxJS/commit/c3bb705))
* **reorganize:** moved symbols to be internal ([80783ab](https://github.com/ReactiveX/RxJS/commit/80783ab))
* **reorganize:** operators all exported from `rxjs/operators` ([b1f8bfe](https://github.com/ReactiveX/RxJS/commit/b1f8bfe))
* **reorganize:** websocket subject creator now exported from `rxjs/websocket` ([5ac62c0](https://github.com/ReactiveX/RxJS/commit/5ac62c0))


### BREAKING CHANGES

* **webSocket:** `webSocket` creator function now exported from `rxjs/websocket` as `websocket`.
* **IteratorObservable:** IteratorObservable no longer share iterator between
subscription
* **utils:** Many internal use utilities like `isArray` are now hidden under `rxjs/internal`, they are implementation details and should not be used.
* **testing observables:** `HotObservable` and `ColdObservable`, and other testing support types are no longer exported directly.
* **creation functions:** All create functions such as `of`, `from`, `combineLatest` and `fromEvent` should now be imported from `rxjs/create`.
* **types and interfaces:** Can no longer explicitly import types from `rxjs/interfaces`, import them from `rxjs` instead
* **symbols:** Symbols are no longer exported directly from modules such as `rxjs/symbol/observable` please use `Symbol.observable` and `Symbol.iterator` (polyfills may be required)
* **deep imports:** Can no longer deep import top-level types such as `rxjs/Observable`, `rxjs/Subject`, `rxjs/ReplaySubject`, et al. All imports should be done directly from `rxjs`, for example: `import \{ Observable, Subject \} from 'rxjs';`
* **schedulers:** Scheduler instances have changed names to be suffixed with `Scheduler`, (e.g. `asap` -> `asapScheduler`)
* **operators:** Pipeable operators must now be imported from `rxjs`
like so: `import { map, filter, switchMap } from 'rxjs/operators';`. No deep imports.
* **ajax:** Ajax observable should be imported from `rxjs/ajax`.
* **Observable:** You should no longer deep import custom Observable
implementations such as `ArrayObservable` or `ForkJoinObservable`.
* **_throw:** `_throw` is now exported as `throwError`
* **if:** `if` is now exported as `iif`
* **operators:** Deep imports to `rxjs/operator/*` will no longer work. Again, pipe operators are still where they were.
* **error handling:** Unhandled errors are no longer caught and rethrown, rather they are caught and scheduled to be thrown, which causes them to be reported to window.onerror or process.on('error'), depending on the environment. Consequently, teardown after a synchronous, unhandled, error will no longer occur, as the teardown would not exist, and producer interference cannot occur
* **distinct:** Using `distinct` requires a `Set` implementation and must be polyfilled in older runtimes
* **asap:** Old runtimes must polyfill Promise in order to use ASAP scheduling.
* **groupBy:** Older runtimes will require Map to be polyfilled to use
`groupBy`
* **TypeScript:** IE10 and lower will need to polyfill `Object.setPrototypeOf`
* **operators removed:** Operator versions of static observable creators such as
`merge`, `concat`, `zip`, `onErrorResumeNext`, and `race` have been
removed. Please use the static versions of those operations. e.g.
`a.pipe(concat(b, c))` becomes `concat(a, b, c)`.

<a name="5.5.6"></a>
## [5.5.6](https://github.com/ReactiveX/RxJS/compare/5.5.5...v5.5.6) (2017-12-21)


### Bug Fixes

* **Observable:** rethrow errors when syncErrorThrowable and inherit it from destination. Fixes [#2813](https://github.com/ReactiveX/RxJS/issues/2813) ([541b49d](https://github.com/ReactiveX/RxJS/commit/541b49d))



<a name="5.5.5"></a>
## [5.5.5](https://github.com/ReactiveX/RxJS/compare/5.5.4...v5.5.5) (2017-12-06)

### Support Added

* **Bazel:** Add files to support users that want Bazel builds with RxJS ([12dac3b](https://github.com/ReactiveX/rxjs/commit/12dac3b))

<a name="5.5.4"></a>
## [5.5.4](https://github.com/ReactiveX/RxJS/compare/5.5.3...v5.5.4) (2017-12-05)


### Bug Fixes

* **scheduler:** resolve regression on angular router with zones ([#3158](https://github.com/ReactiveX/RxJS/issues/3158)) ([520b06a](https://github.com/ReactiveX/RxJS/commit/520b06a))
* **publish:** re-publish after having built with proper version of TypeScript. ([f0ff5bc](https://github.com/ReactiveX/RxJS/commit/f0ff5bc), closes[#3155](https://github.com/ReactiveX/rxjs/issues/3155))


<a name="5.5.3"></a>
## [5.5.3](https://github.com/ReactiveX/RxJS/compare/5.5.2...v5.5.3) (2017-12-01)


### Bug Fixes

* **concatStatic:** missing exports for mergeStatic and concatStatic ([#2999](https://github.com/ReactiveX/RxJS/issues/2999)) ([cae5f9b](https://github.com/ReactiveX/RxJS/commit/cae5f9b))
* **scheduler:** prevent unwanted clearInterval ([#3044](https://github.com/ReactiveX/RxJS/issues/3044)) ([7d722d4](https://github.com/ReactiveX/RxJS/commit/7d722d4)), closes [#3042](https://github.com/ReactiveX/RxJS/issues/3042)
* **SystemJS:** avoid node module resolution of pipeable operators ([#3025](https://github.com/ReactiveX/RxJS/issues/3025)) ([d77e3d7](https://github.com/ReactiveX/RxJS/commit/d77e3d7)), closes [#2971](https://github.com/ReactiveX/RxJS/issues/2971) [#2996](https://github.com/ReactiveX/RxJS/issues/2996) [#3011](https://github.com/ReactiveX/RxJS/issues/3011)
* **typings:** fix subscribe overloads ([#3053](https://github.com/ReactiveX/RxJS/issues/3053)) ([1a9fd42](https://github.com/ReactiveX/RxJS/commit/1a9fd42)), closes [#3052](https://github.com/ReactiveX/RxJS/issues/3052)



<a name="5.5.2"></a>
## [5.5.2](https://github.com/ReactiveX/RxJS/compare/5.5.1...v5.5.2) (2017-10-25)


### Bug Fixes

* **package:** fixed import failures in Webpack ([#2987](https://github.com/ReactiveX/RxJS/issues/2987)) ([e16202d](https://github.com/ReactiveX/RxJS/commit/e16202d))
* **typings:** improved type inference for arguments to publishReplay ([#2992](https://github.com/ReactiveX/RxJS/issues/2992)) ([0753ff7](https://github.com/ReactiveX/RxJS/commit/0753ff7)), closes [#2991](https://github.com/ReactiveX/RxJS/issues/2991)
* **typings:** ensure TS types for `zip` and `combineLatest` are properly inferred. ([b8e6cf8](https://github.com/ReactiveX/RxJS/commit/b8e6cf8))
* **typings:** publish variants will properly return ConnectableObservable([#2983](https://github.com/ReactiveX/RxJS/issues/2983)) ([d563bfa](https://github.com/ReactiveX/RxJS/commit/d563bfa))



<a name="5.5.1"></a>
## [5.5.1](https://github.com/ReactiveX/RxJS/compare/5.5.0...v5.5.1) (2017-10-24)


### Bug Fixes

* **build:** Remove `module` and `es2015` keys to avoid resolution conflicts ([5073139](https:/github.com/ReactiveX/RxJS/commit/5073139))
* **ajaxobservable:** fix operator import path ([d9b62ed](https://github.com/ReactiveX/RxJS/commit/d9b62ed))



<a name="5.5.0"></a>
# [5.5.0](https://github.com/ReactiveX/RxJS/compare/5.5.0-beta.7...v5.5.0) (2017-10-18)

### Bug Fixes

* **build:** CJS sourceMaps now inlined into sourcesContent ([39b4af5](https://github.com/ReactiveX/RxJS/commit/39b4af5)), closes [#2934](https://github.com/ReactiveX/RxJS/issues/2934)


### Features

* **publishReplay:** add selector function to publishReplay ([#2885](https://github.com/ReactiveX/RxJS/issues/2885)) ([e0efd13](https://github.com/ReactiveX/RxJS/commit/e0efd13))



<a name="5.5.0-beta.7"></a>
# [5.5.0-beta.7](https://github.com/ReactiveX/RxJS/compare/5.5.0-beta.5...5.5.0-beta.7) (2017-10-13)

(Due to a publish snafu, there is no 5.5.0-beta.6) (womp womp 👎)

### Bug Fixes

* **build:** sourceMaps updated to support CJS properly again ([75f7f11](https://github.com/ReactiveX/RxJS/commit/75f7f11)), closes [#2934](https://github.com/ReactiveX/RxJS/issues/2934)
* **flatMap:** reexport flatMap as alias of mergeMap ([#2920](https://github.com/ReactiveX/RxJS/issues/2920)) ([9922c02](https://github.com/ReactiveX/RxJS/commit/9922c02))
* **publish:** correct the name and republish to sync packages ([464b115](https://github.com/ReactiveX/RxJS/commit/464b115))
* **shareReplay:** no longer exporting function unnecessarily ([#2928](https://github.com/ReactiveX/RxJS/issues/2928)) ([e159578](https://github.com/ReactiveX/RxJS/commit/e159578))
* **shareReplay:** properly uses `lift` ([#2924](https://github.com/ReactiveX/RxJS/issues/2924)) ([3d9cf87](https://github.com/ReactiveX/RxJS/commit/3d9cf87)), closes [#2921](https://github.com/ReactiveX/RxJS/issues/2921)
* **toPromise:** include toPromise in build output ([#2923](https://github.com/ReactiveX/RxJS/issues/2923)) ([f55bfa5](https://github.com/ReactiveX/RxJS/commit/f55bfa5)), closes [#2922](https://github.com/ReactiveX/RxJS/issues/2922)



<a name="5.5.0-beta.5"></a>
# [5.5.0-beta.5](https://github.com/ReactiveX/RxJS/compare/5.5.0-beta.4...v5.5.0-beta.5) (2017-10-06)


### Bug Fixes

* **toPromise:** remove lettable version of toPromise ([031edca](https://github.com/ReactiveX/RxJS/commit/031edca)), closes [#2868](https://github.com/ReactiveX/RxJS/issues/2868)


### Features

* **toPromise:** now exists as a permanent method on Observable ([2e49a5c](https://github.com/ReactiveX/RxJS/commit/2e49a5c))



<a name="5.5.0-beta.4"></a>
# [5.5.0-beta.4](https://github.com/ReactiveX/RxJS/compare/5.5.0-beta.3...v5.5.0-beta.4) (2017-10-06)


### Bug Fixes

* **publish:** fix selector typings ([#2891](https://github.com/ReactiveX/RxJS/issues/2891)) ([9ee234d](https://github.com/ReactiveX/RxJS/commit/9ee234d)), closes [#2889](https://github.com/ReactiveX/RxJS/issues/2889)
* **shareReplay:** properly retains history on subscribe ([#2910](https://github.com/ReactiveX/RxJS/issues/2910)) ([accbcd0](https://github.com/ReactiveX/RxJS/commit/accbcd0)), closes [#2908](https://github.com/ReactiveX/RxJS/issues/2908)
* **subscribeOn:** remove subscribeOn from reexport to support treesha… ([#2899](https://github.com/ReactiveX/RxJS/issues/2899)) ([fb51a02](https://github.com/ReactiveX/RxJS/commit/fb51a02))



<a name="5.5.0-beta.3"></a>
# [5.5.0-beta.3](https://github.com/ReactiveX/RxJS/compare/5.5.0-beta.2...v5.5.0-beta.3) (2017-10-03)


### Bug Fixes

* **build:** revert to 5.4.x build output for CJS & add configurable support for ESM ([#2878](https://github.com/ReactiveX/RxJS/issues/2878)) ([167456a](https://github.com/ReactiveX/RxJS/commit/167456a))
* **concatAll:** use higher-order lettable version of concatAll ([60c96ab](https://github.com/ReactiveX/RxJS/commit/60c96ab))
* **mergeAll:** use higher-order lettable version of mergeAll ([f0b703b](https://github.com/ReactiveX/RxJS/commit/f0b703b))



<a name="5.5.0-beta.2"></a>
# [5.5.0-beta.2](https://github.com/ReactiveX/RxJS/compare/5.5.0-beta.1...v5.5.0-beta.2) (2017-09-27)


### Bug Fixes

* **build:** make CJS references to import X from '../operators' work correctly with SystemJS ([#2874](https://github.com/ReactiveX/RxJS/issues/2874)) ([3dd4cc4](https://github.com/ReactiveX/RxJS/commit/3dd4cc4))



<a name="5.5.0-beta.1"></a>
# [5.5.0-beta.1](https://github.com/ReactiveX/RxJS/compare/5.5.0-beta.0...v5.5.0-beta.1) (2017-09-27)


### Bug Fixes

* **package:** published from a Linux machine to prevent a strange issue where
  the Observable directory was not showing up when installed on some Linux
  environments.
* **build:** fix source maps by adding back sources and fixing path ([#2872](https://github.com/ReactiveX/RxJS/issues/2872)) ([daaf424](https://github.com/ReactiveX/RxJS/commit/daaf424))
* **package:** remove src directory and fix typings location ([#2866](https://github.com/ReactiveX/RxJS/issues/2866)) ([c57eea7](https://github.com/ReactiveX/RxJS/commit/c57eea7))


### Features

* **global:** export lettables as Rx.operators ([#2862](https://github.com/ReactiveX/RxJS/issues/2862)) ([ba2f586](https://github.com/ReactiveX/RxJS/commit/ba2f586)), closes [#2861](https://github.com/ReactiveX/RxJS/issues/2861)



<a name="5.5.0-beta.0"></a>
# [5.5.0-beta.0](https://github.com/ReactiveX/RxJS/compare/5.4.3...5.5.0-beta.0) (2017-09-22)

**Important! Checkout the explanation of the new [lettable operators features here](doc/lettable-operators.md)**

### Bug Fixes

* **package:** correct errors generated during rollup for UMD generation ([#2839](https://github.com/ReactiveX/RxJS/issues/2839)) ([124cc93](https://github.com/ReactiveX/RxJS/commit/124cc93))
* **partition:** update TypeScript signature to match docs and filter operator ([#2819](https://github.com/ReactiveX/RxJS/issues/2819)) ([755df9b](https://github.com/ReactiveX/RxJS/commit/755df9b))
* **subscribeToResult:** throw error in subscriber with inner observable ([d7bffa9](https://github.com/ReactiveX/RxJS/commit/d7bffa9)), closes [#2618](https://github.com/ReactiveX/RxJS/issues/2618)


### Features

* **ajax:** Include the response on instances of AjaxError ([3f6553c](https://github.com/ReactiveX/RxJS/commit/3f6553c))
* **audit:** add higher-order lettable version of audit ([e2daefe](https://github.com/ReactiveX/RxJS/commit/e2daefe))
* **auditTime:** add higher-order lettable version of auditTime ([9e963aa](https://github.com/ReactiveX/RxJS/commit/9e963aa))
* **buffer:** add higher-order lettable version of buffer ([d8ca9de](https://github.com/ReactiveX/RxJS/commit/d8ca9de))
* **bufferCount:** add higher-order lettable version of bufferCount ([0ae2ed5](https://github.com/ReactiveX/RxJS/commit/0ae2ed5))
* **bufferTime:** add higher-order lettable version of bufferTime operator ([0377ca6](https://github.com/ReactiveX/RxJS/commit/0377ca6))
* **bufferToggle:** add higher-order lettable version of bufferToggle ([ea1c3ee](https://github.com/ReactiveX/RxJS/commit/ea1c3ee))
* **bufferWhen:** add higher-order lettable version of bufferWhen ([ec3eceb](https://github.com/ReactiveX/RxJS/commit/ec3eceb))
* **catchError:** add higher-order lettable version of `catch` ([408a2af](https://github.com/ReactiveX/RxJS/commit/408a2af))
* **combineAll:** add higher-order lettable version of combineAll ([97704b3](https://github.com/ReactiveX/RxJS/commit/97704b3))
* **combineLatest:** add higher-order lettable version of combineLatest ([b7154f2](https://github.com/ReactiveX/RxJS/commit/b7154f2))
* **concatMap:** add higher-order lettable version of concatMap ([c4125ff](https://github.com/ReactiveX/RxJS/commit/c4125ff))
* **concatMapTo:** add higher-order lettable version of concatMapTo ([0a6672e](https://github.com/ReactiveX/RxJS/commit/0a6672e))
* **count:** add higher-order lettable version of count ([caf713e](https://github.com/ReactiveX/RxJS/commit/caf713e))
* **debounce:** add higher-order lettable version of debounce ([cb8ce46](https://github.com/ReactiveX/RxJS/commit/cb8ce46))
* **debounceTime:** add higher-order lettable version of debounceTime ([df0d439](https://github.com/ReactiveX/RxJS/commit/df0d439))
* **delay:** add higher-order lettable version of delay ([7efb803](https://github.com/ReactiveX/RxJS/commit/7efb803))
* **delayWhen:** add higher-order lettable version of delayWhen ([cb91c3f](https://github.com/ReactiveX/RxJS/commit/cb91c3f))
* **dematerialize:** add higher-ordeer lettable version of dematerialize ([b5948f9](https://github.com/ReactiveX/RxJS/commit/b5948f9))
* **distinct:** add higher-order lettable version of distinct ([0429a69](https://github.com/ReactiveX/RxJS/commit/0429a69))
* **distinctUntilChanged:** add higher-order lettable version of distinctUntilChanged ([b2725e7](https://github.com/ReactiveX/RxJS/commit/b2725e7))
* **distinctUntilKeyChanged:** add higher-order lettable version of distinctUntilKeyChanged ([9db141c](https://github.com/ReactiveX/RxJS/commit/9db141c))
* **elementAt:** add higher-order lettable version of elementAt ([b8e956b](https://github.com/ReactiveX/RxJS/commit/b8e956b))
* **every:** add higher-order lettable version of every ([13f3503](https://github.com/ReactiveX/RxJS/commit/13f3503))
* **exhaust:** add higher-order lettable version of exhaust ([b145dca](https://github.com/ReactiveX/RxJS/commit/b145dca))
* **exhaustMap:** add higher-order lettable exhaustMap ([b134e0c](https://github.com/ReactiveX/RxJS/commit/b134e0c))
* **expand:** add higher-order lettable expand ([6ec8a19](https://github.com/ReactiveX/RxJS/commit/6ec8a19))
* **filter:** add higher-order lettable version of filter ([2848556](https://github.com/ReactiveX/RxJS/commit/2848556))
* **finalize:** add higher-order lettable version of finally, called finalize ([cfeae9f](https://github.com/ReactiveX/RxJS/commit/cfeae9f))
* **find:** add higher-order lettable version of find ([ff6d5af](https://github.com/ReactiveX/RxJS/commit/ff6d5af))
* **findIndex:** add higher-order lettable findIndex ([40e680e](https://github.com/ReactiveX/RxJS/commit/40e680e))
* **first:** add higher-order lettable first ([33eac1e](https://github.com/ReactiveX/RxJS/commit/33eac1e))
* **groupBy:** add higher-order lettable groupBy ([5281229](https://github.com/ReactiveX/RxJS/commit/5281229))
* **ignoreElements:** add higher-order lettable version of ignoreElements ([68286d4](https://github.com/ReactiveX/RxJS/commit/68286d4))
* **isEmpty:** add higher-order lettable version of isEmpty ([aad1833](https://github.com/ReactiveX/RxJS/commit/aad1833))
* **last:** add higher-order lettable version of last ([bf33b97](https://github.com/ReactiveX/RxJS/commit/bf33b97))
* **lettables:** add higher-order lettable versions of concat, concatAll, mergeAll ([d7e8be7](https://github.com/ReactiveX/RxJS/commit/d7e8be7))
* **map:** add higher-order lettable map operator ([ce40b2d](https://github.com/ReactiveX/RxJS/commit/ce40b2d))
* **mapTo:** add higher-order lettable version of mapTo ([e97530f](https://github.com/ReactiveX/RxJS/commit/e97530f))
* **materialize:** add higher-order lettable materialize operator ([ce42477](https://github.com/ReactiveX/RxJS/commit/ce42477))
* **merge:** add higher-order lettable version of merge ([#2809](https://github.com/ReactiveX/RxJS/issues/2809)) ([3136403](https://github.com/ReactiveX/RxJS/commit/3136403))
* **mergeMap:** add higher-order lettable version of mergeMap ([417efde](https://github.com/ReactiveX/RxJS/commit/417efde))
* **mergeMapTo:** add higher-order lettable version of mergeMapTo ([653b47a](https://github.com/ReactiveX/RxJS/commit/653b47a))
* **mergeScan:** add higher-order lettable version of mergeScan ([fde7205](https://github.com/ReactiveX/RxJS/commit/fde7205))
* **multicast:** add higher-order lettable variant of multicast ([fb6014d](https://github.com/ReactiveX/RxJS/commit/fb6014d))
* **observeOn:** add higher-order lettable version of observeOn ([feb0f5a](https://github.com/ReactiveX/RxJS/commit/feb0f5a))
* **onErrorResumeNext:** add higher-order lettable version of onErrorResumeNext ([badec6a](https://github.com/ReactiveX/RxJS/commit/badec6a))
* **operators:** higher-order lettables of reduce, min, max and defaultIfEmpty added ([9974fc2](https://github.com/ReactiveX/RxJS/commit/9974fc2))
* **package:** rxjs distribution now supports main, module and es2015 keys in package.json ([988e1af](https://github.com/ReactiveX/RxJS/commit/988e1af))
* **pairwise:** add higher-order lettable version of pairwise ([bb21a44](https://github.com/ReactiveX/RxJS/commit/bb21a44))
* **partition:** add higher-order lettable version of partition ([595e588](https://github.com/ReactiveX/RxJS/commit/595e588))
* **pipe:** add pipe method ot Observable ([9f6312d](https://github.com/ReactiveX/RxJS/commit/9f6312d))
* **pipe:** add pipe utility function([42f9daf](https://github.com/ReactiveX/RxJS/commit/42f9daf))
* **pluck:** add higher-order lettable version of pluck ([8ab0914](https://github.com/ReactiveX/RxJS/commit/8ab0914))
* **publish:** add higher-order lettable variant of publish ([4ccf794](https://github.com/ReactiveX/RxJS/commit/4ccf794))
* **publishBehavior:** add higher-order lettable version of publishBehavior ([e911aef](https://github.com/ReactiveX/RxJS/commit/e911aef))
* **publishLast:** add higher-order lettable version of publishLast ([684728c](https://github.com/ReactiveX/RxJS/commit/684728c))
* **publishReplay:** add higher-order lettable version of publishReplay ([2958917](https://github.com/ReactiveX/RxJS/commit/2958917))
* **race:** add higher-order lettable version of race ([e646851](https://github.com/ReactiveX/RxJS/commit/e646851))
* **refCount:** add higher-order lettable version of refCount ([21fba63](https://github.com/ReactiveX/RxJS/commit/21fba63))
* **repeat:** add higher-order lettable version of repeat ([8473fe5](https://github.com/ReactiveX/RxJS/commit/8473fe5))
* **repeatWhen:** add higher-order lettable version of repeatWhen ([1d1cecd](https://github.com/ReactiveX/RxJS/commit/1d1cecd))
* **retry:** add higher-order lettable version of retry ([28e9b13](https://github.com/ReactiveX/RxJS/commit/28e9b13))
* **retryWhen:** add higher-order lettable version of retryWhen ([1290e3c](https://github.com/ReactiveX/RxJS/commit/1290e3c))
* **sample:** add higher-order lettable version of sample ([8c73e6e](https://github.com/ReactiveX/RxJS/commit/8c73e6e))
* **sampleTime:** add higher-order lettable version of sampleTime ([ba6a9ce](https://github.com/ReactiveX/RxJS/commit/ba6a9ce))
* **scan:** add higher-order lettable version of scan ([2cc5d75](https://github.com/ReactiveX/RxJS/commit/2cc5d75))
* **sequenceEqual:** add higher-order lettable version of sequenceEqual ([7cd3165](https://github.com/ReactiveX/RxJS/commit/7cd3165))
* **share:** add higher-order lettable version of share ([f10c42e](https://github.com/ReactiveX/RxJS/commit/f10c42e))
* **shareReplay:** add higher-order lettable version of shareReplay ([e8be197](https://github.com/ReactiveX/RxJS/commit/e8be197))
* **single:** add higher-order lettable version of single ([3bc050a](https://github.com/ReactiveX/RxJS/commit/3bc050a))
* **skip:** add higher-order lettable version of skip ([baed383](https://github.com/ReactiveX/RxJS/commit/baed383))
* **skipLast:** add higher-order lettable version of skipLast ([6e1ff3c](https://github.com/ReactiveX/RxJS/commit/6e1ff3c))
* **skipUntil:** add higher-order lettable version of skipUntil ([6cc2cd6](https://github.com/ReactiveX/RxJS/commit/6cc2cd6))
* **skipWhile:** add higher-order lettable version of skipWhile ([76d8ffa](https://github.com/ReactiveX/RxJS/commit/76d8ffa))
* **subscribeOn:** add higher-order lettable version of subscribeOn ([866af37](https://github.com/ReactiveX/RxJS/commit/866af37))
* **switchAll:** add higher-order lettable version of switch ([2f12572](https://github.com/ReactiveX/RxJS/commit/2f12572))
* **switchMap:** add higher-order lettable version of switchMap ([b6e5b56](https://github.com/ReactiveX/RxJS/commit/b6e5b56))
* **switchMapTo:** add higher-order lettable version of switchMapTo ([2640184](https://github.com/ReactiveX/RxJS/commit/2640184))
* **take:** add higher-order lettable version of take ([089a5a6](https://github.com/ReactiveX/RxJS/commit/089a5a6))
* **takeLast:** add higher-order lettable version of takeLast ([cd7e7dd](https://github.com/ReactiveX/RxJS/commit/cd7e7dd))
* **takeUntil:** add higher-order lettable version of takeUntil ([bb2ddaa](https://github.com/ReactiveX/RxJS/commit/bb2ddaa))
* **takeWhile:** add higher-order lettable version of takeWhile ([f86c862](https://github.com/ReactiveX/RxJS/commit/f86c862))
* **tap:** add higher-order lettable version of do ([f85c60e](https://github.com/ReactiveX/RxJS/commit/f85c60e))
* **throttle:** add higher-order lettable version of throttle ([e4dd1fd](https://github.com/ReactiveX/RxJS/commit/e4dd1fd))
* **throttleTime:** add higher-order lettable version of throttleTime ([34a592d](https://github.com/ReactiveX/RxJS/commit/34a592d))
* **timeInterval:** add higher-order lettable version of timeInterval ([fcad034](https://github.com/ReactiveX/RxJS/commit/fcad034))
* **timeout:** add higher-order lettable version of timeout ([2546750](https://github.com/ReactiveX/RxJS/commit/2546750))
* **timeoutWith:** add higher-order lettable version of timeoutWith ([bd7f5ed](https://github.com/ReactiveX/RxJS/commit/bd7f5ed))
* **timestamp:** add higher-order lettable version of timestamp ([a780bf2](https://github.com/ReactiveX/RxJS/commit/a780bf2))
* **toArray:** add higher-order lettable version of toArray ([82480cf](https://github.com/ReactiveX/RxJS/commit/82480cf))
* **toArray:** add higher-order lettable version of toArray ([a03a50c](https://github.com/ReactiveX/RxJS/commit/a03a50c))
* **toPromise:** add higher-order lettable version of toPromise ([1627da2](https://github.com/ReactiveX/RxJS/commit/1627da2))
* **window:** add higher-order lettable version of window ([9f6373e](https://github.com/ReactiveX/RxJS/commit/9f6373e))
* **windowCount:** add higher-order lettable version of windowCount ([2a9e54c](https://github.com/ReactiveX/RxJS/commit/2a9e54c))
* **windowTime:** add higher-order lettable version of windowTime ([29ffa1b](https://github.com/ReactiveX/RxJS/commit/29ffa1b))
* **windowToggle:** add higher-order lettable version of windowToggle ([81ec389](https://github.com/ReactiveX/RxJS/commit/81ec389))
* **windowWhen:** add higher-order lettable version of windowWhen ([0b73208](https://github.com/ReactiveX/RxJS/commit/0b73208))
* **withLatestFrom:** add higher-order lettable version of withLatestFrom ([509c97c](https://github.com/ReactiveX/RxJS/commit/509c97c))
* **zip:** add higher-order lettable version of zip ([8a9b9b2](https://github.com/ReactiveX/RxJS/commit/8a9b9b2))
* **zipAll:** add higher-order lettable version of zipAll ([f6bd51f](https://github.com/ReactiveX/RxJS/commit/f6bd51f))



<a name="5.4.3"></a>
## [5.4.3](https://github.com/ReactiveX/RxJS/compare/5.4.2...v5.4.3) (2017-08-10)


### Bug Fixes

* **compilation:** compiles under typescript 2.4.2 ([#2780](https://github.com/ReactiveX/RxJS/issues/2780)) ([d2a32f9](https://github.com/ReactiveX/RxJS/commit/d2a32f9))
* **exports:** add exports for missing static operators: generate, ([08c4196](https://github.com/ReactiveX/RxJS/commit/08c4196))



<a name="5.4.2"></a>
## [5.4.2](https://github.com/ReactiveX/RxJS/compare/5.4.1...v5.4.2) (2017-07-05)


### Bug Fixes

* **Notification:** Don't reference `this` from static methods. ([9f8e375](https://github.com/ReactiveX/RxJS/commit/9f8e375))
* **Subject:** lift signature is now appropriate for stricter TypeScript 2.4 checks ([#2722](https://github.com/ReactiveX/RxJS/issues/2722)) ([9804de7](https://github.com/ReactiveX/RxJS/commit/9804de7))



<a name="5.4.1"></a>
## [5.4.1](https://github.com/ReactiveX/RxJS/compare/5.4.0...v5.4.1) (2017-06-14)


### Bug Fixes

* **ajax:** Only set timeout & responseType if request is asynchronous ([#2486](https://github.com/ReactiveX/RxJS/issues/2486)) ([380fbcf](https://github.com/ReactiveX/RxJS/commit/380fbcf))
* **audit:** will now properly mirror source if durations are Observable.empty() ([#2595](https://github.com/ReactiveX/RxJS/issues/2595)) ([6ded82e](https://github.com/ReactiveX/RxJS/commit/6ded82e))
* **elementAt:** will now properly unsubscribe when it completes or errors ([#2501](https://github.com/ReactiveX/RxJS/issues/2501)) ([a400cab](https://github.com/ReactiveX/RxJS/commit/a400cab))
* **ErrorObservable:** will now propagate errors properly when used in a `catch` after `fromPromise`. ([#2552](https://github.com/ReactiveX/RxJS/issues/2552)) ([cf88a20](https://github.com/ReactiveX/RxJS/commit/cf88a20))
* **groupBy:** group duration notifiers will now properly unsubscribe and clean up ([#2662](https://github.com/ReactiveX/RxJS/issues/2662)) ([ab92083](https://github.com/ReactiveX/RxJS/commit/ab92083)), closes [#2660](https://github.com/ReactiveX/RxJS/issues/2660) [#2661](https://github.com/ReactiveX/RxJS/issues/2661)
* **Observable:** errors thrown in observer/handlers without an operator applied will no longer be swallowed ([#2626](https://github.com/ReactiveX/RxJS/issues/2626)) ([c250afc](https://github.com/ReactiveX/RxJS/commit/c250afc)), closes [#2565](https://github.com/ReactiveX/RxJS/issues/2565)
* **reduce:** type definitions overloads for TypeScript are now in proper order ([#2523](https://github.com/ReactiveX/RxJS/issues/2523)) ([ccc0647](https://github.com/ReactiveX/RxJS/commit/ccc0647))
* **Schedulers:** Fix issue where canceling an asap or animationFrame action early could throw ([#2638](https://github.com/ReactiveX/RxJS/issues/2638)) ([fc39043](https://github.com/ReactiveX/RxJS/commit/fc39043))



<a name="5.4.0"></a>
# [5.4.0](https://github.com/ReactiveX/RxJS/) (2017-05-09)


### Features

* **shareReplay:** adds `shareReplay` variant of `publishReplay` ([#2443](https://github.com/ReactiveX/RxJS/issues/2443)) ([5a2266a](https://github.com/ReactiveX/RxJS/commit/5a2266a))
* **skipLast:** add skipLast operator  ([#2316](https://github.com/ReactiveX/RxJS/issues/2316)) ([4ffbbe5](https://github.com/ReactiveX/RxJS/commit/4ffbbe5)), closes [#1404](https://github.com/ReactiveX/RxJS/issues/1404)
* **TypeScript:** fromPromise accepts PromiseLike object ([#2505](https://github.com/ReactiveX/RxJS/issues/2505)) ([ade1fd5](https://github.com/ReactiveX/RxJS/commit/ade1fd5))


<a name="5.3.3"></a>
## [5.3.3](https://github.com/ReactiveX/RxJS/compare/5.3.1...5.3.3) (2017-05-09)


### Bug Fixes

* **delayWhen:** correctly handle synchronous duration observable ([#2589](https://github.com/ReactiveX/RxJS/issues/2589)) ([695f280](https://github.com/ReactiveX/RxJS/commit/695f280)), closes [#2587](https://github.com/ReactiveX/RxJS/issues/2587)
* **race:** allow TypeScript support for array of observables other than rest param ([#2548](https://github.com/ReactiveX/RxJS/issues/2548)) ([ace553c](https://github.com/ReactiveX/RxJS/commit/ace553c))
* **Subscriber:** do not call complete with undefined value param ([#2559](https://github.com/ReactiveX/RxJS/issues/2559)) ([3d63de2](https://github.com/ReactiveX/RxJS/commit/3d63de2))


**(NOTE: 5.3.2 was a broken release and was removed)**


<a name="5.3.1"></a>
## [5.3.1](https://github.com/ReactiveX/RxJS/compare/5.3.0...v5.3.1) (2017-05-02)


### Bug Fixes

* **AsyncAction:** rescheduling an action with the same delay before it has executed will now schedule appropriately. ([#2580](https://github.com/ReactiveX/RxJS/issues/2580)) ([281760e](https://github.com/ReactiveX/RxJS/commit/281760e))
* **closure:** make root.ts work with closure ([#2546](https://github.com/ReactiveX/RxJS/issues/2546)) ([0ecf55d](https://github.com/ReactiveX/RxJS/commit/0ecf55d))
* **tests:** add missing babel-polyfill to package.json ([b277ce9](https://github.com/ReactiveX/RxJS/commit/b277ce9)), closes [#2261](https://github.com/ReactiveX/RxJS/issues/2261)
* **withLatestFrom:** change from hot to cold observable in marble test ([0c65446](https://github.com/ReactiveX/RxJS/commit/0c65446)), closes [#2526](https://github.com/ReactiveX/RxJS/issues/2526)



<a name="5.3.0"></a>
# [5.3.0](https://github.com/ReactiveX/RxJS/compare/5.2.0...v5.3.0) (2017-04-03)


### Bug Fixes

* **catch:** return type is now the union of input types ([#2478](https://github.com/ReactiveX/RxJS/issues/2478)) ([840def0](https://github.com/ReactiveX/RxJS/commit/840def0))
* **forEach:** fix a temporal dead zone issue in forEach. ([#2474](https://github.com/ReactiveX/RxJS/issues/2474)) ([e9e9801](https://github.com/ReactiveX/RxJS/commit/e9e9801))
* **multicast:** Ensure ConnectableObservables returned by multicast are state-isolated. ([aaa9e6b](https://github.com/ReactiveX/RxJS/commit/aaa9e6b))
* **reduce:** proper TypeScript signature overload ordering ([#2382](https://github.com/ReactiveX/RxJS/issues/2382)) ([f6a4951](https://github.com/ReactiveX/RxJS/commit/f6a4951)), closes [#2338](https://github.com/ReactiveX/RxJS/issues/2338)
* **SafeSubscriber:** SafeSubscriber shouldn't mutate incoming Observers. ([a1778e0](https://github.com/ReactiveX/RxJS/commit/a1778e0))
* **timeout:** Cancels scheduled timeout, if no longer needed ([3e9d529](https://github.com/ReactiveX/RxJS/commit/3e9d529)), closes [#2134](https://github.com/ReactiveX/RxJS/issues/2134) [#2244](https://github.com/ReactiveX/RxJS/issues/2244) [#2355](https://github.com/ReactiveX/RxJS/issues/2355) [#2347](https://github.com/ReactiveX/RxJS/issues/2347) [#2353](https://github.com/ReactiveX/RxJS/issues/2353) [#2254](https://github.com/ReactiveX/RxJS/issues/2254) [#2372](https://github.com/ReactiveX/RxJS/issues/2372) [#1301](https://github.com/ReactiveX/RxJS/issues/1301)
* **zipAll:** complete when the source is empty ([712fece](https://github.com/ReactiveX/RxJS/commit/712fece))


### Features

* **delayWhen:** add index to the selector function ([5d6291e](https://github.com/ReactiveX/RxJS/commit/5d6291e))
* **symbol exports:** symbols now also exported without `$$` prefix to work with Babel UMD exporting ([#2435](https://github.com/ReactiveX/RxJS/issues/2435)) ([747bef6](https://github.com/ReactiveX/RxJS/commit/747bef6)), closes [#2415](https://github.com/ReactiveX/RxJS/issues/2415)


### Performance Improvements

* **bufferCount:** optimize bufferCount operator ([#2359](https://github.com/ReactiveX/RxJS/issues/2359)) ([28d0883](https://github.com/ReactiveX/RxJS/commit/28d0883))


### April Fools

* **smooth:** `smooth()` was never really a thing. Sorry, folks. :D



<a name="5.2.0"></a>
# [5.2.0](https://github.com/ReactiveX/RxJS/compare/5.1.1...v5.2.0) (2017-02-21)


### Bug Fixes

* **ajax:** will set `withCredentials` after `open` on XHR for IE10 ([#2332](https://github.com/ReactiveX/RxJS/issues/2332)) ([0ab1d3b](https://github.com/ReactiveX/RxJS/commit/0ab1d3b))
* **bindCallback:** emit undefined when callback is without arguments ([915a2a8](https://github.com/ReactiveX/RxJS/commit/915a2a8))
* **bindNodeCallback:** emit undefined when callback has no success arguments ([8b81fc6](https://github.com/ReactiveX/RxJS/commit/8b81fc6)), closes [#2254](https://github.com/ReactiveX/RxJS/issues/2254)
* **bindNodeCallback:** errors thrown in callback will be scheduled if a scheduler is provided ([#2344](https://github.com/ReactiveX/RxJS/issues/2344)) ([82ec4f1](https://github.com/ReactiveX/RxJS/commit/82ec4f1))
* **concat:** will now return Observable when given a single object implementing Symbol.observable ([#2387](https://github.com/ReactiveX/RxJS/issues/2387)) ([f5d035a](https://github.com/ReactiveX/RxJS/commit/f5d035a))
* **ErrorObservable:** remove type constraint to error value ([2f951cd](https://github.com/ReactiveX/RxJS/commit/2f951cd)), closes [#2395](https://github.com/ReactiveX/RxJS/issues/2395)
* **forkJoin:** add type signature for single observable with selector ([7983b91](https://github.com/ReactiveX/RxJS/commit/7983b91)), closes [#2347](https://github.com/ReactiveX/RxJS/issues/2347)
* **merge:** return Observable when called with single lowerCaseO ([85752eb](https://github.com/ReactiveX/RxJS/commit/85752eb))
* **mergeAll:** introduce variant support <T, R> for mergeMap ([656f2b3](https://github.com/ReactiveX/RxJS/commit/656f2b3)), closes [#2372](https://github.com/ReactiveX/RxJS/issues/2372)
* **single:** predicate function receives indicies starting at 0 ([#2396](https://github.com/ReactiveX/RxJS/issues/2396)) ([c81882f](https://github.com/ReactiveX/RxJS/commit/c81882f))
* **subscribeToResult:** accept array-like as result ([14685ba](https://github.com/ReactiveX/RxJS/commit/14685ba))


### Features

* **webSocket:** Add binaryType to config object ([86acbd1](https://github.com/ReactiveX/RxJS/commit/86acbd1)), closes [#2353](https://github.com/ReactiveX/RxJS/issues/2353)
* **windowTime:** maxWindowSize parameter in windowTime operator ([381be3f](https://github.com/ReactiveX/RxJS/commit/381be3f)), closes [#1301](https://github.com/ReactiveX/RxJS/issues/1301)



<a name="5.1.1"></a>
## [5.1.1](https://github.com/ReactiveX/RxJS/compare/5.1.0...v5.1.1) (2017-02-13)


### Bug Fixes

* **bindCallback:** input function context can now be properly set via output function ([#2319](https://github.com/ReactiveX/RxJS/issues/2319)) ([cb91c76](https://github.com/ReactiveX/RxJS/commit/cb91c76))
* **bindNodeCallback:** input function context can now be properly set via output function ([#2320](https://github.com/ReactiveX/RxJS/issues/2320)) ([3ec315d](https://github.com/ReactiveX/RxJS/commit/3ec315d))
* **Subscription:** fold ChildSubscription logic into Subscriber to prevent operators from leaking ChildSubscriptions. ([#2360](https://github.com/ReactiveX/RxJS/issues/2360)) ([22e4c17](https://github.com/ReactiveX/RxJS/commit/22e4c17)), closes [#2244](https://github.com/ReactiveX/RxJS/issues/2244) [#2355](https://github.com/ReactiveX/RxJS/issues/2355)



<a name="5.1.0"></a>
# [5.1.0](https://github.com/ReactiveX/RxJS/compare/5.0.3...v5.1.0) (2017-02-01)


### Bug Fixes

* **catch:** update the catch operator to dispose inner subscriptions if the catch subscription is di ([#2271](https://github.com/ReactiveX/RxJS/issues/2271)) ([8a1e089](https://github.com/ReactiveX/RxJS/commit/8a1e089))
* **combineLatest:** Don't mutate array of observables passed to ([#2276](https://github.com/ReactiveX/RxJS/issues/2276)) ([9b73c46](https://github.com/ReactiveX/RxJS/commit/9b73c46))
* **ISubscription:** update type definition of ISubscription::closed ([#2249](https://github.com/ReactiveX/RxJS/issues/2249)) ([0c304a2](https://github.com/ReactiveX/RxJS/commit/0c304a2))
* **Observable:** Ensure the generic type of the Observer passed to Observable's initializer function is the same. ([51a0bc1](https://github.com/ReactiveX/RxJS/commit/51a0bc1)), closes [#2166](https://github.com/ReactiveX/RxJS/issues/2166)
* **Observable:** errors thrown during subscription are now properly sent down error channel ([#2313](https://github.com/ReactiveX/RxJS/issues/2313)) ([d4a9aac](https://github.com/ReactiveX/RxJS/commit/d4a9aac)), closes [#1833](https://github.com/ReactiveX/RxJS/issues/1833)
* **reduce:** index will properly start at 1 if no seed is provided, to match native Array reduce behavior ([30a4ca4](https://github.com/ReactiveX/RxJS/commit/30a4ca4)), closes [#2290](https://github.com/ReactiveX/RxJS/issues/2290)
* **repeatWhen:** resulting observable will wait for the source to complete, even if a hot notifier completes first. ([#2209](https://github.com/ReactiveX/RxJS/issues/2209)) ([c65a098](https://github.com/ReactiveX/RxJS/commit/c65a098)), closes [#2054](https://github.com/ReactiveX/RxJS/issues/2054)
* **Subject:** ensure subject properly throws ObjectUnsubscribedError when unsubscribed then resubscribed to ([#2318](https://github.com/ReactiveX/RxJS/issues/2318)) ([41489eb](https://github.com/ReactiveX/RxJS/commit/41489eb))
* **TestScheduler:** helper methods return proper types, `HotObservable` and `ColdObservable` instead of Observable ([#2305](https://github.com/ReactiveX/RxJS/issues/2305)) ([758aae9](https://github.com/ReactiveX/RxJS/commit/758aae9))
* **windowTime:** ensure windows created when only a timespan is passed are closed and cleaned up properly. ([#2278](https://github.com/ReactiveX/RxJS/issues/2278)) ([d4533c4](https://github.com/ReactiveX/RxJS/commit/d4533c4))


### Features

* **fromEventPattern:** support optional removeHandler ([86960c2](https://github.com/ReactiveX/RxJS/commit/86960c2))
* **fromEventPattern:** support pass signal from addHandler to removeHandler ([01d0622](https://github.com/ReactiveX/RxJS/commit/01d0622))



<a name="5.0.3"></a>
## [5.0.3](https://github.com/ReactiveX/RxJS/compare/5.0.2...v5.0.3) (2017-01-05)


### Bug Fixes

* **observeOn:** seal memory leak involving old notifications ([9664a38](https://github.com/ReactiveX/RxJS/commit/9664a38)), closes [#2244](https://github.com/ReactiveX/RxJS/issues/2244)
* **Subscription:** `add` will return Subscription that `remove`s itself when unsubscribed ([375d4a5](https://github.com/ReactiveX/RxJS/commit/375d4a5))
* **TypeScript:** interfaces that accepted `Scheduler` now accept `IScheduler` interface ([a0d28a8](https://github.com/ReactiveX/RxJS/commit/a0d28a8))



<a name="5.0.2"></a>
## [5.0.2](https://github.com/ReactiveX/RxJS/compare/5.0.1...v5.0.2) (2016-12-23)


### Bug Fixes

* **ajax:** upload progress is now set correctly ([#2200](https://github.com/ReactiveX/RxJS/issues/2200)) ([1a83041](https://github.com/ReactiveX/RxJS/commit/1a83041))
* **groupBy:** Fix groupBy to dispose of outer subscription. ([#2201](https://github.com/ReactiveX/RxJS/issues/2201)) ([2269618](https://github.com/ReactiveX/RxJS/commit/2269618))



<a name="5.0.1"></a>
## [5.0.1](https://github.com/ReactiveX/RxJS/compare/5.0.0...v5.0.1) (2016-12-13)


### Bug Fixes

* **TypeScript:** pin to TypeScript 2.0.x, fix errors with Error subclassing ([300504c](https://github.com/ReactiveX/RxJS/commit/300504c))



<a name="5.0.0"></a>
# [5.0.0](https://github.com/ReactiveX/RxJS/compare/5.0.0-rc.5...v5.0.0) (2016-12-13)


### Bug Fixes

* **race:** unsubscribe raced observables with immediate scheduler ([#2158](https://github.com/ReactiveX/RxJS/issues/2158)) ([7dd533b](https://github.com/ReactiveX/RxJS/commit/7dd533b))
* **SubscribeOnObservable:** Add the source subscription to the action disposable so the source will ([64e3815](https://github.com/ReactiveX/RxJS/commit/64e3815))



<a name="5.0.0-rc.5"></a>
# [5.0.0-rc.5](https://github.com/ReactiveX/RxJS/compare/5.0.0-rc.4...v5.0.0-rc.5) (2016-12-07)


### Bug Fixes

* **AjaxObservable:** catch XHR send failures to observer ([#2159](https://github.com/ReactiveX/RxJS/issues/2159)) ([128fb9c](https://github.com/ReactiveX/RxJS/commit/128fb9c))
* **distinctKey:** Removed accidental leftover reference of `distinctKey` ([9fd8096](https://github.com/ReactiveX/RxJS/commit/9fd8096)), closes [#2161](https://github.com/ReactiveX/RxJS/issues/2161)
* **errors:** Better error message when you return non-observable things, ([#2152](https://github.com/ReactiveX/RxJS/issues/2152)) ([86a909c](https://github.com/ReactiveX/RxJS/commit/86a909c)), closes [#215](https://github.com/ReactiveX/RxJS/issues/215)
* **event:** uses `Object.prototype.toString.call` on objects ([#2143](https://github.com/ReactiveX/RxJS/issues/2143)) ([e036e79](https://github.com/ReactiveX/RxJS/commit/e036e79))
* **typings:** type guard support for `last`, `first`, `find` and `filter`. ([5f2e849](https://github.com/ReactiveX/RxJS/commit/5f2e849))


### Features

* **timeout:** remove `errorToSend` argument, always throw TimeoutError ([#2172](https://github.com/ReactiveX/RxJS/issues/2172)) ([98ea3d2](https://github.com/ReactiveX/RxJS/commit/98ea3d2))


### BREAKING CHANGES

* timeout: `timeout` no longer accepts the `errorToSend` argument

related #2141



<a name="5.0.0-rc.4"></a>
# [5.0.0-rc.4](https://github.com/ReactiveX/RxJS/compare/5.0.0-rc.3...v5.0.0-rc.4) (2016-11-19)


### Bug Fixes

* **partition:** handles `thisArg` as expected ([#2138](https://github.com/ReactiveX/RxJS/issues/2138)) ([6cf7296](https://github.com/ReactiveX/RxJS/commit/6cf7296))
* **timeout:** throw traceable TimeoutError ([#2132](https://github.com/ReactiveX/RxJS/issues/2132)) ([9ebc46b](https://github.com/ReactiveX/RxJS/commit/9ebc46b))



<a name="5.0.0-rc.3"></a>
# [5.0.0-rc.3](https://github.com/ReactiveX/RxJS/compare/5.0.0-rc.2...v5.0.0-rc.3) (2016-11-15)

### Bug Fixes

* **typings:** You no longer have to install the type definition for chai ([#2112](https://github.com/ReactiveX/rxjs/issues/2112))

### Features

* **filter:** support type guards without casting ([68b7922](https://github.com/ReactiveX/RxJS/commit/68b7922))
* **find:** support type guards without casting ([9058bf6](https://github.com/ReactiveX/RxJS/commit/9058bf6))
* **first:** support type guards without casting ([3aa1988](https://github.com/ReactiveX/RxJS/commit/3aa1988))
* **last:** support type guards without casting ([07ecd5e](https://github.com/ReactiveX/RxJS/commit/07ecd5e))



<a name="5.0.0-rc.2"></a>
# [5.0.0-rc.2](https://github.com/ReactiveX/RxJS/compare/5.0.0-rc.1...v5.0.0-rc.2) (2016-11-05)


### Bug Fixes

* **AjaxObservable:** remove needless type param R from AjaxObservable.getJSON() ([#2069](https://github.com/ReactiveX/RxJS/issues/2069)) ([0c3d4a4](https://github.com/ReactiveX/RxJS/commit/0c3d4a4))
* **bufferCount:** will behave as expected when `startBufferEvery` is less than `bufferSize` ([#2076](https://github.com/ReactiveX/RxJS/issues/2076)) ([d13dbb4](https://github.com/ReactiveX/RxJS/commit/d13dbb4)), closes [#2062](https://github.com/ReactiveX/RxJS/issues/2062)
* **build_docs:** fix doc building ([#1974](https://github.com/ReactiveX/RxJS/issues/1974)) ([1bbbe8b](https://github.com/ReactiveX/RxJS/commit/1bbbe8b))
* **ErrorObservable:** Add generic error type for ErrorObservable. ([#2071](https://github.com/ReactiveX/RxJS/issues/2071)) ([9df86ba](https://github.com/ReactiveX/RxJS/commit/9df86ba))
* **first:** will now only emit one value in recursive cases ([#2100](https://github.com/ReactiveX/RxJS/issues/2100)) ([a047e7a](https://github.com/ReactiveX/RxJS/commit/a047e7a)), closes [#2098](https://github.com/ReactiveX/RxJS/issues/2098)
* **fromEvent:** Throw if event target is invalid ([#2107](https://github.com/ReactiveX/RxJS/issues/2107)) ([147ce3e](https://github.com/ReactiveX/RxJS/commit/147ce3e))
* **IteratorObservable:** clarify the return type of IteratorObservable.create() ([#2070](https://github.com/ReactiveX/RxJS/issues/2070)) ([4f0f865](https://github.com/ReactiveX/RxJS/commit/4f0f865))
* **IteratorObservable:** Observables `from` generators will now finalize when subscription ends ([22d286a](https://github.com/ReactiveX/RxJS/commit/22d286a)), closes [#1938](https://github.com/ReactiveX/RxJS/issues/1938)
* **multicast:** fix a bug that caused multicast to omit messages after termination ([#2021](https://github.com/ReactiveX/RxJS/issues/2021)) ([44fbc14](https://github.com/ReactiveX/RxJS/commit/44fbc14))
* **Notification:** `materialize` output will now match Rx4 ([#2106](https://github.com/ReactiveX/RxJS/issues/2106)) ([c83bab9](https://github.com/ReactiveX/RxJS/commit/c83bab9)), closes [#2105](https://github.com/ReactiveX/RxJS/issues/2105)
* **Object.assign:** stop polyfilling Object assign ([#2080](https://github.com/ReactiveX/RxJS/issues/2080)) ([b5f8ab3](https://github.com/ReactiveX/RxJS/commit/b5f8ab3))
* **Observable/Ajax:** mount properties to origin readystatechange fn ([#2025](https://github.com/ReactiveX/RxJS/issues/2025)) ([76a9abb](https://github.com/ReactiveX/RxJS/commit/76a9abb))
* **operator/do:** fix typings ([9a40297](https://github.com/ReactiveX/RxJS/commit/9a40297))
* **reduce/scan:** both scan/reduce operators now accepts `undefined` itself as a valid seed ([#2050](https://github.com/ReactiveX/RxJS/issues/2050)) ([fee7585](https://github.com/ReactiveX/RxJS/commit/fee7585)), closes [#2047](https://github.com/ReactiveX/RxJS/issues/2047)
* **ReplaySubject:** observer now subscribed prior to running subscription function ([#2046](https://github.com/ReactiveX/RxJS/issues/2046)) ([fea08e9](https://github.com/ReactiveX/RxJS/commit/fea08e9)), closes [#2044](https://github.com/ReactiveX/RxJS/issues/2044)
* **sample:** source is now subscribed to before the notifier ([ffe99e8](https://github.com/ReactiveX/RxJS/commit/ffe99e8)), closes [#2075](https://github.com/ReactiveX/RxJS/issues/2075)
* **Symbol.iterator:** will not polyfill Symbol iterator unless Symbol exists ([#2082](https://github.com/ReactiveX/RxJS/issues/2082)) ([1138c99](https://github.com/ReactiveX/RxJS/commit/1138c99))
* **typings:** fixed Subject<T>.lift to have the same shape as Observable<T>.lift ([b07f597](https://github.com/ReactiveX/RxJS/commit/b07f597))
* **WebSocketSubject.prototype.multiplex:** no longer nulls out socket after first unsubscribe ([#2039](https://github.com/ReactiveX/RxJS/issues/2039)) ([a5e9cfe](https://github.com/ReactiveX/RxJS/commit/a5e9cfe)), closes [#2037](https://github.com/ReactiveX/RxJS/issues/2037)


### Features

* **distinct:** remove `distinctKey`,  `distinct` signature change and perf improvements ([#2049](https://github.com/ReactiveX/RxJS/issues/2049)) ([89612b2](https://github.com/ReactiveX/RxJS/commit/89612b2)), closes [#2009](https://github.com/ReactiveX/RxJS/issues/2009)
* **groupBy:** Adds subjectSelector argument to groupBy ([#2023](https://github.com/ReactiveX/RxJS/issues/2023)) ([f94ceb9](https://github.com/ReactiveX/RxJS/commit/f94ceb9))
* **typescript:** remove dependency to 3rd party es2015 definition ([#2027](https://github.com/ReactiveX/RxJS/issues/2027)) ([4c31974](https://github.com/ReactiveX/RxJS/commit/4c31974)), closes [#2016](https://github.com/ReactiveX/RxJS/issues/2016)


### BREAKING CHANGES

* Notification: `Notification.prototype.exception` is now `Notification.prototype.error` to match Rx4 semantics
* Symbol.iterator: RxJS will no longer polyfill `Symbol.iterator` if `Symbol` does not exist. This may break code that inadvertently relies on this behavior
* Object.assign: RxJS will no longer polyfill `Object.assign`. It does
not require `Object.assign` to function, however, your code may be
inadvertently relying on this polyfill.
* AjaxObservable: Observable.ajax.getJSON() now only supports a single type parameter,
`getJSON<T>(url: string, headers?: Object): Observable<T>`.
The extra type parameter it accepted previously was superfluous.
* distinct: `distinctKey` has been removed. Use `distinct`
* distinct: `distinct` operator has changed, first argument is an
optional `keySelector`. The custom `compare` function is no longer
supported.



<a name="5.0.0-rc.1"></a>
# [5.0.0-rc.1](https://github.com/ReactiveX/RxJS/compare/5.0.0-beta.12...v5.0.0-rc.1) (2016-10-11)


### Bug Fixes

* **AjaxObservable:** Fix for [#1921](https://github.com/ReactiveX/RxJS/issues/1921) exposed AjaxObservable unsubscription error calling xhr.abort(). ([4d23f87](https://github.com/ReactiveX/RxJS/commit/4d23f87))
* **AnonymousSubject:** is now exposed on Rx namespace ([0a6f049](https://github.com/ReactiveX/RxJS/commit/0a6f049)), closes [#2002](https://github.com/ReactiveX/RxJS/issues/2002)
* **bufferTime:** no errors with take after bufferTime with maxBufferSize ([ecec640](https://github.com/ReactiveX/RxJS/commit/ecec640)), closes [#1944](https://github.com/ReactiveX/RxJS/issues/1944)
* **docs:** Fix esdoc for Observable.merge spread argument ([b794e9b](https://github.com/ReactiveX/RxJS/commit/b794e9b))
* **Observer:** fix Observable#subscribe() signature to suggest correct usable ([459d2a2](https://github.com/ReactiveX/RxJS/commit/459d2a2))
* **operator:** Fix take to complete when the source is re-entrant. ([86615cb](https://github.com/ReactiveX/RxJS/commit/86615cb))
* **root:** find global context (window/self/global) in a more safe way ([a098132](https://github.com/ReactiveX/RxJS/commit/a098132)), closes [#1930](https://github.com/ReactiveX/RxJS/issues/1930)
* **schedulers:** Queue, Asap, and AnimationFrame Schedulers should be Async if delay > 0 ([d5c682c](https://github.com/ReactiveX/RxJS/commit/d5c682c))
* **util/toSubscriber:** Supplies the Subscriber constructor with emptyObserver as destination if no ([8e7e4e3](https://github.com/ReactiveX/RxJS/commit/8e7e4e3))
* **WebSocketSubject:** ensure all internal state properly reset when socket is nulled out ([62d242e](https://github.com/ReactiveX/RxJS/commit/62d242e)), closes [#1863](https://github.com/ReactiveX/RxJS/issues/1863)


### Features

* **cache:** remove `cache` operator ([1b23ace](https://github.com/ReactiveX/RxJS/commit/1b23ace))
* **ES2015:** stop publishing `rxjs-es`, ES2015 output no longer included in `@reactivex/rxjs` package under `/dist/es6` ([6be9968](https://github.com/ReactiveX/RxJS/commit/6be9968)), closes [#1671](https://github.com/ReactiveX/RxJS/issues/1671)
* **filter:** Observable<T>.filter() can take type guard as the predicate function ([d62fbf0](https://github.com/ReactiveX/RxJS/commit/d62fbf0))
* **find:** Observable<T>.find() can take type guard as the predicate function ([b952718](https://github.com/ReactiveX/RxJS/commit/b952718))
* **first:** Observable<T>.first() can take type guard as the predicate function ([f99ca49](https://github.com/ReactiveX/RxJS/commit/f99ca49))
* **last:** Observable<T>.last() can take type guard as the predicate function ([76a8a57](https://github.com/ReactiveX/RxJS/commit/76a8a57))
* **operators:** Use lift in the operators that don't currently use lift. ([68af9ef](https://github.com/ReactiveX/RxJS/commit/68af9ef))
* **TypeScript:** update TypeScript to v2.0 ([3478b0b](https://github.com/ReactiveX/RxJS/commit/3478b0b))


### BREAKING CHANGES

* **cache:** The .cache() operator has been removed, pending further discussion ([1b23ace](https://github.com/ReactiveX/RxJS/commit/1b23ace))
* ES2015: `rxjs-es` is no longer being published
* ES2015: `@reactivex/rxjs` no longer has `/dist/es6` output

related #2016
related #1992
* package.json: TypeScript definitions are now for TS 2.0 and higher

Even if we use getter for class, they are marked with `readonly` properties
in d.ts.
* operators: Removes MulticastObservable subclass in favor of a MulticastOperator.



<a name="5.0.0-beta.12"></a>
# [5.0.0-beta.12](https://github.com/ReactiveX/RxJS/compare/5.0.0-beta.11...v5.0.0-beta.12) (2016-09-09)


### Bug Fixes

* **ajaxObservable:** remove implicit dependency to map operator patch ([1744ae9](https://github.com/ReactiveX/RxJS/commit/1744ae9)), closes [#1874](https://github.com/ReactiveX/RxJS/issues/1874)
* **AjaxObservable:** return null value from JSON.Parse (#1904) ([6ba374e](https://github.com/ReactiveX/RxJS/commit/6ba374e))
* **catch:** removed unneeded overload for catch ([dd0e586](https://github.com/ReactiveX/RxJS/commit/dd0e586))
* **max:** do not return comparer values ([f454e93](https://github.com/ReactiveX/RxJS/commit/f454e93)), closes [#1892](https://github.com/ReactiveX/RxJS/issues/1892)
* **min:** do not return comparer values ([222fd17](https://github.com/ReactiveX/RxJS/commit/222fd17)), closes [#1892](https://github.com/ReactiveX/RxJS/issues/1892)
* **operators:** export reserved name operators on prototype ([34c39dd](https://github.com/ReactiveX/RxJS/commit/34c39dd)), closes [#1924](https://github.com/ReactiveX/RxJS/issues/1924)
* **VirtualTimeScheduler:** remove default maxFrame limit ([1de86f1](https://github.com/ReactiveX/RxJS/commit/1de86f1)), closes [#1889](https://github.com/ReactiveX/RxJS/issues/1889)
* **WebSocketSubject:** pass constructor errors onto observable ([49c7d67](https://github.com/ReactiveX/RxJS/commit/49c7d67))

### Features

* **operator:** Add repeatWhen operator ([c288d88](https://github.com/ReactiveX/RxJS/commit/c288d88))
* **sequenceEqual:** adds sequenceEqual operator ([3c30293](https://github.com/ReactiveX/RxJS/commit/3c30293)), closes [#1882](https://github.com/ReactiveX/RxJS/issues/1882)



<a name="5.0.0-beta.11"></a>
# [5.0.0-beta.11](https://github.com/ReactiveX/RxJS/compare/5.0.0-beta.10...v5.0.0-beta.11) (2016-08-09)


### Bug Fixes

* **ajaxObservable:** only set default Content-Type header when no body is sent (#1830) ([5a895e8](https://github.com/ReactiveX/RxJS/commit/5a895e8))
* **AjaxObservable:** drop resultSelector support in ajax method ([7a77437](https://github.com/ReactiveX/RxJS/commit/7a77437)), closes [#1783](https://github.com/ReactiveX/RxJS/issues/1783)
* **AsyncSubject:** do not allow change value after complete ([801f282](https://github.com/ReactiveX/RxJS/commit/801f282)), closes [#1800](https://github.com/ReactiveX/RxJS/issues/1800)
* **BoundNodeCallbackObservable:**  cast to `any` to access to private field in `source` ([54f342f](https://github.com/ReactiveX/RxJS/commit/54f342f))
* **catch:** accept selector returns ObservableInput ([e55c62d](https://github.com/ReactiveX/RxJS/commit/e55c62d)), closes [#1857](https://github.com/ReactiveX/RxJS/issues/1857)
* **combineLatest:** emit unique array instances with the default projection ([2e30fd1](https://github.com/ReactiveX/RxJS/commit/2e30fd1))
* **Observable.from:** standardise arguments (remove map/context) ([aa30af2](https://github.com/ReactiveX/RxJS/commit/aa30af2))
* **schedulers:** fix asap and animationFrame schedulers to execute across async boundaries. (#182 ([548ec2a](https://github.com/ReactiveX/RxJS/commit/548ec2a)), closes [(#1820](https://github.com/(/issues/1820) [#1814](https://github.com/ReactiveX/RxJS/issues/1814)
* **subscribeToResult:** update subscription to iterables ([5d6339a](https://github.com/ReactiveX/RxJS/commit/5d6339a))
* **WebSocketSubject:** prevent early close (#1831) ([848a527](https://github.com/ReactiveX/RxJS/commit/848a527)), closes [(#1831](https://github.com/(/issues/1831)

### Features

* **fromEvent:** Pass through event listener options (#1845) ([8f0dc01](https://github.com/ReactiveX/RxJS/commit/8f0dc01))
* **PairsObservable:** add PairsObservable creation method ([26bafff](https://github.com/ReactiveX/RxJS/commit/26bafff)), closes [#1804](https://github.com/ReactiveX/RxJS/issues/1804)


### BREAKING CHANGES

* Observable.from: - Observable.from no longer supports the optional map function and associated context argument.
This change has been reflected in the related constructors and their properties have been standardised.
* AjaxObservable: ajax.*() method no longer support resultSelector, encourage to use `map` instead



<a name="5.0.0-beta.10"></a>
# [5.0.0-beta.10](https://github.com/ReactiveX/RxJS/compare/5.0.0-beta.9...v5.0.0-beta.10) (2016-07-06)


### Bug Fixes

* **AjaxObservable:** ignore content-type for formdata (#1746) ([43d05e7](https://github.com/ReactiveX/RxJS/commit/43d05e7))
* **AjaxObservable:** support withCredentials for CORS request ([8084572](https://github.com/ReactiveX/RxJS/commit/8084572)), closes [#1732](https://github.com/ReactiveX/RxJS/issues/1732) [#1711](https://github.com/ReactiveX/RxJS/issues/1711)
* **babel:** fix an issue where babel could not compile `Scheduler.async` (#1807) ([12c5c74](https://github.com/ReactiveX/RxJS/commit/12c5c74)), closes [(#1807](https://github.com/(/issues/1807) [#1806](https://github.com/ReactiveX/RxJS/issues/1806)
* **bufferTime:** handle closing context when synchronously unsubscribed ([4ce4433](https://github.com/ReactiveX/RxJS/commit/4ce4433)), closes [#1763](https://github.com/ReactiveX/RxJS/issues/1763)
* **multicast:** Fixes multicast with selector to create a new source connection per subscriber.  ([c3ac852](https://github.com/ReactiveX/RxJS/commit/c3ac852)), closes [(#1774](https://github.com/(/issues/1774)
* **Subject:** allow optional next value in type definition ([3e0c6d9](https://github.com/ReactiveX/RxJS/commit/3e0c6d9)), closes [#1728](https://github.com/ReactiveX/RxJS/issues/1728)
* **WebSocketSubject:** respect WebSockeCtor, support source/destination arguments in constructor. (#179 ([cd8cdd0](https://github.com/ReactiveX/RxJS/commit/cd8cdd0)), closes [#1745](https://github.com/ReactiveX/RxJS/issues/1745) [#1784](https://github.com/ReactiveX/RxJS/issues/1784)



<a name="5.0.0-beta.9"></a>
# [5.0.0-beta.9](https://github.com/ReactiveX/RxJS/compare/5.0.0-beta.8...v5.0.0-beta.9) (2016-06-14)


### Bug Fixes

* **cache:** get correct caching behavior (#1765) ([cb0b806](https://github.com/ReactiveX/RxJS/commit/cb0b806)), closes [#1628](https://github.com/ReactiveX/RxJS/issues/1628)
* **ConnectableObservable:** fix ConnectableObservable connection handling issue ([41ce80c](https://github.com/ReactiveX/RxJS/commit/41ce80c))
* **typings:** make HotObservavle._subscribe protected ([1c3d6ea](https://github.com/ReactiveX/RxJS/commit/1c3d6ea))
* **WebSocketSubject:** WebSocketSubject will now chain operators properly (#1752) ([bf54db4](https://github.com/ReactiveX/RxJS/commit/bf54db4)), closes [#1745](https://github.com/ReactiveX/RxJS/issues/1745)
* **window:** don't track internal window subjects as subscriptions. ([f3357b9](https://github.com/ReactiveX/RxJS/commit/f3357b9))

### Performance Improvements

* **fromEventPattern:** ~3x improvement in speed ([3dc1c00](https://github.com/ReactiveX/RxJS/commit/3dc1c00))



<a name="5.0.0-beta.8"></a>
# [5.0.0-beta.8](https://github.com/ReactiveX/RxJS/compare/5.0.0-beta.7...v5.0.0-beta.8) (2016-05-22)


### Bug Fixes

* **AnonymousSubject:** allow anonymous observers as destination ([0e2c28b](https://github.com/ReactiveX/RxJS/commit/0e2c28b))
* **combineLatest:** rxjs/observable/combineLatest is now properly exported ([21fab73](https://github.com/ReactiveX/RxJS/commit/21fab73)), closes [#1722](https://github.com/ReactiveX/RxJS/issues/1722)
* **ConnectableObservable:** fix race conditions in ConnectableObservable and refCount. ([d1412bc](https://github.com/ReactiveX/RxJS/commit/d1412bc))
* **Rx:** remove kitchenSink and DOM, let Rx export all ([f5090b4](https://github.com/ReactiveX/RxJS/commit/f5090b4)), closes [#1650](https://github.com/ReactiveX/RxJS/issues/1650)
* **ScalarObservable:** set _isScalar to false when initialized with a scheduler ([5037b3a](https://github.com/ReactiveX/RxJS/commit/5037b3a))
* **Subject:** correct Subject behaviors to be more like Rx4 ([ba9ef2b](https://github.com/ReactiveX/RxJS/commit/ba9ef2b))
* **subscriptions:** fixes bug that tracked subscriber subscriptions twice. ([29ff794](https://github.com/ReactiveX/RxJS/commit/29ff794))

### Features

* **bufferTime:** add `maxBufferSize` optional argument ([cf45540](https://github.com/ReactiveX/RxJS/commit/cf45540)), closes [#1295](https://github.com/ReactiveX/RxJS/issues/1295)
* **multicast:** subjectfactory allows selectors ([32fa3a4](https://github.com/ReactiveX/RxJS/commit/32fa3a4))
* **onErrorResumeNext:** add onErrorResumeNext operator ([51e022b](https://github.com/ReactiveX/RxJS/commit/51e022b)), closes [#1665](https://github.com/ReactiveX/RxJS/issues/1665)
* **publish:** support optional selectors ([0e5991d](https://github.com/ReactiveX/RxJS/commit/0e5991d)), closes [#1629](https://github.com/ReactiveX/RxJS/issues/1629)

### Performance Improvements

* **combineLatest:** avoid splice and indexOf ([33599cd](https://github.com/ReactiveX/RxJS/commit/33599cd))


### BREAKING CHANGES

* Subject: Subjects no longer duck-type as Subscriptions
* Subject: Subjects will no longer throw when re-subscribed to if they are not unsubscribed
* Subject: Subjects no longer automatically unsubscribe when completed or errored
BREAKING CAHNGE: Minor scheduling changes to groupBy to ensure proper emission ordering
* Rx: `Rx.kitchenSink` and `Rx.DOM` are removed, `Rx`
export everything.



<a name="5.0.0-beta.7"></a>
# [5.0.0-beta.7](https://github.com/ReactiveX/RxJS/compare/5.0.0-beta.6...v5.0.0-beta.7) (2016-04-27)


### Bug Fixes

* **race:** handle observables completes immediately ([abac3d1](https://github.com/ReactiveX/RxJS/commit/abac3d1)), closes [#1615](https://github.com/ReactiveX/RxJS/issues/1615)
* **scan:** accumulator passes current index ([a3ec896](https://github.com/ReactiveX/RxJS/commit/a3ec896)), closes [#1614](https://github.com/ReactiveX/RxJS/issues/1614)

### Features

* **Observable.generate:** add generate static creation method ([c03434c](https://github.com/ReactiveX/RxJS/commit/c03434c))



<a name="5.0.0-beta.6"></a>
# [5.0.0-beta.6](https://github.com/ReactiveX/RxJS/compare/5.0.0-beta.5...v5.0.0-beta.6) (2016-04-12)


### Bug Fixes

* **AjaxObservable:** support json responseType on IE ([bba13d8](https://github.com/ReactiveX/RxJS/commit/bba13d8)), closes [#1381](https://github.com/ReactiveX/RxJS/issues/1381)
* **bufferToggle:** accepts closing selector returns promise ([b1c575c](https://github.com/ReactiveX/RxJS/commit/b1c575c))
* **bufferToggle:** accepts promise as openings ([3d22c7a](https://github.com/ReactiveX/RxJS/commit/3d22c7a))
* **bufferToggle:** handle closingSelector completes immediately ([02239fb](https://github.com/ReactiveX/RxJS/commit/02239fb))
* **typings:** explictly export typings for arguments to functions that destructure configuration objects ([ef305af](https://github.com/ReactiveX/RxJS/commit/ef305af))

### Features

* **UnsubscriptionError:** add messages from inner errors to output message ([dd01279](https://github.com/ReactiveX/RxJS/commit/dd01279)), closes [#1590](https://github.com/ReactiveX/RxJS/issues/1590)

### Performance Improvements

* **DeferSubscriber:** split up 'tryDefer()' into a method to call a factory function. ([566f46b](https://github.com/ReactiveX/RxJS/commit/566f46b))



<a name="5.0.0-beta.5"></a>
# [5.0.0-beta.5](https://github.com/ReactiveX/RxJS/compare/5.0.0-beta.4...v5.0.0-beta.5) (2016-04-05)


### Bug Fixes

* **take:** make 'take' unsubscribe when it reaches the total ([9858aa3](https://github.com/ReactiveX/RxJS/commit/9858aa3))

### BREAKING CHANGES

* Operator: `Operator.prototype.call` has been refactored to include both the destination Subscriber, and the source Observable
  the Operator is now responsible for describing it's own subscription process. ([26423f4](https://github.com/ReactiveX/rxjs/pull/1570/commits/26423f4))

<a name="5.0.0-beta.4"></a>
# [5.0.0-beta.4](https://github.com/ReactiveX/RxJS/compare/5.0.0-beta.3...v5.0.0-beta.4) (2016-03-29)


### Bug Fixes

* **AjaxObservable:** enhance compatibility ([0ac7e1e](https://github.com/ReactiveX/RxJS/commit/0ac7e1e))
* **Observable.if:** accept promise as source ([147166e](https://github.com/ReactiveX/RxJS/commit/147166e))
* **mergeMap:** allow concurrent to be set as the second argument for mergeMap and mergeMapTo ([c003468](https://github.com/ReactiveX/RxJS/commit/c003468))
* **observable:** ensure the subscriber chain is complete before calling this._subscribe ([1631224](https://github.com/ReactiveX/RxJS/commit/1631224))
* **Symbol:** fixed issue where $$observable is not defined ([e66b2d8](https://github.com/ReactiveX/RxJS/commit/e66b2d8))
* **Observable.using:** accepts factory returns promise ([f8d7d1b](https://github.com/ReactiveX/RxJS/commit/f8d7d1b))
* **windowToggle:** handle closingSelector completes immediately ([c755587](https://github.com/ReactiveX/RxJS/commit/c755587)), closes [#1487](https://github.com/ReactiveX/RxJS/issues/1487)

### Features

* **ajax:** add FormData support in AjaxObservable and add percent encoding for parameters ([1f6119c](https://github.com/ReactiveX/RxJS/commit/1f6119c))
* **Subscription:** `add()` now returns a Subscription reference ([a3f4552](https://github.com/ReactiveX/RxJS/commit/a3f4552))
* **timestamp:** add timestamp operator ([80b1646](https://github.com/ReactiveX/RxJS/commit/80b1646)), closes [#1515](https://github.com/ReactiveX/RxJS/issues/1515)

### Performance Improvements

* **forkJoin:** improve forkJoin perf slightly by removing unnecessary context tracking ([280b985](https://github.com/ReactiveX/RxJS/commit/280b985))


### BREAKING CHANGES

* Observable: `Observable.fromArray` was removed since it's deprecated on RxJS 4. You should use `Observable.from` instead.



<a name="5.0.0-beta.3"></a>
# [5.0.0-beta.3](https://github.com/ReactiveX/RxJS/compare/5.0.0-beta.2...v5.0.0-beta.3) (2016-03-21)


### Bug Fixes

* **AjaxObservable:** update type definition for AjaxObservable ([3f5c269](https://github.com/ReactiveX/RxJS/commit/3f5c269)), closes [#1382](https://github.com/ReactiveX/RxJS/issues/1382)
* **deferObservable:** accepts factory returns promise ([0cb44e1](https://github.com/ReactiveX/RxJS/commit/0cb44e1))
* **do:** fix do operator to invoke observer message handlers in the right context. ([67a2f25](https://github.com/ReactiveX/RxJS/commit/67a2f25))
* **exhaustMap:** remove innersubscription when it completes ([7ca0859](https://github.com/ReactiveX/RxJS/commit/7ca0859))
* **forEach:** ensure that teardown logic is called when nextHandler throws ([c50f528](https://github.com/ReactiveX/RxJS/commit/c50f528)), closes [#1411](https://github.com/ReactiveX/RxJS/issues/1411)
* **forkJoin:** accepts observables emitting null or undefined ([6279d6b](https://github.com/ReactiveX/RxJS/commit/6279d6b)), closes [#1362](https://github.com/ReactiveX/RxJS/issues/1362)
* **forkJoin:** dispose the inner subscriptions when the outer subscription is disposed ([c7bf30c](https://github.com/ReactiveX/RxJS/commit/c7bf30c))
* **FutureAction:** add support for periodic scheduling with setInterval instead of setTimeout ([c4f5408](https://github.com/ReactiveX/RxJS/commit/c4f5408))
* **Observable:** introduce Subscribable interface that will be used instead of Observable in inpu ([2256e7b](https://github.com/ReactiveX/RxJS/commit/2256e7b))
* **Observable.prototype.forEach:** removed thisArg to match es-observable spec ([d5f1bcd](https://github.com/ReactiveX/RxJS/commit/d5f1bcd))
* **package.json:** install typings only after packages are installed ([a48d796](https://github.com/ReactiveX/RxJS/commit/a48d796))
* **Schedulers:** ensure schedulers can be reused after error in execution ([202b79a](https://github.com/ReactiveX/RxJS/commit/202b79a))
* **takeLast:** fix takeLast behavior to emit correct order ([73eb658](https://github.com/ReactiveX/RxJS/commit/73eb658)), closes [#1407](https://github.com/ReactiveX/RxJS/issues/1407)
* **typings:** set map function parameter for Observable.from as optional ([efa4dc3](https://github.com/ReactiveX/RxJS/commit/efa4dc3))

### Features

* **AsyncScheduler:** add AsyncScheduler implementation ([4486c1f](https://github.com/ReactiveX/RxJS/commit/4486c1f))
* **if:** add static Observable.if creation operator. ([f7ff7ec](https://github.com/ReactiveX/RxJS/commit/f7ff7ec))
* **let:** adds the let operator to Rx.KitchenSink ([dca6504](https://github.com/ReactiveX/RxJS/commit/dca6504))
* **using:** add static Observable.using creation operator. ([6c76593](https://github.com/ReactiveX/RxJS/commit/6c76593))


### BREAKING CHANGES

* Observable.prototype.forEach: thisArg removed to match es-observable spec



<a name="5.0.0-beta.2"></a>
# [5.0.0-beta.2](https://github.com/ReactiveX/RxJS/compare/5.0.0-beta.1...v5.0.0-beta.2) (2016-02-10)


### Bug Fixes

* **ajax:** fixes error in Chrome accessing responseText when responseType isn't text. ([f3e2f73](https://github.com/ReactiveX/RxJS/commit/f3e2f73))
* **benchpress:** fix issues with benchmarks ([16894bb](https://github.com/ReactiveX/RxJS/commit/16894bb))
* **every:** remove eager predicate calls ([74c2c44](https://github.com/ReactiveX/RxJS/commit/74c2c44))
* **forkJoin:** fix forkJoin to complete if sources Array is empty. ([412b13b](https://github.com/ReactiveX/RxJS/commit/412b13b))
* **groupBy:** does not emit on unsubscribed group ([6d08705](https://github.com/ReactiveX/RxJS/commit/6d08705))
* **groupBy:** fix groupBy to use lift(), supports composability ([815cfae](https://github.com/ReactiveX/RxJS/commit/815cfae)), closes [#1085](https://github.com/ReactiveX/RxJS/issues/1085)
* **merge/concat:** passed scalar observables will now complete properly ([c01b92f](https://github.com/ReactiveX/RxJS/commit/c01b92f)), closes [#1150](https://github.com/ReactiveX/RxJS/issues/1150)
* **MergeMapSubscriber:** clarify type definitions for MergeMapSubscriber's members ([4ee5f02](https://github.com/ReactiveX/RxJS/commit/4ee5f02))
* **Observable.forEach:** errors thrown in nextHandler reject returned promise ([c5ead88](https://github.com/ReactiveX/RxJS/commit/c5ead88)), closes [#1184](https://github.com/ReactiveX/RxJS/issues/1184)
* **Observer:** fix typing to allow observation via partial observables with PartialObservable<T ([7b6da90](https://github.com/ReactiveX/RxJS/commit/7b6da90))
* **Subject:** align parameter order to match with RxJS4 ([44dfa07](https://github.com/ReactiveX/RxJS/commit/44dfa07)), closes [#1285](https://github.com/ReactiveX/RxJS/issues/1285)
* **Subject:** throw ObjectUnsubscribedError when unsubscribed ([29b630b](https://github.com/ReactiveX/RxJS/commit/29b630b)), closes [#859](https://github.com/ReactiveX/RxJS/issues/859)
* **Subscriber:** adds unsubscription when errors are thrown from user-land handlers. ([dc67d21](https://github.com/ReactiveX/RxJS/commit/dc67d21))
* **Subscription:** fix leaks caused by unsubscribe functions that throw ([9e88c2e](https://github.com/ReactiveX/RxJS/commit/9e88c2e))
* **subscriptions:** unsubscribe correctly when a Subscriber throws during synchronous dispatch. ([b1698fe](https://github.com/ReactiveX/RxJS/commit/b1698fe))
* **typings:** don't expose PromiseConstructor dependency ([f59225b](https://github.com/ReactiveX/RxJS/commit/f59225b)), closes [#1270](https://github.com/ReactiveX/RxJS/issues/1270)
* **typings:** remove R from Operator.call, update operators accordingly ([f27902d](https://github.com/ReactiveX/RxJS/commit/f27902d))
* **typings:** remove redundant generics from call<T, R> and lift<T, R> ([603c9eb](https://github.com/ReactiveX/RxJS/commit/603c9eb))
* **windowTime:** does not emit on unsubscribed window ([595f4ef](https://github.com/ReactiveX/RxJS/commit/595f4ef))

### Features

* **cache:** add cache operator ([4308a04](https://github.com/ReactiveX/RxJS/commit/4308a04))
* **delayWhen:** add delayWhen operator ([17122f9](https://github.com/ReactiveX/RxJS/commit/17122f9))
* **distinct:** add distinct operator ([94a034d](https://github.com/ReactiveX/RxJS/commit/94a034d))
* **distinctKey:** add distinctKey operator ([fe4d57f](https://github.com/ReactiveX/RxJS/commit/fe4d57f))
* **from:** allow Observable.from to handle array-like objects ([7245005](https://github.com/ReactiveX/RxJS/commit/7245005))
* **MapPolyfill:** implement clear interface ([e3fbd05](https://github.com/ReactiveX/RxJS/commit/e3fbd05))
* **operator:** adds inspect and inspectTime operators ([54f957b](https://github.com/ReactiveX/RxJS/commit/54f957b))
* **OuterSubscriber:** notifyNext passes innersubscriber when next emits ([1df8928](https://github.com/ReactiveX/RxJS/commit/1df8928)), closes [#1250](https://github.com/ReactiveX/RxJS/issues/1250)
* **Subject:** implement asObservable ([aca3dd0](https://github.com/ReactiveX/RxJS/commit/aca3dd0)), closes [#1108](https://github.com/ReactiveX/RxJS/issues/1108)
* **takeLast:** adds takeLast operator. ([3583cd3](https://github.com/ReactiveX/RxJS/commit/3583cd3))

### Performance Improvements

* **catch:** remove tryCatch/errorObject for custom tryCatching, 1.3M -> 1.5M ops/sec ([35caf74](https://github.com/ReactiveX/RxJS/commit/35caf74))
* **combineLatest:** remove tryCatch/errorObject, 156k -> 221k ops/sec ([1c7d639](https://github.com/ReactiveX/RxJS/commit/1c7d639))
* **count:** remove tryCatch/errorObject for custom tryCatching, 1.84M -> 1.97M ops/sec ([869718d](https://github.com/ReactiveX/RxJS/commit/869718d))
* **debounce:** remove tryCatch/errorObject for custom tryCatching ([90bf3f1](https://github.com/ReactiveX/RxJS/commit/90bf3f1))
* **distinct:** increase perf from 60% of Rx4 to 1000% Rx4 ([d026c41](https://github.com/ReactiveX/RxJS/commit/d026c41))
* **do:** remove tryCatch/errorObject use, 104k -> 263k ops/sec improvement ([ccba39d](https://github.com/ReactiveX/RxJS/commit/ccba39d))
* **every:** remove tryCatch/errorObject (~1.8x improvement) ([14afeb6](https://github.com/ReactiveX/RxJS/commit/14afeb6))
* **exhaustMap:** remove tryCatch/errorObject (~10% improvement) ([a55f459](https://github.com/ReactiveX/RxJS/commit/a55f459))
* **filter:** remove tryCatch/errorObject for 2x perf improvement ([086c4bf](https://github.com/ReactiveX/RxJS/commit/086c4bf))
* **find:** remove tryCatch/errorObject (~2x improvement) ([aa35b2a](https://github.com/ReactiveX/RxJS/commit/aa35b2a))
* **first:** remove tryCatch/errorObject for custom tryCatching, 970k ops -> 1.27M ops/sec ([d8c835a](https://github.com/ReactiveX/RxJS/commit/d8c835a))
* **groupBy:** remove tryCatch/errorObject for custom tryCatching, 38% faster. ([40c43f7](https://github.com/ReactiveX/RxJS/commit/40c43f7))
* **last:** remove tryCatch/errorObject for custom tryCatching, 960k -> 1.38M ops/sec ([243ace3](https://github.com/ReactiveX/RxJS/commit/243ace3))
* **map:** 2x increase from removing tryCatch/errorObject ([231f729](https://github.com/ReactiveX/RxJS/commit/231f729))
* **mergeMap:** extra 1x factor gains from custom tryCatch member function ([c4ce2fb](https://github.com/ReactiveX/RxJS/commit/c4ce2fb))
* **mergeMapTo:** remove tryCatch/errorObject (~2x improvement) ([42bcced](https://github.com/ReactiveX/RxJS/commit/42bcced))
* **reduce:** remove tryCatch/errorObject, optimize calls, 2-3x perf improvement ([6186d46](https://github.com/ReactiveX/RxJS/commit/6186d46))
* **scan:** remove tryCatch/errorObject for custom tryCatcher 1.75x improvement ([338135d](https://github.com/ReactiveX/RxJS/commit/338135d))
* **single:** remove tryCatch/errorObject (~2.5x improvement) ([2515cfb](https://github.com/ReactiveX/RxJS/commit/2515cfb))
* **skipWhile:** remove tryCatch/errorObject (~1.6x improvement) ([cf002db](https://github.com/ReactiveX/RxJS/commit/cf002db))
* **Subscriber:** double performance adding tryOrUnsub to Subscriber ([4e75466](https://github.com/ReactiveX/RxJS/commit/4e75466))
* **switchMap:** remove tryCatch/errorObject ~20% improvement ([ec0199f](https://github.com/ReactiveX/RxJS/commit/ec0199f))
* **switchMapTo:** remove tryCatch/errorObject (~2x improvement) ([c8cf72a](https://github.com/ReactiveX/RxJS/commit/c8cf72a))
* **takeWhile:** remove tryCatch/errorObject (~6x improvement) ([ef6c3c3](https://github.com/ReactiveX/RxJS/commit/ef6c3c3))
* **withLatestFrom:** remove tryCatch/errorObject, 92k -> 107k (16% improvement) ([e4ccb44](https://github.com/ReactiveX/RxJS/commit/e4ccb44))
* **zip:** extra 1x-2x factor gains from custom tryCatch member function ([a1b0e52](https://github.com/ReactiveX/RxJS/commit/a1b0e52))


### BREAKING CHANGES

* Subject: Subject.create arguments have been swapped to match Rx 4 signature. `Subject.create(observable, observer)` is now `Subject.create(observer, observable)`
* Observable patching: Patch files for static observable methods such as `of` and `from` can now be found in `rxjs/add/observable/of`, `rxjs/add/observable/from`, etc.
* Observable modules: Observable modules for subclassed Observables like `PromiseObservable`, `ArrayObservable` are now in appropriately named files like `rxjs/observable/PromiseObservable` and `rxjs/observable/ArrayObservable`
  as opposed to `rxjs/observable/fromPromise` and `rxjs/observable/fromArray`, since they're not patching, they simply house the Observable implementations.



<a name="5.0.0-beta.1"></a>
# [5.0.0-beta.1](https://github.com/ReactiveX/RxJS/compare/5.0.0-beta.0...v5.0.0-beta.1) (2016-01-13)


### Bug Fixes

* **ajax:** ensure post sending values ([7aae0a3](https://github.com/ReactiveX/RxJS/commit/7aae0a3))
* **ajax:** ensure that headers are set properly ([1100bdd](https://github.com/ReactiveX/RxJS/commit/1100bdd))
* **ajax:** ensure XHR props are set after open ([4a6a579](https://github.com/ReactiveX/RxJS/commit/4a6a579))
* **ajax:** ensure XHR send is being called ([c569e3e](https://github.com/ReactiveX/RxJS/commit/c569e3e))
* **ajax:** remove unnecessary onAbort handling ([ed8240e](https://github.com/ReactiveX/RxJS/commit/ed8240e))
* **ajax:** response properly based off responseType ([b2a27a2](https://github.com/ReactiveX/RxJS/commit/b2a27a2))
* **ajax:** should no longer succeed on 300 status ([4d4fa32](https://github.com/ReactiveX/RxJS/commit/4d4fa32))
* **animationFrame:** req/cancel animationFrame has to be called within the context of root. ([30a11ee](https://github.com/ReactiveX/RxJS/commit/30a11ee))
* **debounceTime:** align value emit behavior as same as RxJS4 ([5ee11e0](https://github.com/ReactiveX/RxJS/commit/5ee11e0)), closes [#1081](https://github.com/ReactiveX/RxJS/issues/1081)
* **distinctUntilChanged:** implement optional keySelector ([f6a897c](https://github.com/ReactiveX/RxJS/commit/f6a897c))
* **fromEvent:** added spread operator for emitters that pass multiple arguments ([3f8eabb](https://github.com/ReactiveX/RxJS/commit/3f8eabb))
* **fromObservable:** expand compatibility for iterating string source ([8f7924f](https://github.com/ReactiveX/RxJS/commit/8f7924f)), closes [#1147](https://github.com/ReactiveX/RxJS/issues/1147)
* **Immediate:** update setImmediate compatibility on IE ([39e6c0e](https://github.com/ReactiveX/RxJS/commit/39e6c0e)), closes [#1163](https://github.com/ReactiveX/RxJS/issues/1163)
* **inspect:** remove inspect and inspectTime operators ([17341a4](https://github.com/ReactiveX/RxJS/commit/17341a4))
* **Readme:** update link to bundle on npmcdn ([44a8ca7](https://github.com/ReactiveX/RxJS/commit/44a8ca7))
* **ReplaySubject:** Fix case-sensitive import. ([de31f32](https://github.com/ReactiveX/RxJS/commit/de31f32))
* **ScalarObservable:** fix issue where scalar map fired twice ([c18c42e](https://github.com/ReactiveX/RxJS/commit/c18c42e)), closes [#1142](https://github.com/ReactiveX/RxJS/issues/1142) [#1140](https://github.com/ReactiveX/RxJS/issues/1140)
* **scheduling:** Fixes bugs in scheduled actions. ([e050f01](https://github.com/ReactiveX/RxJS/commit/e050f01))
* **Subscriber:** errors in nextHandler no longer propagate to errorHandler ([f42eed2](https://github.com/ReactiveX/RxJS/commit/f42eed2)), closes [#1135](https://github.com/ReactiveX/RxJS/issues/1135)
* **WebSocketSubject:** ensure error codes passed to WebSocket close method ([3b1655e](https://github.com/ReactiveX/RxJS/commit/3b1655e))
* **WebSocketSubject:** ensure WebSocketSubject can be resubscribed ([861a0c1](https://github.com/ReactiveX/RxJS/commit/861a0c1))
* **WebSocketSubject:** resultSelector and protocols specifications work properly ([580f69a](https://github.com/ReactiveX/RxJS/commit/580f69a))

### Features

* **ajax:** add resultSelector and improve perf ([6df755f](https://github.com/ReactiveX/RxJS/commit/6df755f))
* **ajax:** adds ajax methods from rx-dom. ([2ca4236](https://github.com/ReactiveX/RxJS/commit/2ca4236))
* **bindNodeCallback:** add Observable.bindNodeCallback ([497bb0d](https://github.com/ReactiveX/RxJS/commit/497bb0d)), closes [#736](https://github.com/ReactiveX/RxJS/issues/736)
* **Observable:** add let to allow fluent style query building ([5a2014c](https://github.com/ReactiveX/RxJS/commit/5a2014c))
* **Observable:** add pairwise operator ([1432e59](https://github.com/ReactiveX/RxJS/commit/1432e59))
* **Operator:** Expose the Operator interface to library consumers ([29aa3af](https://github.com/ReactiveX/RxJS/commit/29aa3af))
* **pluck:** add pluck operator ([8026906](https://github.com/ReactiveX/RxJS/commit/8026906)), closes [#1134](https://github.com/ReactiveX/RxJS/issues/1134)
* **race:** add race operator ([ee3b593](https://github.com/ReactiveX/RxJS/commit/ee3b593))
* **scheduler:** adds animationFrame scheduler. ([e637b78](https://github.com/ReactiveX/RxJS/commit/e637b78))
* **WebSocketSubject:** add basic WebSocketSubject implementation ([58cd806](https://github.com/ReactiveX/RxJS/commit/58cd806))
* **WebSocketSubject.multiplex:** add multiplex operator to WebSocketSubject ([904d617](https://github.com/ReactiveX/RxJS/commit/904d617))


### BREAKING CHANGES

* inspect: `inspect` and `inspectTime` were removed. Use `withLatestFrom` instead.
* Subscriber/Observable: errors thrown in nextHandlers by consumer code will no longer propagate to the errorHandler.



<a name="5.0.0-beta.0"></a>
# [5.0.0-beta.0](https://github.com/ReactiveX/RxJS/compare/5.0.0-alpha.14...v5.0.0-beta.0) (2015-12-15)


### Bug Fixes

* **micro-perf:** rename immediate to queue scheduler ([fe56b28](https://github.com/ReactiveX/RxJS/commit/fe56b28)), closes [#1040](https://github.com/ReactiveX/RxJS/issues/1040)
* **micro-perf:** use the correnct scheduler on current-thread tests ([3dff5eb](https://github.com/ReactiveX/RxJS/commit/3dff5eb))
* **operators:** emit declarations for patch modules ([676f82d](https://github.com/ReactiveX/RxJS/commit/676f82d))
* **test:** make explicit unsubscription for observable ([7f67b09](https://github.com/ReactiveX/RxJS/commit/7f67b09))
* **test:** make explicit unsubscription for observable ([65e65e2](https://github.com/ReactiveX/RxJS/commit/65e65e2))
* **window:** fix window() to dispose window Subjects ([5168f73](https://github.com/ReactiveX/RxJS/commit/5168f73))
* **windowCount:** fix windowCount to dispose window Subjects ([f29ee29](https://github.com/ReactiveX/RxJS/commit/f29ee29))
* **windowTime:** fix windowTime to dispose window Subjects ([b73e260](https://github.com/ReactiveX/RxJS/commit/b73e260))
* **windowToggle:** fix windowToggle to dispose window Subjects ([15ff3f7](https://github.com/ReactiveX/RxJS/commit/15ff3f7))
* **windowWhen:** fix windowWhen to dispose window Subjects ([91c1941](https://github.com/ReactiveX/RxJS/commit/91c1941))

### Features

* **inspect:** added inspect operator ([f9944ae](https://github.com/ReactiveX/RxJS/commit/f9944ae))
* **inspectTime:** add inspectTime operator ([6835dcd](https://github.com/ReactiveX/RxJS/commit/6835dcd))
* **sample:** readd `sample` operator ([e93bffc](https://github.com/ReactiveX/RxJS/commit/e93bffc))
* **sampleTime:** reimplement `sampleTime` with RxJS 4 behavior ([6b77e69](https://github.com/ReactiveX/RxJS/commit/6b77e69))
* **TestScheduler:** add createTime() parser to return number ([cb8cf6b](https://github.com/ReactiveX/RxJS/commit/cb8cf6b))


### BREAKING CHANGES

* sampleTime: `sampleTime` now has the same behavior `sample(number, scheduler)` did in RxJS 4
* sample: `sample` behavior returned to RxJS 4 behavior
* inspectTime: `sampleTime` is now `inspectTime`
* inspect: RxJS 5 `sample` behavior is now `inspect`
* extended operators: All extended operators are now under the same operator directory as all others. This means that
  `import "rxjs/add/operator/extended/min"` is now `import "rxjs/add/operator/min"`



<a name="5.0.0-alpha.14"></a>
# [5.0.0-alpha.14](https://github.com/ReactiveX/RxJS/compare/5.0.0-alpha.13...v5.0.0-alpha.14) (2015-12-09)


### Bug Fixes

* **every:** handle thisArg for scalar and array observables ([eae4b00](https://github.com/ReactiveX/RxJS/commit/eae4b00))
* **SymbolShim:** ensure for function even if Symbol already exists ([e942776](https://github.com/ReactiveX/RxJS/commit/e942776)), closes [#999](https://github.com/ReactiveX/RxJS/issues/999)
* **SymbolShim:** Symbol polyfill is a function ([1f57157](https://github.com/ReactiveX/RxJS/commit/1f57157)), closes [#988](https://github.com/ReactiveX/RxJS/issues/988)
* **timeoutWith:** fix to avoid unnecessary inner subscription ([6e63752](https://github.com/ReactiveX/RxJS/commit/6e63752))

### Features

* **count:** remove thisArg ([878a1fd](https://github.com/ReactiveX/RxJS/commit/878a1fd))
* **distinctUntilChanged:** remove thisArg ([bfc52d6](https://github.com/ReactiveX/RxJS/commit/bfc52d6))
* **exhaust:** rename switchFirst operators to exhaust ([9b565c9](https://github.com/ReactiveX/RxJS/commit/9b565c9)), closes [#915](https://github.com/ReactiveX/RxJS/issues/915)
* **finally:** remove thisArg ([d4b02fc](https://github.com/ReactiveX/RxJS/commit/d4b02fc))
* **forEach:** add thisArg ([14ffce6](https://github.com/ReactiveX/RxJS/commit/14ffce6)), closes [#878](https://github.com/ReactiveX/RxJS/issues/878)
* **single:** remove thisArg ([43af805](https://github.com/ReactiveX/RxJS/commit/43af805))


### BREAKING CHANGES

* exhaust: switchFirst is now exhaust
* exhaust: switchFirstMap is now exhaustMap
* forEach: Observable.prototype.forEach argument order changed to accommodate thisArg. Optional PromiseCtor argument moved to third arg from second



<a name="5.0.0-alpha.13"></a>
# [5.0.0-alpha.13](https://github.com/ReactiveX/RxJS/compare/5.0.0-alpha.12...v5.0.0-alpha.13) (2015-12-08)


### Bug Fixes

* **Observable:** fix circular dependency issue. ([b7672f4](https://github.com/ReactiveX/RxJS/commit/b7672f4))
* **bufferToggle:** fix unsubscriptions of closing Observable ([439b641](https://github.com/ReactiveX/RxJS/commit/439b641))
* **expand:** accept scheduler parameter ([79e9084](https://github.com/ReactiveX/RxJS/commit/79e9084)), closes [#841](https://github.com/ReactiveX/RxJS/issues/841)
* **publish:** make script generate correct package names ([10563d3](https://github.com/ReactiveX/RxJS/commit/10563d3))
* **repeat:** preserve Subscriber chain in repeat() ([d9a7328](https://github.com/ReactiveX/RxJS/commit/d9a7328))
* **retry:** preserve Subscriber chain in retry() ([b429dac](https://github.com/ReactiveX/RxJS/commit/b429dac))
* **retryWhen:** preserve Subscriber chain in retryWhen() ([c9cb958](https://github.com/ReactiveX/RxJS/commit/c9cb958))

### Features

* **AsapScheduler:** rename NextTickScheduler to AsapScheduler ([3255fb3](https://github.com/ReactiveX/RxJS/commit/3255fb3)), closes [#838](https://github.com/ReactiveX/RxJS/issues/838)
* **BehaviorSubject:** add getValue method to access value ([33b387b](https://github.com/ReactiveX/RxJS/commit/33b387b)), closes [#758](https://github.com/ReactiveX/RxJS/issues/758)
* **BehaviorSubject:** now throws when getValue is called after unsubscription ([1ddf116](https://github.com/ReactiveX/RxJS/commit/1ddf116))
* **ObjectUnsubscribedError:** add ObjectUnsubscribed error class ([39836af](https://github.com/ReactiveX/RxJS/commit/39836af))
* **Observable:** subscribe accepts objects with rxSubscriber symbol ([b7672f4](https://github.com/ReactiveX/RxJS/commit/b7672f4))
* **QueueScheduler:** rename ImmediateScheduler to QueueScheduler ([66eb537](https://github.com/ReactiveX/RxJS/commit/66eb537))
* **Rx.Symbol.rxSubscriber:** add rxSubscriber symbol ([d4f1670](https://github.com/ReactiveX/RxJS/commit/d4f1670))
* **Subject:** add rxSubscriber symbol ([d2e4257](https://github.com/ReactiveX/RxJS/commit/d2e4257))
* **Subscriber:** add rxSubscriber symbol ([7bda360](https://github.com/ReactiveX/RxJS/commit/7bda360))
* **switchFirstMap:** rename switchMapFirst to switchFirstMap ([eddd4dc](https://github.com/ReactiveX/RxJS/commit/eddd4dc))


### BREAKING CHANGES

* AsapScheduler: `Rx.Scheduler.nextTick` (Rx 4's "default" scheduler) is now `Rx.Scheduler.asap`
* QueueScheduler: `Rx.Scheduler.immediate` (Rx 4's "currentThread" scheduler) is now `Rx.Scheduler.queue`
related #838
* switchFirstMap: `switchMapFirst` is now `switchFirstMap`



<a name="5.0.0-alpha.12"></a>
# [5.0.0-alpha.12](https://github.com/ReactiveX/RxJS/compare/5.0.0-alpha.10...v5.0.0-alpha.12) (2015-12-04)


### Bug Fixes

* **AsyncSubject:** emit value when it's subscribed after complete ([ed0eaf6](https://github.com/ReactiveX/RxJS/commit/ed0eaf6))
* **bindCallback:** only call function once even while scheduled ([8637d47](https://github.com/ReactiveX/RxJS/commit/8637d47)), closes [#881](https://github.com/ReactiveX/RxJS/issues/881)
* **bufferToggle:** fix disposal of subscriptions when errors occur ([a20325c](https://github.com/ReactiveX/RxJS/commit/a20325c))
* **catch:** fix catch to dispose old subscriptions ([280f7ed](https://github.com/ReactiveX/RxJS/commit/280f7ed)), closes [#763](https://github.com/ReactiveX/RxJS/issues/763)
* **catch:** fix catch() to preserve Subscriber chain ([e1447ac](https://github.com/ReactiveX/RxJS/commit/e1447ac))
* **concat:** accept scheduler parameter ([8859702](https://github.com/ReactiveX/RxJS/commit/8859702))
* **ConnectableObservable:** fix ConnectableObservable connectability and refCounting ([aef9578](https://github.com/ReactiveX/RxJS/commit/aef9578)), closes [#678](https://github.com/ReactiveX/RxJS/issues/678)
* **debounce:** Fix debounce to unsubscribe duration Observables ([dea7847](https://github.com/ReactiveX/RxJS/commit/dea7847))
* **expand:** fix expand's concurrency behavior ([01f86e5](https://github.com/ReactiveX/RxJS/commit/01f86e5))
* **expand:** terminate recursive call when destination completes ([3b8cf94](https://github.com/ReactiveX/RxJS/commit/3b8cf94))
* **Observable:** Subjects no longer wrapped in Subscriber ([5cb0f2b](https://github.com/ReactiveX/RxJS/commit/5cb0f2b)), closes [#825](https://github.com/ReactiveX/RxJS/issues/825) [#748](https://github.com/ReactiveX/RxJS/issues/748)
* **Observer:** anonymous observers now allow missing handlers ([a11c763](https://github.com/ReactiveX/RxJS/commit/a11c763)), closes [#723](https://github.com/ReactiveX/RxJS/issues/723)
* **operators:** Remove shareReplay and shareBehavior ([536a6a6](https://github.com/ReactiveX/RxJS/commit/536a6a6)), closes [#710](https://github.com/ReactiveX/RxJS/issues/710)
* **publish:** copy readme and license, remove scripts ([439a2f3](https://github.com/ReactiveX/RxJS/commit/439a2f3)), closes [#845](https://github.com/ReactiveX/RxJS/issues/845)
* **throttleTime:** fix and rename throttleTime operator ([3b0c1f3](https://github.com/ReactiveX/RxJS/commit/3b0c1f3))
* **TimerObservable:** accepts absolute date for dueTime ([e284fb8](https://github.com/ReactiveX/RxJS/commit/e284fb8)), closes [#648](https://github.com/ReactiveX/RxJS/issues/648)

### Features

* **AsyncSubject:** add AsyncSubject ([34c05fe](https://github.com/ReactiveX/RxJS/commit/34c05fe))
* **bindCallback:** remove thisArg ([feea9a1](https://github.com/ReactiveX/RxJS/commit/feea9a1))
* **bindCallback:** rename fromCallback to bindCallback ([305d66d](https://github.com/ReactiveX/RxJS/commit/305d66d)), closes [#876](https://github.com/ReactiveX/RxJS/issues/876)
* **callback:** Add Observable.fromCallback ([9f751e7](https://github.com/ReactiveX/RxJS/commit/9f751e7))
* **combineLatest:** accept array of observable as parameter ([2edd92c](https://github.com/ReactiveX/RxJS/commit/2edd92c)), closes [#594](https://github.com/ReactiveX/RxJS/issues/594)
* **forkJoin:** accept array of observable as parameter ([d45f672](https://github.com/ReactiveX/RxJS/commit/d45f672))
* **mergeScan:** support concurrency parameter for mergeScan ([fe0eb37](https://github.com/ReactiveX/RxJS/commit/fe0eb37)), closes [#868](https://github.com/ReactiveX/RxJS/issues/868)
* **usage:** add auto-patching operators ([1ab3508](https://github.com/ReactiveX/RxJS/commit/1ab3508)), closes [#860](https://github.com/ReactiveX/RxJS/issues/860)
* **skipWhile:** add skipWhile operator ([a2244e0](https://github.com/ReactiveX/RxJS/commit/a2244e0))
* **switchFirst:** add switchFirst and switchMapFirst ([71e3dd1](https://github.com/ReactiveX/RxJS/commit/71e3dd1))
* **publishLast:** add publishLast operator ([9bef228](https://github.com/ReactiveX/RxJS/commit/9bef228)), closes [#883](https://github.com/ReactiveX/RxJS/issues/883)
* **takeWhile:** add takeWhile operator ([48e53ea](https://github.com/ReactiveX/RxJS/commit/48e53ea)), closes [#695](https://github.com/ReactiveX/RxJS/issues/695)
* **takeWhile:** remove thisArg ([b5219a4](https://github.com/ReactiveX/RxJS/commit/b5219a4))
* **throttle:** add throttle operator with durationSelector ([c3bf3e7](https://github.com/ReactiveX/RxJS/commit/c3bf3e7)), closes [#496](https://github.com/ReactiveX/RxJS/issues/496)

### Performance Improvements

* **ReplaySubject:** fix memory leak of growing buffer ([0a73b4d](https://github.com/ReactiveX/RxJS/commit/0a73b4d)), closes [#578](https://github.com/ReactiveX/RxJS/issues/578)



<a name="5.0.0-alpha.11"></a>
# [5.0.0-alpha.11](https://github.com/ReactiveX/RxJS/compare/5.0.0-alpha.10...v5.0.0-alpha.11) (2015-12-01)


### Bug Fixes

* **catch:** fix catch to dispose old subscriptions ([280f7ed](https://github.com/ReactiveX/RxJS/commit/280f7ed)), closes [#763](https://github.com/ReactiveX/RxJS/issues/763)
* **concat:** accept scheduler parameter ([8859702](https://github.com/ReactiveX/RxJS/commit/8859702))
* **ConnectableObservable:** fix ConnectableObservable connectability and refCounting ([aef9578](https://github.com/ReactiveX/RxJS/commit/aef9578)), closes [#678](https://github.com/ReactiveX/RxJS/issues/678)
* **debounce:** Fix debounce to unsubscribe duration Observables ([dea7847](https://github.com/ReactiveX/RxJS/commit/dea7847))
* **expand:** fix expand's concurrency behavior ([01f86e5](https://github.com/ReactiveX/RxJS/commit/01f86e5))
* **expand:** terminate recursive call when destination completes ([3b8cf94](https://github.com/ReactiveX/RxJS/commit/3b8cf94))
* **Observer:** anonymous observers now allow missing handlers ([a11c763](https://github.com/ReactiveX/RxJS/commit/a11c763)), closes [#723](https://github.com/ReactiveX/RxJS/issues/723)
* **operators:** Remove shareReplay and shareBehavior ([536a6a6](https://github.com/ReactiveX/RxJS/commit/536a6a6)), closes [#710](https://github.com/ReactiveX/RxJS/issues/710)
* **test:** make explicit unsubscription for observable ([505f5b7](https://github.com/ReactiveX/RxJS/commit/505f5b7))
* **throttleTime:** fix and rename throttleTime operator ([3b0c1f3](https://github.com/ReactiveX/RxJS/commit/3b0c1f3))
* **TimerObservable:** accepts absolute date for dueTime ([e284fb8](https://github.com/ReactiveX/RxJS/commit/e284fb8)), closes [#648](https://github.com/ReactiveX/RxJS/issues/648)

### Features

* **callback:** Add Observable.fromCallback ([9f751e7](https://github.com/ReactiveX/RxJS/commit/9f751e7))
* **combineLatest:** accept array of observable as parameter ([2edd92c](https://github.com/ReactiveX/RxJS/commit/2edd92c)), closes [#594](https://github.com/ReactiveX/RxJS/issues/594)
* **forkJoin:** accept array of observable as parameter ([d45f672](https://github.com/ReactiveX/RxJS/commit/d45f672))
* **operator:** add skipWhile operator ([a2244e0](https://github.com/ReactiveX/RxJS/commit/a2244e0))
* **operator:** add switchFirst and switchMapFirst ([71e3dd1](https://github.com/ReactiveX/RxJS/commit/71e3dd1))
* **takeWhile:** add takeWhile operator ([48e53ea](https://github.com/ReactiveX/RxJS/commit/48e53ea)), closes [#695](https://github.com/ReactiveX/RxJS/issues/695)
* **throttle:** add throttle operator with durationSelector ([c3bf3e7](https://github.com/ReactiveX/RxJS/commit/c3bf3e7)), closes [#496](https://github.com/ReactiveX/RxJS/issues/496)

### Performance Improvements

* **ReplaySubject:** fix memory leak of growing buffer ([0a73b4d](https://github.com/ReactiveX/RxJS/commit/0a73b4d)), closes [#578](https://github.com/ReactiveX/RxJS/issues/578)



<a name="5.0.0-alpha.10"></a>
# [5.0.0-alpha.10](https://github.com/ReactiveX/RxJS/compare/5.0.0-alpha.9...v5.0.0-alpha.10) (2015-11-10)


### Bug Fixes

* **Immediate:** set immediate should no longer throw in Chrome ([a3de7d9](https://github.com/ReactiveX/RxJS/commit/a3de7d9)), closes [#690](https://github.com/ReactiveX/RxJS/issues/690)



<a name="5.0.0-alpha.9"></a>
# [5.0.0-alpha.9](https://github.com/ReactiveX/RxJS/compare/5.0.0-alpha.8...v5.0.0-alpha.9) (2015-11-10)


### Bug Fixes

* **util:** incorrect Symbol.iterator for es6-shim ([15bf32c](https://github.com/ReactiveX/RxJS/commit/15bf32c))

### Features

* **forkJoin:** accept promise, resultselector as parameter of forkJoin ([190f349](https://github.com/ReactiveX/RxJS/commit/190f349)), closes [#507](https://github.com/ReactiveX/RxJS/issues/507)



<a name="5.0.0-alpha.8"></a>
# [5.0.0-alpha.8](https://github.com/ReactiveX/RxJS/compare/5.0.0-alpha.7...v5.0.0-alpha.8) (2015-11-06)


### Bug Fixes

* **concat:** handle a given scheduler correctly ([8745216](https://github.com/ReactiveX/RxJS/commit/8745216))
* **package.json:** loosen the engines/npm semver range to prevent false warnings ([df791c6](https://github.com/ReactiveX/RxJS/commit/df791c6))
* **skipUntil:** unsubscribe source when it completes ([8a4162b](https://github.com/ReactiveX/RxJS/commit/8a4162b)), closes [#577](https://github.com/ReactiveX/RxJS/issues/577)
* **take:** deal with total <= 0 and add tests ([c5cc06f](https://github.com/ReactiveX/RxJS/commit/c5cc06f))
* **windowWhen:** fix windowWhen with regard to unsubscriptions ([8174947](https://github.com/ReactiveX/RxJS/commit/8174947))

### Features

* **mergeScan:** add new mergeScan operator. ([0ebb5bd](https://github.com/ReactiveX/RxJS/commit/0ebb5bd))
* **multicast:** support both Subject and subjectFactory arguments ([f779027](https://github.com/ReactiveX/RxJS/commit/f779027))

### BREAKING CHANGES

* **publish:** reverted to RxJS 4 behavior
* **publishBehavior:** reverted to RxJS 4 behavior
* **publishReplay:** reverted to RxJS 4 behavior
* **shareBehavior:** removed
* **shareReplay:** removed

<a name="5.0.0-alpha.7"></a>
# [5.0.0-alpha.7](https://github.com/ReactiveX/RxJS/compare/5.0.0-alpha.6...v5.0.0-alpha.7) (2015-10-27)


### Bug Fixes

* **NextTickAction:** fix unsubscription behavior ([3d8264c](https://github.com/ReactiveX/RxJS/commit/3d8264c)), closes [#582](https://github.com/ReactiveX/RxJS/issues/582)
* **buffer:** cleanup notifier subscription when unsubscribed ([1b30aa9](https://github.com/ReactiveX/RxJS/commit/1b30aa9))
* **delay:** accepts absolute time delay ([b109100](https://github.com/ReactiveX/RxJS/commit/b109100))
* **mergeMapTo:** mergeMapTo result should complete ([6f9859e](https://github.com/ReactiveX/RxJS/commit/6f9859e))
* **operator:** update type definitions for union types ([9d90c75](https://github.com/ReactiveX/RxJS/commit/9d90c75)), closes [#581](https://github.com/ReactiveX/RxJS/issues/581)
* **repeat:** fix inner subscription semantics for repeat ([f67a596](https://github.com/ReactiveX/RxJS/commit/f67a596)), closes [#554](https://github.com/ReactiveX/RxJS/issues/554)
* **switchMapTo:** reimplement switchMapTo to pass tests ([d4789cd](https://github.com/ReactiveX/RxJS/commit/d4789cd))
* **takeUntil:** unsubscribe notifier when it completes ([9415196](https://github.com/ReactiveX/RxJS/commit/9415196))

### Features

* **operator:** add max operator ([7fda036](https://github.com/ReactiveX/RxJS/commit/7fda036))
* **operator:** add min operator ([79cb6cf](https://github.com/ReactiveX/RxJS/commit/79cb6cf))
* **shareBehavior:** add shareBehavior and its tests ([97ff1ec](https://github.com/ReactiveX/RxJS/commit/97ff1ec))



<a name="5.0.0-alpha.6"></a>
# [5.0.0-alpha.6](https://github.com/ReactiveX/RxJS/compare/5.0.0-alpha.5...v5.0.0-alpha.6) (2015-10-17)


### Bug Fixes

* **retryWhen:** fix internal unsubscriptions ([5aff5e8](https://github.com/ReactiveX/RxJS/commit/5aff5e8))
* **scan:** scan now behaves like RxJS 4 scan ([27f9c09](https://github.com/ReactiveX/RxJS/commit/27f9c09))



<a name="5.0.0-alpha.5"></a>
# [5.0.0-alpha.5](https://github.com/ReactiveX/RxJS/compare/5.0.0-alpha.4...v5.0.0-alpha.5) (2015-10-16)


### Bug Fixes

* **bufferToggle:** fix bugs in order to pass tests ([949fa31](https://github.com/ReactiveX/RxJS/commit/949fa31))
* **mergeAll:** fix mergeAll micro performance tests to use mapTo instead of map. ([616e86e](https://github.com/ReactiveX/RxJS/commit/616e86e))
* **package:** correct typings path ([a501b06](https://github.com/ReactiveX/RxJS/commit/a501b06))
* **repeat:** add additional resubscription behavior ([4f9f33b](https://github.com/ReactiveX/RxJS/commit/4f9f33b)), closes [#516](https://github.com/ReactiveX/RxJS/issues/516)
* **retry:** fix internal unsubscriptions for retry ([cc92f45](https://github.com/ReactiveX/RxJS/commit/cc92f45)), closes [#546](https://github.com/ReactiveX/RxJS/issues/546)
* **windowToggle:** fix window closing and unsubscription semantics ([0cb21e6](https://github.com/ReactiveX/RxJS/commit/0cb21e6))



<a name="5.0.0-alpha.4"></a>
# [5.0.0-alpha.4](https://github.com/ReactiveX/RxJS/compare/5.0.0-alpha.3...5.0.0-alpha.4) (2015-10-15)


### Bug Fixes

* **Subject:** fix missing unsubscribe call ([9dd27d6](https://github.com/ReactiveX/RxJS/commit/9dd27d6))
* **Subscriber:** avoid implicit any ([08faaa9](https://github.com/ReactiveX/RxJS/commit/08faaa9))
* **bufferWhen:** onComplete of closings determine buffers ([5d28a38](https://github.com/ReactiveX/RxJS/commit/5d28a38))
* **fromEvent:** make selector argument optional in fromEvent static method ([71d90b4](https://github.com/ReactiveX/RxJS/commit/71d90b4))
* **skipUntil:** update skipUntil behavior with error, completion ([6f0d98f](https://github.com/ReactiveX/RxJS/commit/6f0d98f)), closes [#518](https://github.com/ReactiveX/RxJS/issues/518)
* **windowCount:** fix windowCount window opening times ([908ae56](https://github.com/ReactiveX/RxJS/commit/908ae56)), closes [#273](https://github.com/ReactiveX/RxJS/issues/273)

### Features

* **operator:** add debounce operator ([a1e652f](https://github.com/ReactiveX/RxJS/commit/a1e652f)), closes [#493](https://github.com/ReactiveX/RxJS/issues/493)
* **operator:** add debounceTime operator ([dd2ba40](https://github.com/ReactiveX/RxJS/commit/dd2ba40))

### Performance Improvements

* **ScalarObservable:** add fast-path for mapping scalar observables ([7b0d3dc](https://github.com/ReactiveX/RxJS/commit/7b0d3dc))
* **count:** fast-path for counting over scalars ([c35a120](https://github.com/ReactiveX/RxJS/commit/c35a120))
* **filter:** add fast-path for filtering scalar observables ([e2e8954](https://github.com/ReactiveX/RxJS/commit/e2e8954))
* **reduce:** add fast-path for reducing over scalar observables ([4c65136](https://github.com/ReactiveX/RxJS/commit/4c65136))
* **scan:** fast-path for scanning scalars ([0201b92](https://github.com/ReactiveX/RxJS/commit/0201b92))
* **skip:** fast-path for skip over scalar observable ([9b49936](https://github.com/ReactiveX/RxJS/commit/9b49936))
* **take:** add fast-path for take over scalars ([33053b1](https://github.com/ReactiveX/RxJS/commit/33053b1))



<a name="5.0.0-alpha.3"></a>
# [5.0.0-alpha.3](https://github.com/ReactiveX/RxJS/compare/5.0.0-alpha.2...5.0.0-alpha.3) (2015-10-13)


### Bug Fixes

* **Observable:** fix type signature of some static operators ([e5364de](https://github.com/ReactiveX/RxJS/commit/e5364de))
* **Subject.create:** ensure operator property not required for Observable subscription ([2259de2](https://github.com/ReactiveX/RxJS/commit/2259de2)), closes [#483](https://github.com/ReactiveX/RxJS/issues/483)
* **TestScheduler:** stop sorting actual results ([51db0b8](https://github.com/ReactiveX/RxJS/commit/51db0b8)), closes [#422](https://github.com/ReactiveX/RxJS/issues/422)
* **benchpress:** update benchpress dependencies and config ([8513eaa](https://github.com/ReactiveX/RxJS/commit/8513eaa)), closes [#348](https://github.com/ReactiveX/RxJS/issues/348)
* **buffer:** change behavior of buffer to more closely match RxJS 4 ([b66592d](https://github.com/ReactiveX/RxJS/commit/b66592d))
* **combineLatest:** fix type signature ([a3e6deb](https://github.com/ReactiveX/RxJS/commit/a3e6deb))
* **defer:** fix type signature ([11327b9](https://github.com/ReactiveX/RxJS/commit/11327b9))
* **empty:** fix type signature ([893cb7e](https://github.com/ReactiveX/RxJS/commit/893cb7e))
* **fromPromise:** fix type signature ([17415fa](https://github.com/ReactiveX/RxJS/commit/17415fa))
* **groupBy:** durationSelector cannot keep source alive ([57e4207](https://github.com/ReactiveX/RxJS/commit/57e4207))
* **groupBy:** fix bugs related to group resets ([23a7574](https://github.com/ReactiveX/RxJS/commit/23a7574))
* **groupBy:** fix bugs with groupBy ([86992c6](https://github.com/ReactiveX/RxJS/commit/86992c6))
* **interval:** fix signature type ([9c238c0](https://github.com/ReactiveX/RxJS/commit/9c238c0))
* **operator:** startWith operator accepts scheduler, multiple values ([d1d339a](https://github.com/ReactiveX/RxJS/commit/d1d339a))
* **operators:** reorder signature of resultSelectors ([fc1724d](https://github.com/ReactiveX/RxJS/commit/fc1724d))
* **range:** fix type signature ([9237d0b](https://github.com/ReactiveX/RxJS/commit/9237d0b))
* **timeout:** fix absolute timeout behavior ([8ec06cf](https://github.com/ReactiveX/RxJS/commit/8ec06cf))
* **timeout:** update behavior of timeout, timeoutWith ([16bd691](https://github.com/ReactiveX/RxJS/commit/16bd691))
* **timer:** fix type signature ([fffb96c](https://github.com/ReactiveX/RxJS/commit/fffb96c))
* **window:** handle closingNotifier errors/completes ([42beff1](https://github.com/ReactiveX/RxJS/commit/42beff1))

### Features

* **TestScheduler:** support unsubscription marbles ([ffb0bb9](https://github.com/ReactiveX/RxJS/commit/ffb0bb9))
* **count:** add predicate support in count() ([42d1add](https://github.com/ReactiveX/RxJS/commit/42d1add)), closes [#425](https://github.com/ReactiveX/RxJS/issues/425)
* **dematerialize:** add dematerialize operator ([0a8b074](https://github.com/ReactiveX/RxJS/commit/0a8b074)), closes [#475](https://github.com/ReactiveX/RxJS/issues/475)
* **do:** do will now handle an observer as an argument ([c1a4994](https://github.com/ReactiveX/RxJS/commit/c1a4994)), closes [#476](https://github.com/ReactiveX/RxJS/issues/476)
* **first:** add resultSelector ([3c20fcc](https://github.com/ReactiveX/RxJS/commit/3c20fcc)), closes [#417](https://github.com/ReactiveX/RxJS/issues/417)
* **last:** add resultSelector argument ([5a4896c](https://github.com/ReactiveX/RxJS/commit/5a4896c)), closes [#418](https://github.com/ReactiveX/RxJS/issues/418)
* **operator:** add every operator ([d11f32e](https://github.com/ReactiveX/RxJS/commit/d11f32e))
* **operator:** add timeInterval operator ([6cc0615](https://github.com/ReactiveX/RxJS/commit/6cc0615))
* **share:** add the share operator ([c36f2be](https://github.com/ReactiveX/RxJS/commit/c36f2be)), closes [#439](https://github.com/ReactiveX/RxJS/issues/439)
* **shareReplay:** add the shareReplay() operator ([65c84ea](https://github.com/ReactiveX/RxJS/commit/65c84ea))

### Performance Improvements

* **ReplaySubject:** remove unnecessary computation ([488ac2e](https://github.com/ReactiveX/RxJS/commit/488ac2e))


### BREAKING CHANGES

* **operators with resultSelectors** (mergeMap, concatMap, switchMap, etc):
The function signature of resultSelectors used to be (innerValue,
outerValue, innerIndex, outerIndex) but this commits changes it to
be (outerValue, innerValue, outerIndex, innerIndex), to match
signatures in RxJS 4.


<a name="5.0.0-alpha.2"></a>
# [5.0.0-alpha.2](https://github.com/ReactiveX/RxJS/compare/5.0.0-alpha.1...5.0.0-alpha.2) (2015-09-30)


### Bug Fixes

* **concat:** let observable concat instead of merge ([c17e832](https://github.com/ReactiveX/RxJS/commit/c17e832))

### Features

* **operator:** add find, findIndex operator ([7c6cc9d](https://github.com/ReactiveX/RxJS/commit/7c6cc9d))
* **operator:** add first operator ([274c233](https://github.com/ReactiveX/RxJS/commit/274c233))
* **operator:** add ignoreElements operator ([fe1a952](https://github.com/ReactiveX/RxJS/commit/fe1a952))
* **zip:** zip now supports never-ending iterables ([a5684ba](https://github.com/ReactiveX/RxJS/commit/a5684ba)), closes [#397](https://github.com/ReactiveX/RxJS/issues/397)



<a name="5.0.0-alpha.1"></a>
# [5.0.0-alpha.1](https://github.com/ReactiveX/RxJS/compare/0.0.0-prealpha.3...5.0.0-alpha.1) (2015-09-23)


### Bug Fixes

* **Promises:** escape promise error trap ([c69088a](https://github.com/ReactiveX/RxJS/commit/c69088a))
* **TestScheduler:** ensure TestScheduler subscribes to expectations before hot subjects ([b9b2ba5](https://github.com/ReactiveX/RxJS/commit/b9b2ba5))
* **TestScheduler:** properly schedule actions added dynamically ([069ede4](https://github.com/ReactiveX/RxJS/commit/069ede4))
* **buffer:** do not emit empty buffer when completes ([252fccb](https://github.com/ReactiveX/RxJS/commit/252fccb))
* **bufferTime:** inner intervals will now clean up properly ([4ef41b0](https://github.com/ReactiveX/RxJS/commit/4ef41b0))
* **expand:** Fix expand to stay open until the source Observable completes. ([20ef785](https://github.com/ReactiveX/RxJS/commit/20ef785))
* **expand:** fix expand operator to match Rx3 ([67f9623](https://github.com/ReactiveX/RxJS/commit/67f9623))
* **last:** emit value matches with predicate instead of result of predicate ([0f635ee](https://github.com/ReactiveX/RxJS/commit/0f635ee))
* **merge:** fix issues with async in merge ([7a15304](https://github.com/ReactiveX/RxJS/commit/7a15304))
* **mergeAll:** merge all will properly handle async observables ([43b63cc](https://github.com/ReactiveX/RxJS/commit/43b63cc))
* **package:** specify supported npm version ([f72e622](https://github.com/ReactiveX/RxJS/commit/f72e622))
* **switchAll:** switch all will properly handle async observables ([c2e2d29](https://github.com/ReactiveX/RxJS/commit/c2e2d29))
* **switchAll/switchLatest:** inner subscriptions should now properly unsub ([38a45f8](https://github.com/ReactiveX/RxJS/commit/38a45f8)), closes [#302](https://github.com/ReactiveX/RxJS/issues/302)

### Features

* **combineLatest:** supports promises, iterables, lowercase-o observables and Observables ([ce76e4e](https://github.com/ReactiveX/RxJS/commit/ce76e4e))
* **config:** add global configuration of Promise capability ([e7eb5d7](https://github.com/ReactiveX/RxJS/commit/e7eb5d7)), closes [#115](https://github.com/ReactiveX/RxJS/issues/115)
* **expand:** now handles promises, iterables and lowercase-o observables ([c5239e9](https://github.com/ReactiveX/RxJS/commit/c5239e9))
* **mergeAll:** now supports promises, iterables and lowercase-o observables ([4c16aa6](https://github.com/ReactiveX/RxJS/commit/4c16aa6))
* **operator:** add elementAt operator ([cd562c4](https://github.com/ReactiveX/RxJS/commit/cd562c4))
* **operator:** add isEmpty operator ([80f72c5](https://github.com/ReactiveX/RxJS/commit/80f72c5))
* **operator:** add last operator ([d841b11](https://github.com/ReactiveX/RxJS/commit/d841b11)), closes [#304](https://github.com/ReactiveX/RxJS/issues/304) [#306](https://github.com/ReactiveX/RxJS/issues/306)
* **operator:** add single operator ([49484a2](https://github.com/ReactiveX/RxJS/commit/49484a2))
* **switch:** add promise, iterable and array support ([24fdd34](https://github.com/ReactiveX/RxJS/commit/24fdd34))
* **withLatestFrom:** default array output, handle other types ([cb393dc](https://github.com/ReactiveX/RxJS/commit/cb393dc))
* **zip:** supports promises, iterables and lowercase-o observables ([d332a0e](https://github.com/ReactiveX/RxJS/commit/d332a0e))



<a name="0.0.0-prealpha.3"></a>
# [0.0.0-prealpha.3](https://github.com/ReactiveX/RxJS/compare/0.0.0-prealpha.2...0.0.0-prealpha.3) (2015-09-11)


### Bug Fixes

* **root:** use self as the root object when available ([0428a85](https://github.com/ReactiveX/RxJS/commit/0428a85))



<a name="0.0.0-prealpha.2"></a>
# [0.0.0-prealpha.2](https://github.com/ReactiveX/RxJS/compare/0.0.0-prealpha.1...0.0.0-prealpha.2) (2015-09-11)


### Bug Fixes

* **bufferCount:** set default value for skip argument, do not emit empty buffer at the end ([2c1a9dc](https://github.com/ReactiveX/RxJS/commit/2c1a9dc))
* **windowCount:** set default value for skip argument, do not emit empty buffer at the end ([a513dbb](https://github.com/ReactiveX/RxJS/commit/a513dbb))

### Features

* **Observable:** add static create method ([e0d27ba](https://github.com/ReactiveX/RxJS/commit/e0d27ba)), closes [#255](https://github.com/ReactiveX/RxJS/issues/255)
* **TestScheduler:** add TestScheduler ([b23daf1](https://github.com/ReactiveX/RxJS/commit/b23daf1)), closes [#270](https://github.com/ReactiveX/RxJS/issues/270)
* **VirtualTimeScheduler:** add VirtualTimeScheduler ([96f9386](https://github.com/ReactiveX/RxJS/commit/96f9386)), closes [#269](https://github.com/ReactiveX/RxJS/issues/269)
* **operator:** add sample and sampleTime ([9e62789](https://github.com/ReactiveX/RxJS/commit/9e62789)), closes [#178](https://github.com/ReactiveX/RxJS/issues/178)



<a name="0.0.0-prealpha.1"></a>
# [0.0.0-prealpha.1](https://github.com/ReactiveX/RxJS/compare/0441dea...0.0.0-prealpha.1) (2015-09-02)


### Bug Fixes

* **combineLatest:** check for limits higher than total observable count ([81e5dfb](https://github.com/ReactiveX/RxJS/commit/81e5dfb))
* **rx:** add hack to export global until better global build exists ([1a543b0](https://github.com/ReactiveX/RxJS/commit/1a543b0))
* **subscription-ref:** add setter for isDisposed ([6fe5427](https://github.com/ReactiveX/RxJS/commit/6fe5427))
* **take:** complete on limit reached ([801a711](https://github.com/ReactiveX/RxJS/commit/801a711))

### Features

* **benchpress:** add benchpress config and flatmap spec ([0441dea](https://github.com/ReactiveX/RxJS/commit/0441dea))
* **catch:** add catch operator, related to #141, closes #130 ([94b4c01](https://github.com/ReactiveX/RxJS/commit/94b4c01)), closes [#130](https://github.com/ReactiveX/RxJS/issues/130)
* **from:** let from handle any "observablesque" ([526d4c3](https://github.com/ReactiveX/RxJS/commit/526d4c3)), closes [#156](https://github.com/ReactiveX/RxJS/issues/156) [#236](https://github.com/ReactiveX/RxJS/issues/236)
* **index:** add index module which requires commonjs build ([379d2d1](https://github.com/ReactiveX/RxJS/commit/379d2d1)), closes [#117](https://github.com/ReactiveX/RxJS/issues/117)
* **observable:** add Observable.all (forkJoin) ([44a4ee1](https://github.com/ReactiveX/RxJS/commit/44a4ee1))
* **operator:** Add count operator. ([30dd894](https://github.com/ReactiveX/RxJS/commit/30dd894))
* **operator:** Add distinctUntilChanged and distinctUntilKeyChanged ([f9ba4da](https://github.com/ReactiveX/RxJS/commit/f9ba4da))
* **operator:** Add do operator. ([7d9b52b](https://github.com/ReactiveX/RxJS/commit/7d9b52b))
* **operator:** Add expand operator. ([47b178b](https://github.com/ReactiveX/RxJS/commit/47b178b))
* **operator:** Add minimal delay operator. ([7851885](https://github.com/ReactiveX/RxJS/commit/7851885))
* **operator:** add buffer operators: buffer, bufferWhen, bufferTime, bufferCount, and bufferTog ([9f8347f](https://github.com/ReactiveX/RxJS/commit/9f8347f)), closes [#207](https://github.com/ReactiveX/RxJS/issues/207)
* **operator:** add debounce ([f03adaf](https://github.com/ReactiveX/RxJS/commit/f03adaf)), closes [#193](https://github.com/ReactiveX/RxJS/issues/193)
* **operator:** add defaultIfEmpty ([c80688b](https://github.com/ReactiveX/RxJS/commit/c80688b))
* **operator:** add finally ([526e4c9](https://github.com/ReactiveX/RxJS/commit/526e4c9))
* **operator:** add fromEventPattern creator function ([1095d4c](https://github.com/ReactiveX/RxJS/commit/1095d4c))
* **operator:** add groupBy ([1e13aea](https://github.com/ReactiveX/RxJS/commit/1e13aea)), closes [#165](https://github.com/ReactiveX/RxJS/issues/165)
* **operator:** add materialize. closes #132 ([6d9f6ae](https://github.com/ReactiveX/RxJS/commit/6d9f6ae)), closes [#132](https://github.com/ReactiveX/RxJS/issues/132)
* **operator:** add publishBehavior operator and spec ([249ab8d](https://github.com/ReactiveX/RxJS/commit/249ab8d))
* **operator:** add publishReplay operator and spec ([a0c47d6](https://github.com/ReactiveX/RxJS/commit/a0c47d6))
* **operator:** add retry ([4451db5](https://github.com/ReactiveX/RxJS/commit/4451db5))
* **operator:** add retryWhen operator. closes #129 ([65eb50e](https://github.com/ReactiveX/RxJS/commit/65eb50e)), closes [#129](https://github.com/ReactiveX/RxJS/issues/129)
* **operator:** add skipUntil ([ef2620e](https://github.com/ReactiveX/RxJS/commit/ef2620e)), closes [#180](https://github.com/ReactiveX/RxJS/issues/180)
* **operator:** add throttle ([1d735b9](https://github.com/ReactiveX/RxJS/commit/1d735b9)), closes [#191](https://github.com/ReactiveX/RxJS/issues/191)
* **operator:** add timeout and timeoutWith ([bb440ad](https://github.com/ReactiveX/RxJS/commit/bb440ad)), closes [#244](https://github.com/ReactiveX/RxJS/issues/244)
* **operator:** add toPromise operator. closes #159 ([361a53b](https://github.com/ReactiveX/RxJS/commit/361a53b)), closes [#159](https://github.com/ReactiveX/RxJS/issues/159)
* **operator:** add window operators: window, windowWhen, windowTime, windowCount, windowToggle ([9f5d510](https://github.com/ReactiveX/RxJS/commit/9f5d510)), closes [#195](https://github.com/ReactiveX/RxJS/issues/195)
* **operator:** add withLatestFrom ([322218a](https://github.com/ReactiveX/RxJS/commit/322218a)), closes [#209](https://github.com/ReactiveX/RxJS/issues/209)
* **operator:** implement startWith(). ([1f36d99](https://github.com/ReactiveX/RxJS/commit/1f36d99))



