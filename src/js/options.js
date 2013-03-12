$(function() {
  var setting = localStorage.getItem('setting-yaml');
  if (setting) {
    $('#inputSetting').val(setting);
  }
});

$("#save").on('click', function() {
  var inputSetting = $('#inputSetting').val();
  var targetMap = {};
  try {
    var setting = jsyaml.load(inputSetting);
    for (var name in setting) {
      var targets = setting[name]['targets'];
      for (var i = 0; i < targets.length; i++) {
        targetMap[targets[i]] = name;
      }
    }
    localStorage.setItem('targetMap',    JSON.stringify(targetMap));
    localStorage.setItem('setting',      JSON.stringify(setting));
    localStorage.setItem('setting-yaml', inputSetting);
    alert('saved.');
  } catch(e) {
    alert('invalid yaml?');
  }
});

$("#inputSetting").on('keydown', function(e) {
  if (e.keyCode != 9) { return; }

  e.preventDefault();
  $(this).insertAtCaret("  ");
});

jQuery.fn.extend({
  insertAtCaret: function(myValue) {
    return this.each(function(i) {
      if (document.selection) {
        //For browsers like Internet Explorer
        this.focus();
        sel = document.selection.createRange();
        sel.text = myValue;
        this.focus();
      }
      else if (this.selectionStart || this.selectionStart == '0') {
        //For browsers like Firefox and Webkit based
        var startPos = this.selectionStart;
        var endPos = this.selectionEnd;
        var scrollTop = this.scrollTop;
        this.value = this.value.substring(0, startPos)+myValue+this.value.substring(endPos,this.value.length);
        this.focus();
        this.selectionStart = startPos + myValue.length;
        this.selectionEnd = startPos + myValue.length;
        this.scrollTop = scrollTop;
      } else {
        this.value += myValue;
        this.focus();
      }
    });
  }
});