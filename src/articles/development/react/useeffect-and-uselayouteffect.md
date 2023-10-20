---
title: 'useEffect 및 useLayoutEffect'
tags: ['Hooks']
---

# useEffect 및 useLayoutEffect

useEffect는 컴포넌트들의 스타일 속성이 계산되고(Render), 이를 브라우저에 표시(Paint)하는 과정을 거친 후 비동기적으로 실행됩니다. useEffect 내부에 DOM을 조작하는 코드가 있을 경우, 리페인트가 발생하여 사용자 입장에서 화면의 깜빡임(Flickering)을 경험하게 됩니다.

useLayoutEffect는 컴포넌트들의 스타일 속성이 계산되고 나서 동기적으로 실행되며, 이후 컴포넌트가 브라우저에 표시됩니다. 브라우저에 최종적으로 반영되기 전에 실행되므로, useLayoutEffect 내부에 DOM 조작하는 코드가 존재하더라도 사용자는 깜빡임을 경험하지 않습니다.

useLayoutEffect는 동기적으로 실행된다는 특징으로 인해, 내부 로직이 복잡할 경우 컴포넌트가 표시되기까지 시간이 오래 걸리게 됩니다. 따라서 조건에 따라 다른 렌더링이 필요한 것이 아니라면 useEffect를 사용하는 것이 좋습니다.

## 참조

* [https://pubudu2013101.medium.com/what-is-the-real-difference-between-react-useeffect-and-uselayouteffect-51723096dc19](https://pubudu2013101.medium.com/what-is-the-real-difference-between-react-useeffect-and-uselayouteffect-51723096dc19)
