const frame = document.getElementById("frame");
const tabsDiv = document.getElementById("tabs");

let tabs = [];
let currentTab = 0;

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

  const blocked = ["google.com", "youtube.com", "discord.com"];

  if (blocked.some(site => input.includes(site))) {
    window.open(input, "_blank"); // 🔥 opens normally
  } else {
    tabs[currentTab] = input;
    loadTab();
  }
}
