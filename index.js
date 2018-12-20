function Switch1(){
  window.location.assign('game-easy.html');

}


function Switch2(){
  window.location.assign('game.html');

}

function Switch3(){
  window.location.assign('game-hard.html');

}


window.onload=Main;
//全局坐标变量
 var x="";
 var y="";
 //定位图片位置
 function GetMouse(oEvent)
 {
  x=oEvent.clientX;
  y=oEvent.clientY;
 document.getElementById("Img").style.left=(parseInt(x)-10)+"px";
document.getElementById("Img").style.top=y+"px";
  }
  //入口
  function Main()
  {
    var ele=document.getElementById("Main");
    //注册鼠标移动事件
    ele.onmousemove=function(){GetMouse(event);}
    // 注册鼠标按下事件
   ele.onmousedown=function(){change("Img","MUp.png");}
    //注册鼠标弹回事件
    ele.onmouseup=function(){change("Img","MUp.png");}
   }
