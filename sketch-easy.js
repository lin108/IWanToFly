var bird;
var pipes =[];
var score = 10;
var bg;
var altitude=0;
var song;
var sceneGame=true;
var sceneOver=false;
var Over;


function Switch(){
  window.location.assign('index.html');

}






function preload(){
    Char = loadImage("assets/Char1.png");
    bg=loadImage("assets/BG.jpg");
    Over=loadImage("assets/Over.png");

}

function setup() {
  bird = new Bird();
  song = loadSound('assets/2.mp3');
  createCanvas(window.innerWidth,window.innerHeight);
  bird = new Bird();
  pipes.push(new Pipe());



}

function draw() {

    background(bg);
    if(sceneGame==true){


    bird.show();
    bird.update();



    if(frameCount%100 == 0){
        pipes.push(new Pipe());
    }

for( var i = pipes.length-1; i>=0; i--){
    pipes[i].show();
    pipes[i].update();

//collison
    if(pipes[i].hits(bird)){

    }


//offscreen pipes deleting
    if(pipes[i].offscreen()){
        pipes.splice(i,1);
    }

    }
  }
  if(sceneOver==true){
      background(Over);
      fill(226,219,191);
      text("Fly miles",500,300);
      textSize(50);



  }


}





function keyPressed(){
    if(keycode=38){
        bird.up();
       // console.log("SPACE")
    }
}

myVar=setInterval(function(){
  altitude+=10; updateAltitude(altitude);
}, 2000);





//bird.js
function Bird(){
    this.y = 500;
    this.x =300;
    this.gravity = 0.3;
    this.lift = -7;
    this.velocity = 0;

    this.show = function(){
        image(Char,this.x,this.y,80,80);
        // var img = new Image();
        // img.src = "r1.png"
        // this.img = img;

    }

    this.up = function(){
        this.velocity += this.lift;
    }


    this.update = function (){
         this.velocity+=this.gravity;

         this.y+=this.velocity;

//if touch the bottom
         if(this.y>window.innerHeight){
             this.y=window.innerHeight;
             this.velocity=0;
         }

         if(this.y<0){
             this.y=0;
             this.velocity=-this.velocity;
         }
         if(this.y>window.innerHeight-80){
           this.y=window.innerHeight-100;
            this.velocity=-5;
         }
         
    }
}



////PIPE.js
function Pipe(){
    this.top = random(height/2);
    this.bottom = random(height/2);
    this.x = width;
    this.w = 30;
    this.speed = 5;

    this.show = function(){
        fill(255);
        if(this.highlight){
            fill(255,0,0);
        }
        rect(this.x, 0 ,this.w , this.top);
        rect(this.x, height-this.bottom,this.w, this.bottom);
    }

    this.update = function(){
        this.x -= this.speed;
    }


    this.offscreen = function(){
        if(this.x < this.w)
        {  return true; }


            else
             {
                return false;
            }
    }


    this.hits=function(bird){
        if(bird.y<this.top||bird.y> height-this.bottom){
            if(bird.x>this.x && bird.x< this.x+this.w){
                this.highlight= true;
                score=score-1;
               // console.log(score)
                updateScore(score)
                 song.play();
                return true;
            }

        }
        this.highlight=false;
        return false;


    }
}

function over(score){
  if(score=0){
    text("OVER",500,500);
      pipes.push(new Pipe());
  }
}



//formal parameter
function updateScore(num) {

    var scoreEl = document.querySelector(".score-board");
    scoreEl.innerHTML = num;
    if(score<0){
      sceneOver=true;
      sceneGame=false;
      var parent=  document.getElementById("div1");
      var child = document.getElementById("myDiv");
      parent.removeChild(child);


    }

}



function updateAltitude(num) {
    var altitudeEl = document.querySelector(".meters-board");
    altitudeEl.innerHTML = num;
    if(score<0){
      sceneOver=true;
      sceneGame=false;
      var parent=  document.getElementById("div1");
      var child = document.getElementById("myDiv");
      clearInterval(myVar);
      child.x=500;
      child.y=510;
    }
}
