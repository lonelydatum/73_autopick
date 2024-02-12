import {olg} from "./proline"
import {origin} from "./helpers/helpers.js"
const banner = document.getElementById('banner')
const bannerSize = {w:banner.offsetWidth, h:banner.offsetHeight}

gsap.defaults({
  ease: "power3.out"
});

const read = {
	t1: 1.6,
	t2: 2, 
	t3: 1
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


function shakerDog(){
	TweenLite.set(".dog_2", {opacity:0})
	const tl = new TimelineMax({repeat:-1})
	const TIME = .13
	tl.set(".dog_2", {opacity:1}, `+=${TIME}`)
	tl.set(".dog_2", {opacity:0}, `+=${TIME}`)
	return tl
}

function shakerPhone(DOM, XX=6){
	
	const tl = new TimelineMax()
	tl.repeat(-1)
	const TIME = .002

	
	tl.to(DOM, {x:-XX, ease:"none", duration:.05}, `+=${TIME}`)
	tl.to(DOM, {x:XX, ease:"none", duration:.05}, `+=${TIME}`)
	return tl
}

function standard({handPos}){	
	console.log(handPos);
	const tl = init()	
	const tlDog = shakerDog()
	tl.set(".hand-screen", {y:bannerSize.h})
	// tl.from(".txt-shakin", {x:-bannerSize.w, duration:.3}, "+=.2")
	

	tl.add("t2", `+=${read.t1}`)
	tl.to(".txt-shakin", {x:bannerSize.w, duration:.3}, "t2")
	tl.from(".txt-app", {x:-bannerSize.w, duration:.3}, "t2")
	tl.to(".hand-screen", {y:handPos, duration:.5})

	tl.add("tint", `+=${read.t2}`)
	tl.add(()=>{
		tlDog.pause()
	}, "tint")
	tl.to(".txt-app", {opacity:0, duration:.3}, "tint")
	tl.from(".tint", {opacity:0, duration:.3}, "tint")	
	tl.from(".txt-shake", {x:-bannerSize.w, duration:.3}, "tint+=.3")
	tl.from(".arrows", {opacity:0, duration:.3}, "tint+=.3")
	tl.to(".hand-screen", {y:0, duration:.5}, "tint")

	const tlShakePhone = shakerPhone(".hand-screen")

	tlShakePhone.pause()
	
	tl.add(()=>{
		tlShakePhone.resume()

	}, "+=1.6")
	
	

	tl.to(".frame2", {opacity:1, duration:.3}, "+=1")

	tl.add("stop-shaking", "+=.7")
	tl.to(".end-screen", {opacity:1, duration:.3}, "stop-shaking-=.5")
	tl.add(()=>{		
		tlShakePhone.pause(0)		
	}, "stop-shaking")

	if(universalBanner.size==="300x250"){
		tl.to(".hand-screen", {x:-5, y:-25, duration:.3}, "stop-shaking-=.5")	
	}
	

	tl.from([".txt-download, .end-cta"], {opacity:0, duration:.3}, "+=.5")
	tl.from([".end-logos", ".end-corners" ], {opacity:0, duration:.3}, "+=.3")
	// tl.play("tint")
	tl.add(olg)
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

export { init, standard, b_300x250, olg, read, w, h, shakerDog, shakerPhone, bannerSize}