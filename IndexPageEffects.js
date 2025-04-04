document.addEventListener("scroll", () => {
  document.querySelectorAll(".parallax").forEach((el) => {
    let scrolled = window.scrollY;
    el.style.transform = `translateY(${scrolled * 0.5}px)`;
  });
});