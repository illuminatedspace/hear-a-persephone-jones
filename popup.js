let playButton = document.getElementById("play");
let pauseButton = document.getElementById("pause");
let debugButton = document.getElementById("debug");

pauseButton.onclick = function (element) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      code:
        'console.log("PAUSE"); cancelAnimationFrame(window.PERSEPHONE_REQUEST_ID)',
    });
  });
};

playButton.onclick = function (element) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      code:
        'console.log("PLAY"); var lastLog = ""; function playByPlay() {var logText = document.querySelector(".GameWidget-Log-Content").innerText; console.log("LAPRAS", logText); if (logText !== lastLog) { var synth = window.speechSynthesis; var toSay = new SpeechSynthesisUtterance(logText); synth.speak(toSay); lastLog = logText;} window.PERSEPHONE_REQUEST_ID = window.requestAnimationFrame(playByPlay);}window.requestAnimationFrame(playByPlay);',
    });
  });
};

debugButton.onclick = function (element) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      code:
        'console.log("DEBUG"); function modifyGameLog() {var gameLogNode = document.querySelector(".GameWidget-Log-Content");if (!gameLogNode) {  var mainNode = document.querySelector(".Main-Body");  gameLogNode = document.createElement("div");  gameLogNode.className = "GameWidget-Log-Content";  mainNode.appendChild(gameLogNode);}gameLogNode.innerText = Math.ceil(Math.random() * 10);window.setTimeout(function () {modifyGameLog();}, 3000);} modifyGameLog();',
    });
  });
};

// function modifyGameLog() {
//   var gameLogNode = document.querySelector(".GameWidget-Log-Content");
//   if (!gameLogNode) {
//     var mainNode = document.querySelector(".Main-Body");
//     gameLogNode = document.createElement("div");
//     gameLogNode.className = "GameWidget-Log-Content";
//     mainNode.appendChild(gameLogNode);
//   }
//   gameLogNode.innerText = Math.ceil(Math.random() * 10);
//   window.setTimeout(function () {
//     modifyGameLog();
//   }, 3000);
// }
// modifyGameLog();

// var lastLog = "";
// function playByPlay() {
//   var logText = document.querySelector(".GameWidget-Log-Content").innerText;
//   if (logText !== lastLog) {
//     var synth = window.speechSynthesis;
//     var toSay = new SpeechSynthesisUtterance(logText);
//     synth.speak(toSay);
//     lastLog = logText;
//   }
//   window.requestAnimationFrame(playByPlay);
// }
// window.requestAnimationFrame(playByPlay);
