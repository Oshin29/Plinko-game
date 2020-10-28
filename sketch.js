const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var divisionHeight=300;
var plinkos=[];
var divisions=[]; 

var score=0;
var particle;
var turn=0;
var gamestate = "start";

function setup() {
  engine = Engine.create();
  world = engine.world;


  createCanvas(800,800);

  ground=new Ground(400,800,800,20);

  for(var k=0; k<=width; k=k +80){
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }

for (var j = 20; j<= width - 20; j = j+50){
  plinkos.push(new Plinko(j,55));
  }

for (var j = 50; j <= width-20; j=j+51.1){
  plinkos.push(new Plinko(j,155));
  }

for (var j = 20; j<= width -20; j = j+50){
   plinkos.push(new Plinko(j,255));
  }

for (var j = 50; j <= width-20; j=j+51.1){
   plinkos.push(new Plinko(j,355));
 }

for (var j = 20; j<= width -20; j = j+50){
  plinkos.push(new Plinko(j,455));
 }
 num1 = Math.floor(random(1,10))*50;
    num2 = Math.floor(random(1,10))*50;
    num3 = Math.floor(random(1,10))*50;
    num4 = Math.floor(random(1,10))*50;
    num5 = Math.floor(random(1,10))*50;
    num6 = Math.floor(random(1,10))*50;
    num7 = Math.floor(random(1,10))*50;
    num8 = Math.floor(random(1,10))*50;
    num9 = Math.floor(random(1,10))*50;
    num10 = Math.floor(random(1,10))*50;
   
    Engine.run(engine);

}


function draw() {
  background(0);  
  fill("White");
  textSize(20);
  text("Score : "+score,20,30);
  text(num1,20,520);
  text(num2,105,520);
  text(num3,185,520);
  text(num4,260,520);
  text(num5,340,520);
  text(num6,420,520);
  text(num7,500,520);
  text(num8,580,520);
  text(num9,660,520);
  text(num10,740,520);
  
  Engine.update(engine);
  
  


  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  ground.display();
  if(particle != null){
     particle.display();

     if(particle.body.position.y > 760){
        if(particle.body.position.x < 80 ){
          score = score + num1;
          particle = null;
          if(turn>=5)   gamestate="end";
          
        }
  
      else if(particle.body.position.x > 80 && particle.body.position.x < 160){
          score = score + num2;
          particle = null;
          if(turn>=5)   gamestate="end";
          
        }
  
      else if(particle.body.position.x > 160 && particle.body.position.x < 240){
          score = score + num3;
          particle = null;
          if(turn>=5)   gamestate="end";
          
        }
      
      else if (particle.body.position.x > 240 && particle.body.position.x < 320){
          score = score + num4;
          particle = null;
          if(turn>=5)   gamestate="end";
          
        }
        
      else if(particle.body.position.x > 320 && particle.body.position.x < 400){
          score = score + num5;
          particle = null;
          if(turn>=5)  gamestate="end";
          
        }
    
      else if(particle.body.position.x > 400 && particle.body.position.x < 480){
          score = score + num6;
          particle = null;
          if(turn>=5)  gamestate="end";
          
        }

      else if(particle.body.position.x > 480 && particle.body.position.x < 560){
          score = score + num7;
          particle = null;
          if(turn>=5)  gamestate="end";
          
        }
    
      else if(particle.body.position.x > 560 && particle.body.position.x < 640){
          score = score + num8;
          particle = null;
          if(turn>=5)  gamestate="end";
        
      }

      else if(particle.body.position.x > 640 && particle.body.position.x < 720){
          score = score + num9;
          particle = null;
        if(turn>=5)    gamestate="end";
      }

      else if(particle.body.position.x > 720 && particle.body.position.x < 800){
          score = score + num10;
          particle = null;
          if(turn>=5)
            gamestate="end";
        
        }
     }
    }
   if(gamestate === "end"){
    textSize(70);
    text("Game Over",220,250);
   }
   
}

function mousePressed(){
  
      turn++
      particle = new Particle(mouseX, 10,10);
  
}