let player;
//Player class with the player attributes
function Player(classType, health, manner, strength, agility, speed){
    this.classType = classType;
    this.health = health;
    this.manner = manner;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
}

let PlayerMoves = {
    calcAttack: function (){
        
      let playerAttack = function() {
        let calcBaseDamage;
        if(player.manner >0 ){
            calcBaseDamage = player.strength * player.manner / 1000;
        } else {
            calcBaseDamage = player.strength * player.agility / 1000;
        }

        let offsetDamage = Math.floor(Math.random() * Math.floor(10));

        let calcOutputDamage = calcBaseDamage + offsetDamage;
        let numberOfHits = Math.floor(Math.random() * Math.floor(20));
        console.log(numberOfHits);
        console.log(calcOutputDamage);
        let attackValues = [calcOutputDamage,numberOfHits];

        return attackValues;
    }
    //enemy attacks
     let enemyAttack = function() {
        let calcBaseDamage;
        if(enemy.manner >0 ){
            calcBaseDamage = enemy.strength * enemy.manner / 1000;
        } else {
            calcBaseDamage = enemy.strength * enemy.agility / 1000;
        }

        let offsetDamage = Math.floor(Math.random() * Math.floor(10));

        let calcOutputDamage = calcBaseDamage + offsetDamage;
        let numberOfHits = Math.floor(Math.random() * Math.floor(20));
        console.log(numberOfHits);
        console.log(calcOutputDamage);
        let attackValues = [calcOutputDamage,numberOfHits];

        return attackValues;
    }
    
    let getPlayerSpeed = player.speed;
    let getEnemySpeed = enemy.speed;
    let playerHealth = document.querySelector(".health-player");
    let enemyHealth = document.querySelector(".health-enemy");
    let status = document.querySelector(".status");
    if (getPlayerSpeed >= getEnemySpeed){
            let playerAttackValues = playerAttack();
            let totalDamage = playerAttackValues[0]*playerAttackValues[1];

            enemy.health = enemy.health - totalDamage;
            
            status.innerHTML = '<p>You have hit ' + playerAttackValues[0] + ' damage ' +playerAttackValues[1]+ ' times</p>';

            if(enemy.health <= 0){
                status.innerHTML = "<p>You win!! Refresh to play again</p>";
                playerHealth.innerHTML = 'Health: ' +player.health;
                enemyHealth.innerHTML = 'Health: 0';
            } else {
                enemyHealth.innerHTML = 'Health: ' +enemy.health;

                let enemyAttackValues = enemyAttack();
                let totalDamage = enemyAttackValues[0]*enemyAttackValues[1];

                player.health = player.health - totalDamage;
                
                status.innerHTML = "<p>Enemy have hit " + enemyAttackValues[0] + " damage " +enemyAttackValues[1]+ " times</p>";
    
                if(player.health <= 0){
                    status.innerHTML = "<p>You lose!! Refresh to play again</p>";
                    playerHealth.innerHTML = 'Health: 0';
                    enemyHealth.innerHTML = 'Health: ' +enemy.health;
            } else {
                    playerHealth.innerHTML = 'Health: ' +player.health;
            }
        }
    } else {
            let enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues[0]*enemyAttackValues[1];

            player.health = player.health - totalDamage;
            
            status.innerHTML = "<p>Enemy have hit " + enemyAttackValues[0] + " damage " +enemyAttackValues[1]+ " times</p>";

            if(player.health <= 0){
                status.innerHTML = "<p>You lose!! Refresh to play again</p>";
                enemyHealth.innerHTML = 'Health: ' +enemy.health;
                playerHealth.innerHTML = 'Health: 0';
            } else {
                playerHealth.innerHTML = 'Health: ' +player.health;

                let playerAttackValues = playerAttack();
                let totalDamage = playerAttackValues[0]*playerAttackValues[1];

                enemy.health = enemy.health - totalDamage;
                
                status.innerHTML = "<p>You have hit " + playerAttackValues[0] + " damage " +playerAttackValues[1]+ " times</p>";
    
                if(enemy.health <= 0){
                    status.innerHTML = "<p>You Won!! Refresh to play again</p>";
                    enemyHealth.innerHTML = 'Health: 0';
                    playerHealth.innerHTML = 'Health: ' +player.health;
            } else {
                    enemyHealth.innerHTML = 'Health: ' +enemy.health;
            }
        }
    }
}
}