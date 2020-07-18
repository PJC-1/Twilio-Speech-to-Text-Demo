console.log("sanity check");

window.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("button");
  const result = document.getElementById("result");
  const main = document.getElementsByTagName("main")[0];
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
  if (typeof SpeechRecognition === "undefined") {
    button.remove();
    const message = document.getElementById("message");
    message.removeAttribute("hidden");
    message.setAttribute("aria-hidden", "false");
  } else {
    console.log("supported browser");
  }
});
