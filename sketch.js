var path
var runner
var runnerImg1, pathImg
function preload(){
  //pre-load images
  pathImg= loadImage ('path.png');
  runnerImg1 = loadAnimation ('Runner-1.png','Runner-2.png');
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1;
  runner = createSprite (260,200,10,10);
  runner.addAnimation('runner', runnerImg1);
  runner.scale = 0.3;
}

function draw() {
  background(0);
if (path.y > 400){
  path.y = height/2;
}
}
