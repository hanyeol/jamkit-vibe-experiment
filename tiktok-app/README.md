# TikTok Clone - Jamkit App

틱톡 스타일의 숏폼 비디오 공유 앱입니다.

## 주요 기능

### 1. 비디오 피드 (Video Feed)
- 세로 스와이프로 비디오 탐색
- 자동 재생 비디오 플레이어
- 좋아요, 댓글, 공유 버튼
- 프로필 아바타 탭으로 사용자 프로필 이동

### 2. 탐색 (Discover)
- 트렌딩 해시태그
- 검색 기능
- 인기 비디오 그리드 뷰

### 3. 프로필 (Profile)
- 사용자 정보 (아바타, 사용자명, 소개)
- 팔로워/팔로잉/좋아요 통계
- 사용자 비디오 그리드
- 프로필 편집 및 설정

## 프로젝트 구조

```
tiktok-app/
├── package.bon                          # 앱 메타데이터
├── catalogs/
│   └── MainApp/
│       ├── catalog.bon                  # 카탈로그 설정
│       ├── catalog_video-feed.sbml      # 비디오 피드 레이아웃
│       ├── catalog_video-feed.sbss      # 비디오 피드 스타일
│       ├── catalog_discover.sbml        # 탐색 레이아웃
│       ├── catalog_discover.sbss        # 탐색 스타일
│       ├── catalog_profile.sbml         # 프로필 레이아웃
│       └── catalog_profile.sbss         # 프로필 스타일
```

## 실행 방법

### iOS 시뮬레이터에서 실행
```bash
cd tiktok-app
jamkit run --platform ios
```

### Android 에뮬레이터에서 실행
```bash
cd tiktok-app
jamkit run --platform android
```

## 빌드

```bash
cd tiktok-app
jamkit build
```

## 설치

### iOS
```bash
jamkit install --platform ios
```

### Android
```bash
jamkit install --platform android
```

## 기술 스택

- **Jamkit**: 네이티브 모바일 앱 개발 프레임워크
- **SBML**: Jamkit의 마크업 언어
- **SBSS**: Jamkit의 스타일시트 언어

## 다음 단계 (향후 개선사항)

1. **비디오 업로드 기능**
   - 카메라/갤러리에서 비디오 선택
   - 비디오 편집 (트림, 필터, 효과)
   - 캡션 및 해시태그 추가

2. **인터랙션 구현**
   - 좋아요 기능 실제 구현
   - 댓글 시스템
   - 공유 기능

3. **백엔드 연동**
   - 실제 비디오 스트리밍
   - 사용자 인증
   - 데이터베이스 연동

4. **고급 기능**
   - 듀엣/스티치 기능
   - 라이브 스트리밍
   - 알림 시스템
   - 메시징 기능

## 라이선스

MIT
