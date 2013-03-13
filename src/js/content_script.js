chrome.extension.sendRequest({
  method: "getSettingForUrl",
  url: location.href
}, function(response) {
  var setting = response.data;
  var label = setting.label;
  if (!label) return;
  $(document.body).append($('<div id="opps-staging-label-wrapper"></div>').text(label));
});