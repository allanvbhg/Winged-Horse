class Game {

    private currentscreen : any 
    public score : number
    
    constructor() {
        this.score = 5 
        this.currentscreen = new StartScreen(this)
        this.gameLoop()
    }
    
    public gameLoop():void{
        this.currentscreen.update()
        requestAnimationFrame(() => this.gameLoop())
    }

    public startScreen() {
        document.body.innerHTML = ""
        this.currentscreen = new StartScreen(this)
        console.log(this.score)
    }

    public shopscreen() {
        document.body.innerHTML = ""
        this.currentscreen = new Shop(this)
    }
}

window.addEventListener("load", () => new Game())

