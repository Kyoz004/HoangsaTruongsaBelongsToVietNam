function checkAnswer() {
    var input = document.getElementById('user-input').value;
    var correctAnswer = "02/09/1945";

    if (input === correctAnswer) {
        // Ẩn input container và hiển thị title, flag
        document.querySelector('.input-container').style.display = 'none';
        document.querySelector('.title').style.display = 'block';
        document.querySelector('.title2').style.display = 'block';
        document.querySelector('.flag').style.display = 'block';

        // Tạo hiệu ứng cờ với các phần tử flag
        var flag = document.querySelector('.flag');
        var flagWidth = flag.offsetWidth;
        for (var i = 5; i < flagWidth; i++) {
            var flagElement = document.createElement("div");
            flagElement.classList.add("flag-element");
            flagElement.style.backgroundPosition = -i + "px 0";
            flagElement.style.animationDelay = i * 10 + "ms";
            flag.appendChild(flagElement);
        }

        // Tạo iframe để phát video
        var iframe = document.createElement("iframe");
        iframe.setAttribute("src", "https://www.youtube.com/embed/cYceR725LXY?start=44&autoplay=1");
        iframe.setAttribute("width", "0");
        iframe.setAttribute("height", "0");
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
        document.body.appendChild(iframe);

        // Hiển thị modal khi trả lời đúng
        var modal = document.getElementById("myModal");
        var span = document.getElementsByClassName("close")[0];

        modal.style.display = "block";

        span.onclick = function() {
            modal.style.display = "none";
            iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
            playMusic();
            iframe.remove();
        };

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
                iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                playMusic();
                iframe.remove();
            }
        };
    } else {
        // Hiển thị cảnh báo nếu người dùng nhập sai
        alert("Ngày bạn nhập không chính xác. Hãy thử lại!");
    }
}
