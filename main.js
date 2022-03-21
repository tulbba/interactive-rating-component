$(document).ready(function() {
    $(".btn-number").click(function() {
        $(".btn-number").removeClass("active").css({"background-color":'', "color":''});
        $(this).addClass("active").css({"background-color":'hsl(216, 12%, 54%)', "color":'white'});
    });
    $(".one").on("click", function() {
        $(".result").append("<p>You selected 1 out of 5</p>");
    });
    $(".two").on("click", function() {
        $(".result").append("<p>You selected 2 out of 5</p>");
    });
    $(".three").on("click", function() {
        $(".result").append("<p>You selected 3 out of 5</p>");
    });
    $(".four").on("click", function() {
        $(".result").append("<p>You selected 4 out of 5</p>");
    });
    $(".five").on("click", function() {
        $(".result").append("<p>You selected 5 out of 5</p>");
    });
    $(".btn-submit").click(function() {
        $(".thankyou").removeClass("active");
        $(".thankyou").addClass("active, remove");
        $(".card").hide();
        });
    });

