// To hide all the pages from the start and make no collison
$(window).on('load', function () {
  // $('.start').css('display', 'none');
  $('.experience').css('display', 'none');
  $('.about').css('display', 'hidden');
  $('.projects').css('display', 'none');
  $('.contact').css('display', 'none');
});

// Makes the open button disappear and makes list's and face
$('.openButton').on('click', function () {
  $(this).fadeOut(0);
  $('.start').slideUp(10).delay(1000).fadeIn(500).css('display', 'flex', 0);
});

//Makes the About section on appear or onclick
$(window).on('scroll', function () {
  $('.about').css('display', 'flex', 2000).slideDown(5000).stop();
});
$('.aboutButton').on('click', function () {
  $('.about').css('display', 'flex');
});
