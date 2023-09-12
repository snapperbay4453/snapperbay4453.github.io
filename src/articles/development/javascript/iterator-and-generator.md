---
title: '이터레이터 및 제너레이터'
tags: []
---

# 이터레이터 및 제너레이터

## 이터러블

이터러블(Iterable, 순회 가능)은 객체의 값을 반복 순회할 수 있는 자격을 가진 객체를 뜻합니다. 즉, 이터러블한 객체는 곧 반복 가능한 객체입니다.

자바스크립트에서 객체가 이터러블이 되기 위해서는 다음 조건을 만족해야 합니다.

1. 객체에 Symbol.iterator 키가 있는 속성이 있어야 합니다. 이는 다시 말해 @@iterator 메서드를 구현하는 것을 의미합니다.

## 이터레이터

자바스크립트에서, { value, done } 객체를 리턴하는 next 메서드를 구현한 객체는 이터레이터(Iterator, 순회자)로 간주할 수 있습니다. 해당 객체를 next 메서드로 호출하게 되면 현재 순회 중인 위치의 값 및 순회 종료 여부를 알 수 있습니다.

아래 코드는 이터레이터를 만드는 예시로, 이터레이터의 선택적 메서드인 return 및 throw가 추가적으로 있습니다.

```javascript
const BaseIterator = {
  [Symbol.iterator]() { return this; }, // Required
  next() { /*...*/ }, // Required
  return(value) { /*...*/ }, // Optional
  throw(exception) { /*...*/ }, // Optional
};
```

객체를 for...of 문으로 순회하거나, 전개 및 구조분해 연산을 사용하기 위해서는 해당 객체가 이터러블해야 합니다.

## 제너레이터

제너레이터(Generator, 생성자)는 이터레이터를 사용해 실행을 제어하는 함수입니다.

제너레이터 함수는 function 대신 function* 키워드를 사용합니다. 화살표 함수에서는 제너레이터 기능을 사용할 수 없으나, [이를 가능케 하려는 움직임](https://github.com/tc39/proposal-generator-arrow-functions)이 존재합니다.

일반적으로, 함수는 호출된 후 return 문을 통해 값을 반환하기 전까지는 자기 자신이 흐름의 제어권을 가집니다. 하지만 제너레이터 함수를 사용하게 되면 다음의 변화가 생깁니다.

* yield 문을 통해 이 흐름을 호출자에게 되돌려줄 수 있습니다. 이 경우, 호출자는 이터레이터 객체를 반환받습니다.
* 호출자는 흐름을 되돌려받을 때 반환받은 이터레이터 객체의 next 메서드를 사용함으로써, 피호출자에게 추가적인 값을 전달할 수 있습니다.

이를 통해, 호출자 및 피호출자 간의 양방향 통신이 가능해집니다.

```javascript
function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let n = 0;
  for (let i = start; i < end; i += step) {
    n++;
    yield i;
  }
  return n;
}
```

## 비동기로 사용하기

자바스크립트에는 비동기 흐름에서 사용할 수 있는, 비동기 이터러블 및 비동기 이터레이터라는 별도의 프로토콜 쌍이 있습니다.

자바스크립트에서 객체가 비동기 이터러블이 되기 위해서는 다음 조건을 만족해야 합니다. 보다시피, Symbol.iterator 대신 Symbol.asyncIterator를 구현해야 합니다.

1. 객체에 Symbol.asyncIterator 키가 있는 속성이 있어야 합니다. 이는 다시 말해 @@asyncIterator 메서드를 구현하는 것을 의미합니다.

async 이터레이터는 일반 이터레이터와 비교하여 다음의 차이점을 가집니다.

* next()가 반환하는 값이 Promise입니다.
* 반복문으로 for...of	대신 for await...of문을 사용합니다.

제너레이터에서 async 이터레이터를 활용하기 위해서는, 일반 함수와 마찬가지로 function* 키워드 앞에 async 키워드를 추가하면 됩니다.

```javascript
// https://ko.javascript.info/async-iterators-generators

async function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    yield i;
  }
}

(async () => {
  let generator = generateSequence(1, 5);
  for await (let value of generator) {
    console.log(value); // 1, 2, 3, 4, 5
  }
})();
```

## 참조

* [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Iteration_protocols](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Iteration_protocols)
* [https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Iterators_and_Generators](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Iterators_and_Generators)
* [https://ko.javascript.info/async-iterators-generators](https://ko.javascript.info/async-iterators-generators)
