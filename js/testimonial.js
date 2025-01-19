
var owl = $('.owl-carousel');
owl.owlCarousel({
  smartSpeed: 500,
  items: 1,
  margin:0,
  nav: true,
  navText: ["<img src='./images/prev.png'>","<img src='./images/next.png'>"],
  dots:false,
  onInitialized:counter,
  onTranslated:counter
});
function counter(event) {
  var element = event.target;
  var items = event.item.count;
  var item = event.item.index + 1;
  var sldtxt = $('.active .ivySlideTxt').html();
  var sldWidth = 100;
  var sldPercent = sldWidth * item / items;
  $('#counter').html("0"+item);
  $('.slTxt').html(sldtxt);
  $('.slideState span').css("width", sldPercent + "%");
}


/* carousel-slider */

$(".job-wrap.owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay:true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
   1199: {
      items: 3
    },
  }
});


/* tabs js */

$(document).ready(function(){ 
  $('.tab-a').click(function(){  
    $(".tab").removeClass('tab-active');
    $(".tab[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
    $(".tab-a").removeClass('active-a');
    $(this).parent().find(".tab-a").addClass('active-a');
   });

});

// fullpage customization
$('#fullpage').fullpage({
  sectionSelector: '.vertical-scrolling',
  slideSelector: '.horizontal-scrolling',
  navigation: true,
  slidesNavigation: true,
  controlArrows: false,
  anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection', 'sixthSection'],
  menu: '#menu',

  afterLoad: function(anchorLink, index) {
    if (index == 5) {
        $('#fp-nav').hide();
      }
  },

  onLeave: function(index, nextIndex, direction) {
    if(index == 5) {
      $('#fp-nav').show();
    }
  },

  afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
    if(anchorLink == 'fifthSection' && slideIndex == 1) {
      $.fn.fullpage.setAllowScrolling(false, 'up');
      $(this).css('background', '#374140');
      $(this).find('h2').css('color', 'white');
      $(this).find('h3').css('color', 'white');
      $(this).find('p').css(
        {
          'color': '#DC3522',
          'opacity': 1,
          'transform': 'translateY(0)'
        }
      );
    }
  },


}); 