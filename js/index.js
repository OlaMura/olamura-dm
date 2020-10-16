function scroll_style() {
  if ($('#home')[0].getBoundingClientRect().top < 150) {
    $('.navHome').addClass('active')
  } else {
    $('.navHome').removeClass('active')
  }
  if ($('#leistungen')[0].getBoundingClientRect().top < 50) {
    $('.navLeistungen').addClass('active')
    $('.navHome').removeClass('active')
  } else {
    $('.navLeistungen').removeClass('active')
  }
  if ($('#kontakt')[0].getBoundingClientRect().top < 50) {
    $('.navKontakt').addClass('active')
    $('.navLeistungen').removeClass('active')
  } else {
    $('.navKontakt').removeClass('active')
  }
}

$(function() {
  $(window).scroll(scroll_style);
  scroll_style();
});