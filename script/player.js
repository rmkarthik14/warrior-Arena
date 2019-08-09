let player;
//Player class with the player attributes
function Player(classType, health, manner, strength, agility, speed){
    this.classType = classType;
    this.health = health;
    this.manner = manner;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
};

let PlayerMoves = {
    calcAttack: function (){
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;
    },

    playerAttack : function() {
        let calcBaseDamage;
        if(player.manner >0 ){
            calcBaseDamage = player.strength * player.manner / 1000;
        } else {
            calcBaseDamage = player.strength * player.agility / 1000;
        }

        let offsetDamage = Math.floor(Math.random() * Math.floor(10));

        let calcOutputDamage = calcBaseDamage + offsetDamage;
        let numberOfHits = Math.floor(Math.random * Math.floor(player.agility/2)+1);

        let attackValues = [calcOutputDamage , numberOfHits];

        return attackValues;
    },

     enemyAttack : function() {
        let calcBaseDamage;
        if(enemy.manner >0 ){
            calcBaseDamage = enemy.strength * enemy.manner / 1000;
        } else {
            calcBaseDamage = enemy.strength * enemy.agility / 1000;
        }

        let offsetDamage = Math.floor(Math.random() * Math.floor(10));

        let calcOutputDamage = calcBaseDamage + offsetDamage;
        let numberOfHits = Math.floor(Math.random * Math.floor(enemy.agility/2)+1);

        let attackValues = [calcOutputDamage , numberOfHits];

        return attackValues;
    }
}