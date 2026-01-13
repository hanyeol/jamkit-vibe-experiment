# ShortVideo App - TikTok Clone with Jamkit

잼킷(Jamkit)으로 만든 틱톡 스타일의 숏폼 비디오 플랫폼입니다.

## 주요 기능

### 1. 비디오 피드 (Feed)
- 전체 화면 세로 스크롤 방식
- 비디오 자동 재생 및 루프
- 페이징과 스냅 기능으로 한 번에 하나의 비디오만 표시
- 탭으로 재생/일시정지, 더블 탭으로 좋아요

### 2. 인터랙션 UI
- **좋아요 버튼**: 하트 아이콘, 애니메이션 효과
- **댓글 버튼**: 댓글 팝업 표시
- **공유 버튼**: 링크 복사, 소셜 미디어 공유, 다운로드
- **프로필 버튼**: 사용자 프로필 페이지로 이동

### 3. 비디오 생성/업로드
- 실시간 카메라 프리뷰
- 녹화 기능 (최대 60초)
- 갤러리에서 비디오 선택
- 전면/후면 카메라 전환
- 속도, 미용 효과, 필터 옵션

### 4. 프로필 페이지
- 사용자 정보 표시
- 팔로잉/팔로워/좋아요 통계
- 비디오 그리드 레이아웃
- 좋아요한 비디오, 북마크 탭

### 5. 하단 네비게이션
- 홈 피드
- 발견 (Discover)
- 비디오 생성 (중앙 버튼)
- 메시지함
- 프로필

## 프로젝트 구조

```
shortvideo-app/
├── package.bon                    # 앱 패키지 설정
├── catalogs/
│   └── MainApp/
│       ├── catalog.bon           # 카탈로그 설정
│       ├── catalog_home.sbml     # 메인 피드 레이아웃
│       ├── catalog_home.sbss     # 메인 피드 스타일
│       ├── catalog_create.sbml   # 비디오 생성 레이아웃
│       ├── catalog_create.sbss   # 비디오 생성 스타일
│       ├── catalog_profile.sbml  # 프로필 레이아웃
│       ├── catalog_profile.sbss  # 프로필 스타일
│       ├── subview_bottom_nav.*  # 하단 네비게이션
│       ├── Scripts/
│       │   ├── catalog_script.js           # 메인 카탈로그 로직
│       │   ├── catalog_profile_script.js   # 프로필 데이터
│       │   ├── video_player_script.js      # 비디오 플레이어
│       │   ├── like_button_script.js       # 좋아요 기능
│       │   ├── comment_button_script.js    # 댓글 기능
│       │   ├── share_button_script.js      # 공유 기능
│       │   ├── record_script.js            # 녹화 기능
│       │   ├── upload_script.js            # 업로드 기능
│       │   └── nav_*.js                    # 네비게이션 스크립트
│       └── Images/
│           └── ICONS_README.md   # 필요한 아이콘 목록
```

## 설치 및 실행

### 1. 프로젝트 디렉토리로 이동
```bash
cd shortvideo-app
```

### 2. iOS 시뮬레이터에서 실행
```bash
jamkit run --platform ios
```

### 3. Android 에뮬레이터에서 실행
```bash
jamkit run --platform android
```

## 필요한 설정

### 아이콘 이미지
`catalogs/MainApp/Images/ICONS_README.md` 파일을 참조하여 필요한 아이콘 이미지를 추가하세요.

현재 필요한 아이콘:
- icon_heart.png / icon_heart_filled.png
- icon_comment.png
- icon_share.png
- icon_record.png
- 네비게이션 아이콘들

임시로 이모지 텍스트로 대체되어 있습니다.

### 비디오 데이터
현재는 `Scripts/catalog_script.js`에 샘플 데이터가 하드코딩되어 있습니다.
실제 서비스에서는 API를 통해 비디오 데이터를 로드하도록 수정해야 합니다.

## 커스터마이징

### 색상 변경
각 `.sbss` 파일에서 색상을 변경할 수 있습니다:
- 메인 컬러: `#FF0050` (핑크)
- 배경색: `#000000` (검정)
- 텍스트 색상: `#FFFFFF` (흰색)

### 비디오 길이 제한
`Scripts/record_script.js`에서 최대 녹화 시간을 변경할 수 있습니다:
```javascript
// 최대 60초 제한
if (recordingDuration >= 60) {
    stopRecording();
}
```

## 다음 단계

구현할 추가 기능:
1. **댓글 시스템**: 댓글 팝업 UI 및 로직
2. **검색/발견**: 트렌딩 비디오, 해시태그 검색
3. **팔로우 시스템**: 팔로우/언팔로우 기능
4. **알림**: 좋아요, 댓글, 팔로우 알림
5. **비디오 편집**: 트림, 필터, 음악 추가
6. **백엔드 연동**: Firebase, AWS 등과 연동
7. **실시간 채팅**: 라이브 스트리밍 기능

## 기술 스택

- **Jamkit**: 네이티브 앱 개발 프레임워크
- **SBML**: Jamkit의 마크업 언어
- **SBSS**: Jamkit의 스타일시트 언어
- **JavaScript**: 앱 로직 구현

## 라이선스

MIT License

## 참고 자료

- [Jamkit 공식 문서](https://github.com/bookjam/jamkit)
- [Jamkit 튜토리얼](https://bookjam.github.io/jamkit)

---

잼킷으로 즐거운 앱 개발 되세요! 🚀
