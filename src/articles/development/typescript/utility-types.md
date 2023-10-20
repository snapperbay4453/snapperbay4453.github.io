---
title: '유틸리티 타입'
tags: ['제너릭']
---

# 유틸리티 타입

TypeScript는 공통 타입 변환을 용이하게 하기 위해 몇 가지 유틸리티 타입을 제공합니다.

## 자주 사용하는 유틸리티 타입

### Partial<TYPE>

TYPE의 모든 프로퍼티를 선택적으로 변경한 타입(subset)을 반환합니다. 모든 프로퍼티는 optional로 취급되며, 모든 프로퍼티를 갖지 않는 빈 객체도 허용됩니다.

### Required<TYPE>

TYPE의 모든 프로퍼티를 필수 입력으로 변경한 타입을 반환합니다. 하나의 프로퍼티라도 누락되면 에러가 발생합니다.

### Readonly<TYPE>

TYPE의 모든 프로퍼티를 읽기 전용으로 변경한 타입(readonly)을 반환합니다.

### Record<KEY, TYPE>

KEY를 속성으로, TYPE를 그 속성값의 타입으로 지정하는 새로운 타입을 반환합니다.

### Pick<TYPE, KEY>

TYPE에서 KEY로 속성을 선택한 새로운 타입을 반환합니다.

### Omit<TYPE, KEY>

TYPE에서 KEY로 속성을 생략하고 나머지를 선택한 새로운 타입을 반환합니다.

### NonNullable<TYPE>

T 타입에서 Nullable한 타입인 null 및 undefined를 제외한 타입을 반환합니다.

### Extract<T, U>

T 타입에서 U 타입과 공통되는 모든 프로퍼티를 타입으로 추출하여 반환합니다. (T > U일 때, T ∩ U)

### Exclude<T, U>

T 타입에서 U 타입과 공통되는 프로퍼티를 제외한 나머지 프로퍼티를 타입으로 추출하여 반환합니다. (T - U)

### Awaited<TYPE>

Promise<?> 형태의 TYPE을 전달받아 해당 Promise가 반환하는 리턴값의 타입을 반환합니다. await 키워드와 유사한 기능을 담당합니다.

더 많은 유틸리티 타입은 [typescript-kr.github.io](https://typescript-kr.github.io/pages/utility-types.html)를 참조하세요.

## 참조

* [https://typescript-kr.github.io/pages/utility-types.html](https://typescript-kr.github.io/pages/utility-types.html)
* [https://guiyomi.tistory.com/137](https://guiyomi.tistory.com/137)
