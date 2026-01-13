function TAPPED(info) {
    // 댓글 화면으로 이동
    $popup.show({
        "catalog": "popup_comments",
        "video-id": $video.id,
        "comments": $video.comments
    });
}
