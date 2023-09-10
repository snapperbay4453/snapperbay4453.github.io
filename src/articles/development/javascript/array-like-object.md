---
title: 유사배열 객체
tags: markdown tag01 tag02
---

# 유사배열 객체

자바스크립트에서는, 배열과 같이 길이를 구할 수 있지만 배열은 아닌 객체를 만들 수 있습니다. 바로 유사배열 객체(Array-like Object)입니다. 대표적으로 문자열이 유사배열 객체에 속합니다.

## 조건

유사배열 객체는 다음의 조건을 충족하는 객체입니다.

1. length 프로퍼티를 가지고 있어야 합니다.
2. 프로퍼티는 인덱스 값으로 접근이 가능해야 합니다.

## 배열로의 변환

유사배열 객체는 다음의 문제점을 가집니다.
* 일반적인 배열이 가지는 여러 유용한 메서드를 자동으로 지원하지 않습니다.
* 인덱스 값이 0부터 시작하여 1씩 증가하는 통상적인 인덱싱 규칙을 보장하지 않습니다.
* 별도로 구현하지 않는 한 length 프로퍼티에 대한 자동 업데이트를 보장하지 않습니다.

따라서 유사배열 객체 자체를 수정하지 않는 한, 일반적인 배열로 변환하여 사용하는 것이 편리하고 안전합니다.

유사배열 객체를 일반적인 배열로 변환하는 방법은 여러 가지가 있지만, 대표적으로 아래의 방법이 존재합니다.

### for...of 반복문 사용

이 방법은 유사배열 객체가 Symbol.iterator()를 구현해야 사용 가능합니다.

```javascript
const convertToArray = (obj) => {
  return [...obj];
}
```

### Spread 연산자 사용

이 방법은 유사배열 객체가 Symbol.iterator()를 구현해야 사용 가능합니다.

```javascript
const convertToArray = (obj) => {
  let result = [];
  for(const elem of obj) {
    result.push(elem);
  };
  return result;
}
```

### Array.from() 메서드 사용

```javascript
const convertToArray = (obj) => {
  return Array.from(obj);
}
```

### Object.values() 메서드 사용

```javascript
const convertToArray = (obj) => {
  return Object.values(obj);
}
```

## 참조

* [https://daily.dev/blog/why-do-you-need-to-know-about-array-like-objects](https://daily.dev/blog/why-do-you-need-to-know-about-array-like-objects)
* [https://www.capscode.in/blog/what-is-array-like-object-in-javascript](https://www.capscode.in/blog/what-is-array-like-object-in-javascripts)
* [https://www.oreilly.com/library/view/javascript-the-definitive/9781449393854/ch07s11.html](https://www.oreilly.com/library/view/javascript-the-definitive/9781449393854/ch07s11.html)
