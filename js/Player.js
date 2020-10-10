class Player{
    constructor(){
    this.index=null;
    this.distance=0;
    this.name=null;
    }
    //read the player count from the database
    getCount()
    {
        var playerCountRef=database.ref('playerCount');
        playerCountRef.on("value",function(data){
            playerCount=data.val();

        })

    }
    //write the player count in the database
    updateCount(count)
    {
        database.ref('/').update({
            playerCount:count
        })
    }
    //update player name in the database
    update()
    {
        var playerIndex="players/player"+this.index;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        })

    }
    static getPlayerInfo(){
        var PlayerInfoRef=database.ref('players');
        PlayerInfoRef.on("value",(data)=>{
            allPlayers=data.val();
            
        })
    }
}