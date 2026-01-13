# TikTok Clone - Jamkit App

틱톡과 유사한 숏폼 비디오 플랫폼을 Jamkit으로 구현한 프로젝트입니다.

## 주요 기능

- **세로 스크롤 비디오 피드**: 틱톡처럼 세로로 스와이프하여 다음 비디오를 볼 수 있습니다
- **자동 재생**: 화면에 보이는 비디오가 자동으로 재생됩니다
- **인터랙션 UI**:
  - 좋아요 버튼 (하트 아이콘)
  - 댓글 버튼
  - 공유 버튼
- **비디오 정보**: 각 비디오마다 사용자명과 설명이 표시됩니다
- **전체 화면 경험**: 각 비디오가 화면 전체를 차지합니다

## 프로젝트 구조

```
tiktok-clone/
├── package.bon                 # 앱 메타데이터
└── catalogs/
    └── MainApp/
        ├── catalog.bon         # 카탈로그 설정
        ├── catalog_home.sbml   # 메인 UI 구조 (SBML)
        └── catalog_home.sbss   # 스타일 시트 (SBSS)
```

## 기술 스택

- **SBML (Smart Book Markup Language)**: UI 구조 정의
- **SBSS (Smart Book Style Sheet)**: 스타일 및 레이아웃 정의
- **Jamkit**: 네이티브 모바일 앱 프레임워크

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

## UI 구성

### 비디오 피드 레이아웃

- **video-scroll-container**: 세로 스크롤 가능한 컨테이너
  - `scroll-paging: yes`: 페이지 단위로 스크롤
  - `scroll-indicator: no`: 스크롤바 숨김

### 비디오 아이템

각 비디오는 다음으로 구성됩니다:

1. **비디오 플레이어**: 전체 화면 비디오
2. **오버레이**:
   - **오른쪽 사이드바**: 액션 버튼들
     - 좋아요 버튼 + 카운트
     - 댓글 버튼 + 카운트
     - 공유 버튼
   - **하단 정보**:
     - 사용자명 (@username)
     - 비디오 설명 및 해시태그

## 스타일 커스터마이징

[catalog_home.sbss](catalogs/MainApp/catalog_home.sbss)에서 다음을 수정할 수 있습니다:

```sbss
# 색상 정의
$BLACK = #000000
$WHITE = #ffffff
$TIKTOK_RED = #fe2c55
$GRAY_LIGHT = #c0c0c0
$GRAY_DARK = #161823

# 액션 버튼 스타일
#action-button {
    width: 48dp;
    height: 48dp;
    background-color: rgba(255,255,255,0.2);
    border-radius: 24dp;
}
```

## 비디오 추가하기

[catalog_home.sbml](catalogs/MainApp/catalog_home.sbml)에 새로운 비디오 섹션을 추가:

```sbml
=begin section: id=video-4, style=video-item
=object video: id=player-4, filename=your-video.mp4, autoplay=no, loop=yes, muted=no
=begin section: style=video-overlay
=begin section: style=right-sidebar
=object button: id=like-btn-4, style=action-button, icon=heart
=object text: style=action-count, text=0

=object button: id=comment-btn-4, style=action-button, icon=comment
=object text: style=action-count, text=0

=object button: id=share-btn-4, style=action-button, icon=share
=object text: style=action-count, text=Share
=end section

=begin section: style=bottom-info
=object text: style=username, text=@your_username
=object text: style=description, text=Your video description here #hashtags
=end section
=end section
=end section
```

## 다음 단계

향후 추가 가능한 기능들:

- [ ] 실제 비디오 파일 통합
- [ ] 좋아요/댓글/공유 기능 구현
- [ ] 사용자 프로필 페이지
- [ ] 검색 및 탐색 기능
- [ ] 상단 탭 (For You / Following)
- [ ] 비디오 촬영 및 업로드 기능
- [ ] 필터 및 효과
- [ ] 음악 추가 기능

## 참고 자료

- [Jamkit CLI Guide](../docs/jamkit-cli-guide.md)
- [SBML Grammar](../docs/sbml-grammar.md)
- [SBSS Grammar](../docs/sbss-grammar.md)

## 라이선스

MIT
