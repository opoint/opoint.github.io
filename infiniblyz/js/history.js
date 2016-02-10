var contents_height_check_itv;
var contents_height;
jQuery(function($){
	
	contents_height = $(".left-wrap").height() >= $(".right-wrap").height() ? $(".left-wrap").height() : $(".right-wrap").height();
	$(".center-line-wrap, .center-line").stop().animate({
		"height" : contents_height - 80
	}, 2000);
	contents_height_check_itv = setInterval("fnCenterLineDraw()", 1000);

	for (var i = 1; i < $(".item-conatiner").length; i++)
	{
		setTimeout('fnConnertorWrapShow('+i+')', 600 * (i - 1));
	}
	
	$(".btn-desc-open a").on("click", function(e){
		e.preventDefault();
		$(this).parent().hide().siblings().stop().fadeIn().parent().next(".item-cover").stop().fadeIn();
	});
	$(".btn-desc-close a").on("click", function(e){
		e.preventDefault();
		$(this).parent().hide().siblings().stop().fadeIn().parent().next(".item-cover").stop().fadeOut();
	});
});
function fnCenterLineDraw(){
	var tmp_height = $(".left-wrap").height() >= $(".right-wrap").height() ? $(".left-wrap").height() : $(".right-wrap").height();
	if ( contents_height != tmp_height )
	{
		contents_height = tmp_height;
		$(".center-line-wrap, .center-line").stop().animate({
			"height" : contents_height - 80
		}, 1500);
	}
}
function fnConnertorWrapShow(idx){
	$(".item-conatiner[data-item-container-idx='"+idx+"']").find(".connector-wrap").fadeIn(600);
}