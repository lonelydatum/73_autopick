import {olg, init, read, bannerSize, shakerDog, shakerPhone} from '../../_common/js/common.js'

standard({handPos:0})
function standard({handPos}){	
	const xy = "y"
	const tl = init()	
	const tlDog = shakerDog()

	// return
	tl.set(".hand-screen", {y:350})
	// tl.from(".txt-shakin", {x:-bannerSize.w, duration:.3}, "+=.2")
	

	tl.add("t2", `+=${read.t1}`)
	tl.to(".txt-shakin", {y:-bannerSize.h, duration:.3}, "t2")
	tl.from(".txt-app", {y:bannerSize.h, duration:.3}, "t2")
	

	
	
	tl.to(".hand-screen", {y:130, duration:.5})

	tl.add("tint", `+=${read.t2}`)
	tl.add(()=>{
		tlDog.pause()
	}, "tint")
	tl.to(".txt-app", {opacity:0, duration:.3}, "tint")
	tl.from(".tint", {opacity:0, duration:.3}, "tint")	

	tl.from(".txt-shake", {y:bannerSize.h, duration:.3}, "tint+=.3")


	
	tl.from(".arrows", {opacity:0, duration:.3}, "tint+=.3")
	tl.to(".hand-screen", {y:85, duration:.5}, "tint")

	const tlShakePhone = shakerPhone(".hand-screen", 2, 5)

	tlShakePhone.pause()
	
	tl.add(()=>{
		tlShakePhone.resume()
	}, "+=1.6")
	
	

	tl.to(".frame2", {opacity:1, duration:.3}, "+=1")
	

	tl.add("stop-shaking")

	
	tl.to(".end-screen", {opacity:1, duration:.3}, "stop-shaking-=.5")

	

	tl.add(()=>{		
		tlShakePhone.pause(0)		
	}, "stop-shaking")

	tl.to(".hand-screen", {x:0, y:0, duration:.5, scale:1}, "stop-shaking")	

	

	tl.from([".txt-download, .end-cta"], {opacity:0, duration:.3}, "+=.5")
	tl.from([".end-logos", ".end-corners" ], {opacity:0, duration:.3}, "+=.3")
	// tl.play("tint")
	tl.add(olg)
	return tl
}