const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var crow, crow_image, player, player_img, tree_image, forest_image, dropping, tree;

 var drops = []
function preload(){
  player_img = loadAnimation("boy[1].png");
  tree_image = loadImage("tree.png");
  forest_image = loadImage("forest.jpg");
  crow_image = loadImage("crow.png");
  b_image = loadImage("forest.jpg")
}

function setup(){
    var canvas = createCanvas(1600,800);
    engine = Engine.create();
    world = engine.world;
    back = createSprite(800, 100, 2000, 800);
    back.addImage(b_image);
    back.velocityX = -4;
    back.scale = 4;
    crow = new Crow(280, 260, 20, 20);
    crow_1 = new Crow(520, 50, 20, 20);
    crow_2 = new Crow(800, 150, 20, 20);
    crow_3 = new Crow(1300, 260, 20, 20);
    crow_4 = new Crow(1000, 250, 20, 20);
    crow_5 = new Crow(1200, 100, 20, 20);
    drop = new Droppings(300, 290);
    drop_1 = new Droppings(550, 70);
    drop_2 = new Droppings(830, 170);
    drop_3 = new Droppings(1270, 260);
    drop_4 = new Droppings(970, 250);
    drop_5 = new Droppings(1170, 100);
    player = createSprite(200, 600, 100, 100);
  player.addAnimation("player_image",player_img);
 
   droppingGroup = new Group();
   treeGroup = new Group();
   crowGroup = new Group();
  player.scale = 1.5;

  // for (var i=0; i<1000; i++){
  //   droppings = new Droppings(random(50, 400), 50);
  //   drops.push(droppings);
  // }
}

function draw(){
    background('white');
    Engine.update(engine);
    if (keyDown("left")){
      player.x = player.x - 10;
    }
    if (keyDown("right")){
      player.x = player.x + 10;
    }
    // image(tree_image, 200, 50, 700, 700);
    // image(tree_image, 800, 50, 700, 700);
    // crow.display();
    // crow_1.display();
    // crow_2.display();
    // crow_3.display();
    // crow_4.display();
    // crow_5.display();
    // drop.display();
    // drop_1.display();
    // drop_2.display();
    // drop_3.display();
    // drop_4.display();
    // drop_5.display();
    
    // for (var j=0; j<1000; j++){
    //   drops[j].display();
    // }
    
       
    if (back.x<0){
      back.x = 800;
    }
    spawnDroppings();
    spawnCrows();
    
  

    drawSprites();
    if (player.isTouching(droppingGroup)){
      player.velocityX = 0;
      textSize(50);
      stroke("yellow");
      strokeWeight(5);
      text("GameOver", 800, 400);

      crow.velocityX = 0;
      tree.velocityX = 0;
      back.velocityX = 0;
      player.destroy();
      tree.destroy();
      crowGroup.destroyEach();
      droppingGroup.destroyEach();
      treeGroup.destroyEach();
      stop(all);
    }
   
}


function spawnCrows(){
  if (frameCount % 200 ===0){
    crow = createSprite(1600, 100, 20, 20);
    crow.addImage(crow_image);
    crow.scale = 0.8;
    crow.velocityX = -10;
    tree = createSprite(1600, 350, 45, 45);
    tree.velocityX = -10;
    tree.addImage(tree_image);
    tree.scale = 0.5;
    player.depth = tree.depth;
    player.depth+=1;  
    dropping.depth = tree.depth;
    dropping.depth+=1;
    crowGroup.add(crow);
  }
}

function spawnDroppings(){
  if (frameCount%200 === 0){
    dropping = createSprite(1600, 100, 10, 10);
    dropping.shapeColor = "yellow";
    dropping.velocityY = 3;
    dropping.velocityX = -10;
    droppingGroup.add(dropping);
    
  }
}