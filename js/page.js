//Changes the "job title" text on the homepage
$(document).ready(function() {
    //job title text, which cycles
    $jobtitle = $(".job-title");
    //set up the interval
    jobtitle.changeInterval = setInterval(function() {
        jobtitle.change()
    }, 2000);

    $(document).scroll(function() {
        //deals with sidenav transition
    })

    //wait for images to load
    $("body").waitForImages(function() {
        $("#everything").fadeIn("slow")
    })
})

jobtitle = {
    change: function() {
        var options = jobtitle.options;
        var next = jobtitle.current + 1;
        if (next == options.length) {
            next = 0;
        }
        var newText = options[next];
        jobtitle.current = next
        $jobtitle.fadeOut(350, function() {
            $(this).html(newText).fadeIn(350);
        });
    },
    options: [
        "a <b>network engineer</b>.",
        "a <b>Linux enthusiast</b>.",
        "an <b>Eagle Scout</b>.",
        "a <b>pfSense user</b>.",
        "a <b>model railroader</b>.",
        "a <b>web developer</b>.",
        "an <b>Arduino programmer</b>.",
        "a <b>creative problem-solver</b>.",
        "a <b>tinkerer</b>.",
        "a <b>consultant</b>.",
        "an <b>open-source contributor</b>.",
        "a <b>blogger</b>."
    ],
    current: 0,
}


function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return (((elemTop >= docViewTop) && (elemTop <= docViewBottom)) || ((elemBottom >= docViewTop) && (elemBottom <= docViewBottom)));
}

