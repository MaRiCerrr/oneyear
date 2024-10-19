const videoSources = [
    "1.mp4",
    "2.mp4", // Đường dẫn đến video thứ hai
];

let currentVideoIndex = 0; // Chỉ số video hiện tại

function goBack() {
    window.history.back(); // Quay lại trang trước
}

function nextVideo() {
    // Tăng chỉ số video
    currentVideoIndex++;
    
    // Kiểm tra xem chỉ số có vượt quá số lượng video không
    if (currentVideoIndex >= videoSources.length) {
        currentVideoIndex = 0; // Quay lại video đầu tiên
    }

    // Cập nhật nguồn video và phát
    const videoElement = document.getElementById("video");
    videoElement.src = videoSources[currentVideoIndex];
    videoElement.load(); // Tải video mới
    videoElement.play(); // Phát video
}
