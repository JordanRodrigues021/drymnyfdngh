var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var ball = createSprite(21,20,10,10);
ball.shapeColor="blue";
var wall1 = createSprite(200,5,400,10);
wall1.shapeColor="purple";
var wall2= createSprite(5,200,10,1000);
wall2.shapeColor="purple";
var wall3= createSprite(395,200,10,400);
wall3.shapeColor="purple";
var wall4 = createSprite(200,395,2000,10);
wall4.shapeColor="purple";
var wall5 = createSprite(40,8,15,100);
wall5.shapeColor="purple";
var wall6= createSprite(5,200,10,1000);
wall6.shapeColor="purple";
var wall7= createSprite(395,200,10,400);
wall7.shapeColor="Purple";
var wall8= createSprite(100,100,400,15);
wall8.shapeColor="Purple";
var wall9= createSprite(100,60,15,66);
wall9.shapeColor="Purple";
var wall10= createSprite(145,11,15,100);
wall10.shapeColor="purple";
var wall11= createSprite(267,46,125,15);
wall11.shapeColor="purple";
var wall12=createSprite(360,360,25,300);
wall12.shapeColor="purple";
var wall13=createSprite(300,160,300,20);
wall13.shapeColor="purple";
var wall14=createSprite(80,280,40,250);
wall14.shapeColor="purple";
var wall15=createSprite(215,250,20,250);
wall15.shapeColor="purple";
var wall16=createSprite(280,290,20,210);
wall16.shapeColor="purple";
var Trophy=createSprite(385,360,10,60);
Trophy.shapeColor="yellow";






function draw() {
  background("grey");
  ball.velocityY = 0;
  ball.velocityX = 0;
  createEdgeSprites();
  ball.bounceOff(edges);
  
  if(ball.isTouching(wall1) ||ball.isTouching(wall2)||ball.isTouching(wall3) ||ball.isTouching(wall4) ||ball.isTouching(wall5) ||ball.isTouching(wall6)||ball.isTouching(wall7)||ball.isTouching(wall8)||ball.isTouching(wall9) ||ball.isTouching(wall10) ||ball.isTouching(wall11) ||ball.isTouching(wall12) ||ball.isTouching(wall13) ||ball.isTouching(wall14) ||ball.isTouching(wall15) ||ball.isTouching(wall16)){
    ball.x=21;
    ball.y=20;
    
  }
  
  
  
  
  
  if(keyDown(UP_ARROW)) {
    ball.velocityX = 0;
    ball.velocityY = -5;
  }
  
  if(keyDown(DOWN_ARROW)) {
    ball.velocityX= 0;
    ball.velocityY= 5;
  }
  
  if(keyDown(LEFT_ARROW)) {
    ball.velocityX=-5;
    ball.velocityY=0;
  }
  
  if(keyDown(RIGHT_ARROW)) {
    ball.velocityX=5;
    ball.velocityY=0;
  }
  drawSprites();
  
   
  
  if (ball.isTouching(Trophy)){
   background("green");
    text("You Won!!!",200,200);
    textFont("Agency FB");
    textSize(200);
  }
  
 
}



























// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
