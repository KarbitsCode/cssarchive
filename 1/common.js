function autoRefresh(r,t) {
  console.log("Auto refresh page in " + Math.floor(t / 60000) + " minutes");
  let redirect_url = r;
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
      window.open("http://gg.gg/13ipsu");
      window.location.replace("#navigasi");
    };
  };
};
function adBlocker(u) {
  const urlParams = new URLSearchParams(window.location.search)
  console.log("AdBlocker detected");
  if (urlParams.get("on") == 'redir') {
    setTimeout(function() {
      window.location.replace("#adblock");
      alert("AdBlocker Detected");
      window.location.replace("#navigasi");
      window.location.replace(u);
    }, 5000);
  } else {
    console.log("Attribute on");
  };
};
setTimeout(function() {
  document.title = 'Arsip CSS';
  history.pushState("", document.title, window.location.pathname + "");
}, 500);