$(window).on('load', function () {
  $('.listOptions').css('display', 'none');
  $('.homePage').css('display', 'none');
  $('.aboutPage').css('display', 'none');
});
$('.openButton').on('click', function () {
  $(this).fadeOut(500);
  $('.listOptions').delay(500).fadeIn(500);
});
$('.homeButton').on('click', function () {
  $('.listOptions').fadeOut(500);
  $('.homePage').delay(500).css('display', 'flex');
});
$('.aboutButton').on('click', function () {
  $('.listOptions').fadeOut(500);
  $('.aboutPage').delay(500).css('display', 'block');
});
$('.projectButton').on('click', function () {
  $('.listOptions').fadeOut(500);
  $('.homePage').delay(500).css('display', 'flex');
});
$('.resumeButton').on('click', function () {
  $('.listOptions').fadeOut(500);
  $('.homePage').delay(500).css('display', 'flex');
});
