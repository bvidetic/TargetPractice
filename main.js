

$(document).ready(function(){
  
    $("button").click(function(){
        $("h1").html("This took way to long");
    });
    
    $("#top").html("If I get paid by the hour I'll be rich!");

    $("button").click(function(){
        $(".mid").html("slow down 10 speed!");
    });

    $("a").css("background-color", "red");
    $("a").attr("href", "http://www.amazon.com");


    $(".a").fadeOut(1000);
    $(".a").fadeIn(2000);

    $("#2").click(function(){
            alert("stop it asshole");
    });

    $(".c").append(".", "to this div.");

    $(".Hockey").addClass("NewHockey");

    $("li").click(function(){            //lesson: click event allows to select any in dom
        $(this).toggleClass('highlight') //could also use remove here
    });

    $(".Final").click(function(){
        $(".Coding").remove();
    });

    $("ul.jeep").find("li").css("background-color", "blue");
});
