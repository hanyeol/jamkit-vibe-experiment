function TAPPED(info) {
    // 갤러리에서 비디오 선택
    $media.pick({
        "type": "video",
        "max-duration": 60
    }, function(result) {
        if (result && result.videoPath) {
            // 선택한 비디오를 편집 화면으로 이동
            $popup.show({
                "catalog": "catalog_edit",
                "video-path": result.videoPath
            });
        }
    });
}
