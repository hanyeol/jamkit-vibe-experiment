// 샘플 프로필 데이터
var profileData = {
    "username": "나의프로필",
    "userAvatar": "https://i.pravatar.cc/150?img=10",
    "bio": "잼킷으로 앱 만드는 개발자 👨‍💻\n매일 새로운 것을 배워요!",
    "followingCount": "123",
    "followersCount": "5.6K",
    "likesCount": "23.4K",
    "userVideos": [
        {
            "id": "v1",
            "thumbnail": "https://picsum.photos/200/300?random=1",
            "views": "👁 1.2K"
        },
        {
            "id": "v2",
            "thumbnail": "https://picsum.photos/200/300?random=2",
            "views": "👁 890"
        },
        {
            "id": "v3",
            "thumbnail": "https://picsum.photos/200/300?random=3",
            "views": "👁 5.3K"
        },
        {
            "id": "v4",
            "thumbnail": "https://picsum.photos/200/300?random=4",
            "views": "👁 2.1K"
        },
        {
            "id": "v5",
            "thumbnail": "https://picsum.photos/200/300?random=5",
            "views": "👁 678"
        },
        {
            "id": "v6",
            "thumbnail": "https://picsum.photos/200/300?random=6",
            "views": "👁 3.4K"
        }
    ]
};

function LOAD() {
    // 프로필 데이터 로드
    for (var key in profileData) {
        $data[key] = profileData[key];
    }
}
