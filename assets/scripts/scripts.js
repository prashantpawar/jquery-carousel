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
        containerElement,
        currentPosition = 0,
        startPosition = 0,
        slideTarget = containerElement + ' > section',
        slideWidth = $(slideTarget).width(),
        slideIncrement = slideWidth,
        numSlides = $(slideTarget).length,
        endPosition = ((numSlides * slideWidth) - slideWidth) * -1,
        controls,
        leftButton = '<button class=\"left\"> left </button>',
        rightButton = '<button class=\"right\"> right </button>';

    containerElement = "." + $(carouselElement + " div:first-child").attr("class");
    console.log(carouselElement);

    //Instead of doing $(".element").append(blahblah) do 
    //$(".element").each(function() {
    //    this.append(blahblah);
    //});
    // Now just to keep something in the mind, in the above case, each isn't really required,
    // We need to use each() instead of simple selector because we need the reference to the element 
    // where we want to perform a certain kind of activities. 
    $(carouselElement).each(function () {
        //Here first create a new element
        controls = $('<div class="controls">
            <button class="left"> left </button>
            <button class="right"> right </button>
        </div>');
        //Add all the necessary event hooks as needed
        controls.child(".left").click(function () {
            slide('left');
        });
        controls.child(".right").click(function () {
            slide('right');
        });
        
        //Now after you have prepared the whole object, append it to the carousel.
        $(this).append(controls);
    });

    $(".right").click(function () {
        slide('right');
    });
    });

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


});
