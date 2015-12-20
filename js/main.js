
$("img").on('click mouseover', function (){
    var index=$(this).attr('id').replace("img-","");
    index=parseInt(index);
    //$("img").css('border','0');
    //$(this).css('border','5px solid');
    $(".profile").hide();
    $(".profile").eq(index).show();
    $(".arrow").css('opacity','0');
    $(".arrow").eq(index).css('opacity','1');
});

$("#img-0").click();


//copy from http://codepen.io/rdallaire/pen/apoyx
// ===== Scroll to Top ====
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});
