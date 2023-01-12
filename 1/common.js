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
  setTimeout(redirect_page, 300000);
};
function gotoPage(l) {
  if (window.document.documentMode) {
    window.location.replace(l);
  } else {
    window.location.replace("../redir.html?go=" + l);
  };
};
function keyEvent(k) {
  document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && (event.which == k || event.keyCode == k)) {
      console.log("Keys Detected");
      window.location.replace("#keys");
      window.open("https://sites.google.com/view/passform/14824?read_current=1");
      window.location.replace("#navigasi");
    };
  });
};
function adBlocker(u) {
  console.log("AdBlocker Detected");
  setTimeout(function() {
    window.location.replace("#adblock");
    alert("AdBlocker Detected");
    window.location.replace(u);
  }, 5000);
};
setTimeout(function() {
  history.pushState("", document.title, window.location.pathname + "");
}, 500);