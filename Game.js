class Game{
    constructor(){

    }

    start(){
        doctor= new Doctor()
        corona = new Corona();
        
        form.hide()
        if(keyWentDown("space"))
        {
        doctor.createbullet();
        }
    }
}