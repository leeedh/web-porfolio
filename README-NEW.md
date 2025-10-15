# Web Portfolio - React Version ✨

이 프로젝트는 기존 HTML/CSS/jQuery 기반 포트폴리오를 **React + TypeScript + Vite**로 현대화한 버전입니다.

## 🚀 기술 스택

### Core
- **React 18** - UI 라이브러리
- **TypeScript** - 타입 안정성
- **Vite** - 빠른 빌드 도구

### 애니메이션 & UI
- **Framer Motion** - 부드러운 애니메이션
- **React Intersection Observer** - 스크롤 기반 애니메이션 트리거
- **React Type Animation** - 타이핑 애니메이션

### 아이콘
- **React Icons** - 다양한 아이콘 라이브러리

## 📦 설치 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

## 🏗️ 프로젝트 구조

```
src/
├── components/          # React 컴포넌트
│   ├── Navbar.tsx      # 네비게이션 바
│   ├── Hero.tsx        # 메인 히어로 섹션
│   ├── About.tsx       # 소개 섹션
│   ├── Counter.tsx     # 통계 카운터
│   ├── Resume.tsx      # 이력서 (Education, Experience, Skills, Projects)
│   ├── SideProjects.tsx # 사이드 프로젝트
│   ├── Blog.tsx        # 블로그 섹션
│   ├── Hire.tsx        # 채용 요청 섹션
│   ├── Contact.tsx     # 연락처
│   ├── Footer.tsx      # 푸터
│   └── Loader.tsx      # 로딩 스피너
├── App.tsx             # 메인 앱 컴포넌트
├── main.tsx            # 앱 진입점
└── index.css           # 글로벌 스타일
```

## 🎨 주요 기능

### 1. 컴포넌트 기반 구조
- 모든 섹션을 재사용 가능한 React 컴포넌트로 분리
- Props를 통한 데이터 전달
- TypeScript로 타입 안정성 확보

### 2. 현대적 애니메이션
- **Framer Motion**: 페이드인, 슬라이드 등 부드러운 애니메이션
- **Intersection Observer**: 스크롤 시 요소가 화면에 보일 때 애니메이션 트리거
- **Type Animation**: Hero 섹션의 타이핑 효과

### 3. 반응형 디자인
- 모바일, 태블릿, 데스크톱 모두 지원
- CSS Grid와 Flexbox 활용
- 미디어 쿼리로 각 디바이스 최적화

### 4. 성능 최적화
- Vite의 빠른 HMR (Hot Module Replacement)
- 코드 스플리팅
- 이미지 최적화
- 지연 로딩 (Lazy Loading)

## 📝 컴포넌트 설명

### Navbar
- 고정 네비게이션 바
- 스크롤 시 배경색 변경
- 현재 섹션 하이라이트
- 모바일 햄버거 메뉴

### Hero
- 타이핑 애니메이션 효과
- 그라디언트 배경
- 스크롤 다운 버튼

### About
- 프로필 이미지
- 개인 정보
- 프로젝트 카운터
- 이력서 다운로드 링크

### Counter
- 숫자 카운터 애니메이션
- 4개의 통계 카드
- 호버 효과

### Resume
- 4개의 탭 (Education, Experience, Skills, Projects)
- 사이드 네비게이션
- 프로그레스 바 (스킬)
- 타임라인 형식

### SideProjects
- 그리드 레이아웃
- 이미지 호버 효과
- 프로젝트 링크

### Blog
- 블로그 포스트 카드
- 썸네일, 제목, 메타 정보
- 반응형 그리드

### Contact
- 연락처 정보 카드
- 아이콘과 함께 표시
- 호버 애니메이션

## 🔧 커스터마이징

### 색상 변경
`src/index.css` 파일에서 CSS 변수를 수정하세요:

```css
:root {
  --primary-color: #2c98f0;
  --secondary-color: #f9bf3f;
  /* ... */
}
```

### 내용 수정
각 컴포넌트 파일에서 데이터를 직접 수정하거나, 별도의 데이터 파일을 만들어 import할 수 있습니다.

### 이미지 변경
`public/images/` 폴더에 이미지를 추가하고, 컴포넌트에서 경로를 수정하세요.

## 🌐 배포

### GitHub Pages
```bash
# package.json에 homepage 추가
"homepage": "https://yourusername.github.io/repo-name"

# 빌드 및 배포
npm run build
# dist 폴더를 gh-pages 브랜치로 푸시
```

### Vercel
```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

### Netlify
1. GitHub 저장소 연결
2. 빌드 명령: `npm run build`
3. 배포 디렉토리: `dist`

## 📚 학습 포인트

이 프로젝트를 통해 배울 수 있는 것들:

1. **React 기초**: 컴포넌트, Props, Hooks (useState, useEffect)
2. **TypeScript**: 타입 정의, 인터페이스
3. **Framer Motion**: 애니메이션 라이브러리 사용
4. **CSS 모듈화**: 컴포넌트별 스타일 관리
5. **반응형 디자인**: 미디어 쿼리, Grid, Flexbox
6. **최적화**: 성능 개선 기법

## 🤝 기여

개선 사항이나 버그를 발견하면 이슈를 등록하거나 PR을 보내주세요!

## 📄 라이선스

This project is licensed under the MIT License.

---

Made with ❤️ using React + TypeScript + Vite




