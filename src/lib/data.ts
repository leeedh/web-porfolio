/**
 * 프로젝트 데이터 타입 정의
 */
export interface Project {
  id: string;
  title: string;
  desc: string;
  tags: string[];
  github: string;
  live: string;
  image: string;
  category: 'all' | 'map' | '3d' | 'web';
}

/**
 * 스킬 데이터 타입 정의
 */
export interface Skill {
  category: string;
  items: string[];
  color: string;
}

/**
 * 프로젝트 더미 데이터
 * 지도 기반 프론트엔드 개발자 포트폴리오용
 */
export const projects: Project[] = [
  {
    id: 'lotto-map',
    title: 'Lotto Map',
    desc: '전국 로또 명당 데이터를 수집·지오코딩하여 지도 기반으로 시각화한 서비스. 판매점 클러스터링과 회차별 필터링 기능 제공.',
    tags: ['지도', '웹'],
    github: 'https://github.com/leeedh/lotto-map',
    live: 'https://lottospots.kr',
    image: '/placeholder/lotto.jpg',
    category: 'map'
  },
  {
    id: 'stage-view-3d',
    title: 'Stage View 3D',
    desc: '공연장 좌석별 시야와 조도를 3D로 시뮬레이션하는 웹 뷰어. GLB 파일을 업로드해 무대 및 조명 연출 테스트 가능.',
    tags: ['3D', '지도'],
    github: 'https://github.com/leeedh/stage-view-3d',
    live: '#',
    image: '/placeholder/stage.jpg',
    category: '3d'
  },
  {
    id: 'real-estate-admin',
    title: 'Real Estate Admin Dashboard',
    desc: '부동산종합공부시스템의 행정 데이터를 시각화한 내부용 대시보드. PostgreSQL + Cesium + React 조합으로 구축.',
    tags: ['지도', '백오피스'],
    github: '#',
    live: '#',
    image: '/placeholder/admin.jpg',
    category: 'map'
  },
  {
    id: 'seat-reservation',
    title: 'Seat Reservation System',
    desc: '아마추어 극단 공연용 좌석 예약 플랫폼. React 기반으로 다양한 공연장 템플릿 지원.',
    tags: ['웹', '공연'],
    github: 'https://github.com/leeedh/seat-reservation',
    live: 'https://seatreservation.vercel.app/',
    image: '/placeholder/seat.jpg',
    category: 'web'
  },
  {
    id: 'ai-image-gallery',
    title: 'AI Image Gallery',
    desc: 'AI 이미지 생성 API와 Supabase Storage를 활용한 개인 이미지 갤러리. 프롬프트 기반 이미지 관리 기능 포함.',
    tags: ['AI', '웹'],
    github: 'https://github.com/leeedh/ai-image-gallery',
    live: '#',
    image: '/placeholder/ai-gallery.jpg',
    category: 'web'
  }
];

/**
 * 스킬 카테고리별 데이터
 */
export const skills: Skill[] = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Next.js', 'TailwindCSS', 'Vite'],
    color: 'bg-blue-900/50 text-blue-300 border-blue-700'
  },
  {
    category: 'Geo/3D',
    items: ['CesiumJS', 'Mapbox GL', 'Three.js', 'WebGL', 'PostGIS'],
    color: 'bg-emerald-900/50 text-emerald-300 border-emerald-700'
  },
  {
    category: 'Backend/DB',
    items: ['Supabase', 'PostgreSQL', 'Node.js', 'Express', 'GraphQL'],
    color: 'bg-purple-900/50 text-purple-300 border-purple-700'
  },
  {
    category: 'Infra/Etc',
    items: ['Firebase', 'Vercel', 'GitHub Actions', 'Docker', 'AWS'],
    color: 'bg-orange-900/50 text-orange-300 border-orange-700'
  }
];

/**
 * 개인 정보
 */
export const personalInfo = {
  name: 'Donghoon Lee',
  title: 'Map, 3D, and Data-driven Front-End Developer',
  subtitle: '지도와 공간데이터로 사용자 경험을 설계하는 프론트엔드 개발자',
  description: '커피와 노트북만 있다면, 언제 어디서나 즐겁게 일하는 6년차 개발자입니다. 지도와 공간데이터를 활용한 웹 서비스 개발에 특화되어 있으며, 사용자 중심의 직관적인 인터페이스를 만드는 것을 좋아합니다.',
  email: 'ldhl4468@gmail.com',
  phone: '+82-10-9444-6686',
  location: '서울시 관악구 조원동',
  cvUrl: 'https://drive.google.com/file/d/1uJg0Yun35HWc4YsEKfEX5L6Uyik5MPl_/view?usp=sharing',
  github: 'https://github.com/leeedh',
  linkedin: '#',
  projectsCompleted: 24
};

/**
 * 네비게이션 메뉴
 */
export const navigationItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

/**
 * 프로젝트 필터 옵션
 */
export const projectFilters = [
  { key: 'all', label: '전체' },
  { key: 'map', label: '지도' },
  { key: '3d', label: '3D' },
  { key: 'web', label: '웹' }
];
