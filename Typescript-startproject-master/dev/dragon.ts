class Dragon {

    private element: HTMLElement
    public posx:number 
    public posy:number

    constructor() {
        this.element = document.createElement("dragon")
        let background = document.getElementsByTagName("background")[0]
        background.appendChild(this.element);

        this.posx = 250
        this.posy = 100
    }

    public update() {
        this.posx += 1
        this.element.style.transform = `translate(${this.posx}px, ${this.posy}px)`

        if (this.posx >= 400){
            this.posx --   
        }
    }

    public reset(){
        console.log("dragon heeft positie 400 behaald ") 
    } 
}

