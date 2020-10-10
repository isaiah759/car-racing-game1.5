class Form {
    constructor(){
        this.input=createInput("Name");
        this.button= createButton('play');
        this.greeting=createElement('h3');
    }
    hide()
    {
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
        var title=createElement('h2');
        title.html("Car Racing Game");
        title.position(430,0);

       
       this.input.position(430,160);
        this.button.position(550,200);
        
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            playerCount=playerCount+1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello "+player.name+" welcome to the Car Racing Game");
            this.greeting.position(500,160);

        })
    }
}

