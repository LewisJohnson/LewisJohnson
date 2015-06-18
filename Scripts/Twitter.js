/**
 * Created by lewis on 14/06/2015.
 */



function email() {
    var name = $('#name').val(),
        website = $('#website').val(),
        heard = $('#heard').val(),
        desc = $('#desc').val(),
        SenderEmail = $('#email').val();

    $.ajax({
        type: 'POST',
        url: 'https://mandrillapp.com/api/1.0/messages/send.json',
        data: {

            "key": "bJv7NW-z1KY69G9pJx8_zw",
            "message": {
<<<<<<< HEAD
                "text": '\nName: ' + name + '\nEmail: ' + SenderEmail + '\nWebsite: ' + website + '\nHow they heard: ' + heard + '\nProject Description: ' + desc,
=======
                "text": 'You have a new message for lewisjohnson3d.com. The message is as follows;\n' + '\nName: ' + name + '\nEmail: ' + SenderEmail + '\nWebsite: ' + website + '\nHow they heard: ' + heard + '\n\nProject Description: ' + desc,
>>>>>>> origin/gh-pages
                "subject": "Lewis Johnson - Contact",
                "from_email": SenderEmail,
                "from_name": name,
                "to": [
                    {
                        "email": "lewisj489@gmail.com",
                        "name": "Lewis Johnson",
                        "type": "to"
                    }
                ]
            }
        }
    }).done(function (response) {
        console.log(response);
        $('#sentP').show(100);
    });
}

!TwitterTweetWidget(document, 'script', 'twitter-wjs');
function TwitterTweetWidget(d, s, id) {
    var fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
    if (!d.getElementById(id)) {
        var js = d.createElement(s);
        js.id = id;
        js.src = p + '://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js, fjs);
    }
}


!TwitterFeedWidget(document, "script", "twitter-wjs");
function TwitterFeedWidget(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + "://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);
    }
}
