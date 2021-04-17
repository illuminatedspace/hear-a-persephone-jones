console.log("Script Running")

chrome.runtime.onMessage.addListener(function async(request, sender, sendResponse) {
    console.log({ request, sender, sendResponse });
    if (request.SET_PJ_VOLUME) {
        // window.PJ_VOLUME = request.SET_PJ_VOLUME;
        // sendResponse({PJ_VOLUME: window.PJ_VOLUME});
        var NEW_PJ_VOLUME = request.SET_PJ_VOLUME;
        await chrome.storage.local.set({ PJ_VOLUME: NEW_PJ_VOLUME });
        sendResponse({ PJ_VOLUME: NEW_PJ_VOLUME });
    } if (request.GET_PJ_VOLUME) {
        // add if or try for can't get PJ VOLUME
        var PJ_VOLUME = await chrome.storage.local.get("PJ_VOLUME");
        console.log("PJ VOLUME ONSTART GET", PJ_VOLUME);
        sendResponse({ PJ_VOLUME });
    }
});