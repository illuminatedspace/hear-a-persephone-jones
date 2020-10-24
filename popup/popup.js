let playButton = document.getElementById("play");
let pauseButton = document.getElementById("pause");
let debugButton = document.getElementById("debug");
let volumeSlider = document.getElementById("volume");

pauseButton.onclick = function (element) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      file: "/scripts/stop.js",
    });
  });
};

playButton.onclick = function (element) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      file: "/scripts/start.js",
    });
  });
};

debugButton.onclick = function (element) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      file: "/scripts/debug.js",
    });
  });
};

volumeSlider.onchange = function (element) {
  console.log('ONCHANGE', element)
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {PJ_VOLUME: volume}, function(response) {
      if(!response.PJ_VOLUME_UPDATED){
        console.error("Volume Not Updated");
      } else {
        console.log("Volume update successful!");
      }
    });
  });
}