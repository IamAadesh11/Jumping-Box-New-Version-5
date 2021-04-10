var canvas;

var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(80,580,200,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    //create two more blocks i.e. block3 and block4 here
    block3 = createSprite(510,580,200,30);
    block3.shapeColor = "green";

    block4 = createSprite(720,580,200,30);
    block4.shapeColor = "red";

    ball = createSprite(random(10,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityY = (random(9,7,8));
    ball.velocityX = (random(4,-4));
    //write code to add velocityX and velocityY

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
   
  
    //write code to bounce off ball from the block1 
 //   if(block1.isTouching(ball) && ball.bounceOff(block1)){
 //       ball.shapeColor = "blue";
 //      
 //   


    music.play();

    if(block2.isTouching(ball)){
        ball.shapeColor = "yellow";
        block2.shapeColor = "yellow";
        //write code to set velocityX and velocityY of ball as 0
      // music.stop();
        //write code to stop music
    }

    if(block3.isTouching(ball)){
        ball.shapeColor = "lightgreen";
        block3.shapeColor = "lightgreen";
   
      //  music.stop();
    }

    if (block4.isTouching(ball)){
        ball.shapeColor = "pink";
        block4.shapeColor = "pink";
    
       // music.stop();
    }

    if(block1.isTouching(ball)){
        ball.shapeColor = "lightblue";
        block1.shapeColor = "lightblue";
        ball.velocityY =0;
        ball.velocityX=0;
        music.stop();
        
    }
    

    drawSprites();
}
