console.log("PLAY");
var lastLog = "";
function playByPlay() {
  var logText = document.querySelector(".GameWidget-Log-Content").innerText;
  if (logText !== lastLog) {
    // get volume off window set by message event listener
    var volume = window.PJ_VOLUME || 100;
    var synth = window.speechSynthesis;
    var utterance = new SpeechSynthesisUtterance(logText);
    utterance.volume = volume * .01;
    synth.speak(utterance);
    lastLog = logText;
  }
  window.PERSEPHONE_REQUEST_ID = window.requestAnimationFrame(playByPlay);
}
window.requestAnimationFrame(playByPlay);
