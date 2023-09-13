---
title: '아토믹 CSS'
tags: ['방법론']
---

# 아토믹 CSS

## 아토믹 CSS란

아토믹 CSS(Atomic CSS)이란, 자주 쓰이는 디자인적 요소들(길이, 색상, 간격 등)을 원자(Atom) 단위로 쪼개어 정의해두고, HTML에서 필요한 스타일을 적용하는 방식으로 개발하는 방법론입니다.

## 대표적인 라이브러리

### Tailwind CSS

> Rapidly build modern websites without ever leaving your HTML

아토믹 CSS의 대중화를 이끈 Utility-first CSS 라이브러리입니다. HTML 상에서 Element에 직접 유틸리티 클래스를 적용하는 방식으로 CSS를 적용할 수 있습니다.

```html
<div
  className='bg-red-500'>
>
  Atomic CSS example
</div>
```

### UnoCSS

> Instant On-demand Atomic CSS Engine

Windi CSS의 정신적 후속작입니다. HTML 상에서 Element에 직접 유틸리티 클래스를 적용하는 방식으로 CSS를 적용할 수 있습니다. 직관성과 커스터마이징을 강점으로 내세우고 있습니다.

```html
<div
  className='bg-red-500'>
>
  Atomic CSS example
</div>
```

### Open Props

> Supercharged CSS variables

CSS 변수를 통해 디자인 토큰을 관리하는 라이브러리입니다. 사전에 정의된 다양한 CSS 변수를 직접 적용할 수 있습니다.

```css
.bg-red-500 {
  background-color: var(--red-5);
}
```

```html
<div
  className='bg-red-500'
>
  Atomic CSS example
</div>
```

### Panda CSS

> CSS-in-JS with build time generated styles, RSC compatible, multi-variant support, and best-in-class developer experience

```html
<div
  className={css({
    backgroundColor: 'red.500',
  })}
>
  Atomic CSS example
</div>
```

Chakra UI 팀에서 개발한 CSS-in-JS 라이브러리입니다. 빌드 타임에 관련 코드를 추출한 후 정적 CSS 파일을 생성하는 방식을 통해, 런타임 오버헤드가 있어 퍼포먼스를 해친다는 CSS-in-JS의 단점을 극복하였습니다.

## 참조

* [https://tech.kakao.com/2022/05/20/on-demand-atomic-css-library/](https://tech.kakao.com/2022/05/20/on-demand-atomic-css-library/)
* [https://tailwindcss.com/](https://tailwindcss.com/)
* [https://unocss.dev/](https://unocss.dev/)
* [https://open-props.style/](https://open-props.style/)
* [https://panda-css.com/](https://panda-css.com/)
