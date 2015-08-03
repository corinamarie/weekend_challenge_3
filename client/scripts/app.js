$(document).ready(function(){

    $.ajax({
        type: "GET",
        url: "/data",
        success: function(data){
            var dot = "";
            $.each(data, function(){
                //appending data to slides and hiding them all in .maincontainer element
                dot += "<span class='dot'>&bullet;</span>";
                $(".maincontainer").append("<div class='slide jumbotron well'><h3>" + this.name + "</h3><h4>about me:</h4><p class='text'>" + this.desc + "</p><h4>gimme all your love:</h4><p class='text'>" + this.thanks + "</p></div>");
                $(".slide").hide();
                //adding a dot per slide (NOT WORKING)
                //$(".dotcontainer").append(dot);
            });
            //showing first slide
            $(".slide:first-child").show().addClass("active-slide");

            console.log(data);
        }
    });


    //right button set up
    $(".rightglyph").on("click", function(){
        var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next();

        $(currentSlide).fadeOut(2000).removeClass("active-slide").hide();
        $(nextSlide).fadeIn(2000).addClass("active-slide").show();

        if(nextSlide.length === 0) {
            nextSlide = $('.slide').first();
            //nextDot = $('.dot').first();
        }
    });

    //left button set up
    $(".leftglyph").on("click", function(){
        var currentSlide = $('.active-slide');
        var prevSlide = currentSlide.prev();

        $(currentSlide).fadeOut(2000).removeClass("active-slide").hide();
        $(prevSlide).fadeIn(2000).addClass("active-slide").show();

        if(prevSlide.length === 0) {
            prevSlide = $('.slide').last();
            //nextDot = $('.dot').first();
        }
    });

});



