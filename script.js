const frame = document.getElementById("frame");
const tabsDiv = document.getElementById("tabs");

let tabs = [];
let currentTab = 0;

// 🔥 YOUR WORKER URL
const proxy = "https://spring-shadow-dd89.awsomemathgamesteam.workers.dev/";

// Create tab
function newTab(url = "https://example.com") {
  tabs.push(url);
  currentTab = tabs.length - 1;
  renderTabs();
  loadTab();
}

// Switch tab
function switchTab(i) {
  currentTab = i;
  loadTab();
  renderTabs();
}

// Render tabs
function renderTabs() {
  tabsDiv.innerHTML = "";
  tabs.forEach((t, i) => {
    const el = document.createElement("div");
    el.className = "tab " + (i === currentTab ? "active" : "");
    el.innerText = "Tab " + (i + 1);
    el.onclick = () => switchTab(i);
    tabsDiv.appendChild(el);
  });
}

// Load tab with proxy
function loadTab() {
  const url = tabs[currentTab];
  const proxied = proxy + "/service/" + btoa(encodeURIComponent(url));
  frame.src = proxied;
}

// Go button
function go() {
  let input = document.getElementById("urlInput").value.trim();

  if (!input.startsWith("http")) {
    input =
      "https://www.google.com/search?q=" + encodeURIComponent(input);
  }

  tabs[currentTab] = input;
  loadTab();
}
// 🕶️ Cloaker presets

function cloakGoogle() {
  document.title = "Google";
  document.getElementById("favicon").href =
    "https://www.google.com/favicon.ico";
}

function cloakClassroom() {
  document.title = "Classes";
  document.getElementById("favicon").href =
    "https://ssl.gstatic.com/classroom/favicon.png";
}

function cloakReset() {
  document.title = "My Browser";
  document.getElementById("favicon").href = "";
}
