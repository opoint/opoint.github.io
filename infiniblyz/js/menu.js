jQuery(function($){
	$('.slider-menu').slideReveal({
		trigger: $(".top .top-btn")
		, width : 249
		, overlay : false
		, push : false
		, show : function(){
			$(this).show();
		}
		,hidden : function(){
			$(this).hide();
		}
	});
	$(".top .top-btn").on("click", function(e){
		e.preventDefault();
		$(this).hide().siblings().stop().fadeIn();
	});
	
	// 메뉴 마우스엔터&리브 포커스인&아웃
	$(".menu-logo-wrap.lov, .menu-logo-wrap.inf").on("mouseenter", function(){
		$(this).siblings().hide().stop().fadeIn();
	});
	$(".depth1-inner").on("mouseleave", function(){
		$(".depth2-container", this).show().stop().fadeOut();
	});
});