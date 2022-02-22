# 뷰 예제

뷰로 프론트엔드 프로젝트를 진행함에 있어 참고할 수 있도록 예제를 작성했습니다.
프로젝트 진행시 도움이 될 수 있도록 지속해서 개선해 나갈 예정입니다.

## 스펙

----
- Language
    - Typescript
- Framework
    - Vue2
    - Vuetify
- CI/CD
    - Github Action
    - Gitlab Container Registry

## 구조

---
- api : 커스텀 어노테이션
- assets : 정적 파일
- components : 컴포넌트 정의
- constants : 상수 정의
- mock : 목 서버 파일
- plugins : 외부 플러그인
- router : 라우터 정의
- store : vue 스토어 파일 정의
- type : 타입 정의
- utils : 유틸리티
- views : 뷰 파일

## 실행

---

```shell
docker build -t vue-example .
docker run -it -d -p 8080:8080 --name vue-example vue-example
```