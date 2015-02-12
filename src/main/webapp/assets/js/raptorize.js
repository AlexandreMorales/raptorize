$(document).ready(function() {
	$("body").raptorize();
});
(function($) {

	jQuery.browser = {};
	jQuery.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase())
			&& !/webkit/.test(navigator.userAgent.toLowerCase());
	jQuery.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());

	$.fn.raptorize = function(options) {
		var defaults = {
			enterOn : 'konami-code',
			delayTime : 5000
		};

		var options = $.extend(defaults, options);
		return this
				.each(function() {
					var _this = $(this);
					var audioSupported = false;

					if ($.browser.mozilla || $.browser.webkit) {
						audioSupported = true;
					}

					var raptorImageMarkup = '<img id="elRaptor" style="display: none" src="/assets/img/alejandro.jpeg" />'
					var raptorAudioMarkup = '<audio id="elRaptorShriek" preload="auto"><source src="/assets/img/alejandro.mp3" /></audio>';
					var locked = false;

					$('body').append(raptorImageMarkup);
					if (audioSupported) {
						$('body').append(raptorAudioMarkup);
					}
					var $raptor = $('#elRaptor').css({
						"position" : "fixed",
						"bottom" : "-300px",
						"right" : "0",
						"display" : "none"
					});

					function init() {
						locked = true;
						$(window).scrollTop(9999999);

						if (audioSupported) {
							function playSound() {
								document.getElementById('elRaptorShriek')
										.play();
							}
							playSound();
						}

						var $raptor = $('#elRaptor').css({
							"display" : "block"
						});
						$raptor.delay(200).animate({
							"bottom" : "0px"
						}, function() {
							$(this).animate({
								"bottom" : "0px"
							}, 100, function() {
								var offset = (($(this).position().left) + 400);
								$(this).delay(300).animate({
									"right" : offset
								}, 2500, function() {
									mais($(this));
								});
							});
						});

					}

					function isPlaying(audelem) {
						return !audelem.paused;
					}

					function mais($raptor) {
						var offset = (($raptor.position().left) + 400);
						if (isPlaying(document.getElementById('elRaptorShriek'))) {
							$raptor.delay(300).animate({
								"right" : offset
							}, 2500, function() {
								menos($raptor);
							});
						} else {
							locked = true;
						}
					}

					function menos($raptor) {
						var offset = (($raptor.position().left) - 400);
						if (isPlaying(document.getElementById('elRaptorShriek'))) {
							$raptor.delay(300).animate({
								"right" : offset
							}, 2500, function() {
								mais($raptor);
							});
						} else {
							locked = true;
						}
					}

					function toCode(string) {
						code = "";
						for (i = 0; i < string.length; i++) {
							code += string.toUpperCase().charCodeAt(i) + ",";
						}
						code = code.substring(0, code.length - 1);
						console.log(code);
						return code;
					}

					if (options.enterOn == 'timer') {
						setTimeout(init, options.delayTime);
					} else if (options.enterOn == 'click') {
						_this.bind('click', function(e) {
							e.preventDefault();
							if (!locked) {
								init();
							}
						})
					} else if (options.enterOn == 'konami-code') {
						var kkeys = [], konami = toCode("faz sentido pessoal");
						$(window).bind("keydown.raptorz", function(e) {
							kkeys.push(e.keyCode);
							if (kkeys.toString().indexOf(konami) >= 0) {
								init();
								$(window).unbind('keydown.raptorz');
							}
						});
					}
				});
	}
})(jQuery);