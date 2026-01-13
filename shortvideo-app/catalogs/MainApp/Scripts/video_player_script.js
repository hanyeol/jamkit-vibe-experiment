function VISIBLE() {
    // 비디오가 화면에 보일 때 자동 재생
    $player.play();
}

function INVISIBLE() {
    // 비디오가 화면에서 사라지면 일시정지
    $player.pause();
}

function READY() {
    // 비디오 준비 완료
    $player.play();
}

function TAPPED(info) {
    // 화면 탭하면 재생/일시정지 토글
    if ($player.isPlaying()) {
        $player.pause();
    } else {
        $player.play();
    }
}

function DOUBLE_TAPPED(info) {
    // 더블 탭으로 좋아요
    $catalog.ACTION("video-liked", {
        "video-id": $video.id
    });
}
