---
title: '중요 렌더링 경로'
tags: ['DOM']
---

# 중요 렌더링 경로

중요 렌더링 경로(Critical Rendering Path, CRP)는 브라우저가 서버로부터 HTML 응답을 받은 후, 이를 이용하여 화면을 그려내기 위해 진행하는 일련의 과정입니다.

## 렌더링 순서

### DOM 및 CSSOM 생성

서버로부터 반환되는 HTML 문서 자체는 텍스트일 뿐으로, 이를 실제 사용 가능한 트리 구조의 생성이 필요합니다. 이러한 과정을 HTML 파싱(HTML Parsing)이라고 합니다.

이 과정에서 HTML 파서는 DOM 트리를 생성하고, CSS 파서는 CSSOM 트리를 생성합니다. 만일 style 및 script 태그를 읽었을 경우, 트리 생성이 중단되고 해당 요소에 대한 다운로드 및 실행을 진행합니다.

script 태그에 HTML5에서부터 추가된 async 또는 defer 속성이 추가되었을 경우, HTML 문서의 파싱과 동시에 스크립트 다운로드가 진행됩니다.

* async 속성은 다운로드가 완료된 즉시 HTML 문서 파싱을 중단한 후 실행하도록 합니다.
* defer 속성은 다운로드 완료 후에도 HTML 문서 파싱이 중단되지 않으며, DOM 생성이 완료된 직후 스크립트가 실행되도록 합니다. 여러 스크립트 사이에서 태그 순서대로 실행 순서가 보장됩니다.

### 렌더 트리 생성

DOM 및 CSSOM은 결합되어 렌더 트리(Render Tree)가 됩니다. 스타일 정보가 설정되어 있으며, 실제 화면에 표현되는 노드들로만 구성됩니다. 따라서 이 과정에서 display: none 속성 등을 가진 노드는 렌더 트리에서 제외됩니다. 단, 공간은 차지하고 요소가 보이지 않는 visibility: invisible 속성 등을 가진 노드는 렌더 트리에 포함됩니다.

### 레이아웃

렌더 트리가 생성된 후, 브라우저는 이를 이용하여 뷰포트 내에 각각의 노드가 어느 위치에서 어느 정도의 크기를 가지는지 계산합니다. 이 과정에서 em, rem, vh, vw 등의 상대적 단위는 px 단위로 변환됩니다.

### 페인트

레이아웃 계산이 완료되면, 브라우저는 뷰포트에 노드를 그려내기 시작합니다.

## 렌더링 이후 순서

### 리플로우

렌더링이 완료된 후에도 HTML 요소의 크기 및 위치 등 레이아웃이 수정될 수 있습니다. 이러할 경우 브라우저는 해당 노드 및 그 영향을 받는 노드에 대하여 레이아웃 과정을 다시 수행합니다.

### 리페인트

리플로우가 완료되거나, 렌더링 완료 후 레이아웃에 영향이 없는 스타일 속성이 변경될 경우에는 해당 노드에 대하여 페인트 과정을 다시 수행합니다.

## 참조

* [https://hangem-study.readthedocs.io/en/latest/front_interview/browser-rendering/](https://hangem-study.readthedocs.io/en/latest/front_interview/browser-rendering/)
* [https://ko.javascript.info/script-async-defer](https://ko.javascript.info/script-async-defer)
