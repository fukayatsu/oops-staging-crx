chrome.extension.sendRequest({
  method: "getSettingForUrl",
  url: location.href
}, function(response) {
  var setting = response.data;
  var label = setting.label;
  if (!label) return;
  $(document.body).append($('<div id="opps-staging-label"></div>').text(label));
});

$(document).on('click', '#opps-staging-label', function(){
  $(this).remove();
});