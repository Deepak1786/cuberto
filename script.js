Shery.mouseFollower();
// Shery.mouseFollower({
//   //Parameters are optional.
//   skew: true,
//   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//   duration: 1,
// });
Shery.makeMagnet(".Magneteff");
// Shery.hoverWithMediaCircle(kispar,pass images or videos);
Shery.hoverWithMediaCircle(".hvr", {videos: ["videos/0.mp4", "videos/2.mp4","videos/3.mp4"]});

gsap.to(".fleftelm", {
    scrollTrigger: {
      trigger: "#fimages",// kis element ko
      pin: true,// rok do
      start: "top top",// kab (matlab div ka top desktop ka top par aa jai)
      end: "bottom bottom",// kab tak 
      endTrigger: ".last",// bottom kisa manuu 
      scrub: 1,
    },
    y: "-300%",
    ease: Power1,
  });

  let sections = document.querySelectorAll(".fleftelm");
  Shery.imageEffect(".images", {
    style: 2,
    config: { onMouse: { value: 1 } },
    slideStyle: (setScroll) => {
      sections.forEach(function (section, index) {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          scrub: 1,
          onUpdate: function (prog) {
            setScroll(prog.progress + index);
          },
        });
      });
    },
  });