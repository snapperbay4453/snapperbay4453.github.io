---
title: 'DOM 비교'
tags: ['DOM']
---

# DOM 비교

DOM 비교(DOM Diffing)란, 현재 브라우저에 렌더링된 DOM과 앞으로 렌더링되어야 할 DOM 사이에서 차이가 있는 HTML 요소만을 잡아내는 과정입니다.

이를 이용하면, 브라우저에서 전체 DOM을 다시 렌더링하는 대신 오직 변경이 필요한 HTML 요소만을 렌더링하도록 할 수 있습니다. 이는 브라우저에서 DOM을 렌더링하기 위한 불필요한 연산 과정을 줄여주며, 결과적으로 성능 상 이점을 가져옵니다.

## DOM 매핑

## 두 개의 HTML 요소 간 비교

HTML 문서는 요소(Element)의 집합이지만, 좀 더 자세히 살펴보면 노드(Node)라고 불리는 자료형의 집합으로도 볼 수 있습니다. 노드는 HTML 요소 하나의 정보를 나누어 저장합니다.

노드는 주로 다음의 종류 중 하나에 속합니다. 각각의 종류는 고유의 nodeType 번호를 가집니다.

* 문서 노드(Document Node): nodeType 9. HTML 문서 자체를 나타내며, 자식으로 루트 요소를 가집니다.
* 요소 노드(Element Node): nodeType 1. HTML 문서를 구성하는 HTML 요소를 나타내는 노드입니다.
* 속성 노드(Attribute Node): nodeType 2. HTML 요소의 속성을 저장하는 노드입니다.
* 텍스트 노드(Text Node): nodeType 3. HTML 요소가 가지는 텍스트 콘텐츠를 나타내는 노드입니다.
* 주석 노드(Comment Node): nodeType 8. HTML 문서의 주석을 나타내는 노드입니다.

그러므로 하나의 요소 노드와 그 속성/텍스트 노드에 대한 정보를 알아내여 별도의 자료구조에 저장하면, 추후 직접 DOM에 접근하지 않고도 두 HTML 요소를 비교할 수 있을 것입니다.

```javascript
const domElement = {
  node: null, // DOM에 위치한 실제 Node
  type: null, // DOM 요소의 타입
  tag: null, // DOM 요소의 HTML 태그
  attributes: [], // DOM 요소의 속성 리스트
  textContent: null, // DOM 요소가 가지는 텍스트 콘텐츠
};
```

DOM 요소의 타입은 각 노드의 nodeType 프로퍼티를 이용해 판별할 수 있습니다.

```javascript
const getElementType = (node) => {
  switch(node?.nodeType) {
    case 1: return 'element';
    case 2: return 'attributes';
    case 3: return 'text';
    case 8: return 'comment';
    case 9: return 'document';
    default: return null;
  }
};
```

DOM 요소의 태그는 각 노드의 tagName 프로퍼티를 이용해 얻을 수 있습니다. 해당 노드의 nodeType이 1일 때, 즉 요소 노드일 경우에만 의미가 있겠죠.

```javascript
const getElementTag = (node) => {
  return node?.nodeType === 1
  ? node.tagName.toLowerCase()
  : null;
};
```

DOM 요소의 속성 리스트는 각 노드의 attributes 프로퍼티를 이용해 얻을 수 있습니다. 마찬가지로 해당 노드의 nodeType이 1일 때, 즉 요소 노드일 경우에만 의미가 있겠죠.

유의할 점은 attributes의 순회 방식입니다. node.attributes는 NamedNodeMap라는 유사배열(Array-like) 객체입니다. 따라서 바로 map 메서드를 사용할 수 없습니다. 대신 아래와 같이 배열로 변환한 후 사용할 수 있죠.

```javascript
const getElementTextContent = (node) => {
  return node?.nodeType === 1
  ? Array.from(node?.attributes ?? [])
    .map(attribute => ({
      name: attribute.name,
      value: attribute.value,
    }))
  : [];
};
```

DOM 요소의 텍스트 콘텐츠는 각 노드의 textContent 프로퍼티를 이용해 얻을 수 있습니다.

```javascript
const getElementTextContent = (node) => {
  return node?.textContent ?? null;
};
```

## DOM 순회

DOM은 루트 Element를 기준으로 하는 트리 형태의 구조를 가집니다. 따라서 두 개의 DOM을 전체적으로 비교하려면, DOM 하나의 루트 Element를 기준으로 하여 전체 트리를 순회하는 과정이 필요합니다.

DOM 요소의 자식 노드는 각 노드의 childNodes 프로퍼티를 이용해 얻을 수 있습니다.

```javascript
const getElementChild = (node) => {
  return Array.from(node?.childNodes ?? []);
};
```

## 참조

* [https://gomakethings.com/dom-diffing-with-vanilla-js-part-1/](https://gomakethings.com/dom-diffing-with-vanilla-js-part-1/)
* [https://gomakethings.com/dom-diffing-with-vanilla-js-part-2/](https://gomakethings.com/dom-diffing-with-vanilla-js-part-2/)
