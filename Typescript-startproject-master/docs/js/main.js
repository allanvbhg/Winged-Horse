"use strict";
var Dragon = (function () {
    function Dragon() {
        this.element = document.createElement("dragon");
        var background = document.getElementsByTagName("background")[0];
        background.appendChild(this.element);
        this.posx = 250;
        this.posy = 100;
    }
    Dragon.prototype.update = function () {
        this.posx += 1;
        this.element.style.transform = "translate(" + this.posx + "px, " + this.posy + "px)";
        if (this.posx >= 400) {
            this.posx--;
        }
    };
    Dragon.prototype.reset = function () {
        console.log("dragon heeft positie 400 behaald ");
    };
    return Dragon;
}());
var Game = (function () {
    function Game() {
        this.score = 5;
        this.currentscreen = new StartScreen(this);
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.currentscreen.update();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.startScreen = function () {
        document.body.innerHTML = "";
        this.currentscreen = new StartScreen(this);
        console.log(this.score);
    };
    Game.prototype.shopscreen = function () {
        document.body.innerHTML = "";
        this.currentscreen = new Shop(this);
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Shop = (function () {
    function Shop(g) {
        var _this = this;
        this.game = g;
        console.log(this.game.score);
        this.titel = document.createElement("shopTitel");
        document.body.appendChild(this.titel);
        this.health = document.createElement("health");
        document.body.appendChild(this.health);
        this.health.addEventListener("click", function () { return _this.kooptHealth(); });
        this.powerUp = document.createElement("powerUp");
        document.body.appendChild(this.powerUp);
        this.powerUp.addEventListener("click", function () { return _this.kooptPowerUp(); });
        this.nextGame = document.createElement("nextGame");
        document.body.appendChild(this.nextGame);
        this.nextGame.addEventListener("click", function () { return _this.naarStart(); });
    }
    Shop.prototype.naarStart = function () {
        console.log("start button werkt");
        this.game.startScreen();
    };
    Shop.prototype.kooptHealth = function () {
        this.game.score = this.game.score - 1;
        console.log("nieuwe score:" + this.game.score);
    };
    Shop.prototype.kooptPowerUp = function () {
        this.game.score = this.game.score - 1;
        console.log("nieuwe score:" + this.game.score);
    };
    Shop.prototype.update = function () {
    };
    return Shop;
}());
var StartScreen = (function () {
    function StartScreen(g) {
        var _this = this;
        this.game = g;
        this.nextGame = document.createElement("nextGame");
        document.body.appendChild(this.nextGame);
        this.nextGame.addEventListener("click", function () { return _this.naarDeShop(); });
    }
    StartScreen.prototype.naarDeShop = function () {
        console.log("shop button werkt");
        this.game.shopscreen();
    };
    StartScreen.prototype.update = function () {
    };
    return StartScreen;
}());
//# sourceMappingURL=main.js.map