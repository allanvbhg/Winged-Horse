// hier komt het spel tegen de dragon

class playscreen {

    private game : Game
    private nextGame: HTMLElement 
    player : Player
    dragon : Dragon
    naardeshop : boolean = false
   
    constructor( g: Game ) {

        this.game = g
        let background = document.createElement("backdrak")
        document.body.appendChild(background)
        this.dragon = new Dragon(900 , 430, 2)
        this.player = new Player(150 , 400, 2, this, this.game)
        /*this.nextGame = document.createElement("nextGame")
        document.body.appendChild(this.nextGame)
        this.nextGame.addEventListener("click", () => this.naarDeShop());*/
    }

    run(){
        console.log(this.game.currentscreen);
        
        if (this.player.canrun == true && this.naardeshop == false) {
          console.log("run");
          if (this.game.score >= 50) {
              this.game.score -= 50
              this.naardeshop = true
              this.naarDeShop()
          }  
        }       
     }
 
     die(){
         if (this.player.die == false) {
             this.player.canrun = false
             console.log("ik ben dood");
             this.dragon.delete()
             this.player.delete()
             this.player.nummerdelete()
             let eyes = new Eyes(450, 150, 1)
         }
         
         
     }

    public naarDeShop(){
        this.dragon.delete()
        this.player.delete()
        this.player.nummerdelete()
        this.game.shopscreen()  
    }

    public update(){
    }

}