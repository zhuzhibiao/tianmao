$(function(){

    
// 移动端轮播
var addTransition =function(i){
    i.style.transition ='all 0.2s';
    i.style.webKitTransition ='all 0.2s';

}
var removeTransition =function(i){
    i.style.transition = 'none';
    i.style.webKitTransition = 'none';

}
var setTranslateX =function(i,translateX){
    i.style.transform = 'translateX(' + translateX + 'px)';     
    i.style.webKitTransform = 'translateX(' + translateX + 'px)';
}
    var index=1;
      // console.log(index1);
          /*轮播图*/
          var banner = document.querySelector('.TM_nav_box');
          /*屏幕宽度*/
          var width = banner.offsetWidth;
          console.log(width+'wideth');
          /*图片容器*/
          var imageBox = document.querySelector('.TM_nav_box .banner_box .banner_box_ul');
          /*点容器*/
          var pointBox = document.querySelector('.phone_circle_box');
          /*所有的点*/
          var points = $('.phone_circle_box li');
     //自动移动
    function lunboPhone(){
    index++;
    addTransition(imageBox);
    setTranslateX(imageBox,-index*width);
    points.eq(index-1).addClass('white').siblings().removeClass('white');   
    }
    imageBox.addEventListener('transitionend',function(){
        if(index>=8){
            index=0;
            removeTransition(imageBox);
            setTranslateX(imageBox,10);
            points.eq(index-1).addClass('white').siblings().removeClass('white');       
        }
        else if(index<=0){
            index=8;
            removeTransition(imageBox);
            setTranslateX(imageBox,10);
            points.eq(index-1).addClass('white').siblings().removeClass('white'); 
        }
    })
    
   var t= setInterval(lunboPhone,3000);

    // 滑动事件
    var startX =0;
    var distance = 0;
    var traslateX=0;
    var ismove=false;
    
    imageBox.addEventListener('touchstart',function(e){
        // 清楚定时器
        clearInterval(t);
        // 记录起始位置的x坐标
         startX=e.touches[0].clientX;
         console.log(startX);
    });
    imageBox.addEventListener('touchmove',function(e){
        // 记录滑动过程中X坐标
        var moveX =e.touches[0].clientX;

        // 计算位移，有正负方向
         distance = moveX-startX;
        // 计算目标元素的位移
        // 元素将要的定位等于当前定位+手指的定位
         traslateX = -index *width +distance;
        // 滑动
        removeTransition(imageBox);
        setTranslateX(imageBox,traslateX);
        ismove=true;
    });
    imageBox.addEventListener('touchend',function(e){
        // 吸附
        if(ismove){
            if(Math.abs(distance)  < width/3){
                addTransition(imageBox);
                setTranslateX(imageBox,-index * width);
            } else {
                /*切换*/
                /*右滑动 上一张*/
                if (distance > 0) {
                    index--;
                }
                /*左滑动 下一张*/
                else {
                    index++;
                }
                /*根据index去动画的移动*/
                addTransition(imageBox);
                setTranslateX(imageBox,-index * width);
                points.eq(index-1).addClass('white').siblings().removeClass('white');       
            }
        }
                  /*最好做一次参数的重置*/
                  startX = 0;
                  distance = 0;
                  ismove = false;
                  /*加上定时器*/
                  clearInterval(t);
                  t = setInterval(function () {
                      index++;
                      /*加过渡*/
                      addTransition(imageBox);
                      /*做位移*/
                      setTranslateX(imageBox,-index * width);
                      points.eq(index-1).addClass('white').siblings().removeClass('white'); 
                  }, 3000);







              
    });


















   
  //   精品选牌上下移动
  //   var m=[];
  //   var a=$('.j-2');
  //   var tt=[];
  //   a.each(function(index){
  //       // $(this).css.animate({'top':'66px'},1000);
  //        tt[index]=Math.floor(Math.random()*6000+2000);
  //       var index=$('.j-2').index(this);
  //       console.log(m);
  //       m[index]=setInterval(function(){
  //           var a1=$('.j-2').eq(index).css('top');
  //           // console.log(a1);
  //           if(a1==0+'px'){
  //               $('.j-2').eq(index).animate({'top':'66px'},1000);
  //           }else{
  //
  //               $('.j-2').eq(index).animate({'top':'0'},1000);
  //           }
  //           },tt[index]);
  //   });



        // 倒计时
       
        var downTime = function () {
            /*1.每一秒改变当前的时间*/
            /*2.倒数计时  假设 4小时*/
            var time = 4 * 60 * 60;
            var spans = document.querySelectorAll('.time1 span');
            var spans1 = document.querySelectorAll('.time2 span');
            var spans2 = document.querySelectorAll('.time3 span');
                   
            var timer = setInterval(function () {
                time --;
                /*格式化  给不同的元素html内容*/
                var h = Math.floor(time/3600);
                var m = Math.floor(time%3600/60);
                var s = Math.floor(time%60);
                // console.log(h+'h'+m+'m'+'s'+s);
                spans[0].innerHTML = Math.floor(h/10);
                spans[1].innerHTML = h%10;
                spans1[0].innerHTML = Math.floor(m/10);
                spans1[1].innerHTML = m%10;
                spans2[0].innerHTML = Math.floor(s/10);
                spans2[1].innerHTML = s%10;
        
                if(time <= 0){
                    clearInterval(timer);
                }
        
            }, 1000)
        
        }

        downTime();



        // 头部下滑
        // $(window).scroll(
        // function(){
        //     var top1 = $(window).scrollTop();
        //     var search =document.querySelectorAll('.TM_search_bottom');
        //     var search_box=document.querySelectorAll('.TM_search_box');
        //   var TM_title=document.querySelectorAll('.TM_title');
        //   var fenlei =document.querySelectorAll('.fenLei');
        //   var search1=document.querySelectorAll('.search');
        //   var login =document.querySelectorAll('.login_box');
        //     console.log(top1);
        //     if(top1>=100){
        //         $('.TM_container').css({'position':'fixed'},{'height':'50px'});
        //        console.log(search);
        //        search_box[0].style.transition=' all 300ms ease 0ms';
        //         TM_title[0].style.transition=' all 300ms ease 0ms';
        //         TM_title[0].style.transform=' scale(0)';
        //
        //         fenlei[0].style.transition=' all 300ms ease 0ms';
        //         fenlei[0].style.transform='translateY(-2.02667px)'
        //         login[0].style.transition=' all 300ms ease 0ms';
        //         login[0].style.transform='translateY(-2.02667px)'
        //
        //        search_box[0].style.height=45+'px';
        //        search1[0].style.height=31+'px';
        //        search[0].style.transition='all 300ms ease 0ms'
        //
        //        search[0].style.transform='scaleX(0.75) translateY(-42.853333px)';
        //     }
        //     else{
        //         search_box[0].style.transition=' all 300ms ease 0ms'
        //
        //         search_box[0].style.height=99+'px';
        //         search[0].style.transition=' all 300ms ease 0ms'
        //         search[0].style.transform='scaleX(1) translateY(0px)';
        //         fenlei[0].style.transition=' all 300ms ease 0ms';
        //         fenlei[0].style.transform='translateY(0px)';
        //         login[0].style.transition=' all 300ms ease 0ms';
        //         login[0].style.transform='translateY(0px)';
        //         TM_title[0].style.transition=' all 300ms ease 0ms';
        //         TM_title[0].style.transform=' scale(1)';
        //
        //     }
        // }
        // );
        
        // var n=0;
        // var len = $(window).height();//浏览器gaodu
        // $("img").each(function(){
        //
        //         $(this).attr("data-original",this.src);
        //         // console.log(this.src);
        //         $(this).attr("src",'./images/dongtai.gif');
        // });

       
            
            
        // jiazai();
        function jiazai(){
            var len = $(window).height();//浏览器gaodu
            var sTop = $(window).scrollTop();//滚动的高度
            //  console.log('滚动的高度'+sTop);
            //  console.log('浏览器高度'+len);
            var img=$('img');
            for(var i=n;i<img.length;i++){
                var pic_top=$('img').eq(i).offset().top;
                var seeHeight = document.documentElement.clientHeight;
                var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
                // console.log('jjsrc'+$('.jj').attr('src'));
                // console.log(seeHeight);
                // console.log(scrollTop);
                if(pic_top-sTop <= 600){
                    // img[i].setAttribute('src',img[i].data-url);
                    // console.log(i);
                    $('img').eq(i).attr("src",$('img').eq(i).attr('data-original'));

                    // console.log(pic_top);
                    n=i+1;
                }

           }
        }

        $("img").lazyload({effect:'fadeIn'});
 });