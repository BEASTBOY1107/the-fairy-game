var starImg,bgImg;
var star, starBody;
var fairy1,fairy2;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fairy1 = loadImage("images/fairyImage1.png");
	fairy2 = loadImage("images/fairyImage2.png");
	fairySound = loadSound("sound/joyMusic.mp3")
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	fairySound.play();

	//create fairy sprite and add animation for fairy


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

	fairy = createSprite(130,520);
	fairy.addImage(fairy1,fairy2);
	fairy.scale = 0.2;

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy

  if(star.Y > 470 && starBody.position.y > 470 ){
	  Matter.Body.setStatic(star,true);
  }

  drawSprites();

}

function keyPressed() {

	if(keyCode === RIGHT_ARROW){
		fairy.x = fairy.x + 40;
	}

	if(keyCode  ===   LEFT_ARROW){
		fairy.Y = fairy.Y + 40;
	}

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	
}
