var car, wall;
var speed, weight;


function setup() {
    createCanvas(1300, 400);
    car = createSprite(0, 200, 50, 50);
    car.shapeColor = "white";
    wall = createSprite(1000, 200, 50, height / 2)
    speed = ceil(random(55, 90))
    weight = ceil(random(400, 1200))
    car.velocityX = speed;


}

function draw() {
    background(0);

    if (wall.x - car.x < wall.width / 2 + car.width / 2) {
        var deformation = 0.5 * weight * speed * speed / 22500
        car.velocityX = 0;
        if (deformation < 100) {
            car.shapeColor = "green"
        }

        if (deformation < 180 && deformation > 99) {
            car.shapeColor = "yellow"
        }
        if (deformation > 180) {
            car.shapeColor = "red"
        }

    }


    drawSprites();
}

function isTouching() {
    if (car.x - wall.x < wall.width / 2 + car.width / 2 &&
        wall.x - car.x < wall.width / 2 + car.width / 2 &&
        car.y - wall.y < wall.height / 2 + car.height / 2 &&
        wall.y - car.y < wall.height / 2 + car.height / 2) {
        car.velocityX = 0;

    }
}