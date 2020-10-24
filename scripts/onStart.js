console.log("Script Running")

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    console.log({request, sender, sendResponse});
    if (request.SET_PJ_VOLUME) {
        window.PJ_VOLUME = request.SET_PJ_VOLUME;
        sendResponse({PJ_VOLUME: window.PJ_VOLUME});
    } if(request.GET_PJ_VOLUME) {
        sendResponse({PJ_VOLUME: window.PJ_VOLUME});
    }
});