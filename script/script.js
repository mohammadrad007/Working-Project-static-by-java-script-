    var bg_clr = document.getElementById('bg_clr');
     bg_clr.onchange = function () {
       document.body.style.background = bg_clr.value;
     }
     
     document.body.onscroll = function(){
       var btn_scroll = document.getElementById('btn_scroll');
       var top = document.documentElement.scrollTop;

       if(top > 1000){
        btn_scroll.style.opacity = 1;
       }else{
        btn_scroll.style.opacity = 0;

       }
     }

     btn_scroll.onclick = function(){
      var current = document.documentElement.scrollTop;
      var scroll = setInterval(function(){
        document.documentElement.scrollTop = current -= 20;
        if(current < 1){
          clearInterval(scroll);
        }

      }, 10);
     }

     //Global var

var login = document.getElementsByClassName('Login')[0];
var modal = document.getElementById('modal');
var close = document.getElementsByClassName('close')[0];

//Login
login.onclick = function(){
  modal.style.display = 'block';
}

//close

close.onclick = function() {
  modal.style.display = 'none';

}

//efect
close.onmouseover = function(){
  modal.style.backgroundColor = 'rgba(0,0,0,.7)';
  modal.style.transition = 'all .8s'
}

close.onmouseout = function(){
  modal.style.backgroundColor = 'rgba(0,0,0,.4)';
  modal.style.transition = 'all .8s'
}


//valid function
function validation() {
  var user1 = document.getElementById('user1');
  var pwd1 = document.getElementById('pwd1');
  var pwd2 = document.getElementById('pwd2');
  var st = /[a-z]/g;
  var st1 = /[0-9]/g;
  var st2 = /[A-Z]/g;


   if(user1.value == '' || pwd1.value == '' || pwd2.value == ''){
     alert('نوشتن نام کاربری و پسورد الزامیست');
     return false;
   }
   else if(/[^a-z]/.test(user1.value)){
    alert('برای نام کاربری فقط حروف را وارد کنید !!!');
    return false;
  }
  else if (pwd1.value.length < 8 || pwd2.value.length < 8 ) {
    alert('پسورد خیلی کوتاه است!! پسورد باید حداقل هشت رقم باشد !!!')
    return false;
  }
  else if ( !pwd1.value.match(st) || !pwd1.value.match(st1) || !pwd1.value.match(st2) ) {
    alert('پسورد قوی تری شامل حروف و اعداد کوچ و بزرگ را وارد کنید');
    return false;
  }
  else if (pwd1.value !== pwd2.value) {
    alert('پسوردی یکسان وارد کنید');
    return false;
  }
}

var cover = document.getElementById('cover');

document.body.onload = function () {
  cover.style.display = 'none';
}
var slider = document.getElementById('slider');

var isdown = false;
var start;
var scrollLeft;

slider.addEventListener('mousedown',function (e) {
  // alert('ok');
  // console.log(e);
  // console.log(e.pageX);
  // console.log(slider.offsetLeft);
  // console.log(slider.offsetTop);
  // console.log(slider.offsetHeight);
  // console.log(slider.offsetWidth);
  // console.log(slider.scrollLeft);
  isdown = true;
  start = e.pageX - slider.offsetLeft;
  scorllLeft = slider.scrollLeft;
  // console.log(start);
  // slider.scrollLeft = 268;

})

slider.addEventListener('mouseup', function () {
  isdown = false;

})
slider.addEventListener('mousemove', function (e) {
  if (!isdown){return}

  // console.log(e.pageX);
  var x = e.pageX - slider.offsetLeft;
  var scrollmove = x - start;
  slider.scrollLeft = scorllLeft - scrollmove;

  // console.log('x='+x + '; start= '+ start + '; scrollmove= ' +scrollmove);
})


  