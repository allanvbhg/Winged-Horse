class StartScreen {

    private game : Game
    private nextGame: HTMLElement 
    private logo: HTMLElement
   

   
    constructor( g: Game ) {

        this.game = g

        
        this.logo = document.createElement("logo")        
        document.body.appendChild(this.logo);

        this.nextGame = document.createElement("nextGame")
        document.body.appendChild(this.nextGame)
        this.nextGame.addEventListener("click", () => this.naarDeGame());

    }


    public naarDeGame(){
        this.game.playscreen()  
    }

   

    public update(){

    }

}