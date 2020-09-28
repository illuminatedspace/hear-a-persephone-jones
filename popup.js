let changeColor = document.getElementById("changeColor");

changeColor.onclick = function (element) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      code:
        'var lastLog = ""; function playByPlay() {var logText = document.querySelector(".GameWidget-Log-Content").innerText; console.log("LAPRAS", logText); if (logText !== lastLog) { var synth = window.speechSynthesis; var toSay = new SpeechSynthesisUtterance(logText); synth.speak(toSay); lastLog = logText;}window.requestAnimationFrame(playByPlay);}window.requestAnimationFrame(playByPlay);',
    });
  });
};

function modifyGameLog () {
   var gameLogNode = document.querySelector(".GameWidget-Log-Content");
   if (!gameLogNode) {
     var mainNode = document.querySelector(".Main-Body");
     gameLogNode = document.createElement("div");
     newNode.className = "GameWidget-Log-Content";
     mainNode.appendChild(newNode);
   }
   gameLogNode.innerText = Math.floor(Math.random()) * 10;
   window.setTimeout(function () {modifyGameLog}, 30000)
};
var lastLog = "";
function playByPlay() {
    var logText = document.querySelector(".GameWidget-Log-Content").innerText; console.log("LAPRAS", logText);
    if (logText !== lastLog) {
        var synth = window.speechSynthesis;
        var toSay = new SpeechSynthesisUtterance(logText);
        synth.speak(toSay);
        lastLog = logText;
    }
    window.requestAnimationFrame(playByPlay);
}
window.requestAnimationFrame(playByPlay);
