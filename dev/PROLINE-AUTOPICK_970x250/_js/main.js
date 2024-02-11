import {h, init, olg, read, textOn} from '../../_common/js/common.js'



function standard(){	
	const tl = init()	

	
	
	tl.add("playa")
	tl.from(".playa img", {duration:.5, x:-80, y:80, ease:Power3.easeOut}, "playa")
	tl.from(".ball", {duration:.5, x:"+=100", y:"-=50", ease:Power3.easeOut}, "playa")

	// tl.to([".bet", ".phone", ".ball", ".playa"], {x:0, duration:1.2}, "playa")


	tl.from(".t1", {...textOn()}, "-=.5")

	tl.to(".t1", {duration:.2, opacity:0}, `+=${read.t1}`)

	tl.from(".t2", {...textOn()}, "+=.1")
	// tl.to(".bet", {opacity:0, duration:.1})
	tl.from(".bubble-1", {duration:.2, opacity:0}, "+=.2")
	tl.from(".bubble-2", {duration:.2, opacity:0})
	tl.from(".bubble-3", {duration:.2, opacity:0})
	tl.to(".t2", {duration:.2, opacity:0}, `+=${read.t2}`)
	tl.from(".t3", {...textOn()})
	tl.to([".t3", ".bubble", ".bet"], {duration:.2, opacity:0}, `+=${read.t3}`)
	

	tl.add("tint")
	tl.to(".proline-small", {duration:.2, opacity:0}, `tint`)
	tl.from(".tint", {duration:.2, ease:Power4.easeOut, y:-h, opacity:0}, "tint")


	tl.from([".end-logos"], {duration:.3, opacity:0}, "+=.2")

	tl.from(".end-cta", {duration:.3, opacity:0}, "+=.2")
	tl.add("final")
	tl.from(".end-legal", {duration:.3, opacity:0}, "final+=.2")
	tl.add(olg(), "final")

	return tl
}

standard()