$(document).ready(function () {
    /*  uk-nav-parent-icon */
    $(".menu-begin ul:first-child").addClass('uk-nav uk-nav-side');
    $(".menu-begin ul:first-child").data('uk-nav', '{multiple:false}');
    $(".menu-begin ul:first-child").attr('data-uk-nav', '{multiple:false}');
    $("ul.uk-nav > li").addClass('uk-parent');
    $(".menu-begin ul > li > ul").addClass('uk-nav-sub');

    /*
     
     $(".uk-width-medium-1-4 ul:first-child").addClass('uk-nav uk-nav-side');
     $(".uk-width-medium-1-4 ul:first-child").data('uk-nav', '{multiple:true}');
     $(".uk-width-medium-1-4 ul:first-child").attr('data-uk-nav', '{multiple:true}');
     $(".uk-nav  > li").addClass('uk-parent');
     $(".uk-nav li > ul").addClass('uk-nav-sub');
     */

    $(".uk-parent").on('click', '.uk-nav ul', function (e) {
        //e.preventDefault();
        //console.log(this);
        //$(this).addClass('uk-open');
        //$(this).attr("aria-expanded","true");
    });

    /*
     $("a[href*='#']").on('click', function(event) {
     event.preventDefault();
     $("a[href*='#']").parent().removeClass('uk-active');
     $(this).parent().toggleClass('uk-active');
     
     var hash = $(this).attr('href').split('#')[1];
     
     //console.log(hash);
     scrollTo(hash);
     $('a[href="' + hash + '"]').addClass('uk-active');
     }); */

    $(".uk-parent > a").on('click', function (event) {
        event.preventDefault();
        console.log('click');
        $(".uk-parent > a").parent().removeClass('uk-active');
        $(this).parent().toggleClass('uk-active');

        var hash = $(this).attr('href').split('#')[1];

        //console.log(hash);
        scrollTo(hash);
        $('a[href="' + hash + '"]').addClass('uk-active');
    });
    //*

    function scrollTo(hash) {
        location.hash = "#" + hash;
    }



});

function setStickyMenu() {


    //var sticky = "#TOC";
    var width = $(window).width();

    if (width >= 768) {


    } else {


    }


};
setStickyMenu();
$(document).ready(function () {
    $(window).on('resize', function () {

        setStickyMenu();
    });
});


$(document).ready(function () {
    $('table').addClass("uk-table");
});