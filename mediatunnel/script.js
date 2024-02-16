document.addEventListener("DOMContentLoaded", function() {
    const bubbleContainers = document.querySelectorAll(".bubble-container--left, .bubble-container--right, .video-container");
    
    bubbleContainers.forEach((container, index) => {
      setTimeout(() => {
        container.classList.remove("pause");
      }, index * 2000); // 2초 간격으로 대화가 나타나도록 설정, 조정 가능
    });
  });
  