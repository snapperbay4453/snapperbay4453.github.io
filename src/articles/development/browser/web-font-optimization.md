---
title: '웹 폰트 최적화'
tags: ['최적화']
---

# 웹 폰트 최적화

## 웹 폰트

웹 폰트(Web font)란, 네트워크 상 서버에 위치한 폰트 파일을 다운로드하여 화면에 표시해주는 웹 전용 폰트입니다.
웹 폰트를 통해, 디바이스의 폰트 설치 여부와 상관없이 웹에서 항상 원하는 폰트를 보여줄 수 있습니다.

```css
@font-face {
  font-family: Nanum Gothic;
  src: url('nanum-gothic.woff2') format('woff2');
}
```

## FOIT / FOUT

웹 폰트는 CSSOM(CSS Object Model)을 생성하는 단계에서 다운로드가 시작됩니다.
하지만 Paint 단계에 이르기까지 웹 폰트의 다운로드가 완료되지 않았을 경우, 브라우저는 해당 웹 폰트를 사용하는 부분의 렌더링을 차단하거나(FOIT), 기본 폰트로 대체하게 됩니다(FOUT).

* FOIT(Flash of Invisible Text)
  * 다운로드가 완료되지 않은 웹 폰트를 사용하는 부분의 텍스트를 렌더링하지 않습니다.
  * 사용자는 웹 폰트 로드 후 텍스트가 갑자기 나타나는 현상을 겪게 됩니다.
  * Chrome, Firefox, Opera, Safari 등에서 기본으로 사용하는 fallback입니다.

* FOUT(Flash of Unstyled Text)
  * 다운로드가 완료되지 않은 웹 폰트를 사용하는 부분을 대체 폰트를 사용하여 렌더링합니다.
  * 사용자는 웹 폰트 로드 후 텍스트의 폰트가 갑자기 변하는 현상을 겪게 됩니다.
  * IE, Edge 등에서 기본으로 사용하는 fallback입니다.

