$(function () {
    'use strict';
    
var winH = $(window).height(), // عمل متغير سماة كذا و حط جمبة ويندو هايت معناها ارتفاع الشاشه كلها //
UpperH   = $('.upper-bar') .innerHeight (), // عمل متغير تاني سماة كذا و جاب اسم النافبار ال هو عندك ابر بار و ادالة إينر هايت عشان يحسب الهوامش 
navH     = $('.navbar').innerHeight();
           $('.slider, .carousel-item').height(winH - (UpperH+navH));

           
// ببساطة هو عمل متغير عشان يحط فيه طول الشاشه
// دي الخاصية ال بتعرف منها طول الشاشه : $(window).height()
// وبعدين جاب طول الابر بار و حطة جوا متغير باردو
// ثم طول النافبار و حطه جوا متغير باردو
// ثم عشان يجيب طول السلايدر .. طرح ارتفاع الشاشه كلها من الابر بار و الناف
//Navbar 
  
$('#main-nav ul li') .on('click', function(){

    $(this).addClass('active').siblings().removeClass('active');
    });
//Featured work     
$('.Featured-work ul li') .on('click', function(){
$(this).addClass('active').siblings().removeClass('active');
//----------------

if ($(this).data('class') === '.all') {
        $('.shuffle-imgs .col-md').css('opacity','1')

    } else {
       
        $('.shuffle-imgs .col-md').css('opacity','.07')  ;
        $($(this).data('class')).parent().css ('opacity',1) ;
      }

});
});
