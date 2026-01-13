# TikTok Clone - Jamkit으로 만든 숏폼 비디오 앱

틱톡과 유사한 기능을 제공하는 iOS/Android 앱입니다. Jamkit 프레임워크를 사용하여 구현되었습니다.

## 주요 기능

### 1. 메인 피드 (홈)
- 세로 스크롤 방식의 전체 화면 비디오 피드
- 페이징 기능으로 한 번에 하나의 비디오 표시
- 자동 재생 및 무한 루프
- 실시간 상호작용 UI:
  - 좋아요 버튼 및 카운트
  - 댓글 버튼 및 카운트
  - 공유 버튼 및 카운트
- 크리에이터 정보 표시:
  - 프로필 사진
  - 사용자 이름
  - 비디오 설명
  - 배경 음악 정보

### 2. 탐색/검색
- 검색창으로 트렌드, 해시태그, 크리에이터 검색
- 인기 해시태그 목록 (조회수 표시)
- 추천 크리에이터 목록 (팔로워 수 표시)
- 팔로우 버튼

### 3. 프로필
- 사용자 프로필 정보
- 팔로잉/팔로워/좋아요 통계
- 내가 업로드한 동영상 그리드 뷰
- 조회수 표시

## 프로젝트 구조

```
100days/
├── catalog.json              # 메인 카탈로그 설정
├── catalogs/                 # 화면별 카탈로그
│   ├── main.jmk             # 메인 피드
│   ├── search.jmk           # 탐색/검색
│   └── profile.jmk          # 프로필
├── components/              # 재사용 가능한 컴포넌트
│   ├── video-feed-item.jmk  # 비디오 피드 아이템
│   ├── hashtag-item.jmk     # 해시태그 아이템
│   ├── creator-item.jmk     # 크리에이터 아이템
│   └── grid-video-item.jmk  # 그리드 비디오 아이템
└── README.md
```

## 시작하기

### 필요 조건
- Jamkit CLI 설치
- iOS Simulator 또는 Android Emulator

### 실행 방법

1. 저장소 클론
```bash
git clone <repository-url>
cd 100days
```

2. Jamkit으로 실행
```bash
jamkit run ios    # iOS 시뮬레이터에서 실행
jamkit run android # Android 에뮬레이터에서 실행
```

## 기술 스택

- **프레임워크**: Jamkit
- **언어**: JMK (Jamkit Markup Language)
- **플랫폼**: iOS, Android

## 주요 컴포넌트 설명

### video-feed-item.jmk
전체 화면 비디오 아이템 컴포넌트입니다.
- 비디오 플레이어 (자동재생, 루프)
- 우측 상호작용 패널 (좋아요, 댓글, 공유)
- 하단 정보 패널 (작성자, 설명, 음악)

### hashtag-item.jmk
해시태그 목록 아이템 컴포넌트입니다.
- 해시태그 이름
- 조회수

### creator-item.jmk
크리에이터 목록 아이템 컴포넌트입니다.
- 프로필 사진
- 이름 및 사용자명
- 팔로워 수
- 팔로우 버튼

### grid-video-item.jmk
그리드 형태의 비디오 썸네일 컴포넌트입니다.
- 썸네일 이미지
- 재생 아이콘
- 조회수

## 샘플 데이터

현재 앱은 데모 목적으로 하드코딩된 샘플 데이터를 사용합니다:
- 샘플 비디오: Google의 공개 비디오 샘플 사용
- 프로필 이미지: pravatar.cc 및 picsum.photos 사용

실제 서비스로 전환하려면 `catalog.json`의 `server.base-url`을 실제 API 서버로 변경하고, 각 카탈로그의 data 섹션을 API 호출로 대체해야 합니다.

## 향후 개선 사항

- [ ] 실제 백엔드 API 연동
- [ ] 사용자 인증 및 로그인
- [ ] 비디오 업로드 기능
- [ ] 댓글 기능 구현
- [ ] 실시간 좋아요/팔로우 기능
- [ ] 푸시 알림
- [ ] 다크/라이트 테마
- [ ] 비디오 필터 및 편집 기능

## 라이선스

MIT License

## 기여

이슈와 풀 리퀘스트는 언제나 환영합니다!
