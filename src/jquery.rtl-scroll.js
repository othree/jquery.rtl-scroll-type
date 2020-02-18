/*MIT License */
/*global jQuery */
jQuery(function() {
  'use strict';

  var definer = $('<div dir="rtl" style="width: 1px; height: 1px; position: fixed; top: 0px; left: 0px; overflow: hidden"><div style="width: 2px"><div style="display: inline-block; width: 1px"></div><div style="display: inline-block; width: 1px"></div></div></div>').appendTo('body')[0],
      type = 'reverse';

  if (definer.scrollLeft > 0) {
    type = 'default';
  } else {
    if (Element.prototype.scrollIntoView) {
      definer.children[0].children[1].scrollIntoView();
      if (definer.scrollLeft < 0) {
        type = 'negative';
      }
    } else {
      definer.scrollLeft = 1;
      if (definer.scrollLeft === 0) {
        type = 'negative';
      }
    }
  }

  $(definer).remove();
  $.support.rtlScrollType = type;
});

