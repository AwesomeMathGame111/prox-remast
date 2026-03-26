const frame = document.getElementById("frame");
const tabsDiv = document.getElementById("tabs");

let tabs = [];
let currentTab = 0;

// 🔥 PUT YOUR WORKER URL HERE
const proxy = "https://spring-shadow-dd89.awsomemathgamesteam.workers.dev/";

// Create new tab
function newTab(url = "https://example.com") {
  tabs.push(url);
  currentTab = tabs.length - 1;
  renderTabs();
  loadTab();
}

// Switch tab
function switchTab(index) {
  currentTab = index;
  loadTab();
  renderTabs();
}

// Render tabs UI
function renderTabs() {
  tabsDiv.innerHTML = "";
  tabs.forEach((tab, i) => {
    const el = document.createElement("div");
    el.className = "tab " + (i === currentTab ? "active" : "");
    el.innerText = "Tab " + (i + 1);
    el.onclick = () => switchTab(i);
    tabsDiv.appendChild(el);
  });
}

// Load current tab
function loadTab() {
  frame.src = tabs[currentTab];
}

// 🔥 SMART GO FUNCTION (proxy + fallback)
function go() {
  let input = document.getElementById("urlInput").value.trim();

  if (!input.startsWith("http")) {
    input = "https://www.google.com/search?q=" + encodeURIComponent(input);
  }

  tabs[currentTab] = input;

const proxied = proxy + "/proxy/" + btoa(input);
  
  loadWithFallback(proxied, input);
}

// 🔥 PROXY FALLBACK SYSTEM
function loadWithFallback(proxyUrl, originalUrl) {
  let failed = false;

  frame.src = proxyUrl;

  const timeout = setTimeout(() => {
    failed = true;
    window.open(originalUrl, "_blank");
  }, 4000);

  frame.onload = () => {
    if (!failed) {
      clearTimeout(timeout);
    }
  };
}

// Quick bookmarks
function quick(url) {
  tabs[currentTab] = url;
  loadWithFallback(proxy + "/proxy/" + btoa(url), url);
}
// Start with one tab
newTab();
