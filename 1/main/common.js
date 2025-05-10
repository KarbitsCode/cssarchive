function autoRefresh(r,d) {
  let redirect_url = r;
  let delay = d;
  let input_time = document.getElementById("url_time");
  let time = input_time.value = delay;
  let min_time;
  if (time >= 60) {
    min_time = Math.round(time / 60) + " minute" + (Math.abs(Math.round(time / 60)) <= 1 ? "" : "s");
  } else {
    min_time = time + " second" + (Math.abs(time) <= 1 ? "" : "s");
  };
  console.log("Auto refresh page in " + min_time);
  console.log("Target redirect: " + redirect_url);
  function pageTimer() {
    if (time >= 1) {
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
  console.log("Redirecting to: " + l);
  if (detectIE()) {
    window.location.assign(l);
  } else {
    window.location.assign(getRoot() + "/redir.html?go=" + l);
  };
};
function keyEvent(k) {
  window.addEventListener("keydown", function(event) {
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
  });
};
function adBlocker() {
  setTimeout(function() {
    console.log("Adblocker detected");
    window.location.replace("#adblock");
    setTimeout(function() {
      history.replaceState(null, document.title, window.location.pathname);
      setTimeout(function() {
        document.getElementById("displaymiddle").textContent = "Adblocker detected";
      }, 1000);
    }, 100);
  }, 1000);
};
function detectIE() {
  if (document.documentMode) {
    console.log("IE detected");
    let url = window.location.pathname.replace(/\.html$/, "").split("/");
    if (url.some(function(_, i) {return (url[i] === "1" && url[i + 1] === "main")}) && url.slice(-1)[0] !== "main-min") {
      window.location.replace("main-min.html?on=ie");
    } else {
      document.getElementById("displaymiddle").textContent = "IE detected";
    };
    return true;
  };
  return false;
};
function updateData() {
  const xhr = new XMLHttpRequest();
  let data = null;
  let src = getRoot() + "/update.txt";
  xhr.open("HEAD", src, false);
  xhr.send(data);
  if (xhr.status >= 200 && xhr.status < 600) {
    xhr.open("GET", src, false);
    xhr.send(data);
    if (xhr.status >= 200 && xhr.status < 300) {
      data = xhr.responseText.replace(/\.LOG\s*|\r?\n/g, "").match(/(?:\d{1,2}:\d{2}\s(?:AM|PM)\s\d{1,2}\/\d{1,2}\/\d{4})/g);
      if (data !== null) {
        data = data[data.length - 1];
      };
    };
  };
  return data;
};
function getRoot() {
  let url = window.location.pathname.split("/");
  let res = url.reverse().slice(url.indexOf("1") + 1).reverse().join("/");
  return res === '' ? '/' : res;
};
document.addEventListener("DOMContentLoaded", function(event) {
  document.querySelectorAll("a[title]").forEach(function(element) {
    if (!element.hasAttribute("onclick") && element.getAttribute("href") !== "javascript:void(0)") {
      element.addEventListener("click", function(event) {
        event.preventDefault();
        gotoPage(event.target.href.replace(/\.*$/, ""));
      });
    }
  });
  document.querySelectorAll("iframe").forEach(function(element) {
    element.addEventListener("load", function(event) {
      element.contentWindow.document.body.style.setProperty("zoom", "50%");
    });
  });
});
document.addEventListener("visibilitychange", function(event) {
  if (document.visibilityState === "visible") {
    document.title = document.querySelector("meta[name=description]").getAttribute("content");
  } else {
    document.title = "Main Page";
  };
});
setTimeout(function() {
  history.replaceState(null, document.title, window.location.pathname);
  document.dispatchEvent(new Event("visibilitychange"));
}, 500);
setTimeout(function() {
  window.location.replace("#main");
}, 2000);
