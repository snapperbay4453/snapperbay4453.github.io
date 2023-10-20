---
title: '[작성중] GitHub Action'
tags: ['DevOps']
---

# GitHub Action

## GitHub Action에서 동적으로 .env 파일 생성하기

```yml
- name: Create .env file
  run: |
    jq -r 'to_entries|map("\(.key)=\(.value|tostring)")|.[]' <<< "$SECRETS_CONTEXT" > .env
  env:
    SECRETS_CONTEXT: ${{ toJson(secrets) }}
```

## 참조

* [https://ji5485.github.io/post/2021-06-26/create-env-with-github-actions-secrets/](https://ji5485.github.io/post/2021-06-26/create-env-with-github-actions-secrets/)
