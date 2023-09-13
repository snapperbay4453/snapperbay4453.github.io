---
title: 'package.json'
tags: []
---

# package.json

package.json은 현재 프로젝트에 관한 정보를 저장합니다. 또한 패키지 매니저(npm, yarn 등)을 통해 설치한 모듈들의 의존성을 관리합니다.

## 프로젝트에 관한 필드

### scripts

프로젝트와 관련하여 자주 사용하는 스크립트를 정의합니다.

## 프로젝트의 의존성 관리를 위한 필드

### dependencies

해당 프로젝트가 실행되기 위해서 반드시 필요한 패키지를 명시합니다.

### devDependencies

해당 프로젝트의 빌드 또는 테스트 시에만 필요한 패키지를 명시합니다.

### peerDependencies

직접적으로 의존하지는 않지만, 해당 프로젝트가 사용자 측에서 제대로 작동하도록 하기 위해 반드시 같이 설치해줘야하는 패키지를 명시합니다.

## 참조

* [https://www.daleseo.com/js-package-json/](https://www.daleseo.com/js-package-json/)
* [https://velog.io/@vekkary/package.json-%ED%8C%8C%EC%9D%BC-%ED%95%84%EB%93%9C-%EC%A0%95%EB%A6%AC](https://velog.io/@vekkary/package.json-%ED%8C%8C%EC%9D%BC-%ED%95%84%EB%93%9C-%EC%A0%95%EB%A6%AC)
