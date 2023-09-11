---
title: '일급 함수'
tags: ['객체', '함수']
---

# 일급 함수

## 조건

일급 함수(First-class function)란, 일급 객체와 같이 다룰 수 있는 함수를 뜻합니다.

일급 객체에 대해서는 여러 설명이 존재하지만, [로빈 포플스톤(Robin Popplestone)](https://en.wikipedia.org/wiki/Robin_Popplestone)이 내린 정의에 따르면 일급 객체를 구성하는 요소는 다음의 기본적인 권리(Fundamental rights)를 가집니다.

1. 함수의 실제 매개변수가 될 수 있습니다.
2. 함수의 반환 값이 될 수 있습니다.
3. 할당 명령문의 대상이 될 수 있습니다.
4. 동일 비교의 대상이 될 수 있습니다.

즉, 함수에 매개변수로 넘기기, 수정하기, 변수에 대입하기와 같은 통상적인 연산을 지원할 때, 해당 객체는 일급 객체라고 할 수 있습니다.

통용 범위를 자바스크립트로 한정했을 때, [MDN의 설명](https://developer.mozilla.org/ko/docs/Glossary/First-class_Function)에 따르면 일급 함수는 일반적으로 다음의 정의를 따릅니다.

1. 다른 함수들에 전달인자로 제공될 수 있습니다.
2. 다른 함수의 결과로서 반환될 수 있습니다.
3. 변수, 그리고 배열 등 자료구조에 할당할 수 있습니다.

이를 통해, 일급 함수는 마치 통상적인 자료형과 마찬가지로 다루어질 수 있다는 것을 느낄 수 있습니다. 물론 일급 함수는 함수에 속하므로, 다른 자료형과 다르게 호출이 가능합니다.

## 응용

일급 함수의 특징을 응용하여, 다음의 패턴을 적용할 수 있습니다.

### 콜백 함수와 고차 함수

콜백 함수(Callback function)는 매개변수를 통해 다른 함수의 내부로 전달되는 함수입니다.

고차 함수(High-order function)는 매개변수를 통해 콜백 함수를 전달받는 함수입니다. 자바스크립트 자체에 내장된 고차 함수로는 map, filter, reduce 등이 존재합니다.

콜백 함수는 고차 함수에 의해 호출되며, 내부 조건절에 따라 여러 번 실행될 수도, 단 한 번도 실행되지 않을 수도 있습니다.

### 커링

커링(Curring)은 고차 함수의 일종으로, 여러 개의 인수를 갖는 함수를 변형하여 단일 인수를 갖는 함수들의 함수열로 바꾸는 기법입니다. [해스켈 커리(Haskell Curry)](https://en.wikipedia.org/wiki/Haskell_Curry)의 이름을 따와 명명되었습니다.

아래의 코드는 커링을 적용한 간단한 산술 연산 함수입니다.

```javascript
function curry(fn) {
  return function getLeftHandSide(a) {
    return function getRightHandSide(b) {
      return fn(a, b);
    };
  };
}

const sum = (a, b) => a + b;
const multiply = (a, b) => a * b;

const curriedSum = curry(sum);
const curriedMultiply = curry(multiply);

console.log(curriedSum(2)(3)); // 5가 반환됩니다.
console.log(curriedMultiply(2)(3)); // 6이 반환됩니다.
```

위 예시에서, curriedSum 및 curriedMultiply는 아래의 과정을 따릅니다.

1. 함수를 처음으로 실행하여 getLeftHandSide 함수를 반환합니다.
2. 이전 단계에서 반환된 함수를 실행하여 클로저의 변수 a에 좌항을 저장한 후, getRightHandSide 함수를 반환합니다.
3. 이전 단계에서 반환된 함수를 실행하여 클로저의 변수 b에 우항을 저장한 후, 함수 fn을 실행하여 연산 결과를 반환합니다.

범용적으로 사용할 수 있도록 만들어진 커링 함수는 아래와 같이 구현될 수 있습니다.

```javascript
// https://gist.github.com/spoike/697b34a14896df4f4b8bdd9d4a89bbb1
function curry(fn) {
  let accummulatedArgs = []; // 현재 커링 단계까지 받은 파라미터의 개수입니다.
  const fnArityLength = fn.length; // fn 함수의 실행에 필요한 파라미터의 최소 개수입니다.
  function curried() {
    accummulatedArgs = [...accummulatedArgs, ...Array.from(arguments)];
     /*
     ** accummulatedArgs 변수에 fn 함수의 실행에 필요한 개수 이상의 파라미터를 모았을 경우,
     ** fn 함수에 accummulatedArgs를 인자로 넘긴 후 실행합니다.
     */
    if (fnArityLength <= accummulatedArgs.length) return fn.apply(null, accummulatedArgs);
     /*
     ** accummulatedArgs 변수에 fn 함수의 실행에 필요한 개수 미만의 파라미터를 모았을 경우,
     ** curried 함수를 반환하여 추가적인 파라미터를 받습니다.
     */
    else return curried;
  }
  return curried;
}
```

## 참조

* [https://en.wikipedia.org/wiki/First-class_citizen](https://en.wikipedia.org/wiki/First-class_citizen)
* [https://developer.mozilla.org/ko/docs/Glossary/First-class_Function](https://developer.mozilla.org/ko/docs/Glossary/First-class_Function)
* [https://en.wikipedia.org/wiki/Currying](https://en.wikipedia.org/wiki/Currying)
* [https://zetcode.com/javascript/currying/](https://zetcode.com/javascript/currying/)
* [https://gist.github.com/spoike/697b34a14896df4f4b8bdd9d4a89bbb1](https://gist.github.com/spoike/697b34a14896df4f4b8bdd9d4a89bbb1)
