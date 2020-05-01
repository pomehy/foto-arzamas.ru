document.addEventListener('click', function(e) {
    var map = document.querySelector('#map-wrap iframe')
    if(e.target.id === 'map-wrap') {
      map.style.pointerEvents = 'all'
    } else {
      map.style.pointerEvents = 'none'
    }
  })

 
$(document).ready(function () {
      $('.main-nav a[href^="#"], *[data-href^="#"]').on('click', function (e) {
          e.preventDefault();
          var t = 1000;
          var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
          $('html,body').stop().animate({
              scrollTop: $(d).offset().top
          }, t);
      });
});

