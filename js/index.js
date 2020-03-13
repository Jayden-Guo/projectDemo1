 var mySwiper = new Swiper('.swiper-container',{
      progress:true,
      onProgressChange: function(swiper){
        for (var i = 0; i < swiper.slides.length; i++){
          var slide = swiper.slides[i];
          var progress = slide.progress;
          var scale, translate, opacity;
          if (progress<=0) {
            opacity = 1 - Math.min(Math.abs(progress),1);
            scale = 1 - Math.min(Math.abs(progress/2),1);
            translate = progress*swiper.width;  
          }
          else {
            opacity = 1 - Math.min(Math.abs(progress/2),1);
            scale=1;
            translate=0; 
          }
          slide.style.opacity = opacity;
          swiper.setTransform(slide,'translate3d('+(translate)+'px,0,0) scale('+scale+')');
        }
      },
      onTouchStart:function(swiper){
        for (var i = 0; i < swiper.slides.length; i++){
          swiper.setTransition(swiper.slides[i], 0);
        }
      },
      onSetWrapperTransition: function(swiper, speed) {
        for (var i = 0; i < swiper.slides.length; i++){
          swiper.setTransition(swiper.slides[i], speed);
        }
      },
      onSlideChangeStart : function(swiper){
      	var index=swiper.activeIndex;
      	$(".tab a").removeClass("active");
      	$(".tab a").eq(index).addClass("active");
      },
	       scrollbar: {
	        container : '.swiper-scrollbar',
	        draggable : true,
	        hide: true,
	        snapOnRelease: true
	    }
    })
    // Set Z-Indexes
    for (var i = 0; i < mySwiper.slides.length; i++){
      mySwiper.slides[i].style.zIndex = mySwiper.slides.length - i;
    }

    $(".tab a").click(function(e){
    	e.preventDefault();
    	var index = $(this).index();
    	$(".tab a").removeClass("active");
    	$(this).addClass("active");
    	mySwiper.swipeTo(index);
    	return false;
    })
