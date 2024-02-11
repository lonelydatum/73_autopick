import {olg} from "./proline"
import {origin} from "./helpers/helpers.js"
const banner = document.getElementById('banner')
const bannerSize = {w:banner.offsetWidth, h:banner.offsetHeight}

gsap.defaults({
  ease: "power3.out"
});

const read = {
	t1: 1.8,
	t2: 1.2, 
	t3: 2
}

const {w, h} = bannerSize


function init(){	
	const tl = new TimelineMax({onComplete:()=>{
		if(document.getElementById("legalBtn")){			
			TweenLite.set("#legalBtn", {display:"block"})
		}
	}})
	tl.set(".frame1", {opacity:1})

	return tl
}

function textOn(){
	return {duration:.3, x:-30, y:10, opacity:0}
}


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
	tl.to([".t3", ".bubble"], {duration:.2, opacity:0}, `+=${read.t3}`)
	

	tl.add("tint")
	tl.to(".proline-small", {duration:.2, opacity:0}, `tint`)
	tl.from(".tint", {duration:.35, ease:Power4.easeOut, y:-h, opacity:0}, "tint")


	tl.from([".end-logos"], {duration:.3, opacity:0}, "+=.2")
	tl.from(".end-cta", {duration:.3, opacity:0}, "+=.2")
	tl.add("final")
	tl.from(".end-legal", {duration:.3, opacity:0}, "final+=.2")
	tl.add(olg(), "final")
	return tl
}

function b_970x250(){
	b_728x90()
}

function b_160x600(){
	standard()
}

function b_300x250(){		
	standard()
}

function b_300x600(){		
	standard()
}

function b_1000x700(){	
	standard()
}

function b_970x70(){
	standard()
	
}

function b_728x90(text1){
	
	standard()
}

export { init, standard, b_300x250, olg, read, textOn, w, h}