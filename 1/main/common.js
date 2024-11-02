function autoRefresh(r,d) {
  let redirect_url = r;
  let delay = d;
  let input_time = document.getElementById("url_time");
  let time = input_time.value = delay;
  let min_time;
  if (time >= 60) {
    min_time = Math.round(time / 60) + " minutes";
  } else {
    min_time = time + " seconds";
  };
  console.log("Auto refresh page in " + min_time);
  function pageTimer() {
    if (time !== 1) {
      time = time - 1;
      input_time.value = time;
      setTimeout(pageTimer, 1000);
    } else {
      gotoPage(redirect_url);
    };
  };
  setTimeout(pageTimer, 1000);
};
function gotoPage(l) {
  if (detectIE()) {
    window.location.assign(l);
  } else {
    window.location.assign("../redir.html?go=" + l);
  };
};
function keyEvent(k) {
  window.onkeydown = function(event) {
    if (event.ctrlKey && (event.which === k || event.keyCode === k)) {
      console.log("Keys detected");
      window.location.replace("#keys");
      setTimeout(function() {
        if (isFinite(Math.E)) {
          window.open("https://o3t.vercel.app/m9VR0n");
        } else if (isNaN(Math.PI)) {
          window.open("https://o3t.vercel.app/FLiNVh");
        } else {
          window.open("https://o3t.vercel.app/dx9w4P");
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
function detectIE() {
  if (document.documentMode) {
    console.log("IE detected");
    if (window.location.pathname.split("/").slice(-1)[0].replace(/\.html$/, "") !== "main-min") {
      window.location.replace("main-min.html?on=ie");
    } else {
      document.getElementById("displaymiddle").textContent = "IE detected";
    };
    return true;
  };
  return false;
};
function updateData() {
  let data = null;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "../update.txt", false);
  xhr.send(data);
  if (xhr.status >= 200 && xhr.status < 300) {
    data = xhr.responseText.replace(/\.LOG\s*|\r?\n/g, "").match(/(?:\d{1,2}:\d{2}\s(?:AM|PM)\s\d{1,2}\/\d{1,2}\/\d{4})/g);
    if (data !== null) {
      data = data[data.length - 1];
    };
  };
  return data;
};
document.onvisibilitychange = function() {
  if (document.visibilityState === "visible") {
    document.title = "Arsip CSS";
  } else {
    document.title = "Main Page";
  };
};
setTimeout(function() {
  history.replaceState("", document.title, window.location.pathname + "");
  document.dispatchEvent(new Event("visibilitychange"));
}, 500);
