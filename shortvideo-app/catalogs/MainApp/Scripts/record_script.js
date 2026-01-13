var isRecording = false;
var recordingTimer = null;
var recordingDuration = 0;

function TAPPED(info) {
    if (!isRecording) {
        startRecording();
    } else {
        stopRecording();
    }
}

function startRecording() {
    isRecording = true;
    recordingDuration = 0;

    // 카메라 녹화 시작
    $camera.startRecording();

    // 버튼 스타일 변경
    $btn_record.text = "⏹";
    $btn_record.backgroundColor = "#FFFFFF";
    $record_hint.text = "녹화 중...";

    // 녹화 시간 카운터 시작
    recordingTimer = setInterval(function() {
        recordingDuration++;
        var minutes = Math.floor(recordingDuration / 60);
        var seconds = recordingDuration % 60;
        $record_hint.text = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

        // 최대 60초 제한
        if (recordingDuration >= 60) {
            stopRecording();
        }
    }, 1000);
}

function stopRecording() {
    isRecording = false;

    // 카메라 녹화 중지
    $camera.stopRecording(function(result) {
        if (result && result.videoPath) {
            // 녹화 완료 후 편집 화면으로 이동
            $popup.show({
                "catalog": "catalog_edit",
                "video-path": result.videoPath
            });
        }
    });

    // 타이머 중지
    if (recordingTimer) {
        clearInterval(recordingTimer);
        recordingTimer = null;
    }

    // 버튼 스타일 복원
    $btn_record.text = "⏺";
    $btn_record.backgroundColor = "#FF0050";
    $record_hint.text = "탭하여 녹화";
}
