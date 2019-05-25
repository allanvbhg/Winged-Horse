class Shop {

    private titel: HTMLElement
    private health: HTMLElement
    private powerUp: HTMLElement 
    private nextGame: HTMLElement 
    //private score: HTMLElement
    private game : Game
   
    constructor( g: Game ) {

        this.game = g 

        //console.log( this.game.score ) 

        this.titel = document.createElement("shopTitel")

        document.body.appendChild(this.titel);

        this.health = document.createElement("health")        
        document.body.appendChild(this.health);
        this.health.addEventListener("click", () => this.kooptHealth());

        this.powerUp = document.createElement("powerUp")
        document.body.appendChild(this.powerUp);
        this.powerUp.addEventListener("click", () => this.kooptPowerUp());

        this.nextGame = document.createElement("nextGame")
        document.body.appendChild(this.nextGame)
        this.nextGame.addEventListener("click", () => this.naarStart());

    }
    
    public naarStart(){
        console.log("start button werkt")
        this.game.playscreen()  
    }

    public kooptHealth(){
        this.game.score = this.game.score - 1 
        this.updateScore(this.game.score)
        console.log("nieuwe score:" + this.game.score)
    }

    public kooptPowerUp(){
        this.game.score = this.game.score - 1 
        this.updateScore(this.game.score)
        console.log("nieuwe score:" + this.game.score)
    }

    public updateScore(nieuweScore: number){
        //veranderd de score
        let scoreElement = document.getElementsByTagName("scoreElement")[0];
        scoreElement.innerHTML = "SCORE: " + nieuweScore;
    }

}