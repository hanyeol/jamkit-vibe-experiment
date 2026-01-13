function TAPPED(info) {
    // 사용자 프로필 페이지로 이동
    $popup.show({
        "catalog": "catalog_profile",
        "user-id": $video.author.id,
        "username": $video.author.username
    });
}
