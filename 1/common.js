function autoRefresh(r) {
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
  setTimeout(redirect_page, 600000);
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
      console.log("Keys Detected");
      window.location.replace("#keys");
      window.open("http://gg.gg/13aghh");
      window.location.replace("#navigasi");
    };
  };
};
function adBlocker(u) {
  const urlParams = new URLSearchParams(window.location.search)
  console.log("AdBlocker Detected");
  if (urlParams.get("on") == 'redir') {
    setTimeout(function() {
      window.location.replace("#adblock");
      alert("AdBlocker Detected");
      window.location.replace(u);
    }, 5000);
  } else {
    console.log("Attribute On");
  };
};
setTimeout(function() {
  history.pushState("", document.title, window.location.pathname + "");
}, 500);