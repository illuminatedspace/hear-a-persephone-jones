console.log("PLAY");
var lastLog = "";
function playByPlay() {
  var firstGameWidget = document.querySelector(".GameWidget");
  var logTextArray = Array.from(firstGameWidget.querySelectorAll(".Widget-Log-Line"));
  var logLines = logTextArray.map(node => node.innerText);

  if (JSON.stringify(logLines) !== lastLog) {
    // get volume off window set by message event listener
    var volume = window.PJ_VOLUME || 100;
    var synth = window.speechSynthesis;
    logLines.forEach(line => {
      utterance = new SpeechSynthesisUtterance(line)
      utterance.volume = volume * .01;
      synth.speak(utterance);
    });
    lastLog = JSON.stringify(logLines);
  }
  window.PERSEPHONE_REQUEST_ID = window.requestAnimationFrame(playByPlay);
}
window.requestAnimationFrame(playByPlay);
