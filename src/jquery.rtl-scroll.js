/*MIT License */
/*global jQuery */
(function ($) {
    'use strict';
    var definer = $('<div dir="rtl" style="width: 1px; height: 1px; position: absolute; top: -1000px; overflow: hidden"><div style="width: 2px"><div style="display: inline-block; width: 1px"></div><div style="display: inline-block; width: 1px"></div></div></div>').appendTo('body')[0],
        type = 'reverse';

    if (definer.scrollLeft > 0) {
        type = 'default';
    } else {
        definer.children[0].children[1].scrollIntoView();
        if (definer.scrollLeft < 0) {
            type = 'negative';
        }
    }

    $(definer).remove();
    $.support.rtlScrollType = type;
}(jQuery));
