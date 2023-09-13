---
title: '시멘틱 버저닝'
tags: ['표준']
---

# 시멘틱 버저닝

소프트웨어 버전이란 컴퓨터 소프트웨어의 특정 시점의 상태에 대해 식별 가능한 유일한 이름을 지정하는 것을 의미합니다. 하지만 다양한 소프트웨어들이 저마다의 버전 규칙을 가지게 되면서, 이를 규격화하려는 시도가 발생했습니다.

시맨틱 버저닝(Semantic Versioning, SemVer)은 소프트웨어의 버전 변경 규칙에 대한 제안입니다.
그라바타(Gravatars)의 창시자이자 깃헙(GitHub)의 공동 창업자인 [톰 프레스턴-베르너(Tom Preston-Werner)](https://en.wikipedia.org/wiki/Tom_Preston-Werner)가 작성했습니다.

## 규칙

[https://semver.org/](https://semver.org/lang/ko/)에서 자세한 내용을 확인할 수 있으며, 요약하면 아래와 같습니다.

* 한 번 배포한 버전의 내용은 절대로 변경하지 말아야 합니다. 변경분이 있다면 반드시 새로운 버전으로 배포해야 합니다.
* 버전 번호는 반드시 Major.Minor.Patch의 형태여야 합니다. Major, Minor, Patch는 각각 자연수여야 하며, 0이 앞에 붙어서는 안됩니다.
* Major 버전 0(0.Minor.Patch)은 초기 개발을 위해서 사용합니다. Major 버전 1(1.Minor.Patch)은 정식 버전을 의미합니다.
* 기존과 호환되지 않는 변화가 있을 때는 반드시 Major 버전을 올립니다. 이 때, Minor 버전과 Patch 버전은 0이 되어야 합니다.
* 기존과 호환되는 새로운 기능의 변화가 있을 때는 반드시 Minor 버전을 올립니다. 이 때, Patch 버전은 0이 되어야 합니다.
* 기존과 호환되는 버그 수정이 있을 때는 반드시 Patch 버전을 올립니다.
* Patch 버전 뒤에 하이픈(-)을 붙인 후, 마침표(.)로 구분된 식별자를 추가로 붙임으로써 Pre-release 버전을 표시할 수 있습니다. Pre-release는 아스키(ASCII) 문자, 자연수, 붙임표로만 이루어져야 하며([0-9A-Za-z-]), 자연수일 경우 0이 앞에 붙어서는 안됩니다.

## 버전 범위 지정

### 틸드 범위(~)

~1.2.3과 같이 표기합니다.

* Minor 버전이 지정되어 있다면 Patch 버전의 변경을 허용합니다.
* Minor 버전이 지정되어 있지 않으면 Minor 및 Patch 버전의 변경을 허용합니다.

### 캐럿 범위(^)

^1.2.3과 같이 표기합니다.

* [Major, Minor, Patch]에서 가장 왼쪽에 있는 0이 아닌 요소를 수정하지 않는 변경을 허용합니다.
  * Patch 버전이 0이 아닐 경우 버전 변경을 허용하지 않습니다.
  * Patch 버전이 0이고 Minor 버전이 0이 아닐 경우, Patch 버전의 변경을 허용합니다.
  * Patch 및 Minor 버전이 0이고 Major 버전이 0이 아닐 경우, Minor 버전의 변경을 허용합니다.

## 참조

* [https://semver.org/lang/ko/](https://semver.org/lang/ko/)
* [https://spoqa.github.io/2012/12/18/semantic-versioning.html](https://spoqa.github.io/2012/12/18/semantic-versioning.html)
* [https://velog.io/@iamjoo/Semantic-Versioning%EC%9D%B4%EB%9E%80](https://velog.io/@iamjoo/Semantic-Versioning%EC%9D%B4%EB%9E%80)
