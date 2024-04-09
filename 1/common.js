function autoRefresh(r,t) {
  let redirect_url = r;
  let delay = 1;
  let input_time = document.getElementById("url_time");
  let time = input_time.value = delay;
  let min_time = Math.floor(t / 60000);
  console.log("Auto refresh page in " + min_time + " minutes");
  function redirect_page() {
    if (time !== 1) {
      time -= 1;
      input_time.value = time;
      setTimeout(redirect_page, 1000);
    } else {
      window.location.href = redirect_url;
    };
  };
  setTimeout(redirect_page, t);
};
function gotoPage(l) {
  if (window.document.documentMode) {
    window.location.replace(l);
  } else {
    window.location.replace("../redir.html?go=" + l);
  };
};
function keyEvent(k) {
  window.onkeydown = function(event) {
    if (event.ctrlKey && (event.which == k || event.keyCode == k)) {
      console.log("Keys detected");
      window.location.replace("#keys");
      setTimeout(function() {
        window.open("http://gg.gg/13vbhf");
        window.location.replace("#main");
      }, 100);
    };
  };
};
function adBlocker(u) {
  console.log("AdBlocker detected");
  setTimeout(function() {
    window.location.replace("#adblock");
    alert("AdBlocker Detected");
    window.location.replace("#main");
    window.location.replace(u);
  }, 5000);
};
setTimeout(function() {
  history.pushState("", document.title, window.location.pathname + "");
  setInterval(function() {
    if (document.visibilityState === "visible") {
      document.title = "Arsip CSS";
    } else {
      document.title = "Main Page";
    };
  }, 100);
}, 500);
