class Doctor{
    constructor(){
       
        this.image=loadImage("images/doctor1.png")
        this.image2=loadImage("images/bullet.png");
        this.doctor=createSprite(1220,300)
      
        this.doctor.addImage(this.image)
        this.doctor.scale=0.5
    }
    createbullet()
    {
        
        this.bullet = createSprite(this.doctor.x-70,this.doctor.y,40,40);
        this.bullet.addImage(this.image2)
        this.bullet.scale=0.1
        this.bullet.velocityX = -7;
        
    }
 
   
}