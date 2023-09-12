---
title: 'Go, Pipe 그리고 Curry'
tags: ['가독성']
---

# Go, Pipe 그리고 Curry

Go, Pipe 그리고 Curry 함수는, 함수를 값으로 다루는(Treat function as a value) 대표적인 고차 함수입니다. 이러한 함수를 사용함으로써, 코드의 전반적인 가독성을 높일 수 있습니다.

## Go

go 함수는 초기값 및 함수들을 받아 연산한 후 값을 산출해내는 함수입니다.
첫번째 인자는 시작이 되는 값을 받습니다. 그리고 나머지 인자는 함수를 받습니다.

이를 통해 첫번째 인자가 나머지 인자의 함수들을 차례로 통과함으로써 최종적인 값이 반환됩니다. 이 과정을 파이프라이닝(Pipelining)이라고 합니다.

```javascript
// https://n-log.tistory.com/38

const go = (...args) => args.reduce((rhs, fn) => fn(rhs));

go(
  0, 
  rhs => rhs + 1, 
  rhs => rhs + 10, 
  rhs => rhs + 100, 
  console.log	// 111
);
```

## Pipe

pipe 함수는 함수들을 받아 이를 합성하는 함수입니다.

인자로 받은 함수들은 합성되어 하나의 함수로 반환되며, 이를 실행하는 것은 인자로 받았던 함수들을 차례로 실행하는 것과 같습니다. go 함수가 파이프라이닝된 값을 반환한다면, pipe 함수는 파이프라이닝에 사용되는 파이프 자체를 반환한다고 생각할 수 있습니다.

```javascript
// https://n-log.tistory.com/38

const pipe = (fn, ...rest) => (...args) => go(fn(...args), ...rest);

// 또는 아래와 같이 go 함수를 사용하여 구현할 수도 있습니다.
// const pipe = (...rest) => (rhs) => go(rhs, ...rest);

const fn = pipe(
  (lhs, rhs) => lhs + rhs,
  rhs => rhs + 10,
  rhs => rhs + 100
);

console.log(fn(0, 1));	// 111
```

## Curry

curry 함수는 여러 개의 파라미터를 필요로 하는 함수에 대해, 필요한 파라미터의 수보다 적은 수의 파라미터를 인자로 받으면 추후에 누락된 파라미터를 인자로 받도록 하는 함수입니다. [해스켈 커리(Haskell Curry)](https://en.wikipedia.org/wiki/Haskell_Curry)의 이름을 따와 명명되었습니다.

curry 함수를 활용하는 커링(Curring)은 여러 개의 인수를 갖는 함수를 변형하여 단일 인수를 갖는 함수들의 함수열로 바꾸는 기법입니다.

```javascript
// https://n-log.tistory.com/38

const curry = f => (rhs, ...rest) => (rest.length ? f(rhs, ...rest) : (...rest) => f(rhs, ...rest));

const multiply = curry((lhs, rhs) => lhs * rhs);
console.log(multiply(3)(2));	// 6
```

## 참조

* [https://velog.io/@pjh1011409/JavaScript-go-pipe-currying](https://velog.io/@pjh1011409/JavaScript-go-pipe-currying)
* [https://n-log.tistory.com/38](https://n-log.tistory.com/38)
* [https://en.wikipedia.org/wiki/Currying](https://en.wikipedia.org/wiki/Currying)
* [https://zetcode.com/javascript/currying/](https://zetcode.com/javascript/currying/)
* [https://gist.github.com/spoike/697b34a14896df4f4b8bdd9d4a89bbb1](https://gist.github.com/spoike/697b34a14896df4f4b8bdd9d4a89bbb1)
