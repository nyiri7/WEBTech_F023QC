const faders = document.querySelectorAll(".small");

const appearOptions = {
    threshold: 0.7
  };
  
  const appearOnScroll = new IntersectionObserver(function(
    smalls,
    appearOnScroll
  ) {
    smalls.forEach(small => {
      if (small.isIntersecting) {
        small.target.classList.add("appear");
        appearOnScroll.unobserve(small.target);
      }
    });
  },
  appearOptions);
  
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });


  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    appearOnScroll.observe(card);
  });
