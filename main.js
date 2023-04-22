// To hide all the pages from the start and make no collison
$(window).on('load', function () {
  $('.listOptions').css('display', 'none');
  $('.homePage').css('display', 'none');
  $('.aboutPage').css('display', 'none');
});

// Makes the open button disappear and makes list's and face
$('.openButton').on('click', function () {
  $(this).fadeOut(500);
  $('.listOptions').delay(500).fadeIn(500);
});

// Makes home page appear and all other disappear
$('.homeButton').on('click', function () {
  $('.listOptions').fadeOut(500);
  $('.homePage').delay(500).css('display', 'block');
});

// Makes about page appear and all other disappear
$('.aboutButton').on('click', function () {
  $('.listOptions').fadeOut(500);
  $('.aboutPage').delay(500).css('display', 'block');
});

// Makes project page appear and all other disappear
$('.projectButton').on('click', function () {
  $('.listOptions').fadeOut(500);
  $('.homePage').delay(500).css('display', 'flex');
});

// Makes resume page appear and all other disappear
$('.resumeButton').on('click', function () {
  $('.listOptions').fadeOut(500);
  $('.homePage').delay(500).css('display', 'flex');
});

// Navbar options
// when clicked on will make home page appear and the rest disappear
$('.navAboutButton').on('click', function () {
  $('.homePage').css('display', 'none');
});
$('.navHomeButton').on('click', function () {
  $('.aboutPage').css('display', 'none');
});
