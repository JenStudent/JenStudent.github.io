var ballx = 300;
var bally = 300;
var ballSize =100;
var ball1x = 300;
var ball1y = 300;
var ball1Size =100;
var ball2x = 300;
var ball2y = 300;
var ball2Size =100;
var ball3x = 300;
var ball3y = 300;
var ball3Size =100;
var ball4x = 300;
var ball4y = 300;
var ball4Size =100;
var ball5x = 300;
var ball5y = 300;
var ball5Size =100;
var ball6x = 300;
var ball6y = 300;
var ball6Size =100;
var img;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var gameState = "L1";
var score = 0;

function preload() {
img = loadImage('https://jenstudent.github.io/images/zombie.png');
img2 = loadImage('https://jenstudent.github.io/images/cave.png');
img3 = loadImage('https://jenstudent.github.io/images/enderman.png');
img4 = loadImage('https://jenstudent.github.io/images/creeper.png');
img5 = loadImage('https://jenstudent.github.io/images/skeleton.png');
img6 = loadImage('https://jenstudent.github.io/images/spider.png');
img7 = loadImage('https://jenstudent.github.io/images/villager3.gif');
img8 = loadImage('https://jenstudent.github.io/images/llama.gif');
}

function setup() {
createCanvas (600, 600);
textAlign(CENTER); //center 
textSize(20);
} //end of setup


function draw() {
background (img2);
if (gameState == "L1") {
levelOne(); 
}
if (gameState == "L2") {
levelTwo();
}
if (gameState == "L3") {
levelThree();
}
if (gameState == "L4") {
levelFour();
}
if (gameState == "L5") {
levelFive();
}
if (gameState == "L6") {
levelSix();
}
text(("Score:" +score), width/2, 40);
} //end of draw


function levelOne(){
fill (255,255,255);
text("level 1", width/2,height-20);

var distToBall = dist(ballx, bally, mouseX,mouseY);

if (distToBall<ballSize/2){
ballx =random (width);
bally = random (height);
score = score +1;
} //if distToBall

if (score>20){
gameState = "L2";
}

image(img, ballx, bally, ballSize, ballSize);
} //end level one

function levelTwo(){
fill (255,255,255);
text("level 2", width/2,height-20);

var distToBall = dist(ballx, bally, mouseX,mouseY);

if (distToBall<ballSize/2){
ballx =random (width);
bally = random (height);
score = score +1;
} //if distToBall

var distToBall1 = dist(ball1x, ball1y, mouseX,mouseY);

if (distToBall1<ballSize/2){
ball1x =random (width);
ball1y = random (height);
score = score +2;
} //if distToBall

if (score>40){
gameState = "L3";
}

image(img, ballx, bally, ballSize, ballSize);
image(img3, ball1x, ball1y, ball1Size, ball1Size);
}

function levelThree(){
fill (255,255,255);
text("level 3", width/2,height-20);

var distToBall = dist(ballx, bally, mouseX,mouseY);

if (distToBall<ballSize/2){
ballx =random (width);
bally = random (height);
score = score +1;
} //if distToBall

var distToBall1 = dist(ball1x, ball1y, mouseX,mouseY);

if (distToBall1<ballSize/2){
ball1x =random (width);
ball1y = random (height);
score = score +2;
} //if distToBall

var distToBall2 = dist(ball2x, ball2y, mouseX,mouseY);

if (distToBall2<ballSize/2){
ball2x =random (width);
ball2y = random (height);
score = score +3;
} //if distToBall

var distToBall5 = dist(ball5x, ball5y, mouseX,mouseY);

if (distToBall5<ballSize/2){
ball5x =random (width);
ball5y = random (height);
score = score -5;
} //if distToBall

if (score>60){
gameState = "L4";
}
image(img, ballx, bally, ballSize, ballSize);
image(img3, ball1x, ball1y, ball1Size, ball1Size);
image(img4, ball2x, ball2y, ball2Size, ball2Size);
image(img7, ball5x, ball5y, ball5Size, ball5Size);


}

