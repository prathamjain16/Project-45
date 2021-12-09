var track;
var runner;
var invisibleGround_1,invisibleGround_2;
function preload(){
  //pre-load images
  trackImg = loadImage("path.png");
  runnerAnimation = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track = createSprite(200,200);
	track.addImage(trackImg);
  track.y = height/2;
	track.velocityY = 3;
  track.scale = 1;

	runner = createSprite(200,325,20,50);
	runner.addAnimation("running", runnerAnimation);
	runner.scale = 0.05;

  invisibleGround_1 = createSprite(65,0,10,1000);
  invisibleGround_1.visible = false;

  invisibleGround_2 = createSprite(340,0,10,1000);
  invisibleGround_2.visible = false;
}

function draw() {
  background(0);

  if (track.y > 500){
    track.y = height/2;
  }

  runner.collide(invisibleGround_1);
  runner.collide(invisibleGround_2);

  // runner.x=World.mouseX;

  if (keyDown("right")) {
    runner.x = runner.x+10;
  }

  if (keyDown("left")) {
    runner.x = runner.x-10;
  }

  drawSprites();
}
