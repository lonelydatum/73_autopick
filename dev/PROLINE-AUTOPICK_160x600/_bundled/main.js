(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _commonJsCommonJs = require('../../_common/js/common.js');

function standard() {
	var tl = (0, _commonJsCommonJs.init)();

	tl.add("playa");
	tl.from(".playa img", { duration: .5, x: -42, y: 40, ease: Power4.easeOut }, "playa");
	tl.from(".ball", { duration: .5, x: 50, y: -50, ease: Power4.easeOut }, "playa");
	tl.from(".t1", _extends({}, (0, _commonJsCommonJs.textOn)()), "playa+=.2");

	tl.to(".t1", { duration: .2, opacity: 0 }, "+=" + _commonJsCommonJs.read.t1);

	tl.from(".t2", _extends({}, (0, _commonJsCommonJs.textOn)()), "+=.1");
	tl.from(".bubble-1", { duration: .2, opacity: 0 }, "+=.2");
	tl.from(".bubble-2", { duration: .2, opacity: 0 });
	tl.from(".bubble-3", { duration: .2, opacity: 0 });
	tl.to(".t2", { duration: .2, opacity: 0 }, "+=" + _commonJsCommonJs.read.t2);
	tl.from(".t3", _extends({}, (0, _commonJsCommonJs.textOn)()));
	tl.to([".t3", ".bubble", ".bet"], { duration: .2, opacity: 0 }, "+=" + _commonJsCommonJs.read.t3);

	// tl.add("shift")
	// tl.to([".playa", ".phone"], {duration:.5, y:"-=10"}, "shift")
	// tl.to(".proline-small", {duration:.5, y:"-=39"}, "shift")

	tl.add("tint");
	// tl.to(".proline-small", {duration:.2, opacity:0}, `tint`)
	tl.from(".tint", { duration: .35, ease: Power4.easeOut, y: -_commonJsCommonJs.h, opacity: 0 }, "tint");
	tl.from([".end-logos", ".end-legal"], { duration: .3, opacity: 0 }, "+=.2");

	tl.add("end");

	tl.from(".end-cta", { duration: .3, opacity: 0 }, "end");

	tl.add((0, _commonJsCommonJs.olg)());
	return tl;
}

standard();

},{"../../_common/js/common.js":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _proline = require("./proline");

var _helpersHelpersJs = require("./helpers/helpers.js");

var banner = document.getElementById('banner');
var bannerSize = { w: banner.offsetWidth, h: banner.offsetHeight };

gsap.defaults({
	ease: "power3.out"
});

var read = {
	t1: 1.8,
	t2: 1.2,
	t3: 2
};

var w = bannerSize.w;
var h = bannerSize.h;

function init() {
	var tl = new TimelineMax({ onComplete: function onComplete() {
			if (document.getElementById("legalBtn")) {
				TweenLite.set("#legalBtn", { display: "block" });
			}
		} });
	tl.set(".frame1", { opacity: 1 });

	return tl;
}

function textOn() {
	return { duration: .3, x: -30, y: 10, opacity: 0 };
}

function standard() {
	var tl = init();

	tl.add("playa");
	tl.from(".playa img", { duration: .5, x: -42, y: 40, ease: Power4.easeOut }, "playa");
	tl.from(".ball", { duration: .5, x: 50, y: -50, ease: Power4.easeOut }, "playa");
	tl.from(".t1", _extends({}, textOn()), "playa+=.2");

	tl.to(".t1", { duration: .2, opacity: 0 }, "+=" + read.t1);

	tl.from(".t2", _extends({}, textOn()), "+=.1");
	tl.from(".bubble-1", { duration: .2, opacity: 0 }, "+=.2");
	tl.from(".bubble-2", { duration: .2, opacity: 0 });
	tl.from(".bubble-3", { duration: .2, opacity: 0 });
	tl.to(".t2", { duration: .2, opacity: 0 }, "+=" + read.t2);
	tl.from(".t3", _extends({}, textOn()));
	tl.to([".t3", ".bubble"], { duration: .2, opacity: 0 }, "+=" + read.t3);

	tl.add("tint");
	tl.to(".proline-small", { duration: .2, opacity: 0 }, "tint");
	tl.from(".tint", { duration: .35, ease: Power4.easeOut, y: -h, opacity: 0 }, "tint");

	tl.from([".end-logos"], { duration: .3, opacity: 0 }, "+=.2");
	tl.from(".end-cta", { duration: .3, opacity: 0 }, "+=.2");
	tl.add("final");
	tl.from(".end-legal", { duration: .3, opacity: 0 }, "final+=.2");
	tl.add((0, _proline.olg)(), "final");
	return tl;
}

function b_970x250() {
	b_728x90();
}

function b_160x600() {
	standard();
}

function b_300x250() {
	standard();
}

function b_300x600() {
	standard();
}

function b_1000x700() {
	standard();
}

function b_970x70() {
	standard();
}

function b_728x90(text1) {

	standard();
}

exports.init = init;
exports.standard = standard;
exports.b_300x250 = b_300x250;
exports.olg = _proline.olg;
exports.read = read;
exports.textOn = textOn;
exports.w = w;
exports.h = h;

},{"./helpers/helpers.js":3,"./proline":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
function origin(el, x, y) {
	TweenLite.set(el, { transformOrigin: x + "px " + y + "px", x: -x / 2 + "px", y: -y / 2 + "px", scale: .5 });
}

exports.origin = origin;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

CustomEase.create("custom", "M0,0 C0.14,0 0.234,0.438 0.264,0.561 0.305,0.728 0.4,1.172 0.55,1.172 0.652,1.172 0.722,1.102 0.77,1.024 0.834,0.93 0.89,0.946 0.916,0.946 0.952,0.946 1,1 1,1 ");

function olg() {
    TweenLite.set("#olg", { opacity: 1 });
    var tl = new TimelineMax();

    tl.to("#bluewedge1", { duration: .5, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0);
    tl.to("#redwedge1", { duration: .8, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0).from('#group-o', { duration: 1, y: 200, ease: "custom" }, 0).from('#group-l', { duration: 1, y: 200, ease: "custom" }, .1).from('#group-g', { duration: 1, y: 200, ease: "custom" }, .2).from('#group-o', { duration: .8, scale: .4, ease: "power1.out" }, .3).from('#group-l', { duration: .8, scale: .4, ease: "power1.out" }, .4).from('#group-g', { duration: .8, scale: .4, ease: "power1.out" }, .5).from('#letter-o', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '28pt 75pt' }, .9).from('#letter-l', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '55pt 75pt' }, 1).from('#letter-g', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '80pt 75pt' }, 1.1);

    // tl.timeScale(2)

    return tl;
}

exports.olg = olg;

},{}]},{},[1])


//# sourceMappingURL=main.js.map
