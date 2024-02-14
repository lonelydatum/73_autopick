import {olg, init, read, bannerSize, shakerDog, shakerPhone} from '../../_common/js/common.js'

standard({handPos:0})
function standard({handPos}){	
	const xy = "y"
	const tl = init()	
	const tlDog = shakerDog()
	tl.set(".hand-screen", {y:bannerSize.h})
	// tl.from(".txt-shakin", {x:-bannerSize.w, duration:.3}, "+=.2")
	

	tl.add("t2", `+=${read.t1}`)
	tl.to(".txt-shakin", {y:-bannerSize.h, duration:.3}, "t2")
	tl.from(".txt-app", {y:bannerSize.h, duration:.3}, "t2")
	

	
	
	tl.to(".hand-screen", {y:handPos, duration:.5})

	tl.add("tint", `+=${read.t2}`)
	tl.add(()=>{
		tlDog.pause()
	}, "tint")
	tl.to(".txt-app", {opacity:0, duration:.3}, "tint")
	tl.from(".tint", {opacity:0, duration:.3}, "tint")	

	tl.from(".txt-shake", {y:bannerSize.h, duration:.3}, "tint+=.3")


	
	tl.from(".arrows", {opacity:0, duration:.3}, "tint+=.3")
	tl.to(".hand-screen", {y:0, duration:.5}, "tint")

	const tlShakePhone = shakerPhone(".hand-screen", 4)

	tlShakePhone.pause()
	
	tl.add(()=>{
		TweenLite.set(".end-screen-00", {opacity:1, delay:.3})
		tlShakePhone.resume()
	}, "+=1.6")
	
	

	tl.to(".frame2", {opacity:1, duration:.3}, "+=2")
	

	tl.add("stop-shaking")

	
	tl.to(".end-screen", {opacity:1, duration:.3}, "stop-shaking-=.5")

	

	tl.add(()=>{		
		tlShakePhone.pause(0)		
	}, "stop-shaking")

	tl.to(".hand-screen", {x:-94, duration:.3}, "stop-shaking")	

	

	tl.from([".txt-download, .end-cta"], {opacity:0, duration:.3}, "+=.5")
	tl.from([".end-logos", ".end-corners" ], {opacity:0, duration:.3}, "+=.3")
	// tl.play("tint")
	tl.add(olg)
	return tl
}