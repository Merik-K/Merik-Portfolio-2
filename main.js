// To hide all the pages from the start and make no collison
$(window).on('load', function () {
  $('.start').css('display', 'none');
  $('.experience').css('display', 'none');
  $('.about').css('display', 'none');
  $('.projects').css('display', 'none');
  $('.contact').css('display', 'none');
});

// Makes the open button disappear and makes list's and face
$('.openButton').on('click', function () {
  $(this).fadeOut(500);
  $('.start').delay(500).fadeIn(500).css('display', 'block');
});

//Makes the About section on appear or onclick
// $(window).on('scroll', function () {
//   $('.about').fadeIn(100);
// });
$('.aboutButton').on('click', function () {
  $('.about').css('display', 'flex');
});

//Makes the Experience section on appear or onclick
// $(window).on('scroll', function () {
//   $('.experience').fadeIn(100);
// });
$('.experienceButton').on('click', function () {
  $('.experience').css('display', 'flex');
});

//Makes the Experience section on appear or onclick
// $(window).on('scroll', function () {
//   $('.projects').fadeIn(100);
// });
$('.projectButton').on('click', function () {
  $('.projects').css('display', 'flex');
});
