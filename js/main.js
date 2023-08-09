window.onload = function() {
    setTimeout(function() {
        const text = document.querySelector(".text");
        text.textContent = "";
        let i = 0;
        const message = "Eyes are the windows to the soul, let us frame them beautifully!";
        const interval = setInterval(() => {
            if (i >= message.length) {
                clearInterval(interval);
                return;
            }
            text.textContent += message[i];
            i++;
        }, 45);
    }, 10);
}