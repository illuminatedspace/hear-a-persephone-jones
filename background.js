chrome.runtime.onInstalled.addListener(function () {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {
              hostEquals: "www.blaseball.com",
              schemes: ["https", "http"],
            },
          }),
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()],
      },
    ]);
  });
});

chrome.tabs.onUpdated.addListener(
  function (tabId, changeInfo, tab) {
    if (changeInfo.status === "complete") {
      chrome.scripting.executeScript({
        target: { tabId, allFrames: true },
        files: ["/scripts/onStart.js"]
      });
    }
  });