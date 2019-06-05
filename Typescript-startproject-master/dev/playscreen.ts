// hier komt het spel tegen de dragon

class playscreen {

    private game : Game
    private nextGame: HTMLElement 
   
    constructor( g: Game ) {

        this.game = g

        this.nextGame = document.createElement("nextGame")
        document.body.appendChild(this.nextGame)
        this.nextGame.addEventListener("click", () => this.naarDeShop());
    }

    public naarDeShop(){
        this.game.shopscreen()  
    }

    public update(){
    }

}