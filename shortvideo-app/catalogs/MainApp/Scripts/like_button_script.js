function TAPPED(info) {
    // 좋아요 버튼 클릭
    var currentLikes = parseInt($video.likes) || 0;
    var isLiked = $video.isLiked || false;

    if (isLiked) {
        // 좋아요 취소
        $video.likes = (currentLikes - 1).toString();
        $video.isLiked = false;
        $btn_like.image = "Images/icon_heart.png";
    } else {
        // 좋아요 추가
        $video.likes = (currentLikes + 1).toString();
        $video.isLiked = true;
        $btn_like.image = "Images/icon_heart_filled.png";

        // 애니메이션 효과
        $btn_like.animate({
            "scale": "1.3"
        }, 0.1, function() {
            $btn_like.animate({
                "scale": "1.0"
            }, 0.1);
        });
    }

    // 데이터 업데이트 액션
    $catalog.ACTION("video-like-toggled", {
        "video-id": $video.id,
        "is-liked": $video.isLiked,
        "likes": $video.likes
    });
}
