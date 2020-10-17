console.log("PLAY");
var lastLog = "";
function playByPlay() {
  var logText = document.querySelector(".GameWidget-Log-Content").innerText;
  if (logText !== lastLog) {
    var synth = window.speechSynthesis;
    var toSay = new SpeechSynthesisUtterance(logText);
    synth.speak(toSay);
    lastLog = logText;
  }
  window.PERSEPHONE_REQUEST_ID = window.requestAnimationFrame(playByPlay);
}
window.requestAnimationFrame(playByPlay);
