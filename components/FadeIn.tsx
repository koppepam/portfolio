export const FadeIn = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-slideIn');
      } else {
        entry.target.classList.remove('animate-slideIn');
      }
    });
  });

  const targets = document.querySelectorAll('.js-show-on-scroll');
  targets.forEach((target) => {
    target.classList.add('opacity-0');
    observer.observe(target);
  });
};