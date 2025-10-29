# 동기면담 스터디 - 모집 페이지

동기면담(Motivational Interviewing) 스터디 모집을 위한 정적 웹사이트입니다.

## 기술 스택

- **Next.js 14** (Pages Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**

## 프로젝트 구조

```
test-proj1/
├── src/
│   ├── pages/           # Next.js 페이지
│   ├── components/      # React 컴포넌트
│   └── styles/          # 전역 스타일
├── public/              # 정적 파일
└── out/                 # 빌드 결과물 (정적 export)
```

## 개발 환경 설정

### 패키지 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 프로덕션 빌드

```bash
npm run build
```

빌드 결과물은 `out` 디렉토리에 생성됩니다.

## AWS Amplify 배포

이 프로젝트는 AWS Amplify에 최적화되어 있습니다.

1. AWS Amplify 콘솔에 접속
2. Git 저장소 연결
3. 빌드 설정은 `amplify.yml` 파일이 자동으로 적용됩니다
4. 배포 시작

## 페이지 구성

- **Hero Section**: 메인 히어로 섹션
- **Introduction**: 동기면담 및 스터디 소개
- **Target**: 모집 대상 및 참여 조건
- **Schedule**: 스터디 일정 및 커리큘럼
- **How to Apply**: 신청 방법 및 참가비 안내
- **FAQ**: 자주 묻는 질문

## 커스터마이징

### 내용 수정

각 섹션의 내용은 `src/components/` 디렉토리의 해당 컴포넌트 파일에서 수정할 수 있습니다.

### 디자인 수정

- 색상: `tailwind.config.js`에서 테마 색상 변경
- 전역 스타일: `src/styles/globals.css` 수정
- 컴포넌트별 스타일: 각 컴포넌트 파일에서 Tailwind 클래스 수정

## 라이선스

이 프로젝트는 개인 스터디 모집용으로 제작되었습니다.
