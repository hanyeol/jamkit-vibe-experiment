# TikTok 클론 앱 (Jamkit)

Jamkit을 사용하여 만든 틱톡 스타일의 숏폼 비디오 서비스 앱입니다.

## 프로젝트 구조

```
tiktok-app/
├── screens/
│   └── video-feed.sbml        # 메인 비디오 피드 화면
├── components/
│   ├── video-player.sbml      # 재사용 가능한 비디오 플레이어 컴포넌트
│   └── comments.sbml          # 댓글 화면 컴포넌트
├── styles/
│   └── theme.sbss             # 앱 전체 스타일 및 테마 정의
└── assets/
    └── videos/                # 비디오 파일 저장 디렉토리
```

## 주요 기능

### 1. 비디오 피드 화면 (video-feed.sbml)
- 전체 화면 세로 비디오 플레이어
- 자동 재생 및 루프
- 사용자 프로필 정보 표시
- 비디오 설명 및 해시태그
- 배경 음악 정보

### 2. 인터랙션 기능
- 좋아요 버튼 (카운트 표시)
- 댓글 버튼 (카운트 표시)
- 공유 버튼
- 팔로우 버튼 (프로필 사진에 + 아이콘)
- 더보기 옵션

### 3. 네비게이션
- 홈
- 발견
- 업로드 (중앙 + 버튼)
- 받은편지함
- 프로필

### 4. 댓글 화면 (comments.sbml)
- 바텀 시트 스타일
- 댓글 목록 표시
- 답글 달기 기능
- 댓글 좋아요
- 댓글 입력 필드

## 스타일 시스템

### 색상 테마
- Primary: `#000000` (검정)
- Secondary: `#ffffff` (흰색)
- Accent: `#fe2c55` (틱톡 핑크)
- Text Primary: `#ffffff`
- Text Secondary: `#b8b8b8`

### 주요 컴포넌트 스타일
- `%video-container`: 비디오 컨테이너
- `%action-bar`: 오른쪽 액션 버튼 영역
- `%action-button`: 각 액션 버튼
- `%info-bar`: 하단 정보 영역
- `%bottom-nav`: 하단 네비게이션

## 사용 방법

### 1. Jamkit CLI로 프로젝트 생성
```bash
jamkit create tiktok-app
cd tiktok-app
```

### 2. 파일 복사
생성된 파일들을 프로젝트에 복사합니다.

### 3. 비디오 파일 추가
`assets/videos/` 디렉토리에 샘플 비디오를 추가합니다.

### 4. 실행
```bash
jamkit run
```

## 커스터마이징

### 테마 색상 변경
[styles/theme.sbss](styles/theme.sbss)에서 색상 변수를 수정하세요:

```sbss
$PRIMARY_COLOR = #000000
$ACCENT_COLOR = #fe2c55
```

### 비디오 소스 변경
[screens/video-feed.sbml](screens/video-feed.sbml)에서 비디오 소스를 변경하세요:

```sbml
=object video-player: id=main-video, src="your-video.mp4"
```

### 레이아웃 조정
SBSS 파일에서 각 컴포넌트의 속성을 조정할 수 있습니다:
- `position`: 위치 지정
- `layout`: vertical/horizontal
- `spacing`: 요소 간 간격
- `padding`: 내부 여백
- `margin`: 외부 여백

## 확장 기능 아이디어

1. **스와이프 제스처**: 위/아래 스와이프로 다음/이전 비디오 전환
2. **더블탭 좋아요**: 화면 더블탭으로 하트 애니메이션
3. **프로필 화면**: 사용자 프로필 및 업로드한 비디오 목록
4. **검색 기능**: 해시태그 및 사용자 검색
5. **업로드 기능**: 비디오 촬영 및 편집
6. **라이브 스트리밍**: 실시간 방송 기능
7. **DM 기능**: 다이렉트 메시지
8. **효과 및 필터**: AR 필터, 뷰티 효과

## 참고 자료

- [SBML Grammar](../docs/sbml-grammar.md)
- [SBSS Grammar](../docs/sbss-grammar.md)
- [Jamkit CLI Guide](../docs/jamkit-cli-guide.md)

## 라이선스

이 프로젝트는 학습 목적으로 만들어졌습니다.
