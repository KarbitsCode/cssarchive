const script_dir = document.currentScript.src;
function autoRefresh(r,d=1000) {
  if (!window.humanizeDuration) {
    loadScript("humanized.js");
  };
  const input_time = Object.assign(document.createElement('input'), {
    type: "text",
    size: 1,
    hidden: true,
    readOnly: true
  });
  let time = input_time.value = d;
  const min_time = humanizeDuration(Math.ceil(time * 1000));
  const redirect_url = getRoot() + r;
  console.log("Auto refresh page in " + min_time);
  console.log("Target redirect: " + redirect_url);
  document.body.appendChild(input_time);
  function pageTimer() {
    if (time >= 1) {
      input_time.value = time = --time;
      setTimeout(pageTimer, 1000);
    } else {
      input_time.remove();
      gotoPage(redirect_url);
    };
  };
  setTimeout(pageTimer, 1000);
};
function gotoPage(l) {
  console.log("Redirecting to: " + l);
  if (detectIE()) {
    location.assign(l);
  } else {
    location.assign(getRoot() + "redir.html?go=" + encodeURIComponent(l));
  };
};
function keyEvent(k) {
  window.addEventListener("keydown", function(event) {
    if (event.ctrlKey && (event.which === k || event.keyCode === k)) {
      console.log("Keys detected");
      setUrlHash("keys");
      setTimeout(function() {
        if (isFinite(Math.E)) {
          window.open("https://o3t.vercel.app/m9VR0n");
        } else if (isNaN(Math.PI)) {
          window.open("https://o3t.vercel.app/FLiNVh");
        };
        setUrlHash("main");
      }, 100);
    };
  });
};
function adBlocker() {
  setTimeout(function() {
    console.log("Adblocker detected");
    setUrlHash("adblock");
    setTimeout(function() {
      setUrlHash(null);
      setTimeout(function() {
        document.getElementById("displaymiddle").textContent += "Adblocker detected\n";
      }, 1000);
    }, 100);
  }, 1000);
};
function detectIE() {
  if (document.documentMode) {
    console.log("IE detected");
    const url = location.pathname.replace(/\.html$/, "").split("/");
    if (url.some((_, i) => (url[i] === "1" && url[i + 1] === "main")) && url.slice(-1)[0] !== "main-min") {
      location.replace("main-min.html?on=ie");
    } else {
      document.getElementById("displaymiddle").textContent += "IE detected\n";
    };
    return true;
  };
  return false;
};
function networkRequest(s) {
  const xhr = new XMLHttpRequest();
  let data = null;
  xhr.open("HEAD", s, false);
  xhr.send(data);
  if (xhr.status >= 200 && xhr.status < 600) {
    xhr.open("GET", s, false);
    xhr.send(data);
    if (xhr.status >= 200 && xhr.status < 300) {
      data = xhr.responseText;
    };
  };
  return data;
};
function loadScript(s) {
  const result = networkRequest(new URL(".", script_dir).href + s);
  if (result !== null) {
    eval(result);
  };
};
function updateData() {
  const result = networkRequest(getRoot() + "update.txt");
  let data = result.replace(/\.LOG\s*|\r?\n/g, "").match(/(?:\d{1,2}:\d{2}\s(?:AM|PM)\s\d{1,2}\/\d{1,2}\/\d{4})/g);
  if (data !== null) {
    data = data[data.length - 1];
  };
  return data;
};
function getMirrors() {
  const result = networkRequest(getRoot() + "mirror.txt");
  let data = result.split(/\r?\n/).map(line => line.trim()).filter(line => line.length > 0);
  return data;
};
function getRoot() {
  const url = location.pathname.split("/");
  return url.slice(0, url.indexOf("1")).join("/") + "/";
};
function setUrlHash(t) {
  const target = new URL(location.href);
  target.hash = t || "";
  history.replaceState(null, document.title, target);
  window.dispatchEvent(new HashChangeEvent('hashchange'));
};
function setUrlQuery(t) {
  const target = new URL(location.href);
  const [k, v] = t.split("=", 2);
  if (k) {
    if (v === "") {
      target.searchParams.delete(k);
    } else {
      target.searchParams.set(k, v);
    };
    history.replaceState(null, document.title, target);
  };
};
document.addEventListener("DOMContentLoaded", function(event) {
  document.head.appendChild(Object.assign(document.createElement("script"), { src: "https://cdnjs.cloudflare.com/polyfill/v3/polyfill.js?version=4.8.0&features=default" }));
  document.head.appendChild(Object.assign(document.createElement("link"), { href: new URL("common.css", new URL(".", script_dir).href).href, rel: "stylesheet" }));
  document.querySelectorAll("a[title]").forEach(function(element) {
    if (!element.hasAttribute("onclick") && element.getAttribute("href") !== "javascript:void(0)") {
      element.addEventListener("click", function(event) {
        event.preventDefault();
        event.stopPropagation();
        gotoPage(event.target.href.replace(/\.*$/, ""));
      });
    };
  });
  document.querySelectorAll("iframe[title]").forEach(function(element) {
    element.addEventListener("load", function(event) {
      element.contentWindow.document.body.style.setProperty("zoom", "50%");
      element.parentElement.addEventListener("click", function(event) {
        if (!event.target.closest("a")) { 
          event.srcElement.querySelector("a").click(); 
        };
      });
    });
  });
});
document.addEventListener("visibilitychange", function(event) {
  if (document.querySelector("meta[name=description]")) {
    if (document.visibilityState === "visible") {
      document.title = document.querySelector("meta[name=description]").getAttribute("content");
    } else {
      document.title = "Main Page";
    };
  };
});
setInterval(function() {
  document.cookie = "acceptcookie=okg; path=/; max-age=1";
}, 100);
setTimeout(function() {
  setUrlHash(null);
  setUrlQuery("on=");
  document.dispatchEvent(new Event("visibilitychange"));
}, 500);
setTimeout(function() {
  if (location.pathname.includes("main")) {
    setUrlHash("main");
  };
  navigator.storage.estimate().then(function({ quota, usage }) {
    if ((quota - usage) < (9.5 * 1024 ** 3)) {
      console.log("Private browsing detected");
      document.getElementById("displaymiddle")?.insertAdjacentText("beforeend", "Private browsing detected");
    };
  });
}, 2000);
