class Button{
    constructor(){
        this.title=createElement('h1');
        this.greeting=createElement('h1');
        this.button=createButton('PLAY')
        


    }
    hide()
    {
        this.button.hide();
        this.title.hide();
    }

    display(){
        this.title.html("Corona Fighting Game");
        this.title.position(530,10);
        this.button.position(640,300)
      
        this.button.mousePressed(function(){
            gameState=1
            console.log(gameState)
            game.start();
            corona.movement()
            corona.bouncing()

        })
    }
}