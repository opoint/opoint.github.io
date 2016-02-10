jQuery(function($){
	// 래덤하게 아이템 넓이 설정
	var grid_item_idx_arr = [];
	var $grid_items = $(".tot-container .grid-item");
	var grid_item_width2_length = $grid_items.length / 3;
	//var rd_idx_arr = [];
	var tmp_idx;
	for (var j = 0; j < $grid_items.length; j++)
	{
		grid_item_idx_arr.push(j);
	}
	for (var k = 0; k < grid_item_width2_length; k++)
	{
		tmp_idx = Math.floor(Math.random() * grid_item_idx_arr.length);
		grid_item_idx_arr.splice(tmp_idx, 1);
		$grid_items.eq(tmp_idx).addClass("grid-width2").css({width:408});
	}
	
	//메쏘니 관련 스크롤이 최하단일때 5개씩 추가
	var $grid = $(".grid-wrap").masonry({
			itemSelector: '.grid-item'
			, columnWidth : 204
		});
	$grid.on('layoutComplete', function( event, laidOutItems ){
		$.scrollLock(false);
	});
	$(window).on("load", function(){
		$(".view-container").mCustomScrollbar();

		$grid.masonry({
			itemSelector: '.grid-item'
			, columnWidth : 204
			, layoutComplete : function(){
				
			}
		});
		fnGridAppendItems(5);
		$.scrollLock(false);
		while ($(window).scrollTop() + $(window).height() >= $(document).height()-5)
		{
			if ( $(".tot-container .grid-item").length == 0 )
			{
				break;
			}
			else {
				fnGridAppendItems(5);
			}
		}
	});
	$(window).on("scroll", function() {
		if($(window).scrollTop() + $(window).height() >= $(document).height()-5) {
			
			if ( $(".tot-container .grid-item").length == 0 )
			{
				$.scrollLock(false);
				if ( $(".data-end").is(":visible") == false )
				{
					$(".grid-wrap").append($(".data-end-wrap"));
					$(".data-end-wrap").stop().fadeIn(1500);
				}
			} 
			else {
				$.scrollLock(true);
				fnGridAppendItems(5);
			}
		}
	});
	
	function fnGridAppendItems(idx){
		$(".item-cover").hide();
		var $items = $(".tmp-stack-container");
		for (var i = 0; i < idx; i++)
		{
			$items.append($(".tot-container .grid-item").eq(0));
		}
		var $new_items = $(".tmp-stack-container .grid-item");
		$grid.append( $new_items ).masonry( 'appended', $new_items );
		$items.html('');
		$(".item-cover").hide();
	}

	$(".grid-box").on("mouseenter", function(){
		$(this).find(".item-cover").hide().stop().fadeIn();
		
	});
	$(".item-cover").on("mouseleave", function(){
		$(this).show().stop().fadeOut();
	});
	
	var temp_desc_idx = 0;
	$(".item-cover .desc a").on("click", function(e){
		e.preventDefault();
		temp_desc_idx = $(this).data("descIndex");
		var bPopup = $(".view-wrap"+temp_desc_idx).bPopup();
		$.scrollLock(true);
	});
	// data-contents-type 이 0 이면 동영상 1 이면 이미지
	$(".btn-desc-close a").on("click", function(e){
		e.preventDefault();
		if ( $(this).data("contentsType") == 0 )
		{
			var myPlayer =  document.getElementById("video"+$(this).data("contentsIdx")).contentWindow;
			myPlayer.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
		}
		$.scrollLock(false);
	})
});