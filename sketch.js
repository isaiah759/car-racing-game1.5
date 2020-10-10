var database;
var canvas,backgroundImg;
var gameState=0;
var playerCount;
var form,game,player;
var distance=0;
var allPlayers;

function setup(){
    database=firebase.database();

    canvas=createCanvas(800,800);
   game=new Game();
   game.getState();
   game.start();

}


function draw(){
    background("white");
   if(playerCount===4)
   {
       game.update(1);

   }
   if(gameState===1)
   {
       game.play();
       
   }
}

