(function(){
  chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
    if (details['parentFrameId'] != -1) { return ; }

    var pageUrl = details['url'];
    opps.setBadgeForUrl(pageUrl);
  });

  chrome.tabs.onActivated.addListener(function(info) {
    chrome.tabs.get(info.tabId, function(tab) {
      opps.setBadgeForUrl(tab.url);
    });
  });

  chrome.browserAction.onClicked.addListener(function(tab){
    chrome.tabs.create({
       "url": chrome.extension.getURL("options.html")
    });
  });

  chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if (request.method == "getSettingForUrl") {
      var setting = opps.getSettingForUrl(request.url);
      sendResponse({data: setting});
    } else {
      sendResponse({});
    }
  });
})();