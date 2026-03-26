const frame = document.getElementById("frame");

const proxy = "https://your-worker.workers.dev";

function go() {
  let input = document.getElementById("urlInput").value.trim();

  if (!input.startsWith("http")) {
    input = "https://www.google.com/search?q=" + encodeURIComponent(input);
  }

  frame.src = proxy + "/?url=" + encodeURIComponent(input);
}
