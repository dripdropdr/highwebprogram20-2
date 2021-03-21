//원페이지 메뉴 누르면 해당 영역으로 이동
$(document).ready(function(){
  $("#about").click(function(){
    var position = $("#window2").offset();
    $("html").animate({scrollTop:position.top}, 900);
  });
  $("#contact").click(function(){
    var position = $("#window3").offset();
    $("html").stop().animate({scrollTop:position.top}, 900);
  });
});



// --------------원페이징
var scrollEvent = false;
var count = 0;
$('html, body').on('mousewheel', function(c){
  c.preventDefault();
  var m = c.originalEvent.wheelDelta;
  var sb = $("#window1").height();


  if(m>1 && scrollEvent == false && count>=1){
    console.log(sb);
    scrollEvent=true;
    count--;
    $('html,body').stop().animate({scrollTop:$("#window1").height()*count},
      {duration:900, complete: function(){
        scrollEvent = false;}
    });
  }else if (m<1 && scrollEvent == false && count<4){
    console.log(sb);
    scrollEvent = true;
    count++;
    $('html,body').stop().animate({scrollTop:$("#window1").height()*count},
    {duration:900, complete:function(){
      scrollEvent = false;}
    });
  }
})


// -------------------------submit
function sbmit(){
    alert('SUCCESS!');
};


// ---------------------------circle
// $(window).bind('scroll',function(e){
//   parallaxScroll();
//  });
//
// function parallaxScroll(){
//    var scrolled = $(window).scrollTop();
//    var toph = $(".circle1").css("top");
//    console.log(toph);
//    if(scrolled==1360){
//      $('#circle_main > .circle1').css('top', '860px');
//    }else{
//      $('#circle_main > .circle1').css('top',((scrolled*1.11))+'px');
//    }

   // $('#circle_about > div').css('top',(0-(scrolled*.5))+'%');
   // $('#parallax-lvl-2').css('top',(0-(scrolled*.75))+'px');
   // $('#parallax-lvl-3').css('top',(0-(scrolled*.9))+'px');
