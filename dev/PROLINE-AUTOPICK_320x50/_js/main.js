import {init, olg, textOn, read} from '../../_common/js/common.js'




function standard(){	
	const tl = init()	
	
	
	
	
	tl.from(".el-1", {duration:.3, opacity:0})
	tl.to(".el-1", {duration:.3, opacity:0}, "+=1")

	tl.from(".el-2", {duration:.3, opacity:0})
	tl.to(".el-2", {duration:.3, opacity:0}, "+=1")

	tl.from(".el-3-txt", {duration:.3, opacity:0})
	tl.to(".el-3-txt", {duration:.3, opacity:0}, `+=${ read.t1}`)

	tl.from(".el-4-txt", {duration:.3, opacity:0})
	tl.to(".el-4-txt", {duration:.3, opacity:0}, `+=${ read.t2}`)

	tl.from(".bubble-1", {duration:.3, opacity:0})
	tl.from(".bubble-2", {duration:.3, opacity:0})
	tl.from(".bubble-3", {duration:.3, opacity:0})
	tl.to(".bubble", {duration:.3, opacity:0}, "+=1.3")


	tl.from(".el-6", {duration:.3, opacity:0})
	tl.to(".el-6", {duration:.3, opacity:0}, `+=${ read.t3}`)

	tl.from(".el-7", {duration:.3, opacity:0})

	tl.from(".el-8-cta", {duration:.3, opacity:0})
	

	tl.add(olg())
	return tl
}

standard()