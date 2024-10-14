$('.slideshowcontainer').vegas({
    overlay: true,
    transition: 'fade', 
    transitionDuration: 4000,
    delay: 10000,
    color: 'red',
    animation: 'random',
    animationDuration: 20000,
    slides: [
      { src: './assets/img/vegas-slider1.jpg' },
      { src: './assets/img/vegas-slider2.jpg' },
      { src: './assets/img/vegas-slider3.jpg' }
    ]
  });