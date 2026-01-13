# TikTok 스타일 앱 (Jamkit)

잼킷(Jamkit)으로 만든 틱톡 스타일의 숏폼 비디오 앱입니다.

## 주요 기능

- 풀스크린 세로 비디오 피드
- 스와이프로 비디오 전환 (위/아래로 스크롤)
- 좋아요, 댓글, 공유 버튼
- 비디오 자동 재생 및 루프
- 사용자 정보 및 설명 오버레이

## 프로젝트 구조

```
tiktok-app/
├── catalogs/
│   └── MainApp/
│       ├── catalog_home.sbml    # 메인 비디오 피드 화면
│       ├── catalog_home.sbss    # 스타일 정의
│       └── Videos/              # 비디오 파일 폴더 (추가 필요)
└── package.bon
```

## 실행 방법

### 1. 비디오 파일 추가

`catalogs/MainApp/Videos/` 폴더를 만들고 샘플 비디오를 추가하세요:

```bash
mkdir -p catalogs/MainApp/Videos
```

다음 이름으로 비디오 파일을 추가:
- `sample1.mp4`
- `sample2.mp4`
- `sample3.mp4`

또는 `catalog_home.sbml` 파일에서 비디오 파일명을 실제 파일명으로 변경하세요.

### 2. 앱 실행

```bash
# tiktok-app 폴더로 이동
cd tiktok-app

# iOS 시뮬레이터에서 실행
jamkit run --platform ios

# Android 에뮬레이터에서 실행
jamkit run --platform android
```

## 화면 구성

### 비디오 피드 화면 (`catalog_home.sbml`)

각 비디오 아이템은 다음 요소로 구성됩니다:

1. **비디오 플레이어**: 전체 화면 비디오 재생
2. **오른쪽 사이드바**:
   - ♥ 좋아요 버튼 + 카운트
   - 💬 댓글 버튼 + 카운트
   - ➤ 공유 버튼
3. **하단 정보**:
   - 사용자 이름 (@username)
   - 비디오 설명

## 스타일 커스터마이징

`catalog_home.sbss` 파일을 수정하여 다음을 변경할 수 있습니다:

- 버튼 크기 및 색상 (`.action-button`)
- 텍스트 스타일 (`.username`, `.description`)
- 레이아웃 위치 (`.right-sidebar`, `.bottom-info`)

### 주요 스타일 클래스

- `.video-item`: 각 비디오 컨테이너 (풀스크린)
- `.video-player`: 비디오 플레이어
- `.action-button`: 액션 버튼 (좋아요, 댓글, 공유)
- `.username`: 사용자 이름
- `.description`: 비디오 설명

## 비디오 추가하기

새로운 비디오를 추가하려면 `catalog_home.sbml`에 다음 블록을 추가하세요:

```sbml
=begin section: id=video-4, class=video-item, style=video-item
    =object video: id=player-4, filename=sample4.mp4, style=video-player, autoplay=no, loop=yes, controls=no, muted=no
    =begin overlay: style=video-overlay
        =begin section: style=right-sidebar
            =object button: id=like-btn-4, label=♥, style=action-button
            =begin section: style=action-count
            50K
            =end section

            =object button: id=comment-btn-4, label=💬, style=action-button
            =begin section: style=action-count
            500
            =end section

            =object button: id=share-btn-4, label=➤, style=action-button
            =begin section: style=action-count
            Share
            =end section
        =end section

        =begin section: style=bottom-info
            =begin section: style=username
            @your_username
            =end section
            =begin section: style=description
            Your video description here!
            =end section
        =end section
    =end overlay
=end section
```

## 향후 개선 사항

- JavaScript를 사용한 동적 비디오 로딩
- 실제 좋아요/댓글 기능 구현
- 사용자 프로필 페이지
- 검색 및 탐색 기능
- 비디오 업로드 기능
- 팔로우/팔로워 시스템

## 참고 자료

- [Jamkit 공식 문서](https://github.com/bookjam/jamkit)
- [SBML 문법 가이드](../docs/jamkit-grammar/sbml-grammar.md)
- [SBML 속성 레퍼런스](../docs/jamkit-grammar/sbml-properties.md)

## 라이선스

MIT License
