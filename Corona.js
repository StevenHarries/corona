class Corona{
    constructor(){
       
        this.image=loadImage("images/corona.png")
        this.corona=createSprite(70,300)
        //this.corona.addImage(this.image)
        this.corona.scale=1
        this.corona.setCollider("rectangle",0,0,400,400)
        this.line1 = createSprite(60,0,200,20)
        
        
    }

    movement(){
        console.log("Hi corona ");
      
        this.corona.velocityY=-5   
        
    }
    bouncing()
    {
        if(this.corona.isTouching(this.line1))
        {
            this.corona.velocityY = -5 * -1
        }
    }
}