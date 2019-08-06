let GameManager = {
    setGameStart: function(classType){
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer: function(classType){
        switch (classType){
            case "Superman" :
                player = new Player(classType, 200, 0, 200, 100, 50);
                break;
            case "Batman" :
                player = new Player(classType, 180, 0, 180, 80, 60);
                break;
            case "Flash" :
                player = new Player(classType, 160, 0, 200, 120, 50);
                break;
            case "Shazam" :
                player = new Player(classType, 200, 0, 180, 800, 50);
                 break;       
        }

        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="images/' + classType + '.jpg" alt ="superman" class = "img-avatar"><div><h3>'+classType+'</h3><p>Health: '+ player.health +'</p><p>Mana: '+ player.manner +'</p><p>Strength: '+ player.strength +'</p><p>Agility: '+ player.agility +'</p><p>Speed: '+ player.speed+'</p></div>';
    },
    setPreFight: function(){

    }
}