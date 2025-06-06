# NEXT.js 템플릿

## 사용 스택

| stack     | version | etc            |
| --------- | ------- | -------------- |
| Next.js   | 15      |                |
| React     | 19      |                |
| tailwind  | 4       |                |
| shadcn/ui |         |                |
| zustand   |         | 아직 추가 안함 |

## 시작하기

```bash
pnpm dev
```

## 환경 변수

```
AUTH_SECRET=

AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=
```

## 구조

- `(auth)/layout.tsx` 에서 인증을 처리하여 인증이 필요한 페이지는 (auth) 하위로 ㄱㄱ
- `next-auth` 로 인증 처리
  - 간단하게 구글 oauth 만 넣어둔 상태
- back 단 설정은 나중에 ㄱㄱ
