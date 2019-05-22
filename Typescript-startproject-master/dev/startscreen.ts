class StartScreen {

    private game : Game
    private nextGame: HTMLElement 
   

   
    constructor( g: Game ) {

        this.game = g

        this.nextGame = document.createElement("nextGame")
        document.body.appendChild(this.nextGame)
        this.nextGame.addEventListener("click", () => this.naarDeShop());

    }

    public naarDeShop(){
        console.log("shop button werkt")
        this.game.shopscreen()  
    }

   

    public update(){

    }

}