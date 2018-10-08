$(function () {

    var aa=[
        {src:'./images1/brl01.jpg'},
        {src:'./images1/brl02.png'},
        {src:'./images1/brl03.jpg'},
        {src:'./images1/brl04.jpg'},
        {src:'./images1/brl05.jpg'},
        {src:'./images1/brl06.jpg'},
        {src:'./images1/brl07.jpg'},
        {src:'./images1/brl08.jpg'},
        {src:'./images1/brl09.jpg'},
        {src:'./images1/brl10.jpg'},
        {src:'./images1/brl11.jpg'},
        {src:'./images1/brl12.png'},
        {src:'./images1/brl13.png'},
        {src:'./images1/brl14.jpg'},
        {src:'./images1/brl15.png'},
        {src:'./images1/brl16.jpg'},
        {src:'./images1/brl17.png'},
        {src:'./images1/brl18.jpg'},
        {src:'./images1/brl19.jpg'},
        {src:'./images1/brl20.png'},
        {src:'./images1/brl21.jpg'},
        {src:'./images1/brl22.png'},
        {src:'./images1/brl23.png'},
        {src:'./images1/brl24.jpg'},
        {src:'./images1/brl25.jpg'},
        {src:'./images1/brl26.png'},
        {src:'./images1/brl27.png'},
        {src:'./images1/brl28.jpg'},
        {src:'./images1/brl29.jpg'},
    

    ];
    
   
    for(var i=0;i<aa.length;i++){
        console.log(aa[i].src);
        $('.pic_div img').eq(i).attr({'src':aa[i].src});
    }


    // var nump;
    // $('.pic_div img').attr({'src':''});
    // $('.pic_div img').each(function(){
      
    //     nump = $('.pic_div img').index(this)+1;
    //     // console.log(nump);
    //     if(nump<10){
    //         nump= '0'+nump;
    //     }
    //     $('.pic_div img').eq(nump-1).attr({'src':'./images1/brl'+nump+'.jpg'});
    //     // console.log(isHasImg($('.pic_div img').eq(nump-1).attr('src')));
    //     // alert($('.pic_div img').eq(1).attr('src'));
    // });
    // // console.log($('.pic_div img').eq(0).attr('src'));
    // // console.log(isHasImg($('.pic_div img').eq(0).attr('src')));
   
    // console.log( $('.pic_div img').eq(1).attr('src'));
    // isHasImg($('.pic_div img').eq(1).attr('src'));
    

    //   var nump;
    // $('.pic_div img').each(function(){
    //     nump = $('.pic_div img').index(this)+1;
    //     // console.log(nump);
    //     if(nump<10){
    //         nump= '0'+nump;
    //     }
    //     // console.log(isHasImg($('.pic_div img').eq(nump-1).attr('src')));
    //     if($('.pic_div img').eq(nump-1).attr('src')==""||$('.pic_div img').eq(nump-1).attr('src')==null){
    //         console.log(nump);
    //         $('.pic_div img').eq(nump-1).attr({'src':'./images1/brl'+nump+'.png'});
    //     }
    //     // console.log(isHasImg($('.pic_div img').eq(nump-1).attr('src')));
    // });
    

  

    $(".dropdown").mouseover(function () {
        $(this).addClass("open");
        $(this).children().css("background",'#fff');
        // $(this).children().children().addClass('bound');
        // $('.caret').css('color','#999');
        // $('.hd_ul li').removeClass('bound');
        // $('.hd_ul div').removeClass('bound');
        $(this).find('a').find('span').addClass('bound');
      
    });
 
    $(".dropdown").mouseleave(function(){
        $(this).removeClass("open");
        $(this).find('a').find('span').removeClass('bound');
        $(this).children().css("background",'#f2f2f2');
        $('.caret').css('color','#999');
        
      
    })
    // 单独
    $(".dropdown1").mouseover(function () {
        // $(this).addClass("open");
        // $(this).children().css("background",'#fff');
        // $(this).children().children().addClass('bound');
        // $('.caret').css('color','#999');
        // $('.hd_ul li').removeClass('bound');
        // $('.hd_ul div').removeClass('bound');
        // $(this).find('a').find('span').addClass('bound');
      
    });
    $(".dropdown1").mouseleave(function(){
        $(this).removeClass("open");
        $(this).children().children().removeClass('bound');
        $(this).children().css("background",'#f2f2f2');
        $('.caret').css('color','#999');
        
      
    })
    // 选项卡
    $('.banner_left li').hover(function(){
        var index=$(".banner_left li").index(this);
        $(this).addClass('on');
        $(this).find('a').css({'color':'red'});
        console.log(index);
        $('.banner_right').eq(index).show();
       
    });
    $('.banner_left li').mouseleave(function(){
        var index=$(".banner_left li").index(this);
        $(this).removeClass('on');
        $(this).find('a').css({'color':'#fff'});
        $('.banner_right').eq(index).hide();
    });
   
    $('.banner_right').hover(function(){
        var index=$(".banner_right").index(this);
        $(this).show();
        $('.banner_left li').eq(index).addClass('on');
        $('.banner_left li a').eq(index).css({'color':'red'});
       
    });

    $('.banner_right').mouseleave(function(){
        var index=$(".banner_right").index(this);
        $(this).hide();
        $('.banner_left li').eq(index).removeClass('on');
        $('.banner_left li a').eq(index).css({'color':'#fff'});
    });
    // 轮播图
    
    var index=-1;
    var index=$('.circle').index();
    $('.circle').eq(0).css('background','#fff');
    $(".banner_pic li").eq(0).show().siblings().hide();
    var arr=['#e8e8e8','#000','#1801a9','#509682','#fef2c1','#e8e8e8'];
    $('.category-con').css('background',arr[0]);
    function play(){
       if(index<0){
            index = -1;
       }
        if (index >= 5) {
            index = -1;
        }
        index++;
        // console.log(index);
        $(".banner_pic li").eq(index).fadeIn(500).siblings().fadeOut(500);
        $('.category-con').css('background',arr[index]);
        $('.circle').eq(index).css('background','#fff').siblings().css('background','#999');
        $(".banner_pic li").css('background',arr[index]);
1
    }
    var t=setInterval(function(){
        play();
    },3000);
    var a=null;
// 鼠标悬停切换
    $('.circle').hover(function(){
        clearInterval(t);
        clearInterval(a);
        var index1= $('.circle').index(this);
        $(this).css('background','#fff').siblings().css('background','#999');
        $(".banner_pic li").eq(index1).fadeIn(500).siblings().fadeOut(500);
        $('.category-con').css('background',arr[index1]);
        $(".banner_pic li").css('background',arr[index1]);
        index=index1-1;
    });
    
    $('.circle').mouseleave(function(){
        var index1= $('.circle').index(this);
        $(this).css('background','#fff');
        index=index1;
        a=setInterval(function(){
            play();
        },3000);
       
    });
   // 鼠标点击切换
   $('.circle').click(function(){
    clearInterval(t);
    clearInterval(a);
    var index1= $('.circle').index(this);
    $(this).css('background','#fff').siblings().css('background','#999');
    $(".banner_pic li").eq(index1).fadeIn(500).siblings().fadeOut(500);
    $('.category-con').css('background',arr[index1]);
    $(".banner_pic li").css('background',arr[index1]);
    index=index1-1;
});

// 黑色小图遮罩
$('.all_pic_ul li a').hover(function(){

    $(this).addClass('black');
//    var a= document.getElementsByClassName('.all_pic_ul');
//    var b=a.getElementsByTagName('li');
//    var c=b.getElementsByTagName('a');
//     c.setAttribute('class', 'black');
 
    
});
$('.all_pic_ul li a').mouseleave(function(){

    $(this).removeClass('black');
    
});
$('.pic_div_last a').hover(function(){
    $(this).addClass('red_white');
    $('.red-marsk span p').addClass('white1');
    $('.red-marsk i').addClass('btn-text1');
});
$('.pic_div_last a').mouseleave(function(){
    $(this).removeClass('red_white');
    $('.red-marsk span p').removeClass('white1');
    $('.red-marsk i').removeClass('btn-text1');
 
});

// 滚动事件
$(window).scroll(function(){  
    var sh,ph,wh;
    sh = $(window).scrollTop();  
    // ph = $(".top").offset().top;
    wh = $(window).height();
   
    // console.log(sh);
    // console.log(wh);
    if (sh>=700) {
      $(".first-nav").css({"display":"block"});
    } else {
        $(".first-nav").css({"display":"none"});
    };
    // 广告
    if (sh>=600) {
        $(".guanggao-left").css({"display":"block"});
      } else {
          $(".guanggao-left").css({"display":"none"});
      };
  });



// 天猫超市广告切换
    $('.grad .floor-tabs ul li').hover(function(event){
        var event=event || window.event;
        event.stopPropagation(); 
        event.preventDefault();  //阻止默认事件
        clearInterval(m);
        clearInterval(n);
        $(this).addClass('tab').siblings().removeClass('tab');
        var index= $('.grad .floor-tabs ul li').index(this);
        console.log(index)
        $('.floor-tab-img').eq(index).show();
        if(index==0){
            $('.floor-tab-img').eq(1).hide();
        }else{
            $('.floor-tab-img').eq(0).hide();
        }
    });

    var n=null;
    $('.grad .floor-tabs ul li').mouseleave(function(event){
         n= setInterval(function(){
            if(num>=2){
                num=0;
            }
           if(num==0){
                $('.grad .floor-tabs ul li').eq(0).addClass('tab');
                $('.grad .floor-tabs ul li').eq(1).removeClass('tab');
                $('.floor-tab-img').eq(1).hide();
                $('.floor-tab-img').eq(0).show();
    
            }else{
                $('.grad .floor-tabs ul li').eq(1).addClass('tab');
                $('.grad .floor-tabs ul li').eq(0).removeClass('tab');
                $('.floor-tab-img').eq(0).hide();
                $('.floor-tab-img').eq(1).show();
            }
            num++;
        },3000);
    });

//   自动播放
    var num=0;
   var m= setInterval(function(){
    //    console.log(num)
        if(num>=2){
            num=0;
        }
       if(num==0){
            $('.grad .floor-tabs ul li').eq(0).addClass('tab');
            $('.grad .floor-tabs ul li').eq(1).removeClass('tab');
            $('.floor-tab-img').eq(1).hide();
            $('.floor-tab-img').eq(0).show();

        }else{
            $('.grad .floor-tabs ul li').eq(1).addClass('tab');
            $('.grad .floor-tabs ul li').eq(0).removeClass('tab');
            $('.floor-tab-img').eq(0).hide();
            $('.floor-tab-img').eq(1).show();
        }
        num++;
    },3000);

    // 右侧导航栏设置长度
    var len = $(window).height() ;
        $('.right-menu').css('height',len);
    $(window).resize(function(){
        var len = $(window).height() ;
        // console.log(len);
        if(len<=549){
            $('.right-menu').css('height','549px');
        }else{
            $('.right-menu').css('height',len);
        }
       

    });
   

    // 返回顶部
$('.g1').click(
    function(e){
        var e = e || window.event;
        e.stopPropagation();
    }
);
$('#retop').click(function(){
    console.log($("#head").offset().top);
    $("html,body").animate({scrollTop:$("#head").offset().top},1000);//1000是ms,也可以用slow代替
});
    
    // 返回部分
    $('#tmcs').click(function(){
        console.log($("#tmcs1").offset().top);
        $("html,body").animate({scrollTop:$("#tmcs1").offset().top-100},1000);//1000是ms,也可以用slow代替
    });

    $('#tmgj').click(function(){
        console.log($("#tmgj1").offset().top);
        $("html,body").animate({scrollTop:$("#tmgj1").offset().top-100},1000);//1000是ms,也可以用slow代替
    });

    $('#mlrs').click(function(){
        console.log($("#mlrs1").offset().top);
        $("html,body").animate({scrollTop:$("#mlrs1").offset().top-100},1000);//1000是ms,也可以用slow代替
    });

    $('#cdkw').click(function(){
        console.log($("#cdkw1").offset().top);
        $("html,body").animate({scrollTop:$("#cdkw1").offset().top-100},1000);//1000是ms,也可以用slow代替
    });

    $('#jjsh').click(function(){
        console.log($("#cdkw1").offset().top);
        $("html,body").animate({scrollTop:$("#jjsh1").offset().top-100},1000);//1000是ms,也可以用slow代替
    });

    $('#dzac').click(function(){
        console.log($("#cdkw1").offset().top);
        $("html,body").animate({scrollTop:$("#dzac1").offset().top-100},1000);//1000是ms,也可以用slow代替
    });

    $('#hwcx').click(function(){
        console.log($("#cdkw1").offset().top);
        $("html,body").animate({scrollTop:$("#hwcx1").offset().top-100},1000);//1000是ms,也可以用slow代替
    });

    $('#cnxh').click(function(){
        console.log($("#cdkw1").offset().top);
        $("html,body").animate({scrollTop:$("#cnxh1").offset().top-100},1000);//1000是ms,也可以用slow代替
    });

//懒加载

        var len = $(window).height();//浏览器gaodu 
        $("img").each(function(){
         
                $(this).attr("data-original",this.src);
                // console.log(this.src);
                $(this).attr("src",'./images/dongtai.gif');
        });

       
            
            
        jiazai();
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
                if(pic_top-sTop <= len+50){
                    // img[i].setAttribute('src',img[i].data-url); 
                    // console.log(i);
                    $('img').eq(i).attr("src",$('img').eq(i).attr('data-original'));
                  
                    // console.log(pic_top);
                    n=i+1;
                }  
            
           }
        }

        $("img").lazyload({effect:'fadeIn'});
    // var n=0;
    // window.onscroll=function(){
    //     // var jj=$('.jj').offset().top;
    //     var len = $(window).height();//浏览器gaodu 
    //     var sTop = $(window).scrollTop();//滚动的高度
    //     //  console.log('滚动的高度'+sTop);
    //     //  console.log('浏览器高度'+len);
    //     var img=$('img');
    //     for(var i=n;i<img.length;i++){
    //         var pic_top=$('img').eq(i).offset().top;
    //         var seeHeight = document.documentElement.clientHeight;
    //         var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    //         // console.log('jjsrc'+$('.jj').attr('src'));
    //         // console.log(seeHeight);
    //         // console.log(scrollTop);
    //         if(pic_top-scrollTop <= seeHeight+100){
    //             // img[i].setAttribute('src',img[i].data-url); 
    //             // console.log(i);
    //             $('img').eq(i).attr("src",$('img').eq(i).attr('data-url'));
    //             // console.log(pic_top);
    //             n=i+1;
    //         }  else{
    //             this.console.log(1);
    //         }
        
    //    }
    // };
       
    
//    浏览器宽度
        $(window).resize(function(){
            var wid=$(window).width();
            var wiall=window.screen.width;
            
            if(wid<=wiall){
                $('.right-menu').css('visibility','hidden');
                $(document).mouseover(function(){
                    $('.right-menu').css('visibility','visible');
                });
                $(document).mouseleave(function(){
                    $('.right-menu').css('visibility','hidden');
                    $('.rr').css({'visibility':'visible'},{'background':'#000'});
                });

                // $('.r-two').css({width:'35px'}); 
            }else{
                $('.right-menu').css('visibility','visible');
            }
           
        });
       
});


