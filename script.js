$(document).ready(function(){
    // slider
    var slider_item = 3,
    lenght_slider = $('.slider_slick').children(".slide_item_container").length;

    function addBackgroundToSlider(){
        var slider_id = $('.slider_slick').attr('id');
        for(var i = 0; i < lenght_slider; i++){
            $('.slide_foto').eq(i).css("background-image", "url('img/realizations/"+ slider_id + "_" + parseInt(i+1) + ".jpg')");
        }
        $('.slide_foto').on('click', function(){
            var photo_background_image = $(this).css('background-image'),
                photo_src = photo_background_image.substring(5, photo_background_image.length),
                photo_description = $(this).next('.slide_description').text(),
                content_popup = '<div id="popup_photo_preview"><span id="close_preview">Kliknij gdziekolwiek, aby zamknąć podgląd.</span><div id="popup_photo"><img src="'+ photo_src +'" alt="'+ photo_description +'"></div></div>';
                $('body').prepend(content_popup);
                $('#popup_photo_preview').on('click',function(){
                    $(this).remove();
                });
        });
    }
    if($('.slider_slick').length){
        addBackgroundToSlider();
    }

    // change window width - change slider items
    if ($(window).width() < 979) {
        $('#nav_links').hide();
        nav_link_to_hamburger();
        slider_item = 1;
        set_slider_items(slider_item);
    }else{
        set_slider_items(slider_item);
    }

    $(window).resize(function() {
        if ($(window).width() < 979) {
            nav_link_to_hamburger();
            slider_item = 1;
            set_slider_items(slider_item);
        } else {
            nav_link_to_menu();
            slider_item = 2;
            set_slider_items(slider_item);
        }
    });

    // toggle menu mobile
    $('#mobile_hamburger').on('click', function () {
        $('#nav_links').slideToggle();
    });

    // nav to menu
    function nav_link_to_menu(){
        $('#nav_mobile_menu').after($('#nav_links'));
        $('body').prepend($('#language_box'));
    }

    // nav to hamburger // mobile
    function nav_link_to_hamburger(){
        $('#nav_mobile_menu').append($('#nav_links'));
        $('#nav_links').append($('#language_box'));
    }
    // slider ilosc zdjec
    function set_slider_items(item){
        $('.slider_slick').slick({
            infinite: true,
            slidesToShow: item,
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>'
        });
    }
    // years of experience - index
    if($('#years_experience').length){
        var currentTime = new Date(),
        year = currentTime.getFullYear(),
        years_experience = year - 1999;
        $('#years_experience').text(years_experience+" lat");
    }
    
  });


