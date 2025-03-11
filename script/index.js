// loader //
document.addEventListener("DOMContentLoaded", function () {
  let countElement = document.getElementById("count");
  let progressBar = document.querySelector(".progress-bar");
  let loaderWrapper = document.querySelector(".loader-wrapper");

  let loadProgress = 0;
  let interval = setInterval(() => {
    loadProgress += 1;
    countElement.textContent =
      loadProgress < 10 ? "0" + loadProgress : loadProgress;
    progressBar.style.width = loadProgress + "%";

    if (loadProgress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        loaderWrapper.classList.add("hide-loader"); //
      }, 500); // Delay before hiding the loader
    }
  }, 20);
});

//header//
document.addEventListener("DOMContentLoaded", function () {
  const menuBar = document.querySelector(".menu-bar");
  const headerWrapper = document.querySelector(".header2-wrapper");
  const closeBtn = document.querySelector(".ph-x-circle");

  menuBar.addEventListener("click", function () {
    headerWrapper.classList.toggle("show-header");
  });

  closeBtn.addEventListener("click", function () {
    headerWrapper.classList.remove("show-header");
  });
});

// scroll to top //
document.querySelector(".up-arrow").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

gsap.to(".up-arrow", {
  scrollTrigger: {
    trigger: ".section2",
    markers: false,
    start: "top 80%",
    end: "10% 50%",
    scrub: true,
  },
  rotate: "180deg",
  duration: 0.5,
});

gsap.to(".up-arrow i", {
  scrollTrigger: {
    trigger: ".footer",
    start: "top bottom",
    end: "top center",
    toggleActions: "play none none reverse",
    duration: 0.5,
    onEnter: () => gsap.to(".up-arrow i", { color: "#ffff" }),
    onLeaveBack: () => gsap.to(".up-arrow i", { color: "" }),
  },
});
