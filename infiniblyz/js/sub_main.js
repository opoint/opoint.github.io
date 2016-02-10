var more_arrow_itv;
jQuery(function($){
	$("#slider").bxSlider({
		adaptiveHeight: true
		, mode : 'fade'
	});
	$(".btn.btn-prev a").on("click", function(e){
		e.preventDefault();
		$(".bx-prev").trigger("click");
	});
	$(".btn.btn-next a").on("click", function(e){
		e.preventDefault();
		$(".bx-next").trigger("click");
	});

	more_arrow_itv = setInterval('fnMoreArrow()', 1000);
});
function fnMoreArrow(){
	var $tmpObj = $(".more .arrow i");
	if ( $tmpObj.is(":visible") )
	{
		$tmpObj.stop().fadeOut();
	} 
	else {
		$tmpObj.stop().fadeIn();
	}
}