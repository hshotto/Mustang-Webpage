# Mustang Webpage

포드 머스탱 소개 웹페이지 프로젝트

## 기술 스택

- **Frontend**: React 19 + Vite
- **Backend**: Express.js
- **Database**: MySQL
- **Session**: Redis
- **Styling**: Tailwind CSS

## 프로젝트 구조

```
├── src/              # React 프론트엔드
│   ├── components/   # 컴포넌트
│   └── service/      # API 서비스
├── server/           # Express 백엔드
└── public/           # 정적 파일
```

## 실행 방법

### 1. 의존성 설치
```bash
npm install
```

### 2. 환경 변수 설정
`.env` 파일 생성:
```env
PORT=3000
SESSION_SECRET=change_this_session_secret
MYSQL_HOST=127.0.0.1
MYSQL_USER=xadmin
MYSQL_PASSWORD=future_01
MYSQL_DB=appdb
REDIS_URL=redis://127.0.0.1:6379
```

### 3. 개발 서버 실행
```bash
npm run dev
```
- Frontend: http://localhost:5173
- Backend: http://localhost:3000

## 주요 기능

- 머스탱 홈페이지 (히어로 섹션 + 갤러리)

## 스크립트

- `npm run dev` - 개발 서버 실행
- `npm run build` - 프로덕션 빌드