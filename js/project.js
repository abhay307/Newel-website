var tl = gsap.timeline()


tl.from(".navbar-brand",{
	opacity:0,
	x:-200,
	delay:0.1,
	duration:0.3
})
tl.from(".navbar-toggler",{
	opacity:0,
	x:200,
	duration:0.3
},"abc")

tl.from(".first",{
	y:-400,
	opacity:0,
	duration:0.5,
	stagger:0.2
},"abc")

tl.from(".neslon",{
	x:-400,
	opacity:0,
	duration:0.5,
})


gsap.from(".img01",{
	scale:0,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
		trigger:".img01",
		scroller:"body",
		/*markers:true,*/
		start:"top 90%",
		end :"top -150%"
		
		
	}
})

gsap.from(".grove",{
	x:-300,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
		trigger:".grove",
		scroller:"body",
		/*markers:true,*/
		start:"top 90%",
		end :"top -150%"
		
		
	}
})


gsap.from(".img02",{
	x:-300,
	opacity:0,
	duration:0.8,
	scrollTrigger:{
		trigger:".img02",
		scroller:"body",
		/*markers:true,*/
		start:"top 90%",
		end :"top -150%"
		
		
	}
})

gsap.from(".lake",{
	x:-300,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
		trigger:".lake",
		scroller:"body",
		/*markers:true,*/
		start:"top 90%",
		end :"top -150%"
		
		
	}
})

gsap.from(".img03",{
	scale:0,
	opacity:0,
	duration:0.5,
	scrollTrigger:{
		trigger:".img03",
		scroller:"body",
		/*markers:true,*/
		start:"top 80%",
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