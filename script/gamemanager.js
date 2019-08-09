//Game class where the game logic is written
let GameManager = {
    setGameStart: function(classType){
        this.resetPlayer(classType);
        this.setPreFight();
    },
    //Setting the player
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
        getInterface.innerHTML = '<img src="images/' + classType + '.jpg" alt ="Heros" class = "img-avatar"><div><h3>'+classType+'</h3><p>Health: '+ player.health +'</p><p>Mana: '+ player.manner +'</p><p>Strength: '+ player.strength +'</p><p>Agility: '+ player.agility +'</p><p>Speed: '+ player.speed+'</p></div>';
    },
    setPreFight: function(){
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");

        getHeader.innerHTML = '<h2>Find Enemy</h2>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search Enemy</a>';
        getArena.style.visibility = "visible"; 
    },
    setFight: function(){
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");
        //Choose enemy
        let lexLuthor = new Enemy("Lex Luthor", 150, 0, 150, 120, 200);
        let joker = new Enemy("Joker", 180, 0, 2000, 150, 100);
        let randomEnemy = Math.floor(Math.random()* Math.floor(2));

        switch(randomEnemy){
            case 0:
                enemy = lexLuthor;
                break;
            case 1:
                enemy = joker;
                break;
        }
        getHeader.innerHTML = `<p>Choose your move!!</p>`;
        getActions.innerHTML = `<a href="#" class="btn-fight" onclick="PlayerMoves.calcFight()">Attack !!</a>`;
        getEnemy.innerHTML = '<img src="images/' + enemy.classType + '.jpg" alt ="Villains" class = "img-avatar"><div><h3>'+enemy.classType+'</h3><p>Health: '+ enemy.health +'</p><p>Mana: '+ enemy.manner +'</p><p>Strength: '+ enemy.strength +'</p><p>Agility: '+ enemy.agility +'</p><p>Speed: '+ enemy.speed+'</p></div>';
    }   
}