/*!
 * Simple jQuery Equal Heights
 *
 * Copyright (c) 2013 Matt Banks
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://docs.jquery.com/License
 *
 * @version 1.5.1
 */
(function(a){a.fn.equalHeights=function(){var b=0,c=a(this);c.each(function(){var d=a(this).innerHeight();if(d>b){b=d}});return c.css("height",b)};a("[data-equal]").each(function(){var c=a(this),b=c.data("equal");c.find(b).equalHeights()})})(jQuery);$(window).resize(function(){blocksHeightAdjustments()});$(window).load(function(){blocksHeightAdjustments()});function blocksHeightAdjustments(){$("#skills .skill").height("auto");if(($(window).width())>480){$("#skills .skill").equalHeights()}};