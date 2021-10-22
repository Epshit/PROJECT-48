var plane;
var points = 0;
var altitude = 0;
var jet,jetGroup;
var life = 3;
var gameState = "start";
function preload()
{
  sky_img = loadImage("sky.jpg");
  plane_img = loadImage("plane.png");
  jet_img = loadImage("jet.png");
  
}

function setup() {
  createCanvas(1250,600);
  plane=createSprite(200,200,80,10);
  plane.addImage("plane",plane_img);
  plane.scale=0.3;
 
  edges= createEdgeSprites();

  jetGroup=createGroup();
   
}

function draw() 
{
  background(sky_img);
  if(gameState === "start"){
 fill("white");
 textSize(20);
 text("Score: "+points,100,100);
 points=points+Math.round(frameCount/500);
 fill("green");
 textSize(20);
 altitude=Math.round(2600-plane.y);
 text("Altitude: "+altitude+"m",100,500);
 altitude=altitude+Math.round(frameCount/500);

 if(keyDown("UP_ARROW")) {
  plane.velocityY = -10;
}
plane.velocityY+=0.3;
plane.collide(edges);



if(plane.isTouching(jetGroup)){
  plane.VelocityX= 0;
 plane.velocityY= 0;
 plane.x=100;
 plane.y=100;
 life-=1;
 //gameState = "restart";
}



spawnJets();
  }
  
  // if(gameState === "restart"){
  //   function keyPressed(){
  //     if(keyCode === 32){
  //       gameState = "start";
  //     }
  //   }
  // }

  drawSprites();
}

function spawnJets(){
  if(frameCount%150===0){
    jet = createSprite(1300,100,10,10);
    jet.addImage("jet", jet_img);
    jet.scale=0.3
    jet.y=Math.round(random(100,700));
    jet.velocityX= -5;
    jetGroup.add(jet);
   //console.log(jet.y);
    
  }
  
}