function levelFour(){
fill (255,255,255);
text("level 4", width/2,height-20);

var distToBall = dist(ballx, bally, mouseX,mouseY);

if (distToBall<ballSize/2){
ballx =random (width);
bally = random (height);
score = score +1;
} //if distToBall

var distToBall1 = dist(ball1x, ball1y, mouseX,mouseY);

if (distToBall1<ballSize/2){
ball1x =random (width);
ball1y = random (height);
score = score +2;
} //if distToBall

var distToBall2 = dist(ball2x, ball2y, mouseX,mouseY);

if (distToBall2<ballSize/2){
ball2x =random (width);
ball2y = random (height);
score = score +3;
} //if distToBall

var distToBall3 = dist(ball3x, ball3y, mouseX,mouseY);

if (distToBall3<ballSize/2){
ball3x =random (width);
ball3y = random (height);
score = score +4;
} //if distToBall

var distToBall5 = dist(ball5x, ball5y, mouseX,mouseY);

if (distToBall5<ballSize/2){
ball5x =random (width);
ball5y = random (height);
score = score -5;
} //if distToBall

var distToBall6 = dist(ball6x, ball6y, mouseX,mouseY);

if (distToBall6<ballSize/2){
ball6x =random (width);
ball6y = random (height);
score = score -50;
} //if distToBall

if (score>80){
gameState = "L5";
}
image(img, ballx, bally, ballSize, ballSize);
image(img3, ball1x, ball1y, ball1Size, ball1Size);
image(img4, ball2x, ball2y, ball2Size, ball2Size);
image(img5, ball3x, ball3y, ball3Size, ball3Size);
image(img7, ball5x, ball5y, ball5Size, ball5Size);
image(img8, ball6x, ball6y, ball6Size, ball6Size);

}

function levelFive(){

text("level 5", width/2,height-20);
var distToBall = dist(ballx, bally, mouseX,mouseY);

if (distToBall<ballSize/2){
ballx =random (width);
bally = random (height);
score = score +5;
} //if distToBall

var distToBall1 = dist(ball1x, ball1y, mouseX,mouseY);

if (distToBall1<ballSize/2){
ball1x =random (width);
ball1y = random (height);
score = score +2;
} //if distToBall

var distToBall2 = dist(ball2x, ball2y, mouseX,mouseY);

if (distToBall2<ballSize/2){
ball2x =random (width);
ball2y = random (height);
score = score +3;
} //if distToBall

var distToBall3 = dist(ball3x, ball3y, mouseX,mouseY);

if (distToBall3<ballSize/2){
ball3x =random (width);
ball3y = random (height);
score = score +4;
} //if distToBall

var distToBall4 = dist(ball4x, ball4y, mouseX,mouseY);

if (distToBall4<ballSize/2){
ball4x =random (width);
ball4y = random (height);
score = score +4;
} //if distToBall

var distToBall5 = dist(ball5x, ball5y, mouseX,mouseY);

if (distToBall5<ballSize/2){
ball5x =random (width);
ball5y = random (height);
score = score -5;
} //if distToBall

var distToBall6 = dist(ball6x, ball6y, mouseX,mouseY);

if (distToBall6<ballSize/2){
ball6x =random (width);
ball6y = random (height);
score = score -50;
} //if distToBall

if (score>100){
gameState = "L6";
}
image(img, ballx, bally, ballSize, ballSize);
image(img3, ball1x, ball1y, ball1Size, ball1Size);
image(img4, ball2x, ball2y, ball2Size, ball2Size);
image(img5, ball3x, ball3y, ball3Size, ball3Size);
image(img6, ball4x, ball4y, ball4Size, ball4Size);
image(img7, ball5x, ball5y, ball5Size, ball5Size);
image(img8, ball6x, ball6y, ball6Size, ball6Size);
}

function levelSix(){
fill (255,255,255);
text("YOU WON", width/2,height-20);
}
