var car , wall ;


function setup() {
createCanvas(1200,800);

car = createSprite(100, 400, 50, 80);
  car.shapeColor = "green";
  car.debug = false;
  car.velocityX = random (-5 , -100);

wall = createSprite (600 , 400)
wall.shapeColor = "white"



}
function draw (){
    if (isTouching (car, wall) && car.velcoityX <40 >5  ) {
      car.shapeColor = "green";
      car.velocityX = 0;
    }
    if (isTouching (car, wall) && car.velcoityX <75 >40  ) {
        car.shapeColor = "yellow";
        car.velocityX = 0;
      }
    if (isTouching (car, wall) && car.velcoityX <40 >5  ) {
      car.shapeColor = "red";
       car.velocityX = 0;
     }
}