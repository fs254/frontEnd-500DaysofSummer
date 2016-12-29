$(document).ready(function(){
    $(".btn-primary-outline").hover(function(){
        $(".overlay").stop().fadeIn("slow");
        }, function(){
        $(".overlay").stop().delay(1000).fadeOut(2000);
    });
});


$(document).ready(function(){
    $(".storyline").hover(function(){
        $(".castContent").stop().hide();
        $(".trailerContent").stop().hide();
        $(".storylineContent").stop().fadeIn("slow");
        }, function(){
        $(".storylineContent").stop().delay(20000).fadeOut(2000);
    });
});

$(document).ready(function(){
    $(".cast").hover(function(){
        $(".storylineContent").stop().hide();
        $(".trailerContent").stop().hide();
        $(".castContent").stop().fadeIn("slow");
        }, function(){
        $(".castContent").stop().delay(200000).fadeOut(2000);
    });
});

$(document).ready(function(){
    $(".trailer").hover(function(){
        $(".storylineContent").stop().hide();
        $(".castContent").stop().hide();
        $(".trailerContent").stop().fadeIn("slow");
        }, function(){
        $(".trailerContent").stop().delay(147000000).fadeOut(2000);
    })
})