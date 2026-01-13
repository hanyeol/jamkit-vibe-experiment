function TAPPED(info) {
    // 공유 액션 시트 표시
    $sheet.show({
        "title": "비디오 공유하기",
        "items": [
            {"title": "링크 복사", "value": "copy-link"},
            {"title": "카카오톡 공유", "value": "kakao"},
            {"title": "인스타그램 공유", "value": "instagram"},
            {"title": "다운로드", "value": "download"}
        ]
    }, function(result) {
        if (result) {
            handleShare(result.value);
        }
    });
}

function handleShare(type) {
    switch(type) {
        case "copy-link":
            $clipboard.set($video.shareUrl);
            $alert.show("링크가 복사되었습니다");
            break;
        case "kakao":
            // 카카오톡 공유 로직
            $catalog.ACTION("share-kakao", {"video-id": $video.id});
            break;
        case "instagram":
            // 인스타그램 공유 로직
            $catalog.ACTION("share-instagram", {"video-id": $video.id});
            break;
        case "download":
            // 비디오 다운로드
            $catalog.ACTION("download-video", {"video-id": $video.id});
            break;
    }
}
