var tl = gsap.timeline()


tl.from(".navbar-brand",{
	opacity:0,
	x:-200,
	delay:0.2,
	duration:0.5
})
tl.from(".navbar-toggler",{
	opacity:0,
	x:200,
	duration:0.5
})
tl.from(".hero h1",{
	scale:0,
	opacity:0,
	duration:0.5
},"abhay")
tl.from(".hero p",{
	scale:0,
	opacity:0,
	duration:0.5
},"abhay")




gsap.from(".first",{
	x:-200,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
		trigger:".first",
		scroller:"body",
		/*markers:true,*/
		start:"top 70%",
		end :"top -150%"
		
		
	}
})
gsap.from(".second",{
	x:200,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
		trigger:".first",
		scroller:"body",
		/*markers:true,*/
		start:"top 70%",
		end :"top -150%"
		
		
	}
})
gsap.from(".second li",{
	x:100,
	opacity:0,
	duration:0.5,
	stagger:0.3,
	scrollTrigger:{
		trigger:".first",
		scroller:"body",
		/*markers:true,*/
		start:"top 70%",
		end :"top -150%"
		
		
	}
})


gsap.from(".third",{
	y:-100,
	opacity:0,
	duration:0.5,
	stagger:0.2,
	scrollTrigger:{
		trigger:".third",
		scroller:"body",
		/*markers:true,*/
		start:"top 70%",
		end :"top -150%"
		
		
	}
})

gsap.from(".fourth1",{
	x:-200,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
		trigger:".fourth1",
		scroller:"body",
		/*markers:true,*/
		start:"top 70%",
		end :"top -150%"
		
		
	}
})
gsap.from(".fourth2",{
	x:200,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
		trigger:".fourth1",
		scroller:"body",
		/*markers:true,*/
		start:"top 70%",
		end :"top -150%"
		
		
	}
})

gsap.from(".project-img",{
	scale:0,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
		trigger:".project-img",
		scroller:"body",
		/*markers:true,*/
		start:"top 90%",
		end :"top -150%"
		
		
	}
})
gsap.from(".fifth",{
	x:-200,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
		trigger:".fifth",
		scroller:"body",
		/*markers:true,*/
		start:"top 70%",
		end :"top -150%"
		
		
	}
})
gsap.from(".fifth-1",{
	y:-200,
	opacity:0,
	duration:0.5,
		stagger:0.2,
	scrollTrigger:{
		trigger:".fifth",
		scroller:"body",
		/*markers:true,*/
		start:"top 70%",
		end :"top -150%"
		
		
	}
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