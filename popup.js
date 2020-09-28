let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", function (data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute("value", data.color);
});

changeColor.onclick = function (element) {
  let color = element.target.value;
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      code:
        'var lastLog = ""; function playByPlay() {var logText = document.querySelector(".GameWidget-Log-Content").innerText; console.log("LAPRAS", logText); if (logText !== lastLog) { var synth = window.speechSynthesis; var toSay = new SpeechSynthesisUtterance(logText); synth.speak(toSay); lastLog = logText;}window.requestAnimationFrame(playByPlay);}window.requestAnimationFrame(playByPlay);',
    });
  });
};

// function playByPlay() {
//     var logText = document.querySelector(".GameWidget-Log-Content").innerText; console.log("LAPRAS", logText);
//     if (logText !== lastLog) {
//         var synth = window.speechSynthesis;
//         var toSay = new SpeechSynthesisUtterance(logText);
//         synth.speak(toSay);
//         lastLog = logText;
//     }
//     window.requestAnimationFrame(playByPlay);
// }
// window.requestAnimationFrame(playByPlay);
