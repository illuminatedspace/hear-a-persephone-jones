let playButton = document.getElementById("play");
let pauseButton = document.getElementById("pause");
let debugButton = document.getElementById("debug");

pauseButton.onclick = function (element) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      file: "/functions/stop.js",
    });
  });
};

playButton.onclick = function (element) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      file: "/functions/start.js",
    });
  });
};

debugButton.onclick = function (element) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      file: "/functions/debug.js",
    });
  });
};
