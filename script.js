gsap.registerPlugin(ScrollTrigger);

// En variabel der henviser til alle sections
const sections = document.querySelectorAll("section");

// Bruge forEach til at loppe henover den

sections.forEach((section) => {
  // Lave en henvisning til h2 samt p
  const h2 = section.querySelectorAll("h2");
  const p = section.querySelectorAll("p");

  gsap
    .timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 60%",
        end: "bottom 80%",
        scrub: true,

        // markers: true,
      },
    })
    .from(h2, {
      opacity: 0,
      duration: 1,
    })
    .from(p, {
      opacity: 0,
      duration: 2,
    });
});
