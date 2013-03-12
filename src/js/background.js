(function(){
  chrome.tabs.onActivated.addListener(function(info) {
    chrome.tabs.get(info.tabId, function(tab) {

    });
  });

  chrome.browserAction.onClicked.addListener(function(tab){
    chrome.tabs.create({
       "url": chrome.extension.getURL("options.html")
    });
  });
})();