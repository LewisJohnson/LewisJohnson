/**
 * Created by lewis on 14/06/2015.
 */

//Hamburger
$(document).ready(function () {
    $('a#hamburger').click(function ()
    {
        $("#page-header").toggleClass("disabled");
    });
});

$(document).ready(function () {

    $("#Contact-Page").hide(0);
    $("#About-Page").hide(0);
    $("#Portfolio-Page").show(0);
    $('#sentP').hide();
    $("html, body").animate({
        scrollTop: 0
    }, 300);

    $('li#about-header-item').click(function ()
    {
        $("html, body").animate({
            scrollTop: 0
        }, 200);

        $("#Portfolio-Page").hide(0);
        $("#Contact-Page").hide(0);
        $("#About-Page").show(0);
    });

    $('li#contact-header-item').click(function ()
    {
        $("html, body").animate({
            scrollTop: 0
        }, 200);

        $("#Portfolio-Page").hide(0);
        $("#About-Page").hide(0);
        $("#Contact-Page").show(0);
    });

    $('li#portfolio-header-item').click(function ()
    {
        $("html, body").animate({
            scrollTop: 0
        }, 200);

        $("#Contact-Page").hide(0);
        $("#About-Page").hide(0);
        $("#Portfolio-Page").show(0);
    });


    $('a#contact-item').click(function ()
    {
        $("html, body").animate({
            scrollTop: 0
        }, 200);

        $("#Portfolio-Page").hide(0);
        $("#About-Page").hide(0);
        $("#Contact-Page").show(0);
    });

});


