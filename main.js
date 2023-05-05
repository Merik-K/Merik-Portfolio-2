// To hide all the pages from the start and make no collison
$(window).on('load', function () {
  $('.start').css('display', 'none');
  $('.experiencePage').css('display', 'none');
  $('.aboutPage').css('display', 'none');
});

// Makes the open button disappear and makes list's and face
$('.openButton').on('click', function () {
  $(this).fadeOut(500);
  $('.start').delay(500).fadeIn(500).css('display', 'block');
});