이 문제가 극대화되면 [원래 의미와 정반대의 내용이 표시되는 문제](https://www.zachleat.com/web/mitt-romney-webfont-problem) 등 정보 전달의 오류로 이어질 수 있습니다.

## 웹 폰트 표시 최적화 방법

다양한 방법을 적용하여 FOIT/FOUT 문제를 극복할 수 있습니다.

### 로컬 폰트 사용하기

웹 폰트 표시 관련 문제를 해결할 수 있는 가장 근본적인 방법은, 웹 폰트를 사용하지 않는 것입니다.
사용자의 디바이스에 이미 폰트가 설치되어 있다면 다운로드의 필요가 없어지며, 따라서 FOIT/FOUT 문제도 발생하지 않습니다.

로컬 폰트를 우선하여 사용하기 위해서는, 아래와 같이 @font-face의 src에 local 키워드를 사용하면 됩니다.

```css
@font-face {
  font-family: Nanum Gothic;
  src: local('Nanum Gothic'),
       url('nanum-gothic.woff2') format('woff2');
}
```

다만 다음의 문제가 발생할 수 있습니다.

* IE8 이하의 레거시 브라우저에서는 local() 속성을 인식하지 못합니다.
* 사용자 디바이스에 폰트가 잘못 설치된 경우, 웹 페이지가 제대로 렌더링되지 않을 수 있습니다.

### 효율적인 웹 폰트 확장자 사용하기

웹 폰트는 eof, truetype, woff, woff2 등 여러 종류의 포맷을 지원합니다. 뒤로 갈수록 최신 포맷이며, 더 나은 압축 효율을 보여줍니다.
그러므로 되도록 최신 포맷을 사용하고, 이를 지원하지 않는 경우에 한해 다른 포맷을 사용하면 웹 폰트의 다운로드에 걸리는 시간을 줄일 수 있습니다.

@font-face의 src를 선언할 때, 효율적인 웹 폰트 확장자를 우선적으로 사용하도록 선언할 수 있습니다. 아래와 같이 @font-face의 src에 format 키워드를 사용하면 됩니다.

```css
@font-face {
  font-family: Nanum Gothic;
  src: url('nanum-gothic.woff2') format('woff2'),
       url('nanum-gothic.woff') format('woff'),
       url('nanum-gothic.ttf') format('truetype');
}
```

### 서브셋 폰트 사용하기

서브셋 폰트(Subset font)는 폰트 파일에서 불필요한 글자를 제거한 파일입니다.

한글은 자음과 모음의 조합으로 구성되며, 조합된 글자 수는 총 11,172자에 달합니다. 이는 영어 알파벳의 대소문자를 합한 72자와 비교하면 매우 많으며, 당연히 폰트 파일의 용량 또한 증가하게 됩니다. 하지만 조합된 글자 중 실제로 텍스트를 표시하는 데 사용되는 글자는 소수에 불과합니다.

따라서 폰트 파일에서 실제로 사용되는 글자만 남기고 나머지를 제거하면, 파일의 용량이 줄어들기 때문에 웹 폰트의 다운로드에 걸리는 시간을 줄일 수 있습니다.

[서브셋 폰트 메이커](https://opentype.jp/subsetfontmk.html) 또는 [fontTools](https://github.com/fonttools/fonttools) 등의 라이브러리를 활용하여 직접 서브셋 폰트를 생성할 수 있습니다.

다만 다음의 문제가 발생할 수 있습니다.

* Input 필드 등에서 사용자 입력을 받을 경우, 일시적으로 서브셋에서 제외된 글자가 보여져야 할 수 있습니다. 이 경우 해당 글자만 대체 폰트로 표시되므로 사용자가 이질감을 느낄 수 있습니다.

### preload 옵션으로 웹 폰트 먼저 로딩하기

HTML의 link 태그에 preload 옵션을 부여하여, 웹 폰트를 다른 리소스보다 우선하여 다운로드하도록 설정하는 방법입니다.

```html
<link rel='preload' href='nanum-gothic.woff2' as='font' type='font/woff2' crossorigin='anonymous'>
```

### CSS의 font-display 속성으로 웹 폰트 적용 시점 조정하기

CSS의 font-display 속성을 통해 웹 폰트의 로딩 상태에 따른 동작을 설정할 수 있습니다. 아래와 같이 @font-face의 font-display에 해당하는 키워드를 사용하면 됩니다.

```css
@font-face{
  font-family: Nanum Gothic;
  src: url('nanum-gothic.woff2') format('woff');
  font-display: optional;
}
```

해당하는 속성의 종류는 아래와 같습니다.

* auto
  * 브라우저의 기본 동작(FOIT/FOUT)을 사용합니다.
* block
  * FOIT와 동일하게 작동합니다.
  * 렌더링 시 웹 폰트 다운로드가 완료되지 않았을 경우, 최대 3초간 텍스트를 렌더링하지 않습니다.
  * 3초 전에 웹 폰트 다운로드가 완료되면 웹 폰트를 적용합니다.
  * 3초 후에도 웹 폰트 다운로드가 완료되지 않았을 경우 대체 폰트를 적용합니다.
* swap
  * FOUT와 동일하게 작동합니다.
  * 렌더링 시 웹 폰트 다운로드가 완료되지 않았을 경우, 대체 폰트를 적용합니다.
  * 웹 폰트 다운로드가 완료되면 웹 폰트를 적용합니다.
* fallback
  * 렌더링 후 100ms까지는 텍스트를 렌더링하지 않습니다.
  * 100ms 후에도 웹 폰트 다운로드가 완료되지 않았을 경우 대체 폰트를 적용합니다.
  * 3초 전에 웹 폰트 다운로드가 완료되면 웹 폰트를 적용합니다.
  * 3초 후에도 웹 폰트 다운로드가 완료되지 않았을 경우 대체 폰트를 적용합니다.
  * 대체 폰트 적용 여부와 상관없이, 웹 폰트 다운로드가 늦게라도 완료되었을 경우 이를 브라우저 캐시에 저장합니다. 이 캐시는 페이지 이동 또는 새로고침 시 적용됩니다.
* optional
  * 렌더링 후 100ms까지는 텍스트를 렌더링하지 않습니다.
  * 100ms 후에도 웹 폰트 다운로드가 완료되지 않았을 경우 대체 폰트를 적용합니다.
  * 만일 네트워크의 연결 상태가 좋으면, 웹 폰트 다운로드가 완료되었을 경우 웹 폰트를 적용합니다.
  * 만일 네트워크의 연결 상태가 좋지 않으면, 웹 폰트 다운로드가 늦게라도 완료되었을 경우에도 대체 폰트를 계속해서 적용합니다.
  * 대체 폰트 적용 여부와 상관없이, 웹 폰트 다운로드가 늦게라도 완료되었을 경우 이를 브라우저 캐시에 저장합니다. 이 캐시는 페이지 이동 또는 새로고침 시 적용됩니다.

### 웹 폰트 로드 후에 CSS 클래스 추가하기

웹 폰트 로드 후 CSS 클래스를 적용하여 FOIT/FOUT를 더욱 자연스럽게 만드는 방법입니다. 이 방법을 사용하면 웹 폰트 다운로드가 완료되기 전에는 컴포넌트를 스켈레톤으로 대체하는 등, 디자인적으로 좀 더 이질감이 적은 웹 페이지를 구현할 수 있습니다.

[CSS Font Loading API](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Font_Loading_API)를 사용하거나, [Web Font Loader](https://github.com/typekit/webfontloader) 및 [Font Face Observer](https://github.com/bramstein/fontfaceobserver) 등의 라이브러리를 통해 웹 폰트 로드 완료 또는 오류를 감지할 수 있습니다.

### 대체 폰트의 서식 조정하기

대체 폰트가 웹 폰트와 심하게 차이날 경우, FOUT 현상이 발생할 때 줄바꿈 등으로 인해 레이아웃이 의도치 않게 변경되는 현상이 생길 수 있습니다.

대체 폰트의 서식을 조정함으로써 웹 폰트와 대체 폰트의 레이아웃을 최대한 비슷하게 맞출 수 있습니다. 이를 통해 웹 폰트 다운로드 전후의 레이아웃 변경을 막을 수 있습니다.

[Font Style Matcher](https://sangziii.github.io/fontStyleMatcher)를 통해 CSS 코드를 생성할 수 있습니다.

### FOFT(Flash of Faux Text) 적용하기

서브셋 폰트의 응용 방법입니다. 서브셋 폰트를 먼저 다운로드하여 중요한 글자에 폰트를 적용하고, 그 후 나머지 폰트를 다운로드하여 전체 글자를 다시 표시합니다.

### Base64 폰트 사용하기

data-uri를 통해 웹 폰트를 CSS에 직접 포함시키는 방법입니다.
이 방법은 CSS 로드 시점에 폰트를 읽기 때문에, FOIT/FOUT 문제가 발생하지 않습니다. 다만 CSS 파싱에 걸리는 시간이 그만큼 늘어나게 되므로, 서브셋 폰트 등 용량이 작은 웹 폰트에 사용하는 것이 좋습니다.

## 참조

* [https://d2.naver.com/helloworld/4969726](https://d2.naver.com/helloworld/4969726)
* [https://thefirstperson.tistory.com/159](https://thefirstperson.tistory.com/159)
* [https://www.bramstein.com/writing/web-font-loading-patterns.html](https://www.bramstein.com/writing/web-font-loading-patterns.html)
* [https://thefirstperson.tistory.com/159](https://thefirstperson.tistory.com/159)
* [https://showerbugs.github.io/2018-02-02/%EC%9B%B9%ED%8F%B0%ED%8A%B8-%EC%B5%9C%EC%A0%81%ED%99%94-%ED%95%98%EA%B8%B0](https://showerbugs.github.io/2018-02-02/%EC%9B%B9%ED%8F%B0%ED%8A%B8-%EC%B5%9C%EC%A0%81%ED%99%94-%ED%95%98%EA%B8%B0)
