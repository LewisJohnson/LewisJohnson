/**
 * Created by lewis on 14/06/2015.
 */

$(document).ready(function () {
    $('a#hamburger').click(function ()
    {
        $("#page-header").toggleClass("disabled");
    });
});

function email() {
    window.open('mailto:lewisj489@gmail.com');
}

//Twitter
!function (d, s, id) {
    var fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
    if (!d.getElementById(id)) {
        var js = d.createElement(s);
        js.id = id;
        js.src = p + '://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js, fjs);
    }
}(document, 'script', 'twitter-wjs');