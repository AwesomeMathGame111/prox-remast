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
