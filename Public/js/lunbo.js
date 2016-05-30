$(document).ready(function() {
	var i = 0;
	var $clone = $('.banner .img li').first().clone();
	$('.banner .img').append($clone);

	$('.header_banner_cont .btn_r').click(function(event) {
		/* Act on the event */
		i++;
		move();

	});
	$('.header_banner_cont .btn_l').click(function(event) {
		/* Act on the event */
		i--;
		move();
	});
	function move() {
		if(i == -1) {
			$('.header_banner_cont .banner').css({
				marginLeft: -4*1100,
			});
			i = 3;
		}
		$('.header_banner_cont .banner').stop().animate({
	        marginLeft:-i*1100,
		}, 500,function(){
			if(i == 4) {
				$('.header_banner_cont .banner').css({
					marginLeft:0,
				});
				i = 0;
			}
		});

		if(i==4)
		$('.header_banner_cont .num li').eq(0).addClass('on').siblings().removeClass('on');
		else
		$('.header_banner_cont .num li').eq(i).addClass('on').siblings().removeClass('on');
	};	

	/*鼠标点击圆点*/
	$('.header_banner_cont .num li').click(function(event) {
		/* Act on the event */
		var $index = $(this).index();
		i = $index;
		move();
		$('.header_banner_cont .num li').eq(i).addClass('on').siblings().removeClass('on');
	});

	/*自动轮播*/
	auto = setInterval(function(){i++;move();},5000);
	/*鼠标停留 轮播暂停*/
	$('.header_banner_cont').hover(function() {
		/* Stuff to do when the mouse enters the element */
		clearInterval(auto);
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		auto = setInterval(function(){i++;move();},5000);
	});	


//news 轮播图
	var n_i = 0;
	
	$('.news_banner_cont .btn_r').click(function(event) {
		/* Act on the event */
		n_i++;
		n_move();

	});
	$('.news_banner_cont .btn_l').click(function(event) {
		/* Act on the event */
		n_i--;
		n_move();
	});
	function n_move() {
		if(n_i == -1) {
			$('.news_banner_cont .banner').css({
				marginLeft: -4*320,
			});
			n_i = 3;
		}
		$('.news_banner_cont .banner').stop().animate({
	        marginLeft:-n_i*320,
		}, 500,function(){
			if(n_i == 4) {
				$('.news_banner_cont .banner').css({
					marginLeft:0,
				});
				n_i = 0;
			}
		});

	};	


	/*自动轮播*/
	n_auto = setInterval(function(){n_i++;n_move();},5000);
	/*鼠标停留 轮播暂停*/
	$('.news_banner_cont').hover(function() {
		/* Stuff to do when the mouse enters the element */
		clearInterval(n_auto);
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		n_auto = setInterval(function(){n_i++;n_move();},5000);
	});	
});