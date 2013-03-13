chrome.extension.sendRequest({
  method: "getSettingForUrl",
  url: location.href
}, function(response) {
  var setting = response.data;
  var label = setting.label;
  if (!label) return;
  $(document.body).append($('<span id="opps-staging-label"></span>').text(label));
});