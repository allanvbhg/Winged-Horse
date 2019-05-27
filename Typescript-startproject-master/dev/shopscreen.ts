class Shop {

    private achtergrond: HTMLElement 
    private health: HTMLElement
    private powerUp: HTMLElement 
    private nextGame: HTMLElement 
    private game : Game
   
    constructor( g: Game ) {

        this.game = g 

        //ACHTERGROND
        this.achtergrond = document.createElement("achtergrondShop")
        document.body.appendChild(this.achtergrond)

        //HEALTH
        this.health = document.createElement("health")   
        this.health.innerHTML = "HEALTH"     
        document.body.appendChild(this.health);
        this.health.addEventListener("click", () => this.kooptHealth());

        //POWER
        this.powerUp = document.createElement("powerUp")
        this.powerUp.innerHTML = "POWER UP"     
        document.body.appendChild(this.powerUp);
        this.powerUp.addEventListener("click", () => this.kooptPowerUp());

        //NEXTGAME
        this.nextGame = document.createElement("nextGame")
        document.body.appendChild(this.nextGame)
        this.nextGame.addEventListener("click", () => this.naarStart());
    }
    
    public naarStart(){
        console.log("start button werkt")
        this.game.playscreen()  
    }

    public kooptHealth(){

        if (this.game.health == 0 ) { 
            this.game.health = this.game.health + 1  
            this.game.score = this.game.score - 1 
            this.updateScore(this.game.score)
            let healthElement = document.getElementsByTagName("healthElement")[0];
            healthElement.innerHTML = "+ Health"
        } 
        else {
            console.log("kan je niet meer kopen, je hebt er al een")
        }
    }

    public kooptPowerUp(){
        if (this.game.power == 0 ) { 
            this.game.power = this.game.power + 1  
            this.game.score = this.game.score - 1 
            this.updateScore(this.game.score)
            let powerElement = document.getElementsByTagName("powerElement")[0];
            powerElement.innerHTML = "+ Power"
        } 
        else {
            console.log("kan je niet meer kopen, je hebt er al een")
        }
    }

    public updateScore(nieuweScore: number){
        //veranderd de score
        let scoreElement = document.getElementsByTagName("scoreElement")[0];
        scoreElement.innerHTML = "SCORE: " + nieuweScore;
    }

}