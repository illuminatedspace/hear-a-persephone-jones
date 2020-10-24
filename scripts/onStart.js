console.log("Script Running")

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    console.log({request, sender, sendResponse});
    if (request.PJ_VOLUME) {
        console.log("VOLUME MESSAGE", request.PJ_VOLUME);
        window.PJ_VOLUME = request.PJ_VOLUME;
    }
    sendResponse({PJ_VOLUME_UPDATED: true});
})