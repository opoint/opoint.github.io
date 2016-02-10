var blink_itv = 0;
var $tmp_obj;
var inf_btn_more_itv, lov_btn_more_itv;
jQuery(function($){

	$('#fullpage').fullpage({
		afterRender : function(){
			$('.lov-bg').vegas({
				slides: [
					{ src: 'imgs/main/lovelyz/main_bg.png' }
					, { src: 'imgs/main/lovelyz/main_bg2.png' }
					, { src: 'imgs/main/lovelyz/main_bg3.png' }
					, { src: 'imgs/main/lovelyz/main_bg4.png' }
					, { src: 'imgs/main/lovelyz/main_bg5.png' }
					, { src: 'imgs/main/lovelyz/main_bg6.png' }
					, { src: 'imgs/main/lovelyz/main_bg7.png' }
				]
				, timer : false
				//, transition: 'random'
				, transition: [ 'fade', 'fade2', 'slideLeft', 'slideLeft2', 'slideRight', 'slideRight2', 'slideUp', 'slideUp2', 'slideDown', 'slideDown2', 'zoomIn', 'zoomIn2', 'zoomOut', 'zoomOut2', 'swirlLeft', 'swirlLeft2', 'swirlRight', 'swirlRight2', 'blur', 'blur2' ]
				, animation: 'random'
				//, transitionDuration : 3000
				//, animationDuration: 3000
			});
			$('.inf-bg').vegas({
				slides: [
					{ src: 'imgs/main/infinite/main_bg.png' }
					, { src: 'imgs/main/infinite/main_bg2.png' }
					, { src: 'imgs/main/infinite/main_bg3.png' }
					, { src: 'imgs/main/infinite/main_bg4.png' }
					, { src: 'imgs/main/infinite/main_bg5.png' }
					, { src: 'imgs/main/infinite/main_bg6.png' }
					, { src: 'imgs/main/infinite/main_bg7.png' }
				]
				, timer : false
				//, transition: 'random'
				, transition: [ 'fade', 'fade2', 'slideLeft', 'slideLeft2', 'slideRight', 'slideRight2', 'slideUp', 'slideUp2', 'slideDown', 'slideDown2', 'zoomIn', 'zoomIn2', 'zoomOut', 'zoomOut2', 'swirlLeft', 'swirlLeft2', 'swirlRight', 'swirlRight2', 'blur', 'blur2' ]
				, animation: 'random'
				//, transitionDuration : 3000
				//, animationDuration: 3000
			});
		}
	});
	
	$(window).on("resize", function(){
		fnSectionResize();
	});
	
	//섹션0, 섹션1 마우스 + 포커스
	var $par_obj;
	$(".logo-wrap .logo").on("mouseenter", function(){
		clearInterval(blink_itv); blink_itv = 0;
		$par_obj = $(this).parent();
		$(".btn-wrap", $par_obj).stop().fadeIn(200, function(){
			fnLogoOvAct($(this));	
		});
	});
	$(".logo-wrap .logo a").on("focusin", function(){
		clearInterval(blink_itv); blink_itv = 0;
		$par_obj = $(this).parent().addClass("over").parent();
		$(".btn-wrap", $par_obj).stop().fadeIn(200, function(){
			fnLogoOvAct($(this));	
		});
	});
	$(".logo-wrap").on("mouseleave", function(){
		clearInterval(blink_itv); blink_itv = 0;
		$par_obj = $(this);
		$(".btn-wrap", $par_obj).stop().fadeOut(200, function(){
			fnLogoOutAct($(this));
		});
	});
	$(".logo-wrap .logo a").on("focusout", function(){
		clearInterval(blink_itv); blink_itv = 0;
		$par_obj = $(this).parent().removeClass("over").parent();
		$(".btn-wrap", $par_obj).stop().fadeOut(200, function(){
			fnLogoOutAct($(this));
		});
	});
	
	// 섹션2 인피니트 캐로셀1
	var $inf_caro = $('.inf-caro');
	$inf_caro.on("init", function(event, slick){
		$(".inf-caro .item.slick-slide .item-box").css({
			top : 77
			, left : 40
			, width : "60%"
			, height : "60%"
		});
		$(".inf-caro .item.slick-slide[data-slick-index=0]").find(".item-box").css({
			top : 0
			, left : 0
			, width : "100%"
			, height : "100%"
		}).parent().siblings(".item.slick-slide[data-slick-index=-1], .item.slick-slide[data-slick-index=4]").find(".item-box").css({
			top : 38
			, left : 40
			, width : "80%"
			, height : "80%"	
		});
	});
	$inf_caro.slick({
		//accessibility : false
		centerMode : true
		, centerPadding : "0px"
		, focusOnSelect : true
		, slidesToShow : 1
		, variableWidth : true
		, adaptiveHeight: true
		, speed : 300
		, prevArrow : $('.inf-caro-container .btn-prev a')
		, nextArrow : $('.inf-caro-container .btn-next a')
		
	});
	$inf_caro.on('beforeChange', function(event, slick, currentSlide, nextSlide){
		if ( (currentSlide < nextSlide && (currentSlide != 0 || nextSlide != 4)) || (currentSlide == 4 && nextSlide == 0) )
		{	
			fnInfCaroNext(currentSlide, nextSlide);
		}
		else {
			fnInfCaroPrev(currentSlide, nextSlide);
		}
	});
	$inf_caro.on('afterChange', function(event, slick, currentSlide){
		$(".inf-caro .item.slick-slide[data-slick-index="+ currentSlide +"] .item-box").stop().animate({
			top : 0
			, left : 0
			, width : "100%"
			, height : "100%"
		});
	});
	//섹션2 러블리즈 캐로셀2
	var $lov_caro = $('.lov-caro');
	$lov_caro.on("init", function(event, slick){
		$(".lov-caro .item.slick-slide .item-box").css({
			top : 38
			, left : 40
			, width : "80%"
			, height : "80%"
		});
		$(".lov-caro .item.slick-slide[data-slick-index=0]").find(".item-box").css({
			top : 0
			, left : 0
			, width : "100%"
			, height : "100%"
		}).parent().siblings(".item.slick-slide[data-slick-index=-1], .item.slick-slide[data-slick-index=4]").find(".item-box").css({
			top : 77
			, left : 120
			, width : "60%"
			, height : "60%"
		});
	});
	$lov_caro.slick({
		//accessibility : false
		centerMode : true
		, centerPadding : "0px"
		, focusOnSelect : true
		, slidesToShow : 1
		, variableWidth : true
		, adaptiveHeight: true
		, speed : 300
		, prevArrow : $('.lov-caro-container .btn-prev a')
		, nextArrow : $('.lov-caro-container .btn-next a')
		
	});
	$lov_caro.on('beforeChange', function(event, slick, currentSlide, nextSlide){
		if ( (currentSlide < nextSlide && (currentSlide != 0 || nextSlide != 4)) || (currentSlide == 4 && nextSlide == 0) )
		{	
			fnLovCaroNext(currentSlide, nextSlide);
		}
		else {
			fnLovCaroPrev(currentSlide, nextSlide);
		}
	});
	$lov_caro.on('afterChange', function(event, slick, currentSlide){
		$(".lov-caro .item.slick-slide[data-slick-index="+ currentSlide +"] .item-box").stop().animate({
			top : 0
			, left : 0
			, width : "100%"
			, height : "100%"
		});
	});
	$(".item-box").on({
		"mouseenter" : function(){
			$(".desc-wrap", this).stop().fadeIn();
		}
		, "mouseleave" : function(){
			$(".desc-wrap", this).stop().fadeOut();
		}
	});
	//섹션2 더보기 버튼 관련 인터벌 등
	inf_btn_more_itv = setInterval("fnBtnMoreAct($('.inf-caro-desc-container .btn-more'))", 1000);
	setTimeout("fnBtnItv()", 1500);
	/*
	$('.inf-caro-desc-container .btn-more').on({
		"mouseenter" : function(){
			clearInterval(inf_btn_more_itv);
		}
		, "mouseleave" : function(){
			clearInterval(inf_btn_more_itv);
			inf_btn_more_itv = setInterval("fnBtnMoreAct($('.inf-caro-desc-container .btn-more'))", 1000);
		}
	});
	$('.lov-caro-desc-container .btn-more').on({
		"mouseenter" : function(){
			clearInterval(lov_btn_more_itv);
		}
		, "mouseleave" : function(){
			clearInterval(lov_btn_more_itv);
			lov_btn_more_itv = setInterval("fnBtnMoreAct($('.lov-caro-desc-container .btn-more'))", 1000);
		}
	});
	*/
});
// 윈도우 사이즈 변경시 배경맞추기
function fnSectionResize(){
	$('.bg-wrap, .section-bg, .vegas-wrapper, .vegas-slide').css({
		"width" : $(window).width()
		, "height" : $(window).height()
	});
}
//섹션0, 섹션1 로고에서 마우스엔터+포커스인 액션
function fnLogoOvAct($obj) {
	$(".txt", $obj).stop().slideDown(400);
	$(".arrow", $obj).stop().slideDown(800, function(){
		$tmp_obj = $(this);
		blink_itv = setInterval( "fnBlinkArrow( $tmp_obj )", 800 );
	});
}
//섹션0, 섹션1 로고에서 마우스리브+포커스아웃 액션
function fnLogoOutAct($obj) {
	$(".txt", $obj).hide();
	$(".arrow", $obj).hide();
	clearInterval(blink_itv); blink_itv = 0;
}
//섹션0, 섹션1 화살표 깜빡임
function fnBlinkArrow($obj){
	if( $obj.is(":visible") == true ) {
		$obj.stop().fadeOut(400);
	} 
	else {
		$obj.stop().fadeIn(700);
	}
}
//섹션2 인피니트 캐로셀 1 관련 펑션
function fnInfCaroNext(currentSlide, nextSlide){
	var $curObj = $(".inf-caro .item.slick-slide[data-slick-index="+ currentSlide +"]");
	$(".inf-caro .item.slick-slide[data-slick-index="+ nextSlide +"] .item-box, .inf-caro .item.slick-slide[data-slick-index="+ (nextSlide+1) +"] .item-box")
	.add( $curObj.next().add( $curObj.next().next() ).find(".item-box") )
	.css({
		top : 77
		, left : 40
		, width : "60%"
		, height : "60%"
	}).end().parent().siblings(".item.slick-slide[data-slick-index="+ currentSlide +"]").find(".item-box").stop().animate({
		top : 38
		, left : 40
		, width : "80%"
		, height : "80%"
	});
	
}
function fnInfCaroPrev(currentSlide, nextSlide){
	var $curObj = $(".inf-caro .item.slick-slide[data-slick-index="+ currentSlide +"]");
	$(".inf-caro .item.slick-slide[data-slick-index="+ nextSlide +"] .item-box, .inf-caro .item.slick-slide[data-slick-index="+ (nextSlide-1) +"] .item-box")
	.add( $curObj.prev().add( $curObj.prev().prev() ).find(".item-box")	)
	.css({
		top : 38
		, left : 40
		, width : "80%"
		, height : "80%"
	}).end().parent().siblings(".item.slick-slide[data-slick-index="+ currentSlide +"]").find(".item-box").stop().animate({
		top : 77
		, left : 40
		, width : "60%"
		, height : "60%"
	});
}
//섹션2 러블리즈 캐로셀 2 관련 펑션
function fnLovCaroNext(currentSlide, nextSlide){
	var $curObj = $(".lov-caro .item.slick-slide[data-slick-index="+ currentSlide +"]");
	$(".lov-caro .item.slick-slide[data-slick-index="+ nextSlide +"] .item-box, .lov-caro .item.slick-slide[data-slick-index="+ (nextSlide+1) +"] .item-box")
	.add( $curObj.next().add( $curObj.next().next() ).find(".item-box") )
	.css({
		top : 38
		, left : 40
		, width : "80%"
		, height : "80%"
	}).end().parent().siblings(".item.slick-slide[data-slick-index="+ currentSlide +"]").find(".item-box").stop().animate({
		top : 77
		, left : 120
		, width : "60%"
		, height : "60%"
	});
	
}
function fnLovCaroPrev(currentSlide, nextSlide){
	var $curObj = $(".lov-caro .item.slick-slide[data-slick-index="+ currentSlide +"]");
	$(".lov-caro .item.slick-slide[data-slick-index="+ nextSlide +"] .item-box, .lov-caro .item.slick-slide[data-slick-index="+ (nextSlide-1) +"] .item-box")
	.add( $curObj.prev().add( $curObj.prev().prev() ).find(".item-box")	)
	.css({
		top : 77
		, left : 120
		, width : "60%"
		, height : "60%"
	}).end().parent().siblings(".item.slick-slide[data-slick-index="+ currentSlide +"]").find(".item-box").stop().animate({
		top : 38
		, left : 40
		, width : "80%"
		, height : "80%"
	});
}
//섹션2 더보기버튼 관련 펑션
function fnBtnItv(){
	clearInterval(lov_btn_more_itv);
	lov_btn_more_itv = setInterval("fnBtnMoreAct($('.lov-caro-desc-container .btn-more'))", 1000);
}
function fnBtnMoreAct($obj){
	var $tempObj = $obj.find("i");
	if ( $tempObj.is(":visible") )
	{
		$tempObj.stop().fadeOut('1000');
	}
	else {
		$tempObj.stop().fadeIn('1000');
	}
}