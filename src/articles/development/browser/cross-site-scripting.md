---
title: 'Cross-Site Scripting(XSS)'
tags: ['보안']
---

# Cross-Site Scripting(XSS)

```html
<img src="#" onerror="alert('XSS')">
```

Cross-Site Scripting(XSS)이란, 관리자 권한이 없는 공격자가 웹 사이트에 악성 스크립트를 삽입하여, 이것이 실행되도록 유도하는 공격입니다. 주로 사용자의 입력 값에 대한 검증이 미흡할 때 피해가 발생하며, 이와 비슷한 공격으로 SQL Injection이 있습니다.

XSS를 통해 공격자는 다음의 피해를 발생시킬 수 있습니다.

* 쿠키 및 세션 스토리지에 포함된 정보를 탈취할 수 있습니다.
* keylogger 스크립트를 통해, 사용자의 키보드 입력을 탈취할 수 있습니다.
* 악성 프로그램의 다운로드 및 실행을 유도할 수 있습니다.
* 악성 페이지를 노출시키거나, 표시되는 HTML 자체에 수정을 가할 수 있습니다.

## XSS의 종류

### 저장형 XSS

저장형(Stored) XSS, 또는 지속형(Persistent) XSS로 불리는 이 공격 종류는, 브라우저를 통해 데이터베이스에 악성 스크립트를 저장함으로써 수행됩니다. 저장된 악성 스크립트는 추후 Front-end에서 해당 정보를 열람할 때 실행됩니다.

자유게시판 등 사용자들의 열람이 많은 곳에 이 공격을 가하면, 한 번의 공격 성공을 통해 수많은 사용자들에게 피해를 입힐 수 있습니다.

### 반사형 XSS
반사형(Reflected XSS)는, 사용자가 입력한 값을 그대로 포함한 응답 값을 서버에서 되돌려주는 부분에서 발생합니다. 공격자는 원본 URL을 조작하여 악성 스크립트를 포함시킨 별도의 링크를 사용자에게 보여주고, 사용자가 이를 누르게 되면 서버로부터 되돌려받은 악성 스크립트가 실행됩니다.

### DOM 기반 XSS
DOM 기반(DOM based) XSS는, 브라우저에서 HTML을 해석할 때 악성 스크립트가 DOM의 일부로 구성됨으로써 추가적으로 수행되는 공격 종류입니다. 서버와의 상호작용 없이 브라우저 상에서 DOM에 수정을 가하므로, 서버에서 탐지가 어렵다는 특징이 있습니다.


## XSS에 대한 대응법

XSS 공격을 방어하기 위해서는, 입력 값에 악성 스크립트가 삽입되는 것을 방지함과 동시에, 출력 시 악성 스크립트가 동작하지 않도록 무효화하는 작업이 필요합니다.

* 목적에 맞게 입력 값의 길이를 제한하여, 불필요한 스크립트 입력 가능성을 배제합니다.
* HTML 태그에 사용되는 기호는 엔티티 코드(Entity Code)로 치환합니다.

관련 API 및 라이브러리로는 [HTML Sanitizer API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Sanitizer_API), [DOMPurify](https://github.com/cure53/DOMPurify) 등이 있습니다.


## 참조

* [https://blog.naver.com/sk_shieldus/222902533919](https://blog.naver.com/sk_shieldus/222902533919)
