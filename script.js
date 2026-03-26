const frame = document.getElementById("frame");

function go() {
  let input = document.getElementById("urlInput").value.trim();

  if (!input.startsWith("http")) {
    input = "https://www.google.com/search?q=" + encodeURIComponent(input);
  }

  frame.src = input;
}

// 🔒 Stealth Mode Toggle
let stealth = false;

function toggleStealth() {
  stealth = !stealth;

  if (stealth) {
    document.title = "Google Classroom";
    document.getElementById("tabIcon").href =
      "https://ssl.gstatic.com/classroom/favicon.png";
  } else {
    document.title = "My Browser";
    document.getElementById("tabIcon").href =
      "https://www.google.com/favicon.ico";
  }
}

// 🔥 Auto tab cloak on load (optional)
document.title = "Google Classroom";
