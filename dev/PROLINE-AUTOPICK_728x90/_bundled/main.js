(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _commonJsCommonJs = require('../../_common/js/common.js');

standard({ handPos: 0 });
function standard(_ref) {
	var handPos = _ref.handPos;

	var xy = "y";
	var tl = (0, _commonJsCommonJs.init)();
	var tlDog = (0, _commonJsCommonJs.shakerDog)();
	tl.set(".hand-screen", { y: _commonJsCommonJs.bannerSize.h });
	// tl.from(".txt-shakin", {x:-bannerSize.w, duration:.3}, "+=.2")

	tl.add("t2", "+=" + _commonJsCommonJs.read.t1);
	tl.to(".txt-shakin", { y: -_commonJsCommonJs.bannerSize.h, duration: .3 }, "t2");
	tl.from(".txt-app", { y: _commonJsCommonJs.bannerSize.h, duration: .3 }, "t2");

	tl.to(".hand-screen", { y: handPos, duration: .5 });

	tl.add("tint", "+=" + _commonJsCommonJs.read.t2);
	tl.add(function () {
		tlDog.pause();
	}, "tint");
	tl.to(".txt-app", { opacity: 0, duration: .3 }, "tint");
	tl.from(".tint", { opacity: 0, duration: .3 }, "tint");

	tl.from(".txt-shake", { y: _commonJsCommonJs.bannerSize.h, duration: .3 }, "tint+=.3");

	tl.from(".arrows", { opacity: 0, duration: .3 }, "tint+=.3");
	tl.to(".hand-screen", { y: 0, duration: .5 }, "tint");

	var tlShakePhone = (0, _commonJsCommonJs.shakerPhone)(".hand-screen");

	tlShakePhone.pause();

	tl.add(function () {
		tlShakePhone.resume();
	}, "+=1.6");

	tl.to(".frame2", { opacity: 1, duration: .3 }, "+=1");

	tl.add("stop-shaking");

	tl.to(".end-screen", { opacity: 1, duration: .3 }, "stop-shaking-=.5");

	tl.add(function () {
		tlShakePhone.pause(0);
	}, "stop-shaking");

	tl.to(".hand-screen", { x: -236, duration: .3 }, "stop-shaking");

	tl.from([".txt-download, .end-cta"], { opacity: 0, duration: .3 }, "+=.5");
	tl.from([".end-logos", ".end-corners"], { opacity: 0, duration: .3 }, "+=.3");
	// tl.play("tint")
	tl.add(olg);
	return tl;
}

},{"../../_common/js/common.js":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _proline = require("./proline");

var _helpersHelpersJs = require("./helpers/helpers.js");

var banner = document.getElementById('banner');
var bannerSize = { w: banner.offsetWidth, h: banner.offsetHeight };

gsap.defaults({
	ease: "power3.out"
});

var read = {
	t1: 1.6,
	t2: 2,
	t3: 1
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

function shakerDog() {
	TweenLite.set(".dog_2", { opacity: 0 });
	var tl = new TimelineMax({ repeat: -1 });
	var TIME = .13;
	tl.set(".dog_2", { opacity: 1 }, "+=" + TIME);
	tl.set(".dog_2", { opacity: 0 }, "+=" + TIME);
	return tl;
}

function shakerPhone(DOM) {
	var XX = arguments.length <= 1 || arguments[1] === undefined ? 3 : arguments[1];
	var ROTATE = arguments.length <= 2 || arguments[2] === undefined ? 4 : arguments[2];

	var tl = new TimelineMax();
	tl.repeat(-1);
	var TIME = .002;

	var DURATION = .08;

	tl.to(DOM, { x: "+=3", rotation: -ROTATE, ease: "none", duration: DURATION }, "+=" + TIME);
	tl.to(DOM, { x: "-=3", rotation: ROTATE, ease: "none", duration: DURATION }, "+=" + TIME);
	return tl;
}

function standard(_ref) {
	var handPos = _ref.handPos;

	console.log(handPos);
	var tl = init();
	var tlDog = shakerDog();
	tl.set(".hand-screen", { y: bannerSize.h });
	// tl.from(".txt-shakin", {x:-bannerSize.w, duration:.3}, "+=.2")

	tl.add("t2", "+=" + read.t1);
	tl.to(".txt-shakin", { x: bannerSize.w, duration: .3 }, "t2");
	tl.from(".txt-app", { x: -bannerSize.w, duration: .3 }, "t2");
	tl.to(".hand-screen", { y: handPos, duration: .5 });

	tl.add("tint", "+=" + read.t2);
	tl.add(function () {
		tlDog.pause();
	}, "tint");
	tl.to(".txt-app", { opacity: 0, duration: .3 }, "tint");
	tl.from(".tint", { opacity: 0, duration: .3 }, "tint");
	tl.from(".txt-shake", { x: -bannerSize.w, duration: .3 }, "tint+=.3");
	tl.from(".arrows", { opacity: 0, duration: .3 }, "tint+=.3");
	tl.to(".hand-screen", { y: 0, duration: .5 }, "tint");

	var tlShakePhone = shakerPhone(".hand-screen");

	tlShakePhone.pause();

	tl.add(function () {
		tlShakePhone.resume();
	}, "+=1.6");

	tl.to(".frame2", { opacity: 1, duration: .3 }, "+=1");

	tl.add("stop-shaking", "+=.7");
	tl.to(".end-screen", { opacity: 1, duration: .3 }, "stop-shaking-=.5");
	tl.add(function () {
		tlShakePhone.pause(0);
	}, "stop-shaking");

	if (universalBanner.size === "300x250") {
		tl.to(".hand-screen", { x: -5, y: -25, duration: .3 }, "stop-shaking-=.5");
	}

	tl.from([".txt-download, .end-cta"], { opacity: 0, duration: .3 }, "+=.5");
	tl.from([".end-logos", ".end-corners"], { opacity: 0, duration: .3 }, "+=.3");
	// tl.play("tint")
	tl.add(_proline.olg);
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
exports.w = w;
exports.h = h;
exports.shakerDog = shakerDog;
exports.shakerPhone = shakerPhone;
exports.bannerSize = bannerSize;

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
