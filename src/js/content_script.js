chrome.extension.sendRequest({
  method: "getSettingForUrl",
  url: location.href
}, function(response) {
  var setting = response.data;
  var label = setting.label;
  if (!label) return;
  $(document.body).prepend($('<span style="font-size: 50px; color: red";></span>').text(label));
});