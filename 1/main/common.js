function autoRefresh(r,d) {
  let redirect_url = r;
  let delay = d;
  let input_time = document.getElementById("url_time");
  let time = input_time.value = delay;
  let min_time;
  if (time >= 60) {
    min_time = time / 60 + " minutes";
  } else {
    min_time = time + " seconds";
  };
  console.log("Auto refresh page in " + min_time);
  function redirect_page() {
    if (time !== 1) {
      time = time - 1;
      input_time.value = time;
      setTimeout(redirect_page, 1000);
    } else {
      window.location.href = redirect_url;
    };
  };
  setTimeout(redirect_page, 1000);
};
function gotoPage(l) {
  if (document.documentMode) {
    window.location.replace(l);
  } else {
    window.location.replace("../redir.html?go=" + l);
  };
};
function keyEvent(k) {
  window.onkeydown = function(event) {
    if (event.ctrlKey && (event.which === k || event.keyCode === k)) {
      console.log("Keys detected");
      window.location.replace("#keys");
      setTimeout(function() {
        if (isFinite(Math.E)) {
          window.open("http://gg.gg/13vbhf");
        } else {
          window.open("http://gg.gg/1bc20v");
        };
        window.location.replace("#main");
      }, 100);
    };
  };
};
function adBlocker() {
  setTimeout(function() {
    console.log("Adblocker detected");
    window.location.replace("#adblock");
    setTimeout(function() {
      history.replaceState("", document.title, window.location.pathname + "");
      setTimeout(function() {
        document.getElementById("displaymiddle").textContent = "Adblocker detected";
      }, 1000);
    }, 100);
  }, 1000);
};
function updateData() {
  let data = null;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "../update.txt", false);
  xhr.send(null);
  if (xhr.status >= 200 && xhr.status < 300) {
    data = xhr.responseText.replace(/\.LOG\s*|\r?\n/, "");
  };
  return data;
};
document.addEventListener("visibilitychange", function() {
  if (document.visibilityState === "visible") {
    document.title = "Arsip CSS";
  } else {
    document.title = "Main Page";
  };
});
setTimeout(function() {
  history.replaceState("", document.title, window.location.pathname + "");
  document.dispatchEvent(new Event("visibilitychange"));
}, 500);
