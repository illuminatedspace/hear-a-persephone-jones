let playButton = document.getElementById("play");
let pauseButton = document.getElementById("pause");
let debugButton = document.getElementById("debug");
let volumeSlider = document.getElementById("volume");

pauseButton.onclick = function (element) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      file: "/popup/functions/stop.js",
    });
  });
};

playButton.onclick = function (element) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      file: "/popup/functions/start.js",
    });
  });
};

debugButton.onclick = function (element) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      file: "/popup/functions/debug.js",
    });
  });
};

volumeSlider.onchange = function (element) {
  console.log('ONCHANGE', element)
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      file: "/popup/functions/volume.js",
    });
  });
}