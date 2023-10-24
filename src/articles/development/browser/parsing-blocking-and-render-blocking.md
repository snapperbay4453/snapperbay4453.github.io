---
title: '[작성중] 파싱 블로킹 및 렌더 블로킹'
tags: ['최적화']
---

# 파싱 블로킹 및 렌더 블로킹

## 파싱 블로킹

HTML 문서의 파싱이 일시 정지되는 경우입니다.

### script 태그

브라우저의 렌더링 엔진이 HTML 문서 파싱 도중 script 태그를 읽을 경우, 속성에 따라 파싱 블로킹이 발생할 수 있습니다.

* async: 해당 스크립트의 다운로드를 시작함과 동시에 HTML 문서 파싱을 이어나갑니다. 다운로드가 끝나면 HTML 문서 파싱이 일시 정지되며, 스크립트가 실행됩니다.
* defer: 해당 스크립트의 다운로드를 시작함과 동시에 HTML 문서 파싱을 이어나갑니다. 다운로드가 끝나도 HTML 문서 파싱이 일시 정지되지 않으며, DOM 트리 생성이 완료된 후 스크립트가 실행됩니다.
* 그 외: 해당 스크립트의 다운로드를 시작함과 동시에 HTML 문서 파싱을 일시 정지합니다. 스크립트의 실행이 완료되면 HTML 문서 파싱을 재개합니다.

## 렌더 블로킹

브라우저 렌더링이 일시 정지되는 경우입니다.

* [https://sangmin802.github.io/Study/Think/browser-parser-blocking/](https://sangmin802.github.io/Study/Think/browser-parser-blocking/)
* [https://velog.io/@soorokim/Render-Blocking](https://velog.io/@soorokim/Render-Blocking)
