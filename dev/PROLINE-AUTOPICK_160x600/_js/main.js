import {init, h, olg, textOn, read} from '../../_common/js/common.js'




function standard(){	
	const tl = init()	
	
	tl.add("playa")
	tl.from(".playa img", {duration:.5, x:-42, y:40, ease:Power4.easeOut}, "playa")
	tl.from(".ball", {duration:.5, x:50, y:-50, ease:Power4.easeOut}, "playa")
	tl.from(".t1", {...textOn()}, "playa+=.2")

	tl.to(".t1", {duration:.2, opacity:0}, `+=${read.t1}`)

	tl.from(".t2", {...textOn()}, "+=.1")
	tl.from(".bubble-1", {duration:.2, opacity:0}, "+=.2")
	tl.from(".bubble-2", {duration:.2, opacity:0})
	tl.from(".bubble-3", {duration:.2, opacity:0})
	tl.to(".t2", {duration:.2, opacity:0}, `+=${read.t2}`)
	tl.from(".t3", {...textOn()})
	tl.to([".t3", ".bubble", ".bet"], {duration:.2, opacity:0}, `+=${read.t3}`)
	
	// tl.add("shift")
	// tl.to([".playa", ".phone"], {duration:.5, y:"-=10"}, "shift")
	// tl.to(".proline-small", {duration:.5, y:"-=39"}, "shift")

	tl.add("tint")
	// tl.to(".proline-small", {duration:.2, opacity:0}, `tint`)
	tl.from(".tint", {duration:.35, ease:Power4.easeOut, y:-h, opacity:0}, "tint")
	tl.from([".end-logos", ".end-legal"], {duration:.3, opacity:0}, "+=.2")

	tl.add("end")
	
	
	tl.from(".end-cta", {duration:.3, opacity:0}, "end")

	tl.add(olg())
	return tl
}

standard()