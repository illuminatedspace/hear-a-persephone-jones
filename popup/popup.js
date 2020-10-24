let playButton = document.getElementById("play");
let pauseButton = document.getElementById("pause");
let debugButton = document.getElementById("debug");
let volumeSlider = document.getElementById("volume");

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {GET_PJ_VOLUME: true}, function(response) {
    console.log({response})
    if(!response.PJ_VOLUME){
      console.error("Volume Not Gotten");
    } else {
      console.log("Volume get successful", response.PJ_VOLUME);
      volumeSlider.value = response.PJ_VOLUME;
    }
  });
});

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

volumeSlider.onchange = function (event) {
  const volume = event.target.value;
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {SET_PJ_VOLUME: volume}, function(response) {
      if(!response.PJ_VOLUME){
        console.error("Volume Not Updated");
      } else {
        console.log("Volume update successful!");
      }
    });
  });
}