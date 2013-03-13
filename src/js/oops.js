var oops = {
  setBadgeForUrl: function(url) {
    var label = this.getSettingNameForUrl(url);

    chrome.browserAction.setBadgeBackgroundColor({color:[255, 51, 255, 255]});
    chrome.browserAction.setBadgeText({text:label.slice(0, 4)});
  },
  getSettingNameForUrl: function(url) {
    var setting = this.getSettingForUrl(url);
    return setting.name || "";
  },
  getSettingForUrl: function(url) {
    try {
      var targetMap = JSON.parse(localStorage['targetMap']);

      for(var target in targetMap) {
        if (url.match(target)) {
          var name    = targetMap[target];
          var setting = JSON.parse(localStorage['setting'])[name];
          setting['name'] = name;
          if (!setting['label']) setting['label'] = name;

          var ignores = setting['ignores'];
          if (!ignores) return setting;

          for (var i = 0; i < ignores.length; i++) {
            var ignore = ignores[i];
            if (url.match(ignore)) return {};
          }
          return setting;
        }
      }
    } catch(e) {
      // no setting
    }

    return {};
  }
}