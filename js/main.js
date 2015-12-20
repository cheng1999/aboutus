
$("#cheng").on('click mouseover', function (){
	$("#cheng").css('border','5px solid');
	$("#goh").css('border','0');
	$("#chengprofile").show();
	$("#gohprofile").hide();
	$("#chengarrow").css('opacity','1');
	$("#goharrow").css('opacity','0');
});

$("#goh").on('click mouseover', function (){
	$("#cheng").css('border','0');
	$("#goh").css('border','5px solid');
	$("#chengprofile").hide();
	$("#gohprofile").show();
	$("#chengarrow").css('opacity','0');
	$("#goharrow").css('opacity','1');
});
