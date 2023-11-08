import { gsap, Power4 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.defaults({
  duration: 2,
  ease: Power4.easeOut,
});

ScrollTrigger.defaults({
  start: "top 50%",
  end: "bottom 75%",
  scrub: 1,
});

gsap.fromTo(
  "#home > div > *",
  {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    opacity: 0,
  },
  {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    opacity: 1,
    y: -50,
    stagger: 0.25,
  },
);

const titleVars: gsap.TweenVars = {
  opacity: 0,
  y: 100,
};

const servicesTl = () => {
  ScrollTrigger.create({
    trigger: "section#services",
    start: "bottom 90%",
    end: "bottom top",
    animation: gsap.fromTo(
      "#s",
      {
        yPercent: 100,
      },
      {
        yPercent: 0,
      },
    ),
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "section#services",
    },
  });

  return tl
    .fromTo("#services > div > h2, #services > div > p", titleVars, {
      opacity: 1,
      y: 0,
      stagger: 0.5,
    })
    .fromTo(
      "#services ul li",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
      },
      "-=1.75",
    );
};

const projectsTl = () => {
  const projWrapper = document.querySelector("#projects .container");
  const projects = document.querySelector("#projects ul");

  const getAmountToScroll = () => {
    const containerPad = Number(
      gsap.getProperty(".container", "padding-inline"),
    );
    if (projects instanceof HTMLElement && projWrapper instanceof HTMLElement) {
      return -(
        projects?.offsetWidth -
        projWrapper?.offsetWidth +
        containerPad * 2
      );
    }
    return 0;
  };

  ScrollTrigger.create({
    trigger: projWrapper,
    start: "top 10%",
    end: () => `+=${getAmountToScroll() * -1.5}`,
    pin: true,
    invalidateOnRefresh: true,
    animation: gsap.fromTo(
      projects,
      {
        x: 0,
      },
      {
        x: getAmountToScroll,
        ease: "none",
      },
    ),
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: projWrapper,
      end: () => `+=${-getAmountToScroll()}`,
      invalidateOnRefresh: true,
    },
  });

  return tl
    .fromTo("#projects .container > h2, #projects .container > p ", titleVars, {
      opacity: 1,
      y: 0,
      stagger: 0.5,
    })
    .fromTo(
      "#projects ul li",
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        stagger: 0.5,
        x: 0,
      },
      "<",
    );
};

const masterTl = gsap.timeline();
masterTl.add(servicesTl());
masterTl.add(projectsTl());
