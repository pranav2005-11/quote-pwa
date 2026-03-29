const quotes = [
  "Believe in yourself!",
  "Stay positive, work hard!",
  "Dream big and dare to fail.",
  "Success is not final, failure is not fatal.",
  "Do something today your future self will thank you for."
];

function newQuote() {
  let random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[random];

  // Background color change
  let colors = ["#ff9a9e", "#a18cd1", "#fbc2eb", "#fad0c4", "#84fab0"];
  document.body.style.background = colors[random];
}
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js")
    .then(() => console.log("Service Worker Registered"));
}