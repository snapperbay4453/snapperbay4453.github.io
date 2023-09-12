---
title: 'Arguments 객체'
tags: ['객체']
---

# Arguments 객체

Arguments 객체는 함수에 전달된 인수에 해당하는 유사배열 객체입니다.

```javascript
const print = () => {
	console.log(arguments);
	console.log(Array.from(arguments));
};
```

arguments 객체는 다음의 특징을 가집니다.

* 함수 내에서 arguments 변수를 통해 접근할 수 있습니다.
* callee 프로퍼티를 통해, 현재 실행 중인 함수를 반환받을 수 있습니다.
* 객체 내의 인수를 재할당할 수 있습니다.

화살표 함수에서는 arguments 변수를 사용할 수 없습니다. 대신 Spread 연산자를 활용하여 arguments를 흉내낼 수 있습니다. 이 경우 Arguments 객체 대신 실제 리스트가 반환됩니다.

```javascript
const print = (...rest) => {
	console.log(rest);
};
```

## 참조

* [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/arguments](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/arguments)
