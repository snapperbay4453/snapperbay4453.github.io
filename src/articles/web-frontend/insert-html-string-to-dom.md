---
title: HTML 문자열을 DOM에 삽입하는 방법
tags: markdown tag01 tag02
---

# HTML 문자열을 DOM에 삽입하는 방법

## 방법 1. innerHTML

간단한 방법입니다.
Document에 임의의 div 노드를 생성한 후, 해당 노드에 HTML 텍스트를 주입합니다.

```javascript
const insertStringToHTML = (targetElement, str) => {
  targetElement.innerHTML = str;
};

const targetNode = document.createElement('div');
insertStringToHTML(targetNode, '<span>inserted!</span>');
```

## 방법 2. DOMParser.parseFromString

DOMParser를 이용하는 방법입니다.

```javascript
const insertStringToHTML = (targetElement, str) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(str, 'text/html');
  targetElement.appendChild(doc.body);
};

const targetNode = document.createElement('div');
insertStringToHTML(targetNode, '<span>inserted!</span>');
```

## 여러 개의 노드를 추가할 때: createDocumentFragment

DocumentFragment는 Document에 연결되지 않은 별도의 DOM 트리입니다.
Document에 연결되지 않으므로, 하위 노드를 추가/수정/제거하여도 Document의 추가적인 렌더링을 방지할 수 있습니다.

```javascript
const fragment = document.createDocumentFragment();

for (let i = 0; i < 200; i++) {
  const element = document.createElement('div');
  element.innerText = 'No. ' + i;
  fragment.appendChild(element);
}

const targetNode = document.createElement('div');
targetNode.appendChild(fragment);
```

## 주의

XSS를 주의하세요.

```javascript
const insertStringToHTML = (targetElement, str) => {
  targetElement.innerHTML = str;
};

const targetNode = document.createElement('div');
insertStringToHTML(targetNode, `<img src="" onerror="alert('xss');">`);
```

[Sanitizer API](https://wicg.github.io/sanitizer-api/), [DOMPurify](https://github.com/cure53/DOMPurify) 등을 사용하여 XSS 위협을 방지해야 합니다.


## 참조

* [https://gomakethings.com/converting-a-string-into-markup-with-vanilla-js/](https://gomakethings.com/converting-a-string-into-markup-with-vanilla-js/)
* [https://coderwall.com/p/o9ws2g/why-you-should-always-append-dom-elements-using-documentfragments](https://coderwall.com/p/o9ws2g/why-you-should-always-append-dom-elements-using-documentfragments)
* [https://ui.toast.com/weekly-pick/ko_2021124](https://ui.toast.com/weekly-pick/ko_2021124)
