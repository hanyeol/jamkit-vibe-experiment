// 샘플 비디오 데이터
var videos = [
    {
        "id": "1",
        "url": "https://sample-videos.com/video1.mp4",
        "author": {
            "id": "user1",
            "username": "코딩왕",
            "avatar": "https://i.pravatar.cc/150?img=1"
        },
        "description": "잼킷으로 만든 첫 번째 숏폼 비디오! 너무 쉽고 재미있어요 😄",
        "music": "♪ Original Sound - 코딩왕",
        "likes": "1.2K",
        "comments": "234",
        "shares": "56",
        "isLiked": false
    },
    {
        "id": "2",
        "url": "https://sample-videos.com/video2.mp4",
        "author": {
            "id": "user2",
            "username": "개발자김",
            "avatar": "https://i.pravatar.cc/150?img=2"
        },
        "description": "모바일 앱 개발 꿀팁 #개발 #모바일 #앱",
        "music": "♪ Trending Sound",
        "likes": "5.4K",
        "comments": "892",
        "shares": "234",
        "isLiked": false
    },
    {
        "id": "3",
        "url": "https://sample-videos.com/video3.mp4",
        "author": {
            "id": "user3",
            "username": "테크리뷰어",
            "avatar": "https://i.pravatar.cc/150?img=3"
        },
        "description": "이 기술 진짜 미쳤다 🔥 꼭 써보세요!",
        "music": "♪ Epic Music",
        "likes": "12.8K",
        "comments": "1.2K",
        "shares": "890",
        "isLiked": false
    },
    {
        "id": "4",
        "url": "https://sample-videos.com/video4.mp4",
        "author": {
            "id": "user4",
            "username": "디자이너박",
            "avatar": "https://i.pravatar.cc/150?img=4"
        },
        "description": "UI/UX 디자인 트렌드 2024 💎",
        "music": "♪ Chill Beats",
        "likes": "8.3K",
        "comments": "567",
        "shares": "345",
        "isLiked": false
    },
    {
        "id": "5",
        "url": "https://sample-videos.com/video5.mp4",
        "author": {
            "id": "user5",
            "username": "스타트업대표",
            "avatar": "https://i.pravatar.cc/150?img=5"
        },
        "description": "창업 1년만에 일어난 일 😱",
        "music": "♪ Motivational Track",
        "likes": "23.5K",
        "comments": "2.3K",
        "shares": "1.2K",
        "isLiked": false
    }
];

function LOAD() {
    // 비디오 데이터 로드
    $data.videos = videos;
}

function ACTION(data) {
    var action = data.action;

    switch(action) {
        case "video-like-toggled":
            handleLikeToggle(data);
            break;
        case "video-liked":
            handleDoubleTapLike(data);
            break;
        case "share-kakao":
            shareToKakao(data["video-id"]);
            break;
        case "share-instagram":
            shareToInstagram(data["video-id"]);
            break;
        case "download-video":
            downloadVideo(data["video-id"]);
            break;
    }
}

function handleLikeToggle(data) {
    // 서버에 좋아요 상태 업데이트
    console.log("Like toggled for video:", data["video-id"], "Liked:", data["is-liked"]);
}

function handleDoubleTapLike(data) {
    // 더블 탭 좋아요 처리
    var videoId = data["video-id"];
    console.log("Double tap like for video:", videoId);
}

function shareToKakao(videoId) {
    console.log("Sharing to Kakao:", videoId);
    // 카카오톡 공유 구현
}

function shareToInstagram(videoId) {
    console.log("Sharing to Instagram:", videoId);
    // 인스타그램 공유 구현
}

function downloadVideo(videoId) {
    console.log("Downloading video:", videoId);
    $alert.show("비디오 다운로드를 시작합니다");
    // 비디오 다운로드 구현
}
