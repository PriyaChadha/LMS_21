var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "#e52b50";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "#ffbf00";

    block3 = createSprite(515,580,200,30);
    block3.shapeColor = "#a4c639";

    block4 = createSprite(740,580,220,30);
    block4.shapeColor = "#915c83";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = "#f0ffff";
    ball.velocityX = 4;
    ball.velocityY = 9;

}

function draw() {
    background(rgb(0,255),rgb(0,255),rgb(0,255));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }

    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "red";
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "green";
    }

    drawSprites();
}
