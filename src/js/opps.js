var opps = {
  setBadgeForUrl: function(url) {
    var label = this.getSettingNameForUrl(url);

    chrome.browserAction.setBadgeBackgroundColor({color:[200, 200, 150, 255]});
    chrome.browserAction.setBadgeText({text:label.slice(0, 4)});
  },
  getSettingNameForUrl: function(url) {
    try {
      var targetMap = JSON.parse(localStorage['targetMap']);

      for(var target in targetMap) {
        if (url.match(target)) {
          var name    = targetMap[target];
          var setting = JSON.parse(localStorage['setting']);
          var ignores = setting[name]['ignores'];
          if (!ignores) return name;

          for (var i = 0; i < ignores.length; i++) {
            var ignore = ignores[i];
            if (url.match(ignore)) return "";
          }
          return name;
        }
      }
    } catch(e) {
      // no setting
    }

    return "";
  }
}