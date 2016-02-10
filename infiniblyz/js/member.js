jQuery(function($){
	var $grid;
	$(window).on("load", function(){
		$grid = $(".grid-wrap").masonry({
			itemSelector: '.grid-item'
			, columnWidth : 341
		});
		$(".mem-container").mCustomScrollbar();
	});
	
	// 인피니트 멤버 소개 클릭과 클로즈시 액션
	var gridIdx;
	$(".grid-box a").on("click", function(e){
		e.preventDefault();
		gridIdx = $(this).data("gridBoxIdx");
		// masonry 이동
		$(".grid-box.current").removeClass("current");
		$(this).parent().parent().addClass("current");
		if ( $(this).parent().parent().parent().parent().parent().hasClass("inf-grid-wrap") )
		{
			$(".grid-wrap").css({
				"width" : 210
			}).find(".grid-item").stop().animate({
				"width" : 210
			}, function(){
				$grid.masonry('layout');
			});
		}
		else {
			$(".grid-wrap").css({
				"width" : 210
			}).stop().animate({
				"margin-left" : 814	
			}).find(".grid-item").stop().animate({
				"width" : 210
			}, function(){
				$grid.masonry('layout');
			});
		}
		$grid.masonry('layout');
		// 개별 설명 페이지 show
		$(".mem-intro-wrap").show();
		$(".mem-container"+gridIdx).stop().fadeIn().siblings(".mem-container").fadeOut();
	});
	$(".btn-desc-close a").on("click", function(e){
		e.preventDefault();
		$(".grid-box.current").removeClass("current");
		$(".mem-intro-wrap").stop().fadeOut(400, function(){
			$(".mem-container").hide();
		});

		var inf_arr = [];
		var tmp_idx;
		var rd_arr = [];
		if ( $(this).parent().parent().parent().hasClass("inf-mem-intro-wrap") )
		{
			inf_arr = [0, 1, 2, 3, 4, 5, 6];
			for (var k = 0; k < 2; k++)
			{
				tmp_idx = Math.floor(Math.random() * inf_arr.length);
				rd_arr.push(inf_arr[tmp_idx]);
				inf_arr.splice(tmp_idx, 1);
			}
		}
		else {
			inf_arr = [0, 1, 2, 3, 4, 5, 6, 7];
			for (var k = 0; k < 3; k++)
			{
				tmp_idx = Math.floor(Math.random() * inf_arr.length);
				rd_arr.push(inf_arr[tmp_idx]);
				inf_arr.splice(tmp_idx, 1);
			}
		}
		$(".grid-item.grid-width2").removeClass("grid-width2");
		for (var l = 0; l < rd_arr.length; l++)
		{
			$(".grid-item").eq(rd_arr[l]).addClass("grid-width2");
		}
		$(".grid-item").randomshuffle();
		$(".grid-item").css("position", "static");
		$(".grid-wrap").css({
			"width" : 1024
		});
		if ( $(this).parent().parent().parent().hasClass("lov-mem-intro-wrap") ){
			$(".grid-wrap").stop().animate({
				"margin-left" : 0	
			});
		}
		$grid.masonry('destroy');
		$(".grid-wrap .grid-item").each(function(idx){
			if ( $(this).hasClass("grid-width2") )
			{
				$(this).stop().animate({
					width : 682
				}, function(){
					$grid.masonry({
						itemSelector: '.grid-item'
						, columnWidth : 341
					});
				});
			}
			else {
				$(this).stop().animate({
					width : 341
				}, function(){
					$grid.masonry({
						itemSelector: '.grid-item'
						, columnWidth : 341
					});
				});
			}
			
		});
	});
	
});