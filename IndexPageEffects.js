window.addEventListener('scroll', function () {
  const scrolled = window.scrollY;
  const parallaxSections = document.querySelectorAll('.parallax-section');

  parallaxSections.forEach(function (parallaxBg) {
    // Adjust background position for smoother parallax effect
    parallaxBg.style.backgroundPosition = 'center ' + (scrolled * 0.2) + 'px';
  });
});