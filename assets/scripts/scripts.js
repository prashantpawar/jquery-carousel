/* modal */

$(function () {
    $(".messages, .close").click(function(){
        $(".modal").toggle();
    });
});

/* slider */

$(function () {

    /*
            we want to do this,

            containerElement = containerElement = $(carouselElement + " > div:first-child");

            but we are encountering an error (Syntax error, unrecognized expression,[object Object] >section

            this error does not occur when we solve the problem the wrong way

    */

    var carouselElement = " .carousel",
        containerElement = "." + $(carouselElement + " div:first-child").attr("class"),
        currentPosition = 0,
        startPosition = 0,
        slideTarget = containerElement + ' > section',
        slideWidth = $(slideTarget).width(),
        slideIncrement = slideWidth,
        numSlides = $(slideTarget).length,
        endPosition = ((numSlides * slideWidth) - slideWidth) * -1,
        controls = '<div class=\"controls\"></div>',
        leftButton = '<button class=\"left\"> left </button>',
        rightButton = '<button class=\"right\"> right </button>';

    console.log(carouselElement);

    $(carouselElement).append(controls);
    $('.controls').append(leftButton);
    $('.controls').append(rightButton);

    function slide(direction) {
        var xPosition = currentPosition,
            slideLeft = (direction === "left"),
            speed = 500;

        if(isGoingOutOfBounds (direction)) {
            return false;
        }

        xPosition += slideLeft ?
            slideIncrement :
            (slideIncrement * -1);

        $(containerElement).animate({
            left: xPosition + "px"
        }, speed);

        currentPosition = xPosition;

        return true;
    }

    function isGoingOutOfBounds(direction) {
        // return ( direction === "left" && currentPosition === startPosition
        //    || direction === "right" && currentPosition === endPosition);
        return (direction === "left" && currentPosition === startPosition || direction === "right" && currentPosition === endPosition) ? true : false;

    }

    $(".left").click(function () {
        slide('left');
    });

    $(".right").click(function () {
        slide('right');
    });

});