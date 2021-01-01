var database;
var dog, happydog;
var dogimg, happydogimg;
var foodS, foodStock;
var foodobj, fedTime, lastFed;

function preload(){
  dogimg = loadImage("images/dogImg.png")
  happydogimg = loadImage("images/dogImg1.png")
}

function setup(){
	createCanvas(1000,500);
  database = firebase.database();

  dog = createSprite(800,250,100,100)
  dog.addImage(dogimg)
  dog.scale = 0.3
  
  object = createSprite(200,250,100,100)

  foodStock = database.ref("food")
  foodStock.on("value",readStock)
}


function draw(){  
  background(46, 139, 87)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(happydogimg) 
  }

  fedTime=database.ref('FeedTime');
  fedTime.on("value",function(data){
    lastFed=data.val();
  })
  
  fill(255,255,254);
  textSize(15);
  if(lastFed>=12){
    text("Last Feed : "+lastFed%12 + "PM",350,30);
  }else if(lastFed==0){
    text("Last Feed : 12AM",350,30);
  }else if{
    text("Last Feed : "+ lastFed +" AM",350,30);
  }

  drawSprites();
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  database.ref('/').update({
    food:x
  })
}
function feedDog(){
  dog.addImage(happyDog);

foodObj.updateFoodStock(foodObj.getFoodStock()-1);
dataBase.ref('/').update({
  food:foodObj.getFoodStock(),
  feedTime:hour()
})
}
function addFoods(){
  foodS++;
  database.ref('/').update({
    food:foodS
  })
}



