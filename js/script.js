
var dur = 1000;
var del = 100;

var an1 = anime({
    targets: '.an1',
    translateY: [
        { value: 1000, duration: 0 },
        { value: 0, duration: dur }
      ],
      opacity: [
          { value : 0, duration: 0},
          { value : 1, duration: dur + 1000}
      ],
    easing: 'easeOutQuint',
    loop: false,
    delay: 0
});

var an2 = anime({
    targets: '.an2',
    translateY: [
        { value: 800, duration: 0 },
        { value: 0, duration: dur }
      ],
      opacity: [
          { value : 0, duration: 0},
          { value : 1, duration: dur + 1000}
      ],
      easing: 'easeOutQuint',
    loop: false,
    delay: del
});

var an3 = anime({
    targets: '.an3',
    translateY: [
        { value: 600, duration: 0 },
        { value: 0, duration: dur }
      ],
      opacity: [
          { value : 0, duration: 0},
          { value : 1, duration: dur + 1000}
      ],
      easing: 'easeOutQuint',
    loop: false,
    delay: 2*del
});