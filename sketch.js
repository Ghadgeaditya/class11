var trex, trex_running, trex_collided;
var weight = [35, 38, 42, 45, 43, 34, 36, 41];
var sum = 0;
var ground, invisibleGround, groundImage;

function preload() {
    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
    trex_collided = loadImage("trex_collided.png");
    groundImage = loadImage("ground2.png")
}
function get_average() {
    for (var i = 0; i < weight.length; i = i + 1) {
        sum = sum + weight[i];
        console.log(weight[i]);
        console.log(weight[0]);
    }
    var avg = sum / weight.length;
    console.log("Average of weight:", avg);

}
function setup() {
    createCanvas(600, 200);
    //create a trex sprite
    trex = createSprite(50, 160, 20, 50);
    trex.addAnimation("running", trex_running);
    trex.scale = 0.5;
    //create a ground sprite
    ground = createSprite(200, 180, 400, 20);
    ground.addImage("ground", groundImage);
    ground.x = ground.width / 2;
    ground.velocityX = -4;
    invisibleGround = createSprite(200, 190, 400, 10);
    invisibleGround.visible = false;

    get_average();
}
function draw() {
    background(220);
    //jump when the space button is pressed
    if (keyDown("space") && trex.y >= 161) {
        trex.velocityY = -10;
    }
    //console.log(trex.y);
    trex.velocityY = trex.velocityY + 0.8
    if (ground.x < 0) {
        ground.x = ground.width / 2;
    }
    trex.collide(invisibleGround);
    drawSprites();
}
