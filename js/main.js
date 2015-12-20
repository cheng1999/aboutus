
$("img").on('click mouseover', function (){
    var index=$(this).attr('id').replace("img-","");
    index=parseInt(index);
    $("img").css('border','0');
    $(this).css('border','5px solid');
    $(".profile").hide();
    $(".profile").eq(index).show();
    $(".arrow").css('opacity','0');
    $(".arrow").eq(index).css('opacity','1');
});


