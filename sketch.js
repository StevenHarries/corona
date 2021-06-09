var gameState=0
var bulletImg
var cbulletImg
var corona
var doctor,line1
var form,game
var bg,bg1,edges;

function preload(){
    bg = loadImage("images/bg4.jpg")

    bg1 = loadImage("images/bg3.jpg")
}

function setup(){

createCanvas(1300,600)
background(0)

form = new Button()
game = new Game()
;




 }

function draw(){

edges = createEdgeSprites();


if (gameState===0){
    background(bg)
    form.display()
}
if (gameState===1){
    background(bg1)
    
    
    
}

drawSprites()

}