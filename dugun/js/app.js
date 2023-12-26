$(function() {
	var scene = document.getElementById('scene');
	var parallax = new Parallax(scene);
  
  $('.neden').on('click', function(event) {
  	var w_w = $(window).width();
  	$('.island-wrapper').transition({ x: w_w },1500,'easeInOutBack');
  });

  $('.nerede').on('click', function(event) {
  	var w_w = $(window).width();
  	$('.island-wrapper').transition({ x: -w_w  },1500,'easeInOutBack');
  });

  $('.back').on('click', function(event) {
  	var w_w = $(window).width();
  	$('.island-wrapper').transition({ x: 0},1500,'easeInOutBack');
  }); 

  $('li.layer').on('click', function(event) {
  	$('.content-up').addClass('goup');
  });  

  w_call();
});

$(window).load(function() {
  $('body').addClass('loaded')
  setTimeout(function() {
  	$('.loading').addClass('finished');
  }, 6000);
});

$(window).on('resize', function(event) {
	w_call()
});

function w_call() {
  var w_w = $(window).width();
  var island_w = $('.island-1, .island-2, .island-3').width(w_w);	
  var island_w = $('.island-wrapper').width(w_w*3);	
  var island_w = $('.island-wrapper').css('left', -w_w);
  $('.island-wrapper').transition({ x: 0},1500,'easeInOutBack');  
}
