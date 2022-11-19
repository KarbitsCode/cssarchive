function AutoRefresh(t) {
    let redirect_url = "../web.html";
    let delay = 1;
    let input_time = document.getElementById("url_time");
    let time = input_time.value = delay;
    
    function redirect_page() {
        if (time !== 1) {
            time -= 1;
            input_time.value = time;
            setTimeout(redirect_page, 1000);
        } else {
            window.location.href = redirect_url;
        }
    }
    setTimeout(redirect_page, t);
}