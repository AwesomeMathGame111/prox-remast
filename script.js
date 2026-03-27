const frame = document.getElementById("frame");
const tabsDiv = document.getElementById("tabs");

let tabs = [];
let currentTab = 0;

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

// Go button
function go() {
  let input = document.getElementById("urlInput").value.trim();

  if (!input.startsWith("http")) {
    input = "https://www.google.com/search?q=" + encodeURIComponent(input);
  }

  // 🔥 create proxied version
  const proxied = proxy + "/proxy/" + btoa(input);

  // save tab
  tabs[currentTab] = input;

  // 🔥 use proxy with fallback
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

// Tab cloaking
function cloak(type) {
  if (type === "classroom") {
    document.title = "Google Classroom";
    document.getElementById("tabIcon").href =
      "https://ssl.gstatic.com/classroom/favicon.png";
  }
  if (type === "docs") {
    document.title = "Google Docs";
    document.getElementById("tabIcon").href =
      "https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico";
  }
}

// Start with one tab
newTab();
