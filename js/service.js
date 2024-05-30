var tl = gsap.timeline()


tl.from(".navbar-brand",{
	opacity:0,
	x:-200,
	delay:0.1,
	duration:0.5
})
tl.from(".navbar-toggler",{
	opacity:0,
	x:200,
	duration:0.2
})


tl.from(".first",{
	scale:0,
	opacity:0,
	duration:0.5,
})

gsap.from(".foot1",{
	x:-200,
	opacity:0,
	duration:0.5,
		stagger:0.2,
	scrollTrigger:{
		trigger:".foot1",
		scroller:"body",
		/*markers:true,*/
		start:"top 70%",
		end :"top -150%"
		
		
	}
})
gsap.from(".foot2",{
	scale:0,
	opacity:0,
	duration:0.5,
		stagger:0.2,
	scrollTrigger:{
		trigger:".foot1",
		scroller:"body",
		/*markers:true,*/
		start:"top 70%",
		end :"top -150%"
		
		
	}
})
gsap.from(".foot3",{
	x:200,
	opacity:0,
	duration:0.5,
		stagger:0.2,
	scrollTrigger:{
		trigger:".foot1",
		scroller:"body",
		/*markers:true,*/
		start:"top 70%",
		end :"top -150%"
		
		
	}
})