var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})

tl.to("#fanta",{
    top: "120%",
    left: "0%"
},'orange')
tl.to("#orange-cut",{
    top:"160%",
    left:"23%"
},'orange')

tl.to("#orange",{
    width:"10%",
    top:"160%",
    right:"10%"
},'orange')

tl.to("#leaf1",{
   top:"110%",
   rotate:"130deg",
    left:"80%"
},'orange')

tl.to("#leaf2",{
    top:"110%",
    rotate:"130deg",
     left:"10%"
 },'orange')


 


 var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})
