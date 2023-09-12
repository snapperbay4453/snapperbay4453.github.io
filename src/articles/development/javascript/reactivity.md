---
title: '반응성'
tags: ['방법론']
---

# 반응성

프로그래밍에 관련하여, 반응성(Reactivity)이란 데이터가 변하면 이에 반응하여 작업을 수행하는 것을 말합니다.

## 패턴

### PubSub 패턴

주체가 publish 메서드로 이벤트를 발행하고, 해당 이벤트를 구독하고자 하는 대상에서 이를 subscribe 메서드로 구독하는 방법입니다. 주체와 대상이 완전히 분리되어 있으며, 주체는 누가 자신을 구독하는지 전혀 알지 못합니다.

```javascript
class PubSub {
  constructor() {
    this.events = {};
  }
  subscribe(event, callback) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(callback);
  },
  publish(event, data) {
    if (this.events[event]) this.events[event].forEach(callback => callback(data));
  }
}

const pubSub = new PubSub();

pubSub.subscribe('update', data => console.log(data));
pubSub.publish('update', 'Reactive PubSub pattern!');
```

### 옵저버 패턴

주체가 addObserver 메서드로 대상을 등록받은 후, notify 메서드를 실행하여 해당 주체를 구독한 모든 대상에게 알림을 전달하는 방법입니다. 주체와 대상이 완전히 분리되어 있지 않으며, 주체는 누가 자신을 구독하는지 알고 있습니다.

```javascript
class Notifier {
  constructor() {
    this.observers = [];
  }
  addObserver(observer) {
    this.observers.push(observer);
  }
  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }
  notify(data) {
    this.observers.forEach(observer => observer.update(data));
  }
}

class Observer {
  update(data) {
    console.log(data);
  }
}

const subject = new Notifier();
const observer = new Observer();

subject.addObserver(observer);
subject.notify('Reactive Observer pattern!');
```

## 참조

* [https://frontendmasters.com/blog/vanilla-javascript-reactivity/](https://frontendmasters.com/blog/vanilla-javascript-reactivity/)
* [https://indepth.dev/posts/1269/finding-fine-grained-reactive-programming](https://indepth.dev/posts/1269/finding-fine-grained-reactive-programming)
* [https://indepth.dev/posts/1280/exploring-the-state-of-reactivity-patterns-in-2020](https://indepth.dev/posts/1280/exploring-the-state-of-reactivity-patterns-in-2020)
* [https://gomakethings.com/data-reactivity-with-vanilla-js/](https://gomakethings.com/data-reactivity-with-vanilla-js/)
