$(document).ready(function(){
    $(window).scroll( function(){
        $('.hideL').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},500);
                $(this).addClass('fadeInLeft');
            }

        }); 

    });
    $(window).scroll( function(){
        $('.hideR').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},500);
                $(this).addClass('fadeInRight');
            }

        }); 

    });
    $(window).scroll( function(){
        $('.hideZ').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},500);
                $(this).addClass('zoomIn');
            }

        }); 

    });
    $(window).scroll( function(){
        $('.hideU').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},500);
                $(this).addClass('fadeInUpBig');
            }

        }); 

    });
    //Retire animations si écran plus petit que 500px
    if($(window).innerWidth() < 500){
        $('.hideL').removeClass('hideL');
        $('.hideR').removeClass('hideR');
        $('.hideZ').removeClass('hideZ');
    }
    //Réduit la taille du logo quand on est pas au top de la page pour réduire le menu aussi
    $(window).scroll(function(){

        var scroll = $(window).scrollTop();
      
        if (scroll > 0 ) {
          $('.logo').addClass('logo-scrolled');
          // $('.logo').removeClass('logo-top');
          $('.logo-caption').addClass('logo-caption-scrolled');
        }
      
        if (scroll <= 0 ) {
          $('.logo').removeClass('logo-scrolled');
          // $('.logo').addClass('logo-top'); 
          $('.logo-caption').removeClass('logo-caption-scrolled');         
       }
      
      });
 
      //Affiche année en cours en bas du footer
      let date = new Date();
      let year = date.getFullYear();
      
      $('.year').text(year);

})