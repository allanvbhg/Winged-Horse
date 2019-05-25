class Game {

    private currentscreen : any
    public score : number
    private scoreElement:HTMLElement
    
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
        this.scorenMaken()
        this.currentscreen = new StartScreen(this)
    }

    public shopscreen() {
        document.body.innerHTML = ""
        //functie toevoegen voor de score:
        this.scorenMaken()
        this.currentscreen = new Shop(this)
    }

    public playscreen() {
        document.body.innerHTML = ""
        this.scorenMaken()
        this.currentscreen = new playscreen(this)
    }

    public scorenMaken(){
        this.scoreElement = document.createElement("scoreElement")
        document.body.appendChild(this.scoreElement) 
        this.scoreElement.innerHTML = "SCORE: " + this.score;

        console.log("scoreLEement:" + this.score)

    }
}

window.addEventListener("load", () => new Game())

