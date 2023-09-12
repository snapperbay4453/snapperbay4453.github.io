---
title: '지연 평가'
tags: ['최적화']
---

# 지연 평가

지연 평가(Lazy evaluation)는 값을 실제로 사용하기 직전까지 해당 값에 대한 평가(Evaluation)를 미루는 방법입니다. 반대로, 값이 선언되는 즉시 평가되는 것을 엄격한 평가(Strict evaluation)이라고 합니다.

지연 평가를 통해 불필요한 계산을 건너뜀으로써, 더욱 빠르게 연산 결과를 얻을 수 있습니다.

아래 예시는 0부터 시작하는 수열을 반환하는 range 함수를 제너레이터를 활용해 구현함으로써, 값이 지연되어 평가되는 것을 확인합니다.

```javascript
// https://velog.io/@younoah/functional-js-%EC%A7%80%EC%97%B0%ED%8F%89%EA%B0%80

const range = length => {
  let i = -1;
  let res = [];
  while (++i < length) {
    res.push(i);
  }
  return res;
};

const Lazy = {};
Lazy.range = function* (length) {
  let i = -1;
  while (++i < length) {
    yield i;
  }
};

var list = range(5);
console.log(list); // [0, 1, 2, 3, 4]
console.log(reduce(add, list)); // 10

var lazyList = Lazy.range(5);
console.log(lazyList); // L.range {<suspended>}
console.log(reduce(add, lazyList)); // 10
```

## 참조

* [https://en.wikipedia.org/wiki/Lazy_evaluation](https://en.wikipedia.org/wiki/Lazy_evaluation)
* [https://armadillo-dev.github.io/javascript/whit-is-lazy-evaluation/](https://armadillo-dev.github.io/javascript/whit-is-lazy-evaluation/)
