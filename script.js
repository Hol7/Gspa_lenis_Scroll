document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
  
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  
    // Synchronize ScrollTrigger on Lenis scroll events
    lenis.on("scroll", ScrollTrigger.update);
  
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
  
    requestAnimationFrame(raf);
  
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".img",
        // start: "top top",
        scrub: true,
        // Add pin:true if needed
      },
    });
  
    tl.to(".img", {
      stagger: 0.2,
      y: -700,
      // Remove scroll:true (invalid property)
    });
  });
  

// document.addEventListener("DOMContentLoaded", () => {});

// document.addEventListener("DOMContentLoaded", () => {
    // gsap.registerPlugin(ScrollTrigger);

    // const lenis = new Lenis({
    //   duration: 1.2,
    //   smooth: true,
    //   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    // });
    
    // function raf(time) {
    //   lenis.raf(time);
    //   requestAnimationFrame(raf);
    // }
    
    // requestAnimationFrame(raf);
    
    // const tl = gsap.timeline({
    //     scrollTrigger:{
    //         trigger:'.img',
    //         scrub: true
    //     }
    // })
    // .to('.img', {
    //     stagger: .2,
    //     y: -700,
    //     scroll:true
    // })

  
// });



// lenis.on("scroll", ScrollTrigger);
