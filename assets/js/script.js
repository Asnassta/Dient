function tabsRecommend(n)
{
  $('.recommend .tabs-nav a').removeClass('active');
  $('.recommend .tabs-nav a.t'+n).addClass('active');
  $('.recommend .tabs-block').fadeOut(0);
  $('.recommend .tabs-block.tab_'+n).fadeIn(222);
};

function tabsView(n)
{
  $('.catalog .tabs-nav a').removeClass('active');
  $('.catalog .tabs-nav a.t'+n).addClass('active');
  $('.catalog .tabs-block').fadeOut(0);
  $('.catalog .tabs-block.tab_'+n).fadeIn(222);
};

function tabsProduct(n)
{
  $('.product-about .tabs-nav a').removeClass('active');
  $('.product-about .tabs-nav a.t'+n).addClass('active');
  $('.product-about .tabs-block').fadeOut(0);
  $('.product-about .tabs-block.tab_'+n).fadeIn(222);
};

$(document).ready(function() {
  /*======Menu-toggle=============*/
  
  $(".burger").on("click", function() {
    $(this).toggleClass("active");
    $(".header-mobile").toggleClass('active');
  });
  /*==========/menu-toggle=========*/

    /*======Favorite=============*/
  
  $(".favorite").on("click", function(event) {
    event.preventDefault() 
    $(this).toggleClass("active");
  });
  /*==========/favorite=========*/

  /*====Switch=====*/
  $.each($('.switch'), function(index, val) {
    if($(this).find('input').prop('checked')==true) {
      $(this).addClass('active');
      $('.filters__box').addClass('active');
    }
  });
  $(document).on('click', '.switch', function(event) {
    if($(this).hasClass('active')) {
      $(this).find('input').prop('checked', false);
      $('.filters__box').removeClass('active');
      $('.filters__content').slideUp();
    }
    else {
      $(this).find('input').prop('checked', true);
      $('.filters__box').addClass('active');
      $('.filters__content').slideDown();
    }
    $(this).toggleClass('active');
  }); 
  /*====/switch=====*/

  /*======Filters=====*/
  $.each($('.filters__box'), function(index, val) {
    if($(this).hasClass('active')) {
      $(this).find('.filters__content').slideDown();
    }
    else {
      $(this).find('.filters__content').slideUp();
    }
  });
  $('.filters__title').on("click", function() {
    $(this).parent('.filters__box').toggleClass('active');
    $(this).parent().find('.filters__content').slideToggle();
  });
  /*======/filters=====*/

  /*=====Filters__more=====*/
  $('.filters__btn-more').on("click", function(event) {
    event.preventDefault() 
    $(this).parent().find('.filters__more').slideToggle();
    $(this).toggleClass('active');
  });
  /*=====/filters__more=====*/

    /*=====Filters__all=====*/
  $('.filters__btn-all').on("click", function(event) {
    event.preventDefault() 
    $('.filters__all').slideToggle();
    $(this).toggleClass('active');
  });
  /*=====/filters__all=====*/



  /*=======================Sliders========================*/
  $('.intro__slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      prevArrow: $('.intro__inner .slider-arrow_prev'),
      nextArrow: $('.intro__inner .slider-arrow_next'),
  });/*===/intro__slider===*/

/*=======================/sliders========================*/
/*======Select-styler=============*/
  $(function() {
    $('select').styler();
  });
  /*======/select-styler=============*/

  /*==================Photo-slider==========*/
$('.photo-slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.photo-slider-nav'
});
$('.photo-slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.photo-slider-for',
  vertical: true,
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  prevArrow: $('.photo-slider__arrow_prev'),
  nextArrow: $('.photo-slider__arrow_next'),
 /*responsive: [
        {
          breakpoint: 415,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.photo-slider-for',
            dots: false,
            centerMode: false,
            focusOnSelect: true,
            //prevArrow: $('.auto-card-slider__arrow-prev'),
            //nextArrow: $('.auto-card-slider__arrow-next'),
          }
        }
      ]*/
  });

/*======Quantity===*/
function change_count(variable, a)
  {
      vcount =  parseInt(variable.parent().find('.quantity__number').val());
      cart_counter = parseInt($('.cart__number').html())
      if(a == 'plus')
      {
        vcount = vcount+1;
        $('.cart__number').html(cart_counter+1)
      }
      else
      {
        if(vcount > 1)
        {
          vcount = vcount-1;
          if(cart_counter > 1)
          {
            $('.cart__number').html(cart_counter-1);
          }
        }    
      }
      sum = variable.parent().parent().parent().find('.price span:first-child').html();
      sum = parseFloat(sum.replace(',','.'));
      variable.parent().parent().find('.pay__sum').html( ((vcount*sum)).toFixed(2).replace('.', ',',)+' ₽' );
      variable.parent().find('.quantity__number').val(vcount);
  }

  $(".quantity .quantity__add").on("click", function() {
    event.preventDefault();
    change_count($(this), 'plus');
  });

  $(".quantity .quantity__subtract").on("click", function() {
    event.preventDefault();
    change_count($(this), 'minus');
  });
/*======/quantity===*/
});