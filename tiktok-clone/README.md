# TikTok Clone - Jamkit 프로젝트

Jamkit을 사용하여 만든 틱톡 스타일의 숏폼 비디오 앱입니다.

## 주요 기능

- **세로 스크롤 비디오 피드**: 위아래로 스와이프하여 비디오 탐색
- **자동 재생 비디오**: 페이지 진입 시 자동으로 재생되는 비디오
- **인터랙션 UI**:
  - 좋아요 버튼 (하트 아이콘)
  - 댓글 버튼
  - 공유 버튼
  - 프로필 이미지
- **하단 네비게이션**: 홈, 발견, 생성(+), 받은편지함, 프로필
- **비디오 정보 표시**: 사용자명, 비디오 설명, 해시태그

## 프로젝트 구조

```
tiktok-clone/
├── package.bon           # 앱 패키지 설정
└── catalogs/
    └── MainApp/
        ├── catalog.bon           # 카탈로그 설정
        ├── catalog_home.sbml     # 홈 화면 마크업
        ├── catalog_home.sbss     # 홈 화면 스타일
        └── ...
```

## 실행 방법

### 1. iOS 시뮬레이터에서 실행

```bash
cd tiktok-clone
jamkit run --platform ios
```

### 2. Android 에뮬레이터에서 실행

```bash
cd tiktok-clone
jamkit run --platform android
```

### 3. 빌드하기

```bash
cd tiktok-clone
jamkit build
```

## 기술 스택

- **Jamkit**: 마크업 기반 모바일 앱 개발 프레임워크
- **SBML** (Storyboard Markup Language): UI 구조 정의
- **SBSS** (Storyboard Style Sheet): 스타일 정의

## 구현된 기능 상세

### 비디오 피드
- 전체 화면 비디오 플레이어
- 페이지 단위 세로 스크롤
- 샘플 비디오 3개 (Google Cloud 호스팅)
- 루프 재생 및 컨트롤 숨김

### UI 컴포넌트

#### 우측 컨트롤 영역
- 프로필 이미지 (원형, 흰색 테두리)
- 좋아요 아이콘 + 카운트
- 댓글 아이콘 + 카운트
- 공유 아이콘 + 텍스트

#### 하단 정보 영역
- 사용자명 (@username)
- 비디오 설명 및 해시태그

#### 네비게이션 바
- 5개 메뉴 아이템
- 중앙 생성 버튼 (틱톡 스타일 핑크색)
- 아이콘 + 텍스트 레이아웃

## 커스터마이징

### 비디오 추가하기

[catalog_home.sbml](catalogs/MainApp/catalog_home.sbml)에서 새로운 row를 추가:

```
=begin row
    =object video-item: id=video-4
        =object video-player: id=player-4, source=YOUR_VIDEO_URL, autoplay=no, loop=yes, controls=no
        =end video-player
        =object video-overlay
            <!-- 오버레이 컨텐츠 -->
        =end video-overlay
    =end video-item
=end row
```

### 스타일 수정하기

[catalog_home.sbss](catalogs/MainApp/catalog_home.sbss)에서 색상, 크기, 레이아웃 등을 수정할 수 있습니다.

## 샘플 비디오

현재 사용 중인 샘플 비디오:
1. Big Buck Bunny
2. Elephants Dream
3. For Bigger Blazes

모두 Google Cloud Storage에서 제공하는 무료 샘플 비디오입니다.

## 다음 단계

- [ ] 비디오 탭 제스처 (일시정지/재생)
- [ ] 좋아요 버튼 인터랙션
- [ ] 댓글 화면
- [ ] 프로필 화면
- [ ] 실제 백엔드 연동
- [ ] 무한 스크롤
- [ ] 비디오 업로드 기능

## 라이센스

MIT License

## 참고 자료

- [Jamkit 공식 문서](https://github.com/bookjam/jamkit)
- [Jamkit 템플릿](https://github.com/bookjam/jamkit-templates)
